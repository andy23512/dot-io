import React from "../../../../snowpack/pkg/react.js";
import {sendCommandString, readGetNone} from "../controls/mainControls.js";
export async function reboot() {
  await sendCommandString("RESTART");
  await readGetNone();
}
export async function here() {
  await navigator.serial.addEventListener("disconnect", (e) => {
    console.log("serial port disconnected");
  });
  await navigator.serial.addEventListener("connect", (e) => {
    console.log("serial port connected");
  });
}
export function RebootButton() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => {
      here();
      reboot();
    }
  }, "Reboot", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL3JlYm9vdC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0EsK0JBQStCO0FBRTdCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU07QUFBQTtBQUdSLDZCQUE2QjtBQUMzQixRQUFNLFVBQVUsT0FBTyxpQkFBaUIsY0FBYyxDQUFDLE1BQU07QUFHM0QsWUFBUSxJQUFJO0FBQUE7QUFHZCxRQUFNLFVBQVUsT0FBTyxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFFeEQsWUFBUSxJQUFJO0FBQUE7QUFBQTtBQUdULCtCQUFzQztBQUMzQyxTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTTtBQUNiO0FBQ0E7QUFBQTtBQUFBLEtBRUgsVUFDUTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
