import React from "../../../../snowpack/pkg/react.js";
import {
  MainControls,
  sendCommandString,
  readGetOneAndToss,
  readGetOneAndReturnOne
} from "../controls/mainControls.js";
export async function getId() {
  await sendCommandString("CML C0");
  const {value} = await MainControls.lineReader.read().catch(console.error);
  const chordCountSplit = await value.split(" ");
  const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length - 1]);
  await sendCommandString("ID");
  MainControls._chordmapId = await readGetOneAndReturnOne();
  await sendCommandString("VERSION");
  MainControls._firmwareVersion = await readGetOneAndReturnOne();
  const element = document.getElementById("statusDiv");
  const splitVersion = MainControls._firmwareVersion.split(" ");
  const splitFirmware = MainControls._chordmapId.split(" ");
  element.innerHTML = "Device " + MainControls._chordmapId + " --- CCOS " + MainControls._firmwareVersion;
  return MainControls._chordmapId;
}
async function readVersion() {
  await readGetOneAndToss();
  const {value, done} = await MainControls.lineReader.read();
  if (value) {
    MainControls._firmwareVersion = value;
    console.log("firmware version is " + MainControls._firmwareVersion);
  }
  await readGetOneAndToss();
}
async function readDeviceId() {
  const {value, done} = await MainControls.lineReader.read();
  if (value) {
    if (value == "chordmaps loaded and ready") {
      console.log("received: chordmaps loaded and ready, so the chord headers are enabled; turning this off");
      await sendCommandString("SET " + MainControls.CONFIG_ID_ENABLE_SERIAL_CHORD + " 00");
      await sendCommandString("ID");
      await readDeviceId();
    } else {
      MainControls._chordmapId = value;
      console.log(MainControls._chordmapId);
    }
  }
}
export function GetID() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => getId()
  }, "Get ID", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2dldElELnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsOEJBQThCO0FBQzVCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sQ0FBRSxTQUFVLE1BQU0sYUFBYSxXQUFXLE9BQU8sTUFBTSxRQUFRO0FBQ3JFLFFBQU0sa0JBQWtCLE1BQU0sTUFBTSxNQUFNO0FBQzFDLFFBQU0sd0JBQXdCLFNBQzVCLGdCQUFnQixnQkFBZ0IsU0FBUztBQUczQyxRQUFNLGtCQUFrQjtBQUN4QixlQUFhLGNBQWMsTUFBTTtBQUVqQyxRQUFNLGtCQUFrQjtBQUN4QixlQUFhLG1CQUFtQixNQUFNO0FBQ3RDLFFBQU0sVUFBdUIsU0FBUyxlQUNwQztBQUVGLFFBQU0sZUFBZSxhQUFhLGlCQUFpQixNQUFNO0FBQ3pELFFBQU0sZ0JBQWdCLGFBQWEsWUFBWSxNQUFNO0FBQ3JELFVBQVEsWUFDTixZQUNBLGFBQWEsY0FDYixlQUNBLGFBQWE7QUFFZixTQUFPLGFBQWE7QUFBQTtBQUd0Qiw2QkFBNkI7QUFDM0IsUUFBTTtBQUNOLFFBQU0sQ0FBRSxPQUFPLFFBQVMsTUFBTSxhQUFhLFdBQVc7QUFDdEQsTUFBSSxPQUFPO0FBQ1QsaUJBQWEsbUJBQW1CO0FBQ2hDLFlBQVEsSUFBSSx5QkFBeUIsYUFBYTtBQUFBO0FBRXBELFFBQU07QUFBQTtBQUVSLDhCQUE4QjtBQWdCNUIsUUFBTSxDQUFFLE9BQU8sUUFBUyxNQUFNLGFBQWEsV0FBVztBQUN0RCxNQUFJLE9BQU87QUFDVCxRQUFJLFNBQVMsOEJBQThCO0FBQ3pDLGNBQVEsSUFDTjtBQUVGLFlBQU0sa0JBQ0osU0FBUyxhQUFhLGdDQUFnQztBQUV4RCxZQUFNLGtCQUFrQjtBQUN4QixZQUFNO0FBQUEsV0FDRDtBQUNMLG1CQUFhLGNBQWM7QUFFM0IsY0FBUSxJQUFJLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFJeEIsd0JBQStCO0FBQ3BDLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsS0FDaEIsVUFDUTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
