import React from "../../../../snowpack/pkg/react.js";
import {useWordsPerMinute} from "../../../hooks/useWordsPerMinute.js";
import useNumberOfChordsConquered from "../../../hooks/useChordsConquered.js";
import useChordsNotConquered, {
  useTotalChordsToConquer
} from "../../../hooks/useChordsNotConquered.js";
import useCurrentLevel from "../../../hooks/useCurrentLevel.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import {PlusIcon} from "./PlusIcon.js";
import usePopover from "../../../hooks/usePopover.js";
import {wpmMethodCalculator} from "../../../helpers/aggregation.js";
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
export function ProgressBar() {
  const wpm = useWordsPerMinute();
  const chordsConquered = useNumberOfChordsConquered();
  const [currentLevel] = useCurrentLevel();
  const chordsRemaining = useChordsNotConquered();
  const totalNumberOfChords = useTotalChordsToConquer();
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const isShowingPlusIcon = useStoreState((store) => store.isShowingPlusIcon);
  const progress = clamp(chordsConquered / totalNumberOfChords * 100, 0, 100);
  const {parentProps, Popper} = usePopover("The number of chords that you have typed faster than your speed goal.");
  const {parentProps: remainingProps, Popper: RemainingPopover} = usePopover("The number of chords that you have not typed faster than your speed goal.");
  return /* @__PURE__ */ React.createElement(Container, null, Popper, RemainingPopover, /* @__PURE__ */ React.createElement(TopDataRow, null, /* @__PURE__ */ React.createElement(DataText, {
    ...parentProps
  }, "Complete: ", chordsConquered), /* @__PURE__ */ React.createElement(DataText, null, "Level: ", currentLevel, isShowingPlusIcon && /* @__PURE__ */ React.createElement(PlusIcon, null)), /* @__PURE__ */ React.createElement(DataText, {
    ...remainingProps
  }, "Remaining: ", chordsRemaining)), /* @__PURE__ */ React.createElement(BottomProgressBar, null, /* @__PURE__ */ React.createElement(ProgressBarOuter, null, /* @__PURE__ */ React.createElement(ProgressBarInner, {
    progress
  }))), /* @__PURE__ */ React.createElement(BottomDataRow, null, /* @__PURE__ */ React.createElement(WPMText, null, "WPM: ", isNaN(wpm) ? "Calibrating..." : wpm.toFixed(0)), /* @__PURE__ */ React.createElement(SpeedGoalText, null, "Speed Goal:", " ", wpmMethodCalculator(parseInt(trainingSettings.speedGoal.toFixed())) + " WPM")));
}
const BottomDataRow = styled.div.attrs({
  className: `flex flex-row w-full mt-2 justify-between text-white font-semibold`
})``;
const SpeedGoalText = styled.span.attrs({
  className: ``
})``;
const ProgressBarInner = styled.div.attrs({
  className: `relative rounded-r-xl bg-green-500 h-full rounded-l`
})`
  width: ${(props) => props.progress?.toString()}%;
`;
const ProgressBarOuter = styled.div.attrs({
  className: `rounded bg-red-500 w-full h-full`
})``;
const WPMText = styled.div.attrs({
  className: `text-white font-semibold min-w-[80px]`
})``;
const Container = styled.div.attrs({
  className: ``
})``;
const TopDataRow = styled.div.attrs({
  className: `flex flex-row items-end justify-between mb-2 text-sm sm:text-lg`
})``;
const DataText = styled.div.attrs({
  className: `text-white font-semibold flex flex-row items-center`
})``;
const BottomProgressBar = styled.div.attrs({
  className: `rounded bg-[#333] h-12 w-full p-1`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlQUFlLFFBQWdCLEtBQWEsS0FBYTtBQUN2RCxTQUFPLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxRQUFRO0FBQUE7QUFHakMsOEJBQXFDO0FBQzFDLFFBQU0sTUFBTTtBQUNaLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUN4RCxRQUFNLG9CQUFvQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBRXpELFFBQU0sV0FBVyxNQUFPLGtCQUFrQixzQkFBdUIsS0FBSyxHQUFHO0FBRXpFLFFBQU0sQ0FBRSxhQUFhLFVBQVcsV0FDOUI7QUFHRixRQUFNLENBQUUsYUFBYSxnQkFBZ0IsUUFBUSxvQkFBcUIsV0FDaEU7QUFHRixTQUNFLG9DQUFDLFdBQUQsTUFDRyxRQUNBLGtCQUVELG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsT0FBYztBQUFBLEtBQWEsY0FBVyxrQkFDdEMsb0NBQUMsVUFBRCxNQUFVLFdBQ0EsY0FDUCxxQkFBcUIsb0NBQUMsVUFBRCxRQUV4QixvQ0FBQyxVQUFEO0FBQUEsT0FBYztBQUFBLEtBQWdCLGVBQVksbUJBRTVDLG9DQUFDLG1CQUFELE1BQ0Usb0NBQUMsa0JBQUQsTUFDRSxvQ0FBQyxrQkFBRDtBQUFBLElBQWtCO0FBQUEsUUFHdEIsb0NBQUMsZUFBRCxNQUNFLG9DQUFDLFNBQUQsTUFBUyxTQUFNLE1BQU0sT0FBTyxtQkFBbUIsSUFBSSxRQUFRLEtBQzNELG9DQUFDLGVBQUQsTUFBZSxlQUNELEtBQ1gsb0JBQW9CLFNBQVMsaUJBQWlCLFVBQVUsY0FDdkQ7QUFBQTtBQVdaLE1BQU0sZ0JBQWdCLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDckMsV0FBVztBQUFBO0FBR2IsTUFBTSxnQkFBZ0IsT0FBTyxLQUFLLE1BQU07QUFBQSxFQUN0QyxXQUFXO0FBQUE7QUFHYixNQUFNLG1CQUFtQixPQUFPLElBQUksTUFBMkI7QUFBQSxFQUM3RCxXQUFXO0FBQUE7QUFBQSxXQUVGLENBQUMsVUFBVSxNQUFNLFVBQVU7QUFBQTtBQUd0QyxNQUFNLG1CQUFtQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3hDLFdBQVc7QUFBQTtBQUdiLE1BQU0sVUFBVSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQy9CLFdBQVc7QUFBQTtBQUdiLE1BQU0sWUFBWSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2pDLFdBQVc7QUFBQTtBQUdiLE1BQU0sYUFBYSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2xDLFdBQVc7QUFBQTtBQUdiLE1BQU0sV0FBVyxPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2hDLFdBQVc7QUFBQTtBQUdiLE1BQU0sb0JBQW9CLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDekMsV0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
