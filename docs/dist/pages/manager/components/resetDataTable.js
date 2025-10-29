import React from "../../../../snowpack/pkg/react.js";
import {MainControls} from "../controls/mainControls.js";
import {addHeadersToDataTable} from "./addHeaders.js";
import {addHeadersToLayoutDataTable} from "./addHeadersLayout.js";
export function resetDataTable() {
  const dataTable = document.getElementById("dataTable");
  dataTable.innerHTML = "";
  const _chordMaps2 = [];
  addHeadersToDataTable();
  MainControls._chordMapIdCounter = 0;
}
export function resetLayoutDataTable() {
  const dataTable = document.getElementById("layoutDataTable");
  dataTable.innerHTML = "";
  const _chordMaps2 = [];
  addHeadersToLayoutDataTable();
  MainControls._chordMapIdCounter = 0;
}
export function Clear() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    onClick: () => resetDataTable()
  }, "Clear Table", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL3Jlc2V0RGF0YVRhYmxlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRU8saUNBQTBCO0FBQy9CLFFBQU0sWUFBWSxTQUFTLGVBQWU7QUFDMUMsWUFBVSxZQUFZO0FBQ3RCLFFBQU0sY0FBYTtBQUNuQjtBQUNBLGVBQWEscUJBQXFCO0FBQUE7QUFHN0IsdUNBQWdDO0FBQ3JDLFFBQU0sWUFBWSxTQUFTLGVBQ3pCO0FBRUYsWUFBVSxZQUFZO0FBQ3RCLFFBQU0sY0FBYTtBQUNuQjtBQUNBLGVBQWEscUJBQXFCO0FBQUE7QUFHN0Isd0JBQStCO0FBQ3BDLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQUEsS0FDaEIsZUFDYTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
