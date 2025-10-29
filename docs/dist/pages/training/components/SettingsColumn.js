import React from "../../../../snowpack/pkg/react.js";
import useScreenSizeBoundary from "../../../hooks/useScreenSizeBoundary.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {AutoCustomSetting} from "./AutoCustomSetting.js";
import {
  HighlightCheckboxSetting,
  RecursionCheckboxSetting,
  HUDCheckboxSetting,
  AutosaveSetting
} from "./CheckboxSettings.js";
import DropDown from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
import {ContrastInputSetting} from "./ContrastInputSetting.js";
import {SettingsColumnContainer} from "./SettingsColumnContainer.js";
import {SettingsForm} from "./SettingsForm.js";
import {SettingsHeader} from "./SettingsHeader.js";
import {CustomTrainingSettingsBox} from "./CustomTrainingSettingsBox.js";
const HIDDEN_BREAKPOINT = 1280;
function SettingsColumn() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const updateTrainingSetting = (newProperty) => setTrainingSettings({...trainingSettings, ...newProperty});
  useScreenSizeBoundary({
    boundary: HIDDEN_BREAKPOINT,
    callback: (direction) => {
      updateTrainingSetting({
        isDisplayingSettingsModal: direction === "ABOVE"
      });
    }
  });
  const transitionTransform = `transform -translate-x-full transition-transform ${trainingSettings.isDisplayingSettingsModal && "-translate-x-0"}`;
  const windowSize = useWindowSize();
  const onClickOutside = () => {
    if (windowSize.width < HIDDEN_BREAKPOINT)
      updateTrainingSetting({isDisplayingSettingsModal: false});
  };
  return /* @__PURE__ */ React.createElement(SettingsColumnContainer, {
    isDisplayingModal: trainingSettings.isDisplayingSettingsModal,
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
  }, /* @__PURE__ */ React.createElement(DropDown, null), /* @__PURE__ */ React.createElement(HighlightCheckboxSetting, {
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
  }), /* @__PURE__ */ React.createElement(AutoCustomSetting, null), /* @__PURE__ */ React.createElement(CustomTrainingSettingsBox, {
    trainingSettings,
    setTrainingSettings
  }), /* @__PURE__ */ React.createElement(ContrastInputSetting, {
    trainingSettings,
    setTrainingSettings
  })));
}
export default SettingsColumn;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TZXR0aW5nc0NvbHVtbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTSxvQkFBb0I7QUFFMUIsMEJBQXdDO0FBQ3RDLFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDeEQsUUFBTSxzQkFBc0IsZ0JBQzFCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sd0JBQXdCLENBQUMsZ0JBQzdCLG9CQUFvQixJQUFLLHFCQUFxQjtBQUloRCx3QkFBc0I7QUFBQSxJQUNwQixVQUFVO0FBQUEsSUFDVixVQUFVLENBQUMsY0FBYztBQUN2Qiw0QkFBc0I7QUFBQSxRQUNwQiwyQkFBMkIsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUsvQyxRQUFNLHNCQUFzQixvREFDMUIsaUJBQWlCLDZCQUE2QjtBQUdoRCxRQUFNLGFBQWE7QUFDbkIsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFJLFdBQVcsUUFBUTtBQUNyQiw0QkFBc0IsQ0FBRSwyQkFBMkI7QUFBQTtBQUd2RCxTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFDRSxtQkFBbUIsaUJBQWlCO0FBQUEsSUFDcEMsU0FBUztBQUFBLEtBRVQsb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQjtBQUFBLE1BQ2hCLG9DQUFDLGNBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsUUFBRTtBQUFBO0FBQUEsSUFFSixTQUFTLENBQUMsTUFBTTtBQUNkLFFBQUU7QUFBQTtBQUFBLElBRUo7QUFBQSxLQUVBLG9DQUFDLFVBQUQsT0FFQSxvQ0FBQywwQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFHRixvQ0FBQywwQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFHRixvQ0FBQyxvQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFHRixvQ0FBQyxpQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFHRixvQ0FBQyxtQkFBRCxPQUVBLG9DQUFDLDJCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUdGLG9DQUFDLHNCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQTtBQUFBO0FBT1YsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
