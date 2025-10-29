import React from "../../../../snowpack/pkg/react.js";
import {MainControls} from "../controls/mainControls.js";
import {resetDataTable} from "./resetDataTable.js";
export async function disconnectSerialConnection() {
  console.log("disconnectSerialConnection()");
  if (MainControls.serialPort) {
    console.log("closing serial port");
    MainControls.lineReader.releaseLock();
    console.log(MainControls.serialPort.readable);
    await MainControls.abortController1.abort();
    await MainControls.lineReaderDone.catch(() => {
    });
    await MainControls.serialPort.close();
    MainControls.abortController1 = new AbortController();
    console.log("serial port is closed");
    const element = document.getElementById("statusDiv");
    element.innerHTML = "status: closed serial port";
    resetDataTable();
    const manager = document.getElementById("manager");
    manager.classList.remove("connected");
  } else {
    console.log("there is no serial connection open to close");
  }
}
function successfulDisconnect() {
  if (MainControls.serialPort != null) {
    alert("Successfully disconnected from serial port!");
  } else {
    alert("There is no serial connection to disconnect from at this moment.");
  }
}
export function DisconnectButton() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "statusDiv",
    style: {display: "none"}
  }, "status:", " "), /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-absolute",
    color: "pink",
    onClick: () => disconnectSerialConnection(),
    onClickCapture: () => successfulDisconnect()
  }, "Disconnect", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2Rpc2Nvbm5lY3QudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBRUEsbURBQW1EO0FBQ2pELFVBQVEsSUFBSTtBQUdaLE1BQUksYUFBYSxZQUFZO0FBQzNCLFlBQVEsSUFBSTtBQUNaLGlCQUFhLFdBQVc7QUFDeEIsWUFBUSxJQUFJLGFBQWEsV0FBVztBQUNwQyxVQUFNLGFBQWEsaUJBQWlCO0FBQ3BDLFVBQU0sYUFBYSxlQUFlLE1BQU0sTUFBTTtBQUFBO0FBRzlDLFVBQU0sYUFBYSxXQUFXO0FBQzlCLGlCQUFhLG1CQUFtQixJQUFJO0FBRXBDLFlBQVEsSUFBSTtBQUVaLFVBQU0sVUFBdUIsU0FBUyxlQUNwQztBQUVGLFlBQVEsWUFBWTtBQUNwQjtBQUNBLFVBQU0sVUFBdUIsU0FBUyxlQUNwQztBQUVGLFlBQVEsVUFBVSxPQUFPO0FBQUEsU0FDcEI7QUFDTCxZQUFRLElBQUk7QUFBQTtBQUFBO0FBSWhCLGdDQUFnQztBQUM5QixNQUFJLGFBQWEsY0FBYyxNQUFNO0FBQ25DLFVBQU07QUFBQSxTQUNEO0FBQ0wsVUFBTTtBQUFBO0FBQUE7QUFJSCxtQ0FBMEM7QUFDL0MsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBWSxPQUFPLENBQUUsU0FBUztBQUFBLEtBQVUsV0FDdEMsTUFHVixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU07QUFBQSxJQUNmLGdCQUFnQixNQUFNO0FBQUEsS0FDdkIsY0FDWTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
