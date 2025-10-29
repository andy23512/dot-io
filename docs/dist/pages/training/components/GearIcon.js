import React from "../../../../snowpack/pkg/react.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
export function GearIcon() {
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const onClick = () => setTrainingSettings({
    ...trainingSettings,
    isDisplayingSettingsModal: !trainingSettings.isDisplayingSettingsModal
  });
  return /* @__PURE__ */ React.createElement("svg", {
    onClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-settings hover:text-gray-400 text-white cursor-pointer active:text-gray-700"
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9HZWFySWNvbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRU8sMkJBQWtDO0FBQ3ZDLFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3hELFFBQU0sVUFBVSxNQUNkLG9CQUFvQjtBQUFBLE9BQ2Y7QUFBQSxJQUNILDJCQUEyQixDQUFDLGlCQUFpQjtBQUFBO0FBR2pELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLE9BQU07QUFBQSxJQUNOLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLGFBQVk7QUFBQSxJQUNaLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixXQUFVO0FBQUEsS0FFVixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxHQUFFO0FBQUEsTUFDMUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
