import React from "../../../../snowpack/pkg/react.js";
import {FixedSizeList} from "../../../../snowpack/pkg/react-window.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import useContainerDimensions from "../../../hooks/useContainerDimensions.js";
import {getCumulativeAverageChordTypeTime} from "../../../helpers/aggregation.js";
import usePopover from "../../../hooks/usePopover.js";
import {truncateString} from "../../../helpers/truncateString.js";
import {wpmMethodCalculator} from "../../../helpers/aggregation.js";
const LIST_LENGTH_OFFSET = 2;
function StatisticsTable() {
  const stats = useStoreState((state) => state.trainingStatistics).statistics.sort((a, b) => b.averageSpeed - a.averageSpeed);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
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
      displayHUD: true
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
    return /* @__PURE__ */ React.createElement(Header, null);
  else if (index === 1)
    return /* @__PURE__ */ React.createElement(AggregateRow, {
      data
    });
  const headerStyle = getStyle(data.targetChords, data.isRecursionEnabled, index - LIST_LENGTH_OFFSET);
  return /* @__PURE__ */ React.createElement("div", {
    onClick: (e) => {
      e.stopPropagation();
    },
    style
  }, /* @__PURE__ */ React.createElement(NewStatisticsRow, {
    headerStyle,
    index
  }, /* @__PURE__ */ React.createElement(RowItem, null, truncateString(item?.displayTitle || "", 12)), /* @__PURE__ */ React.createElement(RowItem, null, item?.averageSpeed), /* @__PURE__ */ React.createElement(RowItem, null, item?.numberOfErrors), /* @__PURE__ */ React.createElement(RowItem, null, item?.numberOfOccurrences)));
};
const HeaderRow = styled.div.attrs({
  className: `bg-[#2c2c2c] px-4 py-2 text-left text-xs text-gray-50 uppercase tracking-wider font-bold rounded-tr-lg flex flex-row justify-between align-center h-[36px]`
})``;
const AggregateStatRow = styled.div.attrs({
  className: `bg-[#262626] text-gray-300 flex flex-row w-full text-white h-[36px] bg-[#222] items-center`
})``;
const HeaderItem = styled.span.attrs({
  className: ``
})``;
const HeaderItemRow = ({helpText, children}) => {
  const {parentProps, Popper} = usePopover(helpText);
  return /* @__PURE__ */ React.createElement(HeaderItem, {
    ...parentProps
  }, children, Popper);
};
const Header = () => {
  return /* @__PURE__ */ React.createElement(HeaderRow, {
    onClick: (e) => {
      e.stopPropagation();
    }
  }, /* @__PURE__ */ React.createElement(HeaderItemRow, {
    helpText: "The name of the target chord or character you typed."
  }, "Chord"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
    helpText: "The speed at which you typed the chord in hundredths of a second."
  }, "WPM"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
    helpText: "The number of times you have made a mistake typing this chord."
  }, "Errors"), /* @__PURE__ */ React.createElement(HeaderItemRow, {
    helpText: "The total number of times you have typed this chord."
  }, "Times"));
};
const AggregateRow = ({data}) => {
  const wpmCheck = wpmMethodCalculator(getCumulativeAverageChordTypeTime(data.stats));
  const average = wpmCheck != void 0 || null ? wpmCheck : 0;
  let sumErrors = 0;
  let sumOccurrences = 0;
  data.stats.forEach((d) => {
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
  });
  return /* @__PURE__ */ React.createElement(AggregateStatRow, {
    onClick: (e) => {
      e.stopPropagation();
    }
  }, /* @__PURE__ */ React.createElement(RowStatItem, null, "SUM"), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? average : ""), /* @__PURE__ */ React.createElement(RowStatItem, null, sumErrors), /* @__PURE__ */ React.createElement(RowStatItem, null, data.displayHUD ? sumOccurrences : ""));
};
const NewStatisticsRow = styled.div.attrs((props) => ({
  className: `text-gray-300 flex flex-row w-full text-white h-[36px]  ${props.index % 2 == 0 ? "bg-[#222]" : ""} hover:bg-[#333] ${props.headerStyle === "TARGET_CHORD_ACTIVE" ? "bg-yellow-400 text-black font-bold" : props.headerStyle === "TARGET_CHORD_INACTIVE" ? "bg-[#aaa] text-black font-bold" : ""}`
}))``;
const RowItem = styled.div.attrs((props) => ({
  className: `px-3 2xl:px-6 py-2 whitespace-nowrap text-sm w-1/4 `
}))``;
const RowStatItem = styled.div.attrs({
  className: `px-3 2xl:px-6 whitespace-nowrap text-sm w-1/4 font-semibold`
})``;
const TableContainer = styled.div.attrs({
  className: `h-full w-full flex flex-col items-end rounded-lg`
})``;
export default StatisticsTable;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aXN0aWNzVGFibGUudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUEsTUFBTSxxQkFBcUI7QUFFM0IsMkJBQXlDO0FBQ3ZDLFFBQU0sUUFBUSxjQUNaLENBQUMsVUFBVSxNQUFNLG9CQUNqQixXQUFXLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxlQUFlLEVBQUU7QUFDL0MsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUV4RCxRQUFNLENBQUMsS0FBSyxjQUFjO0FBRTFCLFNBQ0Usb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQjtBQUFBLEtBQ2Qsb0NBQUMsZUFBRDtBQUFBLElBQ0UsUUFBUSxXQUFXLFVBQVU7QUFBQSxJQUM3QixXQUFXLE1BQU0sU0FBUztBQUFBLElBQzFCLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQSxjQUFjLGlCQUFpQjtBQUFBLE1BQy9CLG9CQUFvQixpQkFBaUIsaUJBQWlCO0FBQUEsTUFDdEQsWUFBWTtBQUFBO0FBQUEsSUFFZCxPQUFPLENBQUUsY0FBYztBQUFBLEtBRXRCO0FBQUE7QUFxQlQsTUFBTSxXQUFXLENBQ2YsY0FDQSxvQkFDQSxVQUNpQjtBQUNqQixNQUFJLFFBQVEsY0FBYztBQUN4QixRQUFJO0FBQW9CLGFBQU87QUFDL0IsV0FBTztBQUFBO0FBRVQsU0FBTztBQUFBO0FBR1QsTUFBTSxNQUFNLENBQUMsQ0FBRSxPQUFPLE9BQU8sVUFBb0I7QUFFL0MsUUFBTSxPQUFPLE1BQU0sUUFBUSxRQUFRO0FBQ25DLE1BQUksVUFBVTtBQUFHLFdBQU8sb0NBQUMsUUFBRDtBQUFBLFdBQ2YsVUFBVTtBQUFHLFdBQU8sb0NBQUMsY0FBRDtBQUFBLE1BQWM7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
