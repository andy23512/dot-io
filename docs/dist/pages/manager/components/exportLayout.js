import React from "../../../../snowpack/pkg/react.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
import {
  sendCommandString,
  readGetOneChordLayout
} from "../controls/mainControls.js";
import {_chordLayout} from "../controls/maps.js";
import {createChordLayout} from "../../../models/managerModels.js";
export function ExportChordLayout() {
  const setDownloadedChordLayout = useStoreActions((store) => store.setDownloadedChordLayout);
  const downloadedChordLayout = useStoreState((store) => store.downloadedChordLayout.chordLayout);
  async function exportChordMapLayout() {
    const tempHere = [];
    for (let i = 1; i < 4; i++) {
      for (let t = 0; t < 90; t++) {
        await sendCommandString("VAR B3 A" + i + " " + t);
        const inChordLayout = await readGetOneChordLayout();
        const tempCreated = createChordLayout(inChordLayout[1], inChordLayout[2], inChordLayout[3]);
        tempHere.push(tempCreated);
        console.log("What am I seeing here " + inChordLayout[1] + " " + inChordLayout[2] + " " + inChordLayout[3]);
      }
    }
    setDownloadedChordLayout(tempHere);
    let csvRows = [];
    _chordLayout.splice(0, _chordLayout.length);
    for (let i = 0; i < tempHere.length; i++) {
      _chordLayout.push(tempHere[i].keyMap + "," + tempHere[i].keyMapPosition + "," + tempHere[i].keyMapValue);
    }
    csvRows.push(_chordLayout.join("\n"));
    console.log(tempHere.length);
    console.log(_chordLayout);
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], {type: "text/csv"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "CharaChorder_ChordLayout.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    csvRows = [];
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => exportChordMapLayout()
  }, "Export Layout", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2V4cG9ydExheW91dC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBRU8sb0NBQTJDO0FBQ2hELFFBQU0sMkJBQTJCLGdCQUMvQixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTSxzQkFBc0I7QUFHekMsd0NBQXNDO0FBQ3BDLFVBQU0sV0FBVztBQUNqQixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixjQUFNLGtCQUFrQixhQUFhLElBQUksTUFBTTtBQUMvQyxjQUFNLGdCQUFnQixNQUFNO0FBRTVCLGNBQU0sY0FBYyxrQkFDbEIsY0FBYyxJQUNkLGNBQWMsSUFDZCxjQUFjO0FBRWhCLGlCQUFTLEtBQUs7QUFDZCxnQkFBUSxJQUNOLDJCQUNFLGNBQWMsS0FDZCxNQUNBLGNBQWMsS0FDZCxNQUNBLGNBQWM7QUFBQTtBQUFBO0FBSXRCLDZCQUF5QjtBQUd6QixRQUFJLFVBQVU7QUFFZCxpQkFBYSxPQUFPLEdBQUcsYUFBYTtBQUNwQyxhQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBRXhDLG1CQUFhLEtBQ1gsU0FBUyxHQUFHLFNBQ1YsTUFDQSxTQUFTLEdBQUcsaUJBQ1osTUFDQSxTQUFTLEdBQUc7QUFBQTtBQUdsQixZQUFRLEtBQUssYUFBYSxLQUFLO0FBQy9CLFlBQVEsSUFBSSxTQUFTO0FBQ3JCLFlBQVEsSUFBSTtBQUNaLFVBQU0sVUFBVSxRQUFRLEtBQUs7QUFFN0IsVUFBTSxPQUFPLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBRSxNQUFNO0FBQ3pDLFVBQU0sTUFBTSxPQUFPLElBQUksZ0JBQWdCO0FBQ3ZDLFVBQU0sSUFBSSxTQUFTLGNBQWM7QUFDakMsTUFBRSxhQUFhLFVBQVU7QUFDekIsTUFBRSxhQUFhLFFBQVE7QUFDdkIsTUFBRSxhQUFhLFlBQVk7QUFDM0IsYUFBUyxLQUFLLFlBQVk7QUFDMUIsTUFBRTtBQUNGLGFBQVMsS0FBSyxZQUFZO0FBQzFCLGNBQVU7QUFBQTtBQUVaLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsS0FDaEIsaUJBQ2U7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
