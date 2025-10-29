import React from "../../../../snowpack/pkg/react.js";
import {useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
import {
  createChord
} from "../../../models/managerModels.js";
import {
  convertHumanStringToHexadecimalChord,
  convertHumanStringToHexadecimalPhrase
} from "../controls/mainControls.js";
const checkElement = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};
export function ImportChords() {
  const clearDownloadedChords = useStoreActions((store) => store.clearDownloadedChords);
  const setDownloadedChords = useStoreActions((store) => store.setDownloadedChords);
  const setImportedChords = useStoreActions((store) => store.setImportedChords);
  async function importChordMapLibrary(e) {
    const importedChords = [];
    clearDownloadedChords();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (readerEvent) => {
      const content = readerEvent.target.result;
      const lines = content.split("\n");
      lines.forEach(async (line) => {
        const strAllValues = line.split(",");
        const humanChord = strAllValues.shift();
        const humanPhrase = strAllValues.join(",");
        const hexChordString = convertHumanStringToHexadecimalChord(humanChord);
        const hexPhraseString = convertHumanStringToHexadecimalPhrase(humanPhrase);
        const strValues = ["", "", "", ""];
        strValues[0] = humanChord;
        strValues[1] = humanPhrase;
        strValues[2] = hexChordString;
        strValues[3] = hexPhraseString;
        const tempCreated = createChord(strValues[0], strValues[1], strValues[3], strValues[4]);
        importedChords.push(tempCreated);
      });
      setImportedChords(importedChords);
    };
  }
  function click() {
    document.getElementById("file-input").click();
    const elementChords = document.getElementById("file-input");
    elementChords.addEventListener("input", importChordMapLibrary);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    id: "file-input",
    type: "file",
    name: "name",
    style: {display: "none"},
    accept: ".csv"
  }), /* @__PURE__ */ React.createElement("button", {
    id: "importChordMapLibrary",
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    onClick: () => {
      click();
    }
  }, "Import Library"));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2ltcG9ydENob3Jkcy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxNQUFNLGVBQWUsT0FBTyxhQUFhO0FBQ3ZDLFNBQU8sU0FBUyxjQUFjLGNBQWMsTUFBTTtBQUNoRCxVQUFNLElBQUksUUFBUSxDQUFDLFlBQVksc0JBQXNCO0FBQUE7QUFFdkQsU0FBTyxTQUFTLGNBQWM7QUFBQTtBQUd6QiwrQkFBc0M7QUFDM0MsUUFBTSx3QkFBd0IsZ0JBQzVCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLG9CQUFvQixnQkFBZ0IsQ0FBQyxVQUFVLE1BQU07QUFFM0QsdUNBQXFDLEdBQVE7QUFDM0MsVUFBTSxpQkFBaUI7QUFDdkI7QUFDQSxVQUFNLE9BQU8sRUFBRSxPQUFPLE1BQU07QUFDNUIsVUFBTSxhQUFhLElBQUk7QUFDdkIsZUFBVyxXQUFXLE1BQU07QUFFNUIsZUFBVyxTQUFTLENBQUMsZ0JBQWdCO0FBQ25DLFlBQU0sVUFBVSxZQUFZLE9BQU87QUFDbkMsWUFBTSxRQUFRLFFBQVEsTUFBTTtBQUM1QixZQUFNLFFBQVEsT0FBTyxTQUFTO0FBQzVCLGNBQU0sZUFBZSxLQUFLLE1BQU07QUFDaEMsY0FBTSxhQUFhLGFBQWE7QUFDaEMsY0FBTSxjQUFjLGFBQWEsS0FBSztBQUN0QyxjQUFNLGlCQUFpQixxQ0FBcUM7QUFDNUQsY0FBTSxrQkFDSixzQ0FBc0M7QUFFeEMsY0FBTSxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUk7QUFDL0Isa0JBQVUsS0FBSztBQUNmLGtCQUFVLEtBQUs7QUFDZixrQkFBVSxLQUFLO0FBQ2Ysa0JBQVUsS0FBSztBQUlmLGNBQU0sY0FBOEIsWUFDbEMsVUFBVSxJQUNWLFVBQVUsSUFDVixVQUFVLElBQ1YsVUFBVTtBQUVaLHVCQUFlLEtBQUs7QUFBQTtBQUV0Qix3QkFBa0I7QUFBQTtBQUFBO0FBSXRCLG1CQUFpQjtBQUNmLGFBQVMsZUFBZSxjQUFjO0FBQ3RDLFVBQU0sZ0JBQWtDLFNBQVMsZUFDL0M7QUFFRixrQkFBYyxpQkFBaUIsU0FBUztBQUFBO0FBRTFDLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxDQUFFLFNBQVM7QUFBQSxJQUNsQixRQUFPO0FBQUEsTUFHVCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYjtBQUFBO0FBQUEsS0FFSDtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
