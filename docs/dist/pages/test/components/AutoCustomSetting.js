import React from "../../../../snowpack/pkg/react.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
export function AutoCustomSetting() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const {parentProps, Popper} = usePopover("Use our intelligent algorithm to determine your speed, target, and chords, or choose your own.");
  const triggerResize = () => {
    window.dispatchEvent(new Event("resize"));
  };
  const setAuto = () => {
    setTrainingSettings({
      ...trainingSettings,
      autoOrCustom: "AUTO"
    });
    triggerResize();
  };
  const setCustom = () => {
    setTrainingSettings({
      ...trainingSettings,
      autoOrCustom: "CUSTOM"
    });
    triggerResize();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute"
  }, Popper), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-bold mb-1 inline-flex flex-row gap-2 items-center",
    ...parentProps
  }, "Settings Mode", /* @__PURE__ */ React.createElement(HelpCircleIcon, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "auto",
    className: "form-checkbox",
    checked: trainingSettings.autoOrCustom === "AUTO",
    onChange: setAuto
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 select-none",
    onClick: setAuto
  }, "Dynamic")), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "auto",
    className: "form-checkbox",
    checked: trainingSettings.autoOrCustom === "CUSTOM",
    onChange: setCustom
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 select-none",
    onClick: setCustom
  }, "Static"))));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0F1dG9DdXN0b21TZXR0aW5nLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sb0NBQTJDO0FBQ2hELFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDeEQsUUFBTSxzQkFBc0IsZ0JBQzFCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sQ0FBRSxhQUFhLFVBQVcsV0FDOUI7QUFHRixRQUFNLGdCQUFnQixNQUFNO0FBSTFCLFdBQU8sY0FBYyxJQUFJLE1BQU07QUFBQTtBQUdqQyxRQUFNLFVBQVUsTUFBTTtBQUNwQix3QkFBb0I7QUFBQSxTQUNmO0FBQUEsTUFDSCxjQUFjO0FBQUE7QUFFaEI7QUFBQTtBQUVGLFFBQU0sWUFBWSxNQUFNO0FBQ3RCLHdCQUFvQjtBQUFBLFNBQ2Y7QUFBQSxNQUNILGNBQWM7QUFBQTtBQUVoQjtBQUFBO0FBRUYsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBWSxTQUUzQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsT0FDTjtBQUFBLEtBQ0wsaUJBRUMsb0NBQUMsZ0JBQUQsUUFHRixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixTQUFTLGlCQUFpQixpQkFBaUI7QUFBQSxJQUMzQyxVQUFVO0FBQUEsTUFFWixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBbUIsU0FBUztBQUFBLEtBQVMsYUFLdkQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsU0FBUyxpQkFBaUIsaUJBQWlCO0FBQUEsSUFDM0MsVUFBVTtBQUFBLE1BRVosb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQW1CLFNBQVM7QUFBQSxLQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
