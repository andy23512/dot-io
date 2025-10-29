import React from "../../../../snowpack/pkg/react.js";
import {CheckboxSetting} from "./CheckboxSetting.js";
export function HighlightCheckboxSetting(props) {
  return /* @__PURE__ */ React.createElement(CheckboxSetting, {
    helpText: "Highlight keys on the CharaChorder overlay in the bottom center of your screen.",
    title: "Highlight Keys",
    checked: props.trainingSettings.isHighlightingKeys,
    onChange: () => props.updateTrainingSetting({
      isHighlightingKeys: !props.trainingSettings.isHighlightingKeys
    })
  });
}
export function RecursionCheckboxSetting(props) {
  return /* @__PURE__ */ React.createElement(CheckboxSetting, {
    helpText: "When checked, this setting will prompt you to type chords that you struggle with more often to help you practice.",
    title: "Practice Slow Chords",
    checked: props.trainingSettings.isUsingRecursion,
    onChange: () => {
      props.updateTrainingSetting({
        isUsingRecursion: !props.trainingSettings.isUsingRecursion
      });
    }
  });
}
export function HUDCheckboxSetting(props) {
  return /* @__PURE__ */ React.createElement(CheckboxSetting, {
    helpText: "Show or hide certain elements of the heads up display to increase focus on typing.",
    title: "Display HUD",
    checked: props.trainingSettings.isDisplayingHUD,
    onChange: () => {
      props.updateTrainingSetting({
        isDisplayingHUD: !props.trainingSettings.isDisplayingHUD
      });
    }
  });
}
export function ProgressBarDynamic(props) {
  return /* @__PURE__ */ React.createElement(CheckboxSetting, {
    helpText: "Control the state of the progress bar to Dynamic or Ranged.",
    title: "Dynamic Progress Bar",
    checked: props.trainingSettings.isProgressBarDynamic,
    onChange: () => {
      props.updateTrainingSetting({
        isProgressBarDynamic: !props.trainingSettings.isProgressBarDynamic
      });
    }
  });
}
export function AutosaveSetting(props) {
  return /* @__PURE__ */ React.createElement(CheckboxSetting, {
    helpText: "Automatically save your statistics when you navigate away from this training session.",
    title: "Autosave Statistics",
    checked: props.trainingSettings.isAutoWrite,
    onChange: () => {
      props.updateTrainingSetting({
        isAutoWrite: !props.trainingSettings.isAutoWrite
      });
    }
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NoZWNrYm94U2V0dGluZ3MudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFQTtBQU9PLHlDQUFrQyxPQUFtQztBQUMxRSxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU0saUJBQWlCO0FBQUEsSUFDaEMsVUFBVSxNQUNSLE1BQU0sc0JBQXNCO0FBQUEsTUFDMUIsb0JBQW9CLENBQUMsTUFBTSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFPL0MseUNBQWtDLE9BQW1DO0FBQzFFLFNBQ0Usb0NBQUMsaUJBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTSxpQkFBaUI7QUFBQSxJQUNoQyxVQUFVLE1BQU07QUFDZCxZQUFNLHNCQUFzQjtBQUFBLFFBQzFCLGtCQUFrQixDQUFDLE1BQU0saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPN0MsbUNBQTRCLE9BQW1DO0FBQ3BFLFNBQ0Usb0NBQUMsaUJBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTSxpQkFBaUI7QUFBQSxJQUNoQyxVQUFVLE1BQU07QUFDZCxZQUFNLHNCQUFzQjtBQUFBLFFBQzFCLGlCQUFpQixDQUFDLE1BQU0saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPNUMsbUNBQTRCLE9BQW1DO0FBQ3BFLFNBQ0Usb0NBQUMsaUJBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTSxpQkFBaUI7QUFBQSxJQUNoQyxVQUFVLE1BQU07QUFDZCxZQUFNLHNCQUFzQjtBQUFBLFFBQzFCLHNCQUFzQixDQUFDLE1BQU0saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPakQsZ0NBQXlCLE9BQW1DO0FBQ2pFLFNBQ0Usb0NBQUMsaUJBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTSxpQkFBaUI7QUFBQSxJQUNoQyxVQUFVLE1BQU07QUFDZCxZQUFNLHNCQUFzQjtBQUFBLFFBQzFCLGFBQWEsQ0FBQyxNQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
