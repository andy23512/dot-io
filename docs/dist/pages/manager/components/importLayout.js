import React from "../../../../snowpack/pkg/react.js";
import {sendCommandString} from "../controls/mainControls.js";
import {useStoreActions, useStoreState} from "../../../../snowpack/pkg/easy-peasy.js";
import {createChordLayout} from "../../../models/managerModels.js";
import {actionMap} from "../controls/maps.js";
export function ImportChordLayout() {
  const clearDownloadedChordLayout = useStoreActions((store) => store.clearDownloadedChordLayout);
  const setDownloadedChordLayout = useStoreActions((store) => store.setDownloadedChordLayout);
  const downloadedChordsLayout = useStoreState((store) => store.downloadedChordLayout.chordLayout);
  const setImportedChordsLayout = useStoreActions((store) => store.setImportedChordsLayout);
  const thisArray = [];
  const newArray = [];
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  async function storeAllChanges() {
    for (let i = 0; i < thisArray.length; i++) {
      await sendCommandString(newArray[i].replace(/(\r\n|\n|\r)/gm, ""));
      await delay(10);
    }
  }
  async function importLayoutLibrary(e) {
    clearDownloadedChordLayout();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    const strValues = ["", "", "", ""];
    fileReader.onload = async (readerEvent) => {
      const content = readerEvent.target.result;
      console.log(content);
      const lines = content.split("\n");
      await lines.forEach(async (line) => {
        const strAllValues = line.split(",");
        strValues[1] = strAllValues[0];
        strValues[2] = strAllValues[1];
        strValues[3] = strAllValues[2];
        strValues[4] = strAllValues[3];
        actionMap[strAllValues[2]] == null ? "KSC_00" : actionMap[strAllValues[2]];
        const temp = createChordLayout(strAllValues[0], strAllValues[1], strAllValues[2] == null ? "KSC_00" : actionMap[strAllValues[2]]);
        thisArray.push(temp);
        newArray.push("VAR B4 " + strAllValues[0] + " " + strAllValues[1] + " " + strAllValues[2]);
      });
      setImportedChordsLayout(thisArray);
      await storeAllChanges();
    };
  }
  function click() {
    document.getElementById("file-input-layout").click();
    const element = document.getElementById("file-input-layout");
    element.addEventListener("input", importLayoutLibrary);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    id: "file-input-layout",
    type: "file",
    name: "name",
    style: {display: "none"},
    accept: ".csv"
  }), /* @__PURE__ */ React.createElement("button", {
    id: "importLayoutLibrary",
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    onClick: () => {
      click();
    }
  }, "Import Layout"));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2ltcG9ydExheW91dC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sb0NBQTJDO0FBQ2hELFFBQU0sNkJBQTZCLGdCQUNqQyxDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLDJCQUEyQixnQkFDL0IsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSx5QkFBeUIsY0FDN0IsQ0FBQyxVQUFVLE1BQU0sc0JBQXNCO0FBRXpDLFFBQU0sMEJBQTBCLGdCQUM5QixDQUFDLFVBQVUsTUFBTTtBQUtuQixRQUFNLFlBQVk7QUFDbEIsUUFBTSxXQUFXO0FBRWpCLFFBQU0sUUFBUSxDQUFDLGNBQWM7QUFDM0IsV0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLFdBQVcsU0FBUztBQUFBO0FBR3RELG1DQUFpQztBQUUvQixhQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLFlBQU0sa0JBQWtCLFNBQVMsR0FBRyxRQUFRLGtCQUFrQjtBQUM5RCxZQUFNLE1BQU07QUFBQTtBQUFBO0FBSWhCLHFDQUFtQyxHQUFRO0FBQ3pDO0FBQ0EsVUFBTSxPQUFPLEVBQUUsT0FBTyxNQUFNO0FBQzVCLFVBQU0sYUFBYSxJQUFJO0FBQ3ZCLGVBQVcsV0FBVyxNQUFNO0FBQzVCLFVBQU0sWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJO0FBQy9CLGVBQVcsU0FBUyxPQUFPLGdCQUFnQjtBQUN6QyxZQUFNLFVBQVUsWUFBWSxPQUFPO0FBQ25DLGNBQVEsSUFBSTtBQUVaLFlBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsWUFBTSxNQUFNLFFBQVEsT0FBTyxTQUFTO0FBQ2xDLGNBQU0sZUFBZSxLQUFLLE1BQU07QUFNaEMsa0JBQVUsS0FBSyxhQUFhO0FBQzVCLGtCQUFVLEtBQUssYUFBYTtBQUM1QixrQkFBVSxLQUFLLGFBQWE7QUFDNUIsa0JBQVUsS0FBSyxhQUFhO0FBTTVCLGtCQUFVLGFBQWEsT0FBTyxPQUMxQixXQUNBLFVBQVUsYUFBYTtBQUMzQixjQUFNLE9BQU8sa0JBQ1gsYUFBYSxJQUNiLGFBQWEsSUFDYixhQUFhLE1BQU0sT0FBTyxXQUFXLFVBQVUsYUFBYTtBQUc5RCxrQkFBVSxLQUFLO0FBQ2YsaUJBQVMsS0FDUCxZQUNFLGFBQWEsS0FDYixNQUNBLGFBQWEsS0FDYixNQUNBLGFBQWE7QUFBQTtBQUduQiw4QkFBd0I7QUFDeEIsWUFBTTtBQUFBO0FBQUE7QUFJVixtQkFBaUI7QUFDZixhQUFTLGVBQWUscUJBQXFCO0FBQzdDLFVBQU0sVUFBNEIsU0FBUyxlQUN6QztBQUVGLFlBQVEsaUJBQWlCLFNBQVM7QUFBQTtBQUdwQyxTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU8sQ0FBRSxTQUFTO0FBQUEsSUFDbEIsUUFBTztBQUFBLE1BR1Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQ2I7QUFBQTtBQUFBLEtBRUg7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
