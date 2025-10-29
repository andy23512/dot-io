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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9DaGVja2JveFNldHRpbmdzLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFPTyx5Q0FBa0MsT0FBbUM7QUFDMUUsU0FDRSxvQ0FBQyxpQkFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNLGlCQUFpQjtBQUFBLElBQ2hDLFVBQVUsTUFDUixNQUFNLHNCQUFzQjtBQUFBLE1BQzFCLG9CQUFvQixDQUFDLE1BQU0saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBTy9DLHlDQUFrQyxPQUFtQztBQUMxRSxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU0saUJBQWlCO0FBQUEsSUFDaEMsVUFBVSxNQUFNO0FBQ2QsWUFBTSxzQkFBc0I7QUFBQSxRQUMxQixrQkFBa0IsQ0FBQyxNQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTzdDLG1DQUE0QixPQUFtQztBQUNwRSxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU0saUJBQWlCO0FBQUEsSUFDaEMsVUFBVSxNQUFNO0FBQ2QsWUFBTSxzQkFBc0I7QUFBQSxRQUMxQixpQkFBaUIsQ0FBQyxNQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTzVDLGdDQUF5QixPQUFtQztBQUNqRSxTQUNFLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU0saUJBQWlCO0FBQUEsSUFDaEMsVUFBVSxNQUFNO0FBQ2QsWUFBTSxzQkFBc0I7QUFBQSxRQUMxQixhQUFhLENBQUMsTUFBTSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
