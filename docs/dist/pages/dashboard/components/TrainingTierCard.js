import React, {useState} from "../../../../snowpack/pkg/react.js";
import {getCumulativeAverageChordTypeTime} from "../../../helpers/aggregation.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {CheckMark} from "./CheckMark.js";
import {StatisticsHeader} from "./StatisticsHeader.js";
import {StatRow} from "./StatRow.js";
import UnlockIcon from "./UnlockIcon.js";
import LockIcon from "./LockIcon.js";
import {
  Parent,
  CardBody,
  GreenIconContainer,
  GrayIconContainer,
  TierText,
  TierTitle,
  BodyText,
  Row,
  CardButton,
  StatsButtonContainer,
  StatsButton,
  StatsTableParent,
  StatsTableContainer,
  StatsTable,
  StatsHead,
  StatsBody,
  ClearButtonContainer
} from "./TrainingTierCard.styled.js";
import DisclosureIcon from "./DisclosureIcon.js";
import ExternalLinkIcon from "./ExternalLinkIcon.js";
import RightArrowIcon from "./RightArrowIcon.js";
import TrashIcon from "./TrashIcon.js";
import usePopover from "../../../hooks/usePopover.js";
export function TrainingTierCard(props) {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const fastestWPMAll = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const fastestWPM = fastestWPMAll[props.scenario];
  const average = getCumulativeAverageChordTypeTime(props.statistics || []);
  let sumErrors = 0;
  let sumOccurrences = 0;
  props?.statistics?.forEach((d) => {
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
  });
  const averageStat = {
    averageSpeed: parseFloat(average),
    displayTitle: "AGGREGATE",
    id: "AGGREGATE",
    lastSpeed: 0,
    numberOfErrors: sumErrors,
    numberOfOccurrences: sumOccurrences
  };
  const cardState = (() => {
    if (fastestWPM > props.maxWPM)
      return "COMPLETED";
    else if (props.previousScenario && fastestWPMAll[props.previousScenario] > props.minWPM || !props.previousScenario || fastestWPMAll[props.scenario] !== 0)
      return "UNLOCKED";
    return "LOCKED";
  })();
  const {parentProps, Popper} = usePopover("Clear your stats for this training module only.");
  const clearStatsForOneScenario = useStoreActions((store) => store.clearStatsForOneModule);
  const clearStats = () => {
    if (confirm("Are you sure you want to clear your stat for this module?"))
      clearStatsForOneScenario(props.scenario);
  };
  return /* @__PURE__ */ React.createElement(Parent, {
    areStatsOpen: isStatsOpen
  }, Popper, /* @__PURE__ */ React.createElement(CardBody, {
    areStatsOpen: isStatsOpen
  }, cardState === "COMPLETED" && /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-end absolute w-full top-3 right-4 items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-800 font-lg mr-2"
  }, "Complete: ", fastestWPM.toFixed(), " WPM"), /* @__PURE__ */ React.createElement(GreenIconContainer, null, /* @__PURE__ */ React.createElement(CheckMark, null))), cardState === "UNLOCKED" && /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-end absolute w-full top-3 right-4 items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-800 font-lg mr-2"
  }, "In Progress - ", (fastestWPM / props.maxWPM * 100).toFixed(), "%"), /* @__PURE__ */ React.createElement(GrayIconContainer, null, /* @__PURE__ */ React.createElement(UnlockIcon, null))), cardState === "LOCKED" && /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-end absolute w-full top-3 right-4 items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-800 font-lg mr-2"
  }, "Locked"), /* @__PURE__ */ React.createElement(GrayIconContainer, null, /* @__PURE__ */ React.createElement(LockIcon, null))), /* @__PURE__ */ React.createElement(TierText, null, "Tier"), /* @__PURE__ */ React.createElement(TierTitle, null, props.tierTitle), props.bodyText.split("\n").map((t) => /* @__PURE__ */ React.createElement(BodyText, {
    key: Math.random()
  }, t)), /* @__PURE__ */ React.createElement(Row, null, props.orientationLink && /* @__PURE__ */ React.createElement(CardButton, {
    onClick: () => {
      window.open(props.orientationLink, "_blank");
    }
  }, "View Orientation", /* @__PURE__ */ React.createElement(ExternalLinkIcon, null)), /* @__PURE__ */ React.createElement(CardButton, {
    onClick: props.onPressTraining
  }, "Start Training", /* @__PURE__ */ React.createElement(RightArrowIcon, null))), props.statistics && /* @__PURE__ */ React.createElement(StatsButtonContainer, null, /* @__PURE__ */ React.createElement(StatsButton, {
    onClick: () => setIsStatsOpen(!isStatsOpen)
  }, /* @__PURE__ */ React.createElement(DisclosureIcon, {
    open: isStatsOpen
  }))), /* @__PURE__ */ React.createElement(ClearButtonContainer, null, /* @__PURE__ */ React.createElement(StatsButton, {
    ...parentProps,
    onClick: clearStats
  }, /* @__PURE__ */ React.createElement(TrashIcon, null)))), /* @__PURE__ */ React.createElement(StatsTableParent, {
    areStatsOpen: isStatsOpen
  }, /* @__PURE__ */ React.createElement(StatsTableContainer, null, /* @__PURE__ */ React.createElement(StatsTable, null, /* @__PURE__ */ React.createElement(StatsHead, null, /* @__PURE__ */ React.createElement(StatisticsHeader, null)), /* @__PURE__ */ React.createElement(StatsBody, null, /* @__PURE__ */ React.createElement(StatRow, {
    i: -1,
    stat: averageStat
  }), props?.statistics?.sort((a, b) => a.id.localeCompare(b.id))?.map((stat, i) => {
    return /* @__PURE__ */ React.createElement(StatRow, {
      key: stat.id,
      stat,
      i
    });
  }))))));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvVHJhaW5pbmdUaWVyQ2FyZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXNCTyxpQ0FDTCxPQUNjO0FBQ2QsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVM7QUFDL0MsUUFBTSxnQkFBZ0IsY0FDcEIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxhQUFhLGNBQWMsTUFBTTtBQUV2QyxRQUFNLFVBQVUsa0NBQWtDLE1BQU0sY0FBYztBQUN0RSxNQUFJLFlBQVk7QUFDaEIsTUFBSSxpQkFBaUI7QUFDckIsU0FBTyxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQ2hDLGlCQUFhLEVBQUU7QUFDZixzQkFBa0IsRUFBRTtBQUFBO0FBR3RCLFFBQU0sY0FBK0I7QUFBQSxJQUNuQyxjQUFjLFdBQVc7QUFBQSxJQUN6QixjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxJQUNoQixxQkFBcUI7QUFBQTtBQUd2QixRQUFNLFlBQWEsT0FBaUI7QUFDbEMsUUFBSSxhQUFhLE1BQU07QUFBUSxhQUFPO0FBQUEsYUFFbkMsTUFBTSxvQkFDTCxjQUFjLE1BQU0sb0JBQW9CLE1BQU0sVUFDaEQsQ0FBQyxNQUFNLG9CQUNQLGNBQWMsTUFBTSxjQUFjO0FBRWxDLGFBQU87QUFDVCxXQUFPO0FBQUE7QUFHVCxRQUFNLENBQUUsYUFBYSxVQUFXLFdBQzlCO0FBR0YsUUFBTSwyQkFBMkIsZ0JBQy9CLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sYUFBYSxNQUFNO0FBQ3ZCLFFBQUksUUFBUTtBQUNWLCtCQUF5QixNQUFNO0FBQUE7QUFHbkMsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBUSxjQUFjO0FBQUEsS0FDbkIsUUFFRCxvQ0FBQyxVQUFEO0FBQUEsSUFBVSxjQUFjO0FBQUEsS0FDckIsY0FBYyxlQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUE2QixjQUM3QixXQUFXLFdBQVUsU0FFbEMsb0NBQUMsb0JBQUQsTUFDRSxvQ0FBQyxXQUFELFNBS0wsY0FBYyxjQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUE2QixrQkFDdkIsY0FBYSxNQUFNLFNBQVUsS0FBSyxXQUFVLE1BRS9ELG9DQUFDLG1CQUFELE1BQ0Usb0NBQUMsWUFBRCxTQUtMLGNBQWMsWUFDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBNkIsV0FDMUMsb0NBQUMsbUJBQUQsTUFDRSxvQ0FBQyxVQUFELFNBS04sb0NBQUMsVUFBRCxNQUFVLFNBQ1Ysb0NBQUMsV0FBRCxNQUFZLE1BQU0sWUFFakIsTUFBTSxTQUFTLE1BQU0sTUFBTSxJQUFJLENBQUMsTUFDL0Isb0NBQUMsVUFBRDtBQUFBLElBQVUsS0FBSyxLQUFLO0FBQUEsS0FBVyxLQUdqQyxvQ0FBQyxLQUFELE1BQ0csTUFBTSxtQkFDTCxvQ0FBQyxZQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU07QUFDYixhQUFPLEtBQUssTUFBTSxpQkFBaUI7QUFBQTtBQUFBLEtBRXRDLG9CQUVDLG9DQUFDLGtCQUFELFFBR0osb0NBQUMsWUFBRDtBQUFBLElBQVksU0FBUyxNQUFNO0FBQUEsS0FBaUIsa0JBRTFDLG9DQUFDLGdCQUFELFNBSUgsTUFBTSxjQUNMLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMsYUFBRDtBQUFBLElBQWEsU0FBUyxNQUFNLGVBQWUsQ0FBQztBQUFBLEtBQzFDLG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0IsTUFBTTtBQUFBLFFBSzVCLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMsYUFBRDtBQUFBLE9BQWlCO0FBQUEsSUFBYSxTQUFTO0FBQUEsS0FDckMsb0NBQUMsV0FBRCxVQUlOLG9DQUFDLGtCQUFEO0FBQUEsSUFBa0IsY0FBYztBQUFBLEtBQzlCLG9DQUFDLHFCQUFELE1BQ0Usb0NBQUMsWUFBRCxNQUNFLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxrQkFBRCxRQUVGLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxTQUFEO0FBQUEsSUFBUyxHQUFHO0FBQUEsSUFBSSxNQUFNO0FBQUEsTUFFckIsT0FBTyxZQUNKLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLGNBQWMsRUFBRSxNQUNwQyxJQUFJLENBQUMsTUFBTSxNQUFNO0FBQ2pCLFdBQU8sb0NBQUMsU0FBRDtBQUFBLE1BQVMsS0FBSyxLQUFLO0FBQUEsTUFBSTtBQUFBLE1BQVk7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
