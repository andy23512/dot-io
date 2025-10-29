import React from "../../../../snowpack/pkg/react.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {StatisticsColumnContainer} from "./StatisticsColumnContainer.js";
import {PreviousTestTableContainer} from "./PreviousTestTableContainer.js";
import {PreviousTestTableTitle} from "./PreviousTestTableTitle.js";
import PreviousTestTable from "./PreviousTestTable.js";
import {useCurrentTrainingScenario} from "../../../hooks/useCurrentTrainingScenario.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
const HIDDEN_BREAKPOINT = 1024;
export function PreviousTest() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setIsDisplaying = useStoreActions((store) => store.setIsDisplayingStatisticsModal);
  const setIsDisplayingStatisticsModal = useStoreActions((store) => store.setIsDisplayingStatisticsModal);
  const isDisplayingStatisticsModal = useStoreState((store) => store.isDisplayingStatisticsModal);
  const transitionTransform = `transform translate-x-full transition-transform ${isDisplayingStatisticsModal && "translate-x-0"}`;
  const windowSize = useWindowSize();
  const onClickOutside = () => {
    if (windowSize.width < HIDDEN_BREAKPOINT)
      setIsDisplayingStatisticsModal(false);
  };
  const openChordEditModal = useStoreActions((store) => store.toggleChordEditModal);
  const updateTrainingSetting = (newProperty) => setTrainingSettings({...trainingSettings, ...newProperty});
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const handleSettingsTabClick = () => {
    setIsDisplayingStatisticsModal(!isDisplayingStatisticsModal);
    updateTrainingSetting({
      isDisplayingStatisticsModal: !trainingSettings.isDisplayingStatisticsModal
    });
  };
  const currentTrainingMode = useCurrentTrainingScenario();
  const wordTestNumber = useStoreState((store) => store.wordTestNumber == void 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(StatisticsColumnContainer, {
    onClick: onClickOutside,
    isDisplayingModal: isDisplayingStatisticsModal,
    isTestTier: wordTestNumber
  }, /* @__PURE__ */ React.createElement(PreviousTestTableContainer, {
    transitionTransform
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(PreviousTestTableTitle, null)), /* @__PURE__ */ React.createElement(PreviousTestTable, null))), /* @__PURE__ */ React.createElement("svg", {
    onClick: handleSettingsTabClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `feather feather-bar-chart-2 feather mr-8 feather-settings hover:text-gray-400 text-white cursor-pointer active:text-gray-700 ${isDisplayingStatisticsModal == true ? "relative" : "relative"}`
  }, /* @__PURE__ */ React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  })));
}
const Row = styled.div.attrs({
  className: `flex flex-row w-full justify-end items-end mb-4 `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1ByZXZpb3VzVGVzdHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTSxvQkFBb0I7QUFFbkIsK0JBQXNDO0FBQzNDLFFBQU0sbUJBQW1CLGNBQ3ZCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQWUsTUFBTTtBQUd4QixRQUFNLGlDQUFpQyxnQkFDckMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSw4QkFBOEIsY0FDbEMsQ0FBQyxVQUFlLE1BQU07QUFLeEIsUUFBTSxzQkFBc0IsbURBQzFCLCtCQUErQjtBQUdqQyxRQUFNLGFBQWE7QUFDbkIsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFJLFdBQVcsUUFBUTtBQUNyQixxQ0FBK0I7QUFBQTtBQUduQyxRQUFNLHFCQUFxQixnQkFDekIsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSx3QkFBd0IsQ0FBQyxnQkFDN0Isb0JBQW9CLElBQUsscUJBQXFCO0FBQ2hELFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQWUsTUFBTTtBQUd4QixRQUFNLHlCQUF5QixNQUFNO0FBQ25DLG1DQUErQixDQUFDO0FBQ2hDLDBCQUFzQjtBQUFBLE1BQ3BCLDZCQUNFLENBQUMsaUJBQWlCO0FBQUE7QUFBQTtBQUd4QixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLGlCQUFpQixjQUNyQixDQUFDLFVBQWUsTUFBTSxrQkFBa0I7QUFHMUMsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQywyQkFBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsbUJBQW1CO0FBQUEsSUFDbkIsWUFBWTtBQUFBLEtBRVosb0NBQUMsNEJBQUQ7QUFBQSxJQUE0QjtBQUFBLEtBQzFCLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyx3QkFBRCxRQUVGLG9DQUFDLG1CQUFELFNBR0osb0NBQUMsT0FBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLElBQ1osZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLFdBQVcsZ0lBQ1QsK0JBQStCLE9BQU8sYUFBYTtBQUFBLEtBR3JELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxNQUNqQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDakMsb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQUksSUFBRztBQUFBLElBQUssSUFBRztBQUFBLElBQUksSUFBRztBQUFBO0FBQUE7QUFNdkMsTUFBTSxNQUFNLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDM0IsV0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
