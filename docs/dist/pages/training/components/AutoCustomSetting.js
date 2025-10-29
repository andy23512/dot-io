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
  return /* @__PURE__ */ React.createElement("div", null, Popper, /* @__PURE__ */ React.createElement("div", {
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
  }, "Auto")), /* @__PURE__ */ React.createElement("div", {
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
  }, "Custom"))));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9BdXRvQ3VzdG9tU2V0dGluZy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLG9DQUEyQztBQUNoRCxRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3hELFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLENBQUUsYUFBYSxVQUFXLFdBQzlCO0FBR0YsUUFBTSxnQkFBZ0IsTUFBTTtBQUkxQixXQUFPLGNBQWMsSUFBSSxNQUFNO0FBQUE7QUFHakMsUUFBTSxVQUFVLE1BQU07QUFDcEIsd0JBQW9CO0FBQUEsU0FDZjtBQUFBLE1BQ0gsY0FBYztBQUFBO0FBRWhCO0FBQUE7QUFFRixRQUFNLFlBQVksTUFBTTtBQUN0Qix3QkFBb0I7QUFBQSxTQUNmO0FBQUEsTUFDSCxjQUFjO0FBQUE7QUFFaEI7QUFBQTtBQUVGLFNBQ0Usb0NBQUMsT0FBRCxNQUNHLFFBQ0Qsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLE9BQ047QUFBQSxLQUNMLGlCQUVDLG9DQUFDLGdCQUFELFFBR0Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsU0FBUyxpQkFBaUIsaUJBQWlCO0FBQUEsSUFDM0MsVUFBVTtBQUFBLE1BRVosb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQW1CLFNBQVM7QUFBQSxLQUFTLFVBS3ZELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLFNBQVMsaUJBQWlCLGlCQUFpQjtBQUFBLElBQzNDLFVBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFtQixTQUFTO0FBQUEsS0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
