import React from "../../../../snowpack/pkg/react.js";
import {
  MainControls
} from "../controls/mainControls.js";
import {getId} from "./getID.js";
import {getCount} from "./countChords.js";
import {useStoreActions, useStoreState} from "../../../../snowpack/pkg/easy-peasy.js";
const CC_VENDOR_IDS = [9114, 12346];
async function openSerialPort() {
  console.log("openSerialPort()");
  await MainControls.serialPort.open({baudRate: 115200});
  console.log("connected to serial port");
  const element = document?.getElementById("statusDiv");
  if (element != null) {
    element.innerHTML = "status: opened serial port";
  }
  console.log(MainControls.serialPort.getInfo());
}
async function setupLineReader() {
  if (MainControls.serialPort) {
    console.log("setupLineReader()");
    const decoder = new TextDecoderStream();
    console.log("writable " + decoder.writable);
    console.log(MainControls.abortController1.signal.aborted);
    MainControls.abortController1 = new AbortController();
    MainControls.lineReaderDone = MainControls.serialPort.readable.pipeTo(decoder.writable, {signal: MainControls.abortController1.signal});
    const inputStream = decoder.readable.pipeThrough(new TransformStream(new LineBreakTransformer()));
    MainControls.lineReader = await inputStream.getReader();
    console.log("setup line reader");
    const element = document.getElementById("statusDiv");
    if (element != null) {
      element.innerHTML = "status: opened serial port and listening";
    }
  } else {
    console.log("serial port is not open yet");
  }
}
class LineBreakTransformer {
  constructor() {
    this.chunks = "";
  }
  transform(chunk, controller) {
    this.chunks += chunk;
    const lines = this.chunks.split("\r\n");
    this.chunks = lines.pop();
    lines.forEach((line) => controller.enqueue(line));
  }
  flush(controller) {
    controller.enqueue(this.chunks);
  }
}
async function setCharaChorderToTypicalFunctionality() {
  console.log("setCharaChorderToTypicalFunctionality()");
}
export async function exportableStartSerialConnection() {
  console.log("startSerialConnection()");
  try {
    MainControls.serialPort = await navigator?.serial?.requestPort({
      filters: CC_VENDOR_IDS.map((id) => ({usbVendorId: id}))
    });
    console.log("requestPort()");
    await openSerialPort();
    await setupLineReader();
    await setCharaChorderToTypicalFunctionality();
    await getId();
    await getCount();
  } catch (error) {
    console.log(error);
    const element = document?.getElementById("statusDiv");
    if ("serial" in navigator) {
      element.innerHTML = "status: failed to open serial port; may already be open elsewhere";
    } else {
      const element2 = document.getElementById("statusDiv");
      if (element2 != null) {
        element2.innerHTML = 'Your browser does not support the Serial API. <br /> Please use Google Chrome, Microsoft Edge, or another <a class="underline" href=https://caniuse.com/web-serial">browser that supports the Serial API.</a>';
      }
      return;
    }
  }
}
export async function connectDeviceAndPopUp() {
  /* @__PURE__ */ React.createElement("div", {
    id: "statusDiv",
    className: "flex-row border-zinc-400 border-4	left-56 rounded-xl absolute ml-80 mt-24 justify-center h-2/5 bg-white"
  });
  await exportableStartSerialConnection();
  await getId();
  await getCount();
}
export function ConnectButton() {
  const setDeviceId = useStoreActions((store) => store.setDeviceId);
  const deviceId = useStoreState((store) => store.deviceId);
  async function startSerialConnection() {
    console.log("startSerialConnection()");
    try {
      MainControls.serialPort = await navigator?.serial?.requestPort({
        filters: CC_VENDOR_IDS.map((id2) => ({usbVendorId: id2}))
      });
      console.log("requestPort()");
      await openSerialPort();
      await setupLineReader();
      await setCharaChorderToTypicalFunctionality();
      const id = await getId();
      setDeviceId(id);
      console.log("this is the id" + id + " " + deviceId);
      await getCount();
    } catch (error) {
      console.log(error);
      const element = document?.getElementById("statusDiv");
      if ("serial" in navigator) {
        element.innerHTML = "status: failed to open serial port; may already be open elsewhere";
      } else {
        const element2 = document.getElementById("statusDiv");
        if (element2 != null) {
          element2.innerHTML = 'Your browser does not support the Serial API. <br /> Please use Google Chrome, Microsoft Edge, or another <a class="underline" href=https://caniuse.com/web-serial">browser that supports the Serial API.</a>';
        }
        return;
      }
    }
  }
  async function allFunc() {
    await startSerialConnection();
    await getCount();
    await getId();
    window.dispatchEvent(new Event("resize"));
    const manager = document.getElementById("manager");
    manager.classList.add("connected");
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "statusDiv"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "countDiv"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "device"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "connect sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-relative",
    color: "pink",
    onClick: () => allFunc()
  }, "Connect", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2Nvbm5lY3QudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLGdCQUFnQixDQUFDLE1BQVE7QUFFL0IsZ0NBQWdDO0FBQzlCLFVBQVEsSUFBSTtBQUNaLFFBQU0sYUFBYSxXQUFXLEtBQUssQ0FBRSxVQUFVO0FBQy9DLFVBQVEsSUFBSTtBQUVaLFFBQU0sVUFBNEIsVUFBVSxlQUMxQztBQUdGLE1BQUksV0FBVyxNQUFNO0FBQ25CLFlBQVEsWUFBWTtBQUFBO0FBR3RCLFVBQVEsSUFBSSxhQUFhLFdBQVc7QUFBQTtBQUd0QyxpQ0FBaUM7QUFDL0IsTUFBSSxhQUFhLFlBQVk7QUFDM0IsWUFBUSxJQUFJO0FBQ1osVUFBTSxVQUFVLElBQUk7QUFJcEIsWUFBUSxJQUFJLGNBQWMsUUFBUTtBQUNsQyxZQUFRLElBQUksYUFBYSxpQkFBaUIsT0FBTztBQUVqRCxpQkFBYSxtQkFBbUIsSUFBSTtBQUNwQyxpQkFBYSxpQkFBaUIsYUFBYSxXQUFXLFNBQVMsT0FDN0QsUUFBUSxVQUNSLENBQUUsUUFBUSxhQUFhLGlCQUFpQjtBQUcxQyxVQUFNLGNBQWMsUUFBUSxTQUFTLFlBQ25DLElBQUksZ0JBQWdCLElBQUk7QUFFMUIsaUJBQWEsYUFBYSxNQUFNLFlBQVk7QUFDNUMsWUFBUSxJQUFJO0FBRVosVUFBTSxVQUF1QixTQUFTLGVBQ3BDO0FBRUYsUUFBSSxXQUFXLE1BQU07QUFDbkIsY0FBUSxZQUFZO0FBQUE7QUFBQSxTQUVqQjtBQUNMLFlBQVEsSUFBSTtBQUFBO0FBQUE7QUFJaEIsMkJBQTJCO0FBQUEsRUFHekIsY0FBYztBQUNaLFNBQUssU0FBUztBQUFBO0FBQUEsRUFHaEIsVUFBVSxPQUFZLFlBQWlCO0FBQ3JDLFNBQUssVUFBVTtBQUNmLFVBQU0sUUFBUSxLQUFLLE9BQU8sTUFBTTtBQUNoQyxTQUFLLFNBQVMsTUFBTTtBQUNwQixVQUFNLFFBQVEsQ0FBQyxTQUFjLFdBQVcsUUFBUTtBQUFBO0FBQUEsRUFHbEQsTUFBTSxZQUFpQjtBQUNyQixlQUFXLFFBQVEsS0FBSztBQUFBO0FBQUE7QUFJNUIsdURBQXVEO0FBQ3JELFVBQVEsSUFBSTtBQUFBO0FBRWQsd0RBQXdEO0FBQ3RELFVBQVEsSUFBSTtBQUNaLE1BQUk7QUFHRixpQkFBYSxhQUFhLE1BQU0sV0FBVyxRQUFRLFlBQVk7QUFBQSxNQUM3RCxTQUFTLGNBQWMsSUFBSSxDQUFDLE9BQVEsRUFBRSxhQUFhO0FBQUE7QUFFckQsWUFBUSxJQUFJO0FBRVosVUFBTTtBQUNOLFVBQU07QUFDTixVQUFNO0FBQ04sVUFBTTtBQUNOLFVBQU07QUFBQSxXQUNDLE9BQVA7QUFDQSxZQUFRLElBQUk7QUFDWixVQUFNLFVBQTRCLFVBQVUsZUFDMUM7QUFHRixRQUFJLFlBQVksV0FBVztBQUV6QixjQUFRLFlBQ047QUFBQSxXQUNHO0FBRUwsWUFBTSxXQUFVLFNBQVMsZUFBZTtBQUN4QyxVQUFJLFlBQVcsTUFBTTtBQUNuQixpQkFBUSxZQUNOO0FBQUE7QUFFSjtBQUFBO0FBQUE7QUFBQTtBQUtOLDhDQUE4QztBQUM1QyxzQ0FBQyxPQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUE7QUFHWixRQUFNO0FBQ04sUUFBTTtBQUNOLFFBQU07QUFBQTtBQU9ELGdDQUF1QztBQUM1QyxRQUFNLGNBQWMsZ0JBQWdCLENBQUMsVUFBZSxNQUFNO0FBRTFELFFBQU0sV0FBVyxjQUFjLENBQUMsVUFBZSxNQUFNO0FBRXJELHlDQUF1QztBQUNyQyxZQUFRLElBQUk7QUFDWixRQUFJO0FBR0YsbUJBQWEsYUFBYSxNQUFNLFdBQVcsUUFBUSxZQUFZO0FBQUEsUUFDN0QsU0FBUyxjQUFjLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYTtBQUFBO0FBRXJELGNBQVEsSUFBSTtBQUVaLFlBQU07QUFDTixZQUFNO0FBQ04sWUFBTTtBQUNOLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLGtCQUFZO0FBQ1osY0FBUSxJQUFJLG1CQUFtQixLQUFLLE1BQU07QUFDMUMsWUFBTTtBQUFBLGFBQ0MsT0FBUDtBQUNBLGNBQVEsSUFBSTtBQUNaLFlBQU0sVUFBNEIsVUFBVSxlQUMxQztBQUdGLFVBQUksWUFBWSxXQUFXO0FBRXpCLGdCQUFRLFlBQ047QUFBQSxhQUNHO0FBRUwsY0FBTSxXQUFVLFNBQVMsZUFDdkI7QUFFRixZQUFJLFlBQVcsTUFBTTtBQUNuQixtQkFBUSxZQUNOO0FBQUE7QUFFSjtBQUFBO0FBQUE7QUFBQTtBQUtOLDJCQUF5QjtBQUN2QixVQUFNO0FBQ04sVUFBTTtBQUNOLFVBQU07QUFDTixXQUFPLGNBQWMsSUFBSSxNQUFNO0FBRS9CLFVBQU0sVUFBdUIsU0FBUyxlQUNwQztBQUVGLFlBQVEsVUFBVSxJQUFJO0FBQUE7QUFHeEIsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDUixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDUixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDUixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU07QUFBQSxLQUNoQixXQUNTO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
