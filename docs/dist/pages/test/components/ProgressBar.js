import React, {useState} from "../../../../snowpack/pkg/react.js";
import {
  useTotalChordsToConquer
} from "../../../hooks/useChordsNotConquered.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import usePopover from "../../../hooks/usePopover.js";
import Timer from "./timer.js";
import MultiRangeSlider from "./Range.js";
import {
  wpmMethodCalculatorForStoredChords,
  wpmMethodCalculator,
  getCumulativeAverageChordTypeTime
} from "../../../helpers/aggregation.js";
import {
  getCumulativeAverageChordTypeTimeFromDevice,
  avgCalculatorForTheSpeedOfLastTen,
  stmCalculator
} from "../../../helpers/aggregation.js";
import {defaultProgressBarValues} from "../../../models/trainingSettingsStateModel.js";
import {useWordsPerMinute} from "../../../hooks/useWordsPerMinute.js";
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
export function ProgressBar() {
  let sumOfLWPM = 0;
  let sumOfAWPM = 0;
  let sumErrorsFromStoredDevice = 0;
  let sumOccurrencesFromStoredDevice = 0;
  let sumErrors = 0;
  let sumOccurrences = 0;
  let numberOfChordsMastered = 0;
  let sumOfAverages = 0;
  let averageOfLocalStats = 0;
  let allTimeWPM;
  let progress;
  let inMaxValue;
  let stmValues = 0;
  const localTrainingStatistics = useStoreState((store) => store.localTrainingStatistics?.statistics);
  const wpm = useWordsPerMinute();
  const wordsPracticedInOrder = useStoreState((store) => store.wordsPracticedInOrder);
  const inStoredChordsFromDevice = useStoreState((store) => store.storedChordsFromDevice);
  const stats = useStoreState((state) => state.trainingStatistics);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const totalNumberOfChords = useTotalChordsToConquer();
  const tier = useStoreState((store) => store.trainingLevel);
  const allTypedText = useStoreState((store) => store.allTypedCharactersStore);
  const storedTrainingStatistics = useStoreState((store) => store.storedChordsFromDevice?.statistics);
  const trainingStatistics = useStoreState((store) => store.trainingStatistics.statistics);
  const trainingStats = useStoreState((store) => store.trainingStatistics);
  trainingStats?.stmStatistics?.forEach((d) => {
    const avg = avgCalculatorForTheSpeedOfLastTen(d.speedOfLastTenTests);
    const stmV = stmCalculator(avg);
    if (stmV >= 1) {
      stmValues += 1;
    }
  });
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const trainingSessionErrors = useStoreState((store) => store.trainingSessionErrors);
  const maxWPM = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const storedChordsFromDevice = useStoreState((store) => store.storedChordsFromDevice);
  const timeTakenToTypeEachWordInOrder = useStoreState((store) => store.timeTakenToTypeEachWordInOrder);
  let sumOfLastTenOccurences = 0;
  localTrainingStatistics.forEach((d) => {
    sumOfLastTenOccurences += d.speedOfLastTen?.length;
    averageOfLocalStats += wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : wpmMethodCalculator(d.averageSpeed, d.id.length) * d.speedOfLastTen?.length;
  });
  averageOfLocalStats = averageOfLocalStats / sumOfLastTenOccurences;
  stats.statistics.forEach((d) => {
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
    const tempWpm = wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : wpmMethodCalculator(d.averageSpeed, d.id.length) * d.speedOfLastTen?.length;
    sumOfAverages += tempWpm / 100;
    tempWpm >= 1 ? numberOfChordsMastered++ : "";
  });
  inStoredChordsFromDevice?.statistics?.forEach((d) => {
    sumOfAWPM += d.chordsMastered[d?.chordsMastered.length - 1] == null || d?.chordsMastered.length == 0 || d.chordsMastered.length == 1 && d.chordsMastered[0] == 0 ? 0 : wpmMethodCalculatorForStoredChords(d?.chordsMastered, d?.id.length);
    sumOfLWPM += d.lastSpeed == 0 ? 0 : wpmMethodCalculator(d?.lastSpeed, d.id.length, currentTrainingScenario);
    sumErrorsFromStoredDevice += d.numberOfErrors;
    sumOccurrencesFromStoredDevice += d.numberOfOccurrences;
  });
  const [maxValue, setMaxValue] = useState();
  const numberOfChordsConquered = trainingStatistics.filter((s) => s.averageSpeed > trainingSettings.speedGoal && s.numberOfOccurrences >= 10).length;
  const numberOfChord = storedTrainingStatistics?.filter((d) => d.chordsMastered.length == 1 && d.chordsMastered[0] == 0).length;
  if (tier == "CPM") {
    allTimeWPM = wpmMethodCalculator(getCumulativeAverageChordTypeTime(trainingStatistics), currentTrainingScenario);
  } else {
    if (currentTrainingScenario != "ALLCHORDS") {
      allTimeWPM = wpmMethodCalculator(getCumulativeAverageChordTypeTime(trainingStatistics), currentTrainingScenario);
    } else {
      allTimeWPM = wpmMethodCalculator(getCumulativeAverageChordTypeTimeFromDevice(inStoredChordsFromDevice?.statistics), currentTrainingScenario);
    }
  }
  const [minValue, setMinValue] = useState(0);
  let persistentValue = 0;
  let avgOfTheLastTenTyped = 0;
  const lastTenWords = wordsPracticedInOrder?.slice(-10);
  const lastTenTWordsTime = timeTakenToTypeEachWordInOrder?.slice(-10);
  for (let y = 0; y < 10; y++) {
    avgOfTheLastTenTyped += isNaN(wpmMethodCalculator(lastTenTWordsTime[y], lastTenWords[y]?.length)) ? 0 : wpmMethodCalculator(lastTenTWordsTime[y], lastTenWords[y]?.length);
  }
  avgOfTheLastTenTyped = avgOfTheLastTenTyped / 10;
  const rWPM = timeTakenToTypeEachWordInOrder?.length == 0 ? 0 : timeTakenToTypeEachWordInOrder?.length < 11 ? averageOfLocalStats : avgOfTheLastTenTyped;
  let sumOfChordsMastered = 0;
  storedChordsFromDevice?.statistics?.forEach((d) => {
    sumOfChordsMastered += d.chordsMastered[d?.chordsMastered.length - 1] == null || d?.chordsMastered.length == 0 || d.chordsMastered.length == 1 && d.chordsMastered[0] == 0 ? 0 : wpmMethodCalculatorForStoredChords(d?.chordsMastered, d.id?.length, currentTrainingScenario);
  });
  const {parentProps, Popper} = usePopover("The number of chords that you have typed faster than your speed goal.");
  const {parentProps: remainingProps, Popper: RemainingPopover} = usePopover("The number of chords that you have not typed faster than your speed goal.");
  const Accuracy = ((allTypedText.length - 1 - trainingSessionErrors) / (allTypedText.length - 1) * 100).toFixed(0);
  sumOfAverages.toFixed(2);
  if (tier == "CHM" && currentTrainingScenario != "ALLCHORDS") {
    progress = clamp(numberOfChordsMastered / totalNumberOfChords * 100, 0, 100);
    persistentValue = sumOfChordsMastered;
    inMaxValue = defaultProgressBarValues.CHM.ALLCHM;
  } else if (tier == "CHM" && currentTrainingScenario == "ALLCHORDS") {
    progress = clamp(numberOfChord / storedTrainingStatistics.length * 100, 0, 100);
    persistentValue = sumOfChordsMastered;
    inMaxValue = defaultProgressBarValues.CHM.ALLCHM;
  } else if (tier == "CPM" && currentTrainingScenario == "ALPHABET") {
    progress = clamp(numberOfChordsConquered / trainingStatistics.length * 100, 0, 100);
    persistentValue = parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed());
    inMaxValue = defaultProgressBarValues.CPM.ALPHABET;
  } else if (tier == "CPM" && currentTrainingScenario == "TRIGRAM") {
    progress = clamp(numberOfChordsConquered / trainingStatistics.length * 100, 0, 100);
    persistentValue = parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed());
    inMaxValue = defaultProgressBarValues.CPM.TRIGRAMS;
  } else if (tier == "CPM" && currentTrainingScenario == "LEXICAL") {
    progress = clamp(numberOfChordsConquered / trainingStatistics.length * 100, 0, 100);
    persistentValue = parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed());
    inMaxValue = defaultProgressBarValues.CPM.LEXICAL;
  } else if (tier == "StM") {
    progress = clamp(stmValues / 120 / 120 * 100, 0, 100);
  } else {
    progress = clamp(numberOfChordsConquered / trainingStatistics.length * 100, 0, 100);
    persistentValue = parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed());
  }
  function handleInputInRealTimeForMin(value) {
    let added = 100;
    if (inMaxValue >= parseInt(value)) {
      setMinValue(value);
    } else {
      added += parseInt(value);
      inMaxValue = added;
      setMinValue(value);
    }
  }
  function handleInputInRealTimeForMax(value) {
    if (value >= minValue) {
      setMaxValue(value);
    } else {
      setMaxValue(minValue);
    }
  }
  const {parentProps: progressAllTimeWPMsProps, Popper: AllTimePopper} = usePopover("Typing Speed of the Last 10 words = " + (isNaN(rWPM.toFixed(0)) ? 0 : rWPM.toFixed(0)) + " rWPM\r\n Total typing Speed for this session = " + (isNaN(averageOfLocalStats.toFixed(0)) ? 0 : averageOfLocalStats.toFixed(0)) + " lWPM");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, trainingSettings.isDisplayingHUD && /* @__PURE__ */ React.createElement(ProgressBarContainer, null, AllTimePopper, !trainingSettings.isProgressBarDynamic && /* @__PURE__ */ React.createElement("input", {
    id: "minInputValue",
    className: "w-10 h-10 mt-2 rounded bg-neutral-600 m-3 text-white font-semibold text-center",
    value: minValue > (inMaxValue || maxValue) ? 0 : minValue,
    placeholder: "0",
    onChange: () => handleInputInRealTimeForMin(document.getElementById("minInputValue").value)
  }), /* @__PURE__ */ React.createElement(Container, null, Popper, RemainingPopover, /* @__PURE__ */ React.createElement(TopDataRow, null), /* @__PURE__ */ React.createElement(TopProgressBar, {
    ...progressAllTimeWPMsProps
  }, /* @__PURE__ */ React.createElement(MultiRangeSlider, {
    className: "w-full",
    label: "true",
    ruler: "true",
    min: minValue > (inMaxValue || maxValue) ? 0 : minValue,
    max: maxValue || inMaxValue,
    minValue: isNaN(averageOfLocalStats.toFixed(0)) ? "0" : averageOfLocalStats,
    maxValue: isNaN(rWPM.toFixed(0)) ? "0" : rWPM
  })), /* @__PURE__ */ React.createElement(BottomProgressBar, null, /* @__PURE__ */ React.createElement(ProgressBarOuter, null, /* @__PURE__ */ React.createElement(ProgressBarInner, {
    progress
  }, progress?.toFixed(1), "%", " "))), /* @__PURE__ */ React.createElement(Trapezoid, null, /* @__PURE__ */ React.createElement(RightTerms, null, timeTakenToTypeEachWordInOrder?.length == 0 ? 0 : Accuracy, "% acc", /* @__PURE__ */ React.createElement("div", {
    className: "text-[#38bdf8]"
  }, isNaN(averageOfLocalStats.toFixed(0)) ? "0" : averageOfLocalStats.toFixed(0), " ", "lWPM")), /* @__PURE__ */ React.createElement(Timer, null), /* @__PURE__ */ React.createElement(LeftTerms, null, wordsPracticedInOrder.length > 999 ? "999+Terms" : wordsPracticedInOrder.length + " Terms", /* @__PURE__ */ React.createElement("div", {
    className: "text-[#ef4444]"
  }, timeTakenToTypeEachWordInOrder?.length == 0 ? 0 : timeTakenToTypeEachWordInOrder?.length < 11 ? averageOfLocalStats.toFixed(0) : rWPM.toFixed(0), " ", "rWPM")))), !trainingSettings.isProgressBarDynamic && /* @__PURE__ */ React.createElement("input", {
    id: "maxInputValue",
    className: "w-10 h-10 mt-2 rounded bg-neutral-600 m-3 font-semibold text-white text-center",
    value: maxValue || inMaxValue,
    onChange: () => handleInputInRealTimeForMax(document.getElementById("maxInputValue").value)
  })));
}
const AllTimeSpeed = styled.div.attrs({
  className: `relative border-r-[5px] border-r-[#333] h-full  text-white text-xs`
})`
  width: ${(props) => props.progress?.toString()}%;
`;
const SessionSpeed = styled.div.attrs({
  className: `relative border-r-[5px] border-r-[#333] h-full  text-white text-xs`
})`
  width: ${(props) => props.progress?.toString()}%;
`;
const ProgressBarContainer = styled.div.attrs({
  className: `float-left flex flex-row inline-block`
})``;
const SpeedGoalText = styled.span.attrs({
  className: ``
})``;
const ProgressBarInner = styled.div.attrs({
  className: `relative rounded-r-xl bg-green-500 h-full rounded-l text-white text-xs`
})`
  width: ${(props) => props.progress?.toString()}%;
`;
const ProgressBarOuter = styled.div.attrs({
  className: `rounded bg-black w-full h-full`
})``;
const LeftTerms = styled.div.attrs({
  className: `rotate-180 float-left text-xs text-neutral-400 w-20`
})``;
const RightTerms = styled.div.attrs({
  className: `rotate-180  text-xs text-neutral-400 w-20`
})``;
const WPMText = styled.div.attrs({
  className: `text-white font-semibold min-w-[80px]`
})``;
const Container = styled.div.attrs({
  className: `w-full`
})``;
const TopDataRow = styled.div.attrs({
  className: `flex flex-row items-end justify-between mb-2 text-sm sm:text-lg`
})``;
const DataText = styled.div.attrs({
  className: `text-white font-semibold flex flex-row items-center`
})``;
const Trapezoid = styled.div.attrs({
  className: `ml-auto mr-auto justify-items-center grid grid-cols-3 gap-x-[.5] h-[12px] w-[220px]  border-b-[35px] border-b-[#333] border-x-[25px] border-x-transparent border-solid rotate-180
  `
})``;
const BottomProgressBar = styled.div.attrs({
  className: `rounded-b-lg bg-[#333] h-6 w-full p-1`
})``;
const TopProgressBar = styled.div.attrs({
  className: `border-r-4 border-l-4 border-b-4 flex space-x-20 text-center justify-center	inline-block border-[#333] h-12 w-full p-1`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUVBLGVBQWUsUUFBZ0IsS0FBYSxLQUFhO0FBQ3ZELFNBQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLFFBQVE7QUFBQTtBQUdqQyw4QkFBcUM7QUFFMUMsTUFBSSxZQUFZO0FBQ2hCLE1BQUksWUFBWTtBQUNoQixNQUFJLDRCQUE0QjtBQUNoQyxNQUFJLGlDQUFpQztBQUNyQyxNQUFJLFlBQVk7QUFDaEIsTUFBSSxpQkFBaUI7QUFDckIsTUFBSSx5QkFBeUI7QUFDN0IsTUFBSSxnQkFBZ0I7QUFDcEIsTUFBSSxzQkFBc0I7QUFDMUIsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSSxZQUFZO0FBRWhCLFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBVSxNQUFNLHlCQUF5QjtBQUU1QyxRQUFNLE1BQU07QUFFWixRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLDJCQUEyQixjQUMvQixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLFFBQVEsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUM3QyxRQUFNLDBCQUEwQixjQUM5QixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLE9BQU8sY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUU1QyxRQUFNLGVBQWUsY0FDbkIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSwyQkFBMkIsY0FDL0IsQ0FBQyxVQUFVLE1BQU0sd0JBQXdCO0FBRzNDLFFBQU0scUJBQXFCLGNBQ3pCLENBQUMsVUFB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
