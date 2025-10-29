import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
import {wpmMethodCalculator} from "../../../helpers/aggregation.js";
import {getCumulativeAverageChordTypeTime} from "../../../helpers/aggregation.js";
export function TestStatsCard() {
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const trainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const currentWordTestNumber = useStoreState((store) => store.wordTestNumber);
  const currentTrainingSetting = useStoreState((store) => store.trainingStatistics);
  const tier = useStoreState((store) => store.trainingLevel);
  const testNumber = useStoreState((store) => store.wordTestNumber);
  const localTrainingStatistics = useStoreState((store) => store.localTrainingStatistics.statistics);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const testTierHighestWPM = useStoreState((store) => store.testTierHighestWPM);
  const numberOfWordsTypedCorrectly = useStoreState((store) => store.numberOfWordsTypedCorrectly);
  const payload = [];
  let thisVal = 0;
  let sumOccurrences = 0;
  const numberOfWordsChorded = useStoreState((state) => state.numberOfWordsChorded);
  payload.push(trainingScenario);
  payload.push(currentWordTestNumber);
  currentTrainingSetting.statistics?.forEach((d) => {
    thisVal += d.numberOfErrors;
    sumOccurrences += d.displayTitle.length * d.numberOfOccurrences;
  });
  const allTypedText = useStoreState((store) => store.allTypedCharactersStore);
  const trainingSessionErrors = useStoreState((store) => store.trainingSessionErrors);
  const Accuracy = (allTypedText.length - 1 - trainingSessionErrors) / (allTypedText.length - 1) * 100;
  const timerValue = useStoreState((store) => store.timerValue);
  const trainingIsDone = useStoreState((store) => store.trainingIsDone);
  const averageOfLocalStats = wpmMethodCalculator(getCumulativeAverageChordTypeTime(localTrainingStatistics));
  function returnValueBasedOnTier() {
    if (tier == "CPM") {
      if (averageOfLocalStats.toFixed(0) == "Infinity")
        return "0";
      else
        return averageOfLocalStats.toFixed(0) * 5;
    } else if (tier == "CHM") {
      if (averageOfLocalStats.toFixed(0) == "Infinity")
        return "0";
      else
        return averageOfLocalStats.toFixed(0);
    }
  }
  let sumOfLastTenOccurences = 0;
  let averageOfLocalStats2 = 0;
  localTrainingStatistics?.forEach((d) => {
    sumOfLastTenOccurences += d.speedOfLastTen?.length;
    averageOfLocalStats2 += wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : wpmMethodCalculator(d.averageSpeed, d.id.length) * d.speedOfLastTen?.length;
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TrainingStatsColumnContainer, null, tier == "CPM" && /* @__PURE__ */ React.createElement(StatsCardContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-6xl"
  }, wordTestNumber != void 0 ? testTierHighestWPM : returnValueBasedOnTier()), /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl"
  }, tier)), /* @__PURE__ */ React.createElement(StatsCardContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, wordTestNumber != void 0 ? (testTierHighestWPM / 5)?.toFixed(0) != "Infinity" ? (testTierHighestWPM / 5)?.toFixed(0) : "0" : (averageOfLocalStats2 / sumOfLastTenOccurences)?.toFixed(0)), /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg"
  }, "WPM")), /* @__PURE__ */ React.createElement(StatsCardContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, wordTestNumber != void 0 ? Accuracy.toFixed(2) + "%" : Accuracy.toFixed(2) + "%"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg"
  }, "Typing Accuracy")), /* @__PURE__ */ React.createElement(StatsCardContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, numberOfWordsChorded.toFixed(0) / 25 * 100 + "%"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg"
  }, "Chorded")), /* @__PURE__ */ React.createElement(StatsCardContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, timerValue), /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg"
  }, "Time Taken"))), /* @__PURE__ */ React.createElement("div", {
    className: "items-center absolute text-lg text-red-500 ml-16 mt-2",
    style: (Accuracy < 95 || numberOfWordsChorded.toFixed(0) / 25 * 100 > 5) && trainingIsDone ? {display: ""} : {display: "none"}
  }, "*Only tests with a minimum accuracy of 95% and less than 5% words chorded are counted towards your progress."));
}
const TrainingStatsColumnContainer = styled.div.attrs({
  className: "flex flex-row text-center align-center pl-36 bg-[#222424]"
})``;
const StatsCardContainer = styled.div.attrs({
  className: "flex flex-row text-center align-center w-full  ml-auto mr-auto  bg-[#222424]"
})``;
const TextPromptContainer = styled.div`
flex items-center justify-center h-screen
`;
const TestContainer = styled.div`flex items-center justify-center h-screen	`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC1jb21wbGV0ZS9jb21wb25lbnRzL3Rlc3RTdGF0c0NhcmQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVPLGdDQUF1QztBQUM1QyxRQUFNLGdCQUFnQixnQkFDcEIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxtQkFBbUIsY0FDdkIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUM3RCxRQUFNLHlCQUF5QixjQUM3QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLE9BQU8sY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUM1QyxRQUFNLGFBQWEsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUNsRCxRQUFNLDBCQUEwQixjQUM5QixDQUFDLFVBQVUsTUFBTSx3QkFBd0I7QUFHM0MsUUFBTSxpQkFBaUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUV0RCxRQUFNLHFCQUFxQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQzFELFFBQU0sOEJBQThCLGNBQ2xDLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sVUFBVTtBQUNoQixNQUFJLFVBQVU7QUFDZCxNQUFJLGlCQUFpQjtBQUNyQixRQUFNLHVCQUF1QixjQUMzQixDQUFDLFVBQWUsTUFBTTtBQUV4QixVQUFRLEtBQUs7QUFDYixVQUFRLEtBQUs7QUFFYix5QkFBdUIsWUFBWSxRQUFRLENBQUMsTUFBTTtBQUNoRCxlQUFXLEVBQUU7QUFDYixzQkFBa0IsRUFBRSxhQUFhLFNBQVMsRUFBRTtBQUFBO0FBSTlDLFFBQU0sZUFBZSxjQUNuQixDQUFDLFVBQWUsTUFBTTtBQUd4QixRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLFdBQ0YsY0FBYSxTQUFTLElBQUkseUJBQ3pCLGNBQWEsU0FBUyxLQUN6QjtBQUVG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
