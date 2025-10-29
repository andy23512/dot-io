import React from "../../../../snowpack/pkg/react.js";
import {sendCommandString} from "../controls/mainControls.js";
export async function upgrade() {
  await sendCommandString("RST UPGRADECML");
}
export function UpgradeFunction() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "statusDiv",
    style: {display: "none"}
  }, "Status:", " "), /* @__PURE__ */ React.createElement("button", {
    className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-absolute",
    color: "pink",
    onClick: () => upgrade()
  }, "Upgrade Library", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL3VwZ3JhZGVGdW5jdGlvbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUEsZ0NBQWdDO0FBQzlCLFFBQU0sa0JBQWtCO0FBQUE7QUFFbkIsa0NBQXlDO0FBQzlDLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVksT0FBTyxDQUFFLFNBQVM7QUFBQSxLQUFVLFdBQ3RDLE1BR1Ysb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsS0FDaEIsbUJBQ2lCO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
