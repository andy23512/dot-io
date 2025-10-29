import React from "../../../../snowpack/pkg/react.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {AutoCustomSetting} from "./AutoCustomSetting.js";
import {
  HighlightCheckboxSetting,
  RecursionCheckboxSetting,
  HUDCheckboxSetting,
  AutosaveSetting,
  ProgressBarDynamic
} from "./CheckboxSettings.js";
import {ContrastInputSetting} from "./ContrastInputSetting.js";
import {SettingsColumnContainer} from "./SettingsColumnContainer.js";
import {SettingsForm} from "./SettingsForm.js";
import {SettingsHeader} from "./SettingsHeader.js";
import {CustomTrainingSettingsBox} from "./CustomTrainingSettingsBox.js";
import TrainingControls from "./TrainingControls.js";
const HIDDEN_BREAKPOINT = 1280;
function SettingsColumn() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const setIsDisplayingSettingsModal = useStoreActions((store) => store.setIsDisplayingSettingsModal);
  const isDisplayingSettingsModal = useStoreState((store) => store.isDisplayingSettingsModal);
  const updateTrainingSetting = (newProperty) => setTrainingSettings({...trainingSettings, ...newProperty});
  const transitionTransform = `transform -translate-x-full transition-transform ${isDisplayingSettingsModal && "-translate-x-0"}`;
  const windowSize = useWindowSize();
  const onClickOutside = () => {
    if (windowSize.width < HIDDEN_BREAKPOINT)
      setIsDisplayingSettingsModal(false);
  };
  const handleSettingsTabClick = () => {
    const settingsVal = !isDisplayingSettingsModal;
    setIsDisplayingSettingsModal(settingsVal);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SettingsColumnContainer, {
    isDisplayingModal: isDisplayingSettingsModal,
    onClick: onClickOutside
  }, /* @__PURE__ */ React.createElement(SettingsHeader, {
    transitionTransform
  }), /* @__PURE__ */ React.createElement(SettingsForm, {
    onSubmit: (e) => {
      e.preventDefault();
    },
    onClick: (e) => {
      e.stopPropagation();
    },
    transitionTransform
  }, /* @__PURE__ */ React.createElement(TrainingControls, null), /* @__PURE__ */ React.createElement(HighlightCheckboxSetting, {
    trainingSettings,
    updateTrainingSetting
  }), /* @__PURE__ */ React.createElement(RecursionCheckboxSetting, {
    trainingSettings,
    updateTrainingSetting
  }), /* @__PURE__ */ React.createElement(HUDCheckboxSetting, {
    trainingSettings,
    updateTrainingSetting
  }), /* @__PURE__ */ React.createElement(AutosaveSetting, {
    trainingSettings,
    updateTrainingSetting
  }), /* @__PURE__ */ React.createElement(ProgressBarDynamic, {
    trainingSettings,
    updateTrainingSetting
  }), /* @__PURE__ */ React.createElement(AutoCustomSetting, null), /* @__PURE__ */ React.createElement(ContrastInputSetting, {
    trainingSettings,
    setTrainingSettings
  }), /* @__PURE__ */ React.createElement(CustomTrainingSettingsBox, {
    trainingSettings,
    setTrainingSettings
  }))), /* @__PURE__ */ React.createElement("svg", {
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
    className: `feather xl:ml-8 feather-settings hover:text-gray-400 text-white cursor-pointer active:text-gray-700 ${isDisplayingSettingsModal == true ? "absolute" : "absolute"}`
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  })));
}
export default SettingsColumn;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1NldHRpbmdzQ29sdW1uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNLG9CQUFvQjtBQUUxQiwwQkFBd0M7QUFDdEMsUUFBTSxtQkFBbUIsY0FDdkIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxzQkFBc0IsZ0JBQzFCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sK0JBQStCLGdCQUNuQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLDRCQUE0QixjQUNoQyxDQUFDLFVBQWUsTUFBTTtBQUd4QixRQUFNLHdCQUF3QixDQUFDLGdCQUM3QixvQkFBb0IsSUFBSyxxQkFBcUI7QUFLaEQsUUFBTSxzQkFBc0Isb0RBQzFCLDZCQUE2QjtBQUcvQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFJLFdBQVcsUUFBUTtBQUNyQixtQ0FBNkI7QUFBQTtBQUdqQyxRQUFNLHlCQUF5QixNQUFNO0FBRW5DLFVBQU0sY0FBYyxDQUFDO0FBQ3JCLGlDQUE2QjtBQUFBO0FBRy9CLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUNFLG1CQUFtQjtBQUFBLElBQ25CLFNBQVM7QUFBQSxLQUVULG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0I7QUFBQSxNQUNoQixvQ0FBQyxjQUFEO0FBQUEsSUFDRSxVQUFVLENBQUMsTUFBTTtBQUNmLFFBQUU7QUFBQTtBQUFBLElBRUosU0FBUyxDQUFDLE1BQU07QUFDZCxRQUFFO0FBQUE7QUFBQSxJQUVKO0FBQUEsS0FFQSxvQ0FBQyxrQkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUdGLG9DQUFDLDBCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUdGLG9DQUFDLG9CQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUdGLG9DQUFDLGlCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUVGLG9DQUFDLG9CQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUdGLG9DQUFDLG1CQUFELE9BQ0Esb0NBQUMsc0JBQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BRUYsb0NBQUMsMkJBQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLFFBSU4sb0NBQUMsT0FBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLElBQ1osZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLFdBQVcsdUdBQ1QsNkJBQTZCLE9BQU8sYUFBYTtBQUFBLEtBR25ELG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLEdBQUU7QUFBQSxNQUMxQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTtBQU1oQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
