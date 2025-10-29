import React from "../../../../snowpack/pkg/react.js";
import {
  sendCommandString,
  readGetNone,
  MainControls
} from "../controls/mainControls.js";
async function bootLoader() {
  await sendCommandString("BOOTLOADER");
  await readGetNone();
  await sendCommandString("RST BOOTLOADER");
  await readGetNone();
}
function successfulBootLoader() {
  if (MainControls.serialPort != null) {
    alert("Your CharaChorder will now appear as an external storage device on your computer’s file explorer or Finder app. It might be named one of the following: “Arduino”, “Seeduino”, “TinyUSB” or “CharaChorder X.");
  } else {
    alert("There is no serial connection to bootload at this moment.");
  }
}
export function BootLoaderButton() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => bootLoader(),
    onClickCapture: () => successfulBootLoader()
  }, "BootLoader", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2Jvb3RMb2FkZXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsNEJBQTRCO0FBRTFCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU07QUFDTixRQUFNLGtCQUFrQjtBQUN4QixRQUFNO0FBQUE7QUFHUixnQ0FBZ0M7QUFDOUIsTUFBSSxhQUFhLGNBQWMsTUFBTTtBQUNuQyxVQUNFO0FBQUEsU0FFRztBQUNMLFVBQU07QUFBQTtBQUFBO0FBSUgsbUNBQTBDO0FBQy9DLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsSUFDZixnQkFBZ0IsTUFBTTtBQUFBLEtBQ3ZCLGNBQ1k7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
