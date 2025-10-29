import React from "../../../../snowpack/pkg/react.js";
import {
  sendCommandString,
  MainControls
} from "../controls/mainControls.js";
export async function getCount() {
  await sendCommandString("CML C0");
  const {value} = await MainControls.lineReader.read();
  const chordCountSplit = value.split(" ");
  const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length - 1]);
  const element = document.getElementById("countDiv");
  if (element != null) {
    element.innerHTML = "Count: " + chordCountParsedValue;
  }
}
export function GetCountButton() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => getCount()
  }, "Count", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2NvdW50Q2hvcmRzLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQSxpQ0FBaUM7QUFDL0IsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxDQUFFLFNBQVUsTUFBTSxhQUFhLFdBQVc7QUFDaEQsUUFBTSxrQkFBa0IsTUFBTSxNQUFNO0FBQ3BDLFFBQU0sd0JBQXdCLFNBQzVCLGdCQUFnQixnQkFBZ0IsU0FBUztBQUczQyxRQUFNLFVBQXVCLFNBQVMsZUFDcEM7QUFFRixNQUFJLFdBQVcsTUFBTTtBQUNuQixZQUFRLFlBQVksWUFBWTtBQUFBO0FBQUE7QUFJN0IsaUNBQXdDO0FBQzdDLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsS0FDaEIsU0FDTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
