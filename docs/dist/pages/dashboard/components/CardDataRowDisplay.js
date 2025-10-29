import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {useHistory} from "../../../../snowpack/pkg/react-router-dom.js";
import {ROUTER_PATHS} from "../../../components/router.js";
export function CardDataRowDisplay() {
  const maxWPM = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const clearStatsWithoutPrompt = useStoreActions((store) => store.clearAllStorage);
  const {parentProps: wpmProps, Popper: SpeedPopper} = usePopover("This shows the fastest you have typed in any training module. Get a faster top speed to progress through the training modules.");
  const {parentProps: progressProps, Popper: ProgressPopper} = usePopover("Clear all of the progress you have saved, both your top speed as well as your chord statistics for each training module.");
  const onClickRefreshButton = () => {
    const shouldClear = window.confirm("Are you sure you want to clear all your progress?");
    if (shouldClear)
      clearStatsWithoutPrompt();
  };
  const history = useHistory();
  return /* @__PURE__ */ React.createElement(CardDataRow, null, SpeedPopper, ProgressPopper, /* @__PURE__ */ React.createElement(MaxWPMBadge, {
    ...wpmProps
  }, "Top Speed: ", Math.max.apply(Math, Object.values(maxWPM))?.toFixed()), /* @__PURE__ */ React.createElement(RefreshButton, {
    onClick: onClickRefreshButton,
    ...progressProps
  }, "Clear Progress"), /* @__PURE__ */ React.createElement("div", {
    className: "feather feather-trash-2 p-0.5 text-gray-600"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      history.push(ROUTER_PATHS.manager);
    },
    className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]"
  }, "Chord Manager")));
}
export const RefreshButton = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]`
})``;
export const MaxWPMBadge = styled.span.attrs({
  className: `bg-green-500 text-white rounded p-2 px-4 mb-4 inline-block`
})``;
export const CardDataRow = styled.div.attrs({
  className: `w-full lg:w-3/4 lg:mx-auto flex flex-row justify-end`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvQ2FyZERhdGFSb3dEaXNwbGF5LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLHFDQUE0QztBQUNqRCxRQUFNLFNBQVMsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUM5QyxRQUFNLDBCQUEwQixnQkFDOUIsQ0FBQyxVQUFVLE1BQU07QUFHbkIsUUFBTSxDQUFFLGFBQWEsVUFBVSxRQUFRLGVBQWdCLFdBQ3JEO0FBR0YsUUFBTSxDQUFFLGFBQWEsZUFBZSxRQUFRLGtCQUFtQixXQUM3RDtBQUdGLFFBQU0sdUJBQXVCLE1BQU07QUFDakMsVUFBTSxjQUFjLE9BQU8sUUFDekI7QUFFRixRQUFJO0FBQWE7QUFBQTtBQUVuQixRQUFNLFVBQVU7QUFFaEIsU0FDRSxvQ0FBQyxhQUFELE1BQ0csYUFDQSxnQkFDRCxvQ0FBQyxhQUFEO0FBQUEsT0FBaUI7QUFBQSxLQUFVLGVBQ2IsS0FBSyxJQUFJLE1BQU0sTUFBTSxPQUFPLE9BQU8sVUFBVSxZQUczRCxvQ0FBQyxlQUFEO0FBQUEsSUFBZSxTQUFTO0FBQUEsT0FBMEI7QUFBQSxLQUFlLG1CQUdqRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU07QUFDYixjQUFRLEtBQUssYUFBYTtBQUFBO0FBQUEsSUFFNUIsV0FBVTtBQUFBLEtBQ1g7QUFBQTtBQVFGLGFBQU0sZ0JBQWdCLE9BQU8sT0FBTyxNQUFNO0FBQUEsRUFDL0MsV0FBVztBQUFBO0FBR04sYUFBTSxjQUFjLE9BQU8sS0FBSyxNQUFNO0FBQUEsRUFDM0MsV0FBVztBQUFBO0FBR04sYUFBTSxjQUFjLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDMUMsV0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
