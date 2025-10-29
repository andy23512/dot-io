import React from "../../../../snowpack/pkg/react.js";
import {FixedSizeList} from "../../../../snowpack/pkg/react-window.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import useContainerDimensions from "../../../hooks/useContainerDimensions.js";
import {
  getCumulativeAverageChordTypeTime
} from "../../../helpers/aggregation.js";
import usePopover from "../../../hooks/usePopover.js";
import {truncateString} from "../../../helpers/truncateString.js";
import {
  wpmMethodCalculatorForStoredChords,
  wpmMethodCalculator,
  stmCalculator
} from "../../../helpers/aggregation.js";
const LIST_LENGTH_OFFSET = 2;
function StatisticsTable() {
  const stats = useStoreState((state) => state.trainingStatistics).statistics.sort((a, b) => b.numberOfOccurrences - a.numberOfOccurrences);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const inTrainingLevel = useStoreState((store) => store.trainingLevel);
  const inStoredChordsFromDevice = useStoreState((store) => store.storedChordsFromDevice);
  const inTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const storedChordsFromDevice = useStoreState((state) => state.storedChordsFromDevice)?.statistics?.sort((a, b) => wpmMethodCalculatorForStoredChords(a.chordsMastered, a.id.length) - wpmMethodCalculatorForStoredChords(b.chordsMastered, b.id.length));
  const numberOfChordsConquered = stats.filter((s) => s.averageSpeed > trainingSettings.speedGoal && s.numberOfOccurrences >= 10).length;
  const numberOfWordsTyped = stats.filter((s) => s.numberOfOccurrences != 0).length;
  const totalNumberOfWordsTyped = stats.filter((s) => s.numberOfOccurrences >= 0).length;
  function removeDups(arr) {
    const seen = new Set();
    const newSet = arr?.statistics.filter((item) => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
    return {statistics: newSet};
  }
  function cs(arr) {
    const seen = new Set();
    const newSet = arr?.statistics.filter((item) => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
    return {statistics: newSet};
  }
  const sortBetween = (arr = [], start, end) => {
    if (numberOfChordsConquered > totalNumberOfWordsTyped - 1) {
      stats.sort((a, b) => b.averageSpeed - a.averageSpeed);
    } else {
      const part = arr.splice(start, end - start);
      part.sort();
      part.reverse();
      arr.splice(start, 0, ...part);
    }
  };
  const newGG = removeDups(inStoredChordsFromDevice);
  sortBetween(stats, 0, numberOfWordsTyped);
  const [ref, dimensions] = useContainerDimensions();
  return /* @__PURE__ */ React.createElement(TableContainer, {
    ref
  }, /* @__PURE__ */ React.createElement(FixedSizeList, {
    height: dimensions.height || 0,
    itemCount: stats.length + LIST_LENGTH_OFFSET,
    itemSize: 36,
    width: 300,
    itemData: {
      stats,
      targetChords: trainingSettings.targetChords,
      isRecursionEnabled: trainingSettings.autoOrCustom === "AUTO",
      displayHUD: true,
      trainingLevel: inTrainingLevel,
      storedChordsFromDevice: newGG,
      trainingScenario: inTrainingScenario
    },
    style: {borderRadius: 8}
  }, Row));
}
const getStyle = (targetChords, isRecursionEnabled, index) => {
  if (index < targetChords) {
    if (isRecursionEnabled)
      return "TARGET_CHORD_ACTIVE";
    return "TARGET_CHORD_INACTIVE";
  }
  return "NORMAL";
};
const Row = ({index, style, data}) => {
  const item = data?.stats?.[index - LIST_LENGTH_OFFSET];
  if (index === 0)
    return /* @__PURE__ */ React.createElement(Header, {
      data
    });
  else if (index === 1)
    return /* @__PURE__ */ React.createElement(AggregateRow, {
      data
    });
  const headerStyle = getStyle(data.targetChords, data.isRecursionEnabled, index - LIST_LENGTH_OFFSET);
  const wpmValue = wpmMethodCalculator(item?.averageSpeed, item.id.length, item.scenario);
  return /* @__PURE__ */ React.createElement("div", {
    onClick: (e) => {
      e.stopPropagation();
    },
    style
  }, /* @__PURE__ */ React.createElement(NewStatisticsRow, {
    headerStyle
  }, returnStatisticsColumnContent(data, index)));
};
function returnStatisticsColumnContent(data, index) {
  const item = data?.stats?.[index - LIST_LENGTH_OFFSET];
  const wpmValue = wpmMethodCalculator(item?.averageSpeed, item.id.length, item.scenario);
  const itemFromStoredChords = data?.storedChordsFromDevice?.statistics?.[index - LIST_LENGTH_OFFSET];
  const cpmValue = wpmMethodCalculatorForStoredChords(itemFromStoredChords?.chordsMastered, item.displayTitle.length);
  const tier = data.trainingLevel;
  const lastTypedSpeed = wpmMethodCalculator(itemFromStoredChords?.lastSpeed, item.id.length, item.scenario);
  if (tier == "CHM" && data.trainingScenario == "ALLCHORDS" && localStorage.getItem("chordsReadFromDevice") != void 0) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowItem, null, truncateString(itemFromStoredChords?.displayTitle || "", 12)), /* @__PURE__ */ React.createElement(RowItem, null, isNaN((itemFromStoredChords?.numberOfOccurrences - itemFromStoredChords?.numberOfErrors) / itemFromStoredChords?.numberOfOccurrences) ? "0" : ((itemFromStoredChords?.numberOfOccurrences - itemFromStoredChords?.numberOfErrors) / itemFromStoredChords?.numberOfOccurrences * 100).toFixed(2)), /* @__PURE__ */ React.createElement(RowItem, null, cpmValue?.toFixed(0) == "Infinity" ? 0 : cpmValue?.toFixed(0)), /* @__PURE__ */ React.createElement(RowItem, null, cpmValue.toFixed(0) == "Infinity" ? 0 : cpmValue.toFixed(0) / 100));
  } else if (tier == "CHM") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowItem, null, truncateString(item?.displayTitle || "", 12)), /* @__PURE__ */ React.createElement(RowItem, null, isNaN((item?.numberOfOccurrences - item?.numberOfErrors) / item?.numberOfOccurrences) ? "0" : ((item?.numberOfOccurrences - item?.numberOfErrors) / item?.numberOfOccurrences * 100).toFixed(2)), /* @__PURE__ */ React.createElement(RowItem, null, wpmValue.toFixed() == "Infinity" ? "0" : wpmValue.toFixed()), /* @__PURE__ */ React.createElement(RowItem, null, wpmValue.toFixed() == "Infinity" ? "0" : (wpmValue / 100).toFixed(2)));
  } else if (tier == "StM") {
    const wpm = wpmMethodCalculator(item?.averageSpeed, item.id.length, item.scenario).toFixed() == "Infinity" ? "0" : (wpmValue / 100).toFixed(2);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowItem, null, truncateString(item?.displayTitle || "", 12)), /* @__PURE__ */ React.createElement(RowItem, null, wpmMethodCalculator(item?.averageSpeed, item.id.length, item.scenario).toFixed() == "Infinity" ? "0" : wpmValue.toFixed()), /* @__PURE__ */ React.createElement(RowItem, null, isNaN((item?.numberOfOccurrences - item?.numberOfErrors) / item?.numberOfOccurrences) ? "0" : ((item?.numberOfOccurrences - item?.numberOfErrors) / item?.numberOfOccurrences * 100).toFixed(2)), /* @__PURE__ */ React.createElement(RowItem, null, isNaN(stmCalculator(wpm, item?.speedOfLastTen?.length).toFixed(2)) ? "0" : stmCalculator(wpm, item?.speedOfLastTen?.length).toFixed(2)));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowItem, null, truncateString(item?.displayTitle || "", 12)), /* @__PURE__ */ React.createElement(RowItem, null, wpmMethodCalculator(item?.averageSpeed, item.id.length, item.scenario).toFixed() == "Infinity" ? "0 / 0" : wpmValue.toFixed() * 5 + "/" + wpmValue.toFixed()), /* @__PURE__ */ React.createElement(RowItem, null, item?.numberOfErrors), /* @__PURE__ */ React.createElement(RowItem, null, item?.numberOfOccurrences));
  }
}
const HeaderRow = styled.div.attrs({
  className: `bg-[#2c2c2c] px-4 py-2 text-left text-xs text-gray-50 uppercase tracking-wider font-bold rounded-tr-lg flex flex-row justify-between align-center h-[36px]`
})``;
const AggregateStatRow = styled.div.attrs({
  className: `bg-[#262626] text-gray-300 flex flex-row w-full text-white h-[36px] bg-[#222] items-center`
})``;
const HeaderItem = styled.div.attrs({
  className: `text-white`
})``;
const HeaderItemRow = ({helpText, children}) => {
  const {parentProps, Popper} = usePopover(helpText);
  return /* @__PURE__ */ React.createElement(HeaderItem, {
    ...parentProps
  }, children, Popper);
};
const Header = ({data}) => {
  const tier = data.trainingLevel;
  return /* @__PURE__ */ React.createElement(HeaderRow, {
    onClick: (e) => {
      e.stopPropagation();
    }
  }, returnHeader(tier));
};
function returnHeader(tier) {
  if (tier == "CHM") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "The type of test associated with these metrics."
    }), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your typing accuracy for this tier is representative of your typing accuracy all time for a given word."
    }, "Accuracy"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your Average WPM for this test is based or your last 10 attempts at the given word."
    }, "aWPM"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your CHM for this test this is based on your last 10 attempts at the given word."
    }, "ChM"));
  } else if (tier == "StM") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "The type of test associated with these metrics."
    }), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your typing accuracy for this teir is representative of your typing accuracy all time for a given word."
    }, "Speed"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your Average WPM for this test is based or your last 10 attempts at the given word."
    }, "%"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your CHM for this test this is based on your last 10 attempts at the given word."
    }, "StM"));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "The type of test associated with these metrics."
    }, "Word"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your WPM for this test."
    }, "CPM/WPM"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your Average WPM for this test."
    }, "Errors"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
      helpText: "Your highest WPM for a word typed during this test."
    }, "Times"));
  }
}
const AggregateRow = ({data}) => {
  return /* @__PURE__ */ React.createElement(AggregateStatRow, {
    onClick: (e) => {
      e.stopPropagation();
    }
  }, returnStatisticsColumnHeader(data));
};
function returnStatisticsColumnHeader(data) {
  const average = getCumulativeAverageChordTypeTime(data.stats);
  let sumErrors = 0;
  let sumOccurrences = 0;
  let sumOfAverages = 0;
  let sumOfLastTenOccurences = 0;
  let sumOfCHM = 0;
  data.stats.forEach((d) => {
    const tempWpm = wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : wpmMethodCalculator(d.averageSpeed, d.id.length) * d.speedOfLastTen?.length;
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
    sumOfLastTenOccurences += d.speedOfLastTen?.length;
    sumOfAverages += tempWpm;
    sumOfCHM += wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : tempWpm / d.speedOfLastTen?.length / 100;
  });
  let sumOfLWPM = 0;
  let sumOfAWPM = 0;
  let sumErrorsFromStoredDevice = 0;
  let sumOccurrencesFromStoredDevice = 0;
  let sumOfAveragesFromStoredDevice = 0;
  let sumOfLastTenOccurencesFromStoredDevice = 0;
  data.storedChordsFromDevice?.statistics?.forEach((d) => {
    sumOfAveragesFromStoredDevice += wpmMethodCalculator(d.averageSpeed, d.id.length) == Infinity ? 0 : wpmMethodCalculator(d.averageSpeed, d.id.length) * d.speedOfLastTen?.length;
    sumOfLastTenOccurencesFromStoredDevice += d.speedOfLastTen?.length;
    sumOfAWPM += d.chordsMastered[d?.chordsMastered.length - 1] == null || d?.chordsMastered.length == 0 || d.chordsMastered.length == 1 && d.chordsMastered[0] == 0 ? 0 : wpmMethodCalculatorForStoredChords(d?.chordsMastered, d.id.length);
    sumOfLWPM += d.lastSpeed == 0 ? 0 : wpmMethodCalculator(d?.lastSpeed, d.id.length, d.scenario);
    sumErrorsFromStoredDevice += d.numberOfErrors;
    sumOccurrencesFromStoredDevice += d.numberOfOccurrences;
  });
  const numberOfChordsConquered = data.storedChordsFromDevice?.statistics?.filter((d) => d.numberOfOccurrences >= 1).length;
  const numberOfChord = data.storedChordsFromDevice?.statistics?.filter((d) => d.chordsMastered.length == 1 && d.chordsMastered[0] == 0).length;
  const totalChordsPracticed = data.storedChordsFromDevice?.statistics?.filter((d) => d.numberOfOccurrences >= 1).length;
  const tier = data.trainingLevel;
  if (tier == "CHM" && data.trainingScenario == "ALLCHORDS") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowStatItem, null, "Total"), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? isNaN((sumOccurrencesFromStoredDevice - sumErrorsFromStoredDevice) / sumOccurrencesFromStoredDevice) ? "0" : ((sumOccurrencesFromStoredDevice - sumErrorsFromStoredDevice) / sumOccurrencesFromStoredDevice * 100).toFixed(2) + "%" : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, isNaN(sumOfAWPM / (numberOfChordsConquered - numberOfChord)) ? "0" : (sumOfAWPM / (numberOfChordsConquered - numberOfChord)).toFixed(0)), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? (sumOfAWPM / 100).toFixed(2) : ""));
  } else if (tier == "CHM") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowStatItem, null, "Total"), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? isNaN((sumOccurrences - sumErrors) / sumOccurrences) ? "0" : ((sumOccurrences - sumErrors) / sumOccurrences * 100).toFixed(2) + "%" : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? average == 0 ? "0" : (sumOfAverages / sumOfLastTenOccurences).toFixed() : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? sumOfCHM.toFixed(2) : ""));
  } else if (tier == "StM") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowStatItem, null, "Total"), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? average == 0 ? "0" : (sumOfAverages / sumOfLastTenOccurences).toFixed() : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? isNaN((sumOccurrences - sumErrors) / sumOccurrences) ? "0" : ((sumOccurrences - sumErrors) / sumOccurrences * 100).toFixed(2) + "%" : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, isNaN(stmCalculator(sumOfAverages, sumOfLastTenOccurences).toFixed(2)) ? "0" : stmCalculator(sumOfAverages, sumOfLastTenOccurences).toFixed(2)));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowStatItem, null, "SUM"), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? average == 0 ? "0 / 0" : (sumOfAverages / sumOfLastTenOccurences * 5).toFixed() + "/" + (sumOfAverages / sumOfLastTenOccurences).toFixed() : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, sumErrors), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? sumOccurrences : ""));
  }
}
const NewStatisticsRow = styled.div.attrs((props) => ({
  className: `text-gray-300 flex flex-row w-full text-white h-[36px] bg-[#222] hover:bg-[#333] ${props.headerStyle === "TARGET_CHORD_ACTIVE" ? "bg-yellow-400 text-black font-bold" : props.headerStyle === "TARGET_CHORD_INACTIVE" ? "bg-[#aaa] text-black font-bold" : ""}`
}))``;
const RowItem = styled.div.attrs({
  className: `px-3 2xl:px-6 py-2 whitespace-nowrap text-sm w-1/4`
})``;
const RowStatItem = styled.div.attrs({
  className: `px-3 2xl:px-6 whitespace-nowrap text-sm w-1/4 font-semibold`
})``;
const TableContainer = styled.div.attrs({
  className: `h-full w-full flex flex-col items-end rounded-lg`
})``;
export default StatisticsTable;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1ByZXZpb3VzVGVzdFRhYmxlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLE1BQU0scUJBQXFCO0FBRTNCLDJCQUF5QztBQUN2QyxRQUFNLFFBQVEsY0FDWixDQUFDLFVBQVUsTUFBTSxvQkFDakIsV0FBVyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsc0JBQXNCLEVBQUU7QUFFdEQsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUN4RCxRQUFNLGtCQUFrQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzVELFFBQU0sMkJBQTJCLGNBQy9CLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0scUJBQXFCLGNBQ3pCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0seUJBQXlCLGNBQzdCLENBQUMsVUFBVSxNQUFNLHlCQUNoQixZQUFZLEtBQ2IsQ0FBQyxHQUFHLE1BQ0YsbUNBQW1DLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxVQUMxRCxtQ0FBbUMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHO0FBRzlELFFBQU0sMEJBQTBCLE1BQU0sT0FDcEMsQ0FBQyxNQUNDLEVBQUUsZUFBZSxpQkFBaUIsYUFDbEMsRUFBRSx1QkFBdUIsSUFDM0I7QUFFRixRQUFNLHFCQUFxQixNQUFNLE9BQy9CLENBQUMsTUFBTSxFQUFFLHVCQUF1QixHQUNoQztBQUVGLFFBQU0sMEJBQTBCLE1BQU0sT0FDcEMsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLEdBQ2hDO0FBQ0Ysc0JBQW9CLEtBQUs7QUFDdkIsVUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTSxTQUFTLEtBQUssV0FBVyxPQUFPLENBQUMsU0FBUztBQUM5QyxZQUFNLFlBQVksS0FB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
