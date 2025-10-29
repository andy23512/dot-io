import React from "../../../../snowpack/pkg/react.js";
import {useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
import {createChord} from "../../../models/managerModels.js";
import {
  MainControls,
  sendCommandString,
  readGetOneChordmap,
  convertHexadecimalChordToHumanChordForAllChordsTier,
  convertHexadecimalPhraseToAsciiString
} from "../controls/mainControls.js";
import {resetDataTable} from "./resetDataTable.js";
import {
  createEmptyChordStatisticsFromDevice
} from "../../../models/trainingStatistics.js";
import {asyncCallForDownloadChords} from "../controls/mainControls.js";
export async function getGetAll() {
  const tab = [];
  resetDataTable();
  await sendCommandString("CML C0");
  const {value} = await MainControls.lineReader.read();
  const chordCountSplit = value.split(" ");
  const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length - 1]);
  for (let i = 0; i < chordCountParsedValue; i++) {
    await sendCommandString("CML C1 " + i);
    await readGetOneChordmap();
  }
}
const wontTimeout = async (func) => {
  try {
    const {data} = await asyncCallForDownloadChords(func, 1e4);
  } catch (err) {
    await asyncCallForDownloadChords(func, 1e4);
  }
};
export async function downloadChordsForAllChordsModule() {
  await sendCommandString("CML C0");
  const {value} = await MainControls.lineReader.read();
  const chordCountSplit = value.split(" ");
  const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length - 1]);
  const strValues = [];
  const statisticsFromDevice = [];
  const element = document.getElementById("downloadCompletionPercentage");
  for (let i = 0; i < chordCountParsedValue; i++) {
    console.log(MainControls._chordmapCountOnDevice);
    await wontTimeout(sendCommandString("CML C1 " + i), i);
    const {value: value2} = await MainControls.lineReader.read();
    const splitter = value2.split(" ");
    const tempCurrentChord = [];
    let phrase = "";
    let chord = [];
    console.log(splitter);
    if (value2) {
      const arrValue = [...splitter];
      const strValue = arrValue;
      let hexChordString = "";
      hexChordString = strValue[3];
      let hexAsciiString = "";
      hexAsciiString = strValue[4];
      tempCurrentChord[0] = convertHexadecimalChordToHumanChordForAllChordsTier(hexChordString);
      tempCurrentChord[1] = convertHexadecimalPhraseToAsciiString(hexAsciiString);
      chord = convertHexadecimalChordToHumanChordForAllChordsTier(hexChordString);
      phrase = convertHexadecimalPhraseToAsciiString(hexAsciiString);
    }
    const newStat = createEmptyChordStatisticsFromDevice(phrase, "ALLCHORDS", [], chord);
    statisticsFromDevice.push(newStat);
    console.log("empty stuff:");
    element.innerHTML = "Chord Download Progress: " + (i / chordCountParsedValue * 100).toFixed(0) + "%";
  }
  localStorage.setItem("chordsReadFromDevice", JSON.stringify({statistics: statisticsFromDevice}));
  return true;
}
export function Download() {
  const setDownloadedChords = useStoreActions((store) => store.setDownloadedChords);
  async function getGet() {
    const tab = [];
    await sendCommandString("CML C0");
    const {value} = await MainControls.lineReader.read();
    const chordCountSplit = value.split(" ");
    const chordCountParsedValue = parseInt(chordCountSplit[chordCountSplit.length - 1]);
    const element = document.getElementById("downloadCompletionPercentage");
    for (let i = 0; i < chordCountParsedValue; i++) {
      console.log(MainControls._chordmapCountOnDevice);
      await sendCommandString("CML C1 " + i);
      const inValue = await readGetOneChordmap();
      const tempCreated = createChord(inValue[0], inValue[1], inValue[2], inValue[3]);
      tab.push(tempCreated);
      element.innerHTML = "Chord Download Progress: " + (i / chordCountParsedValue * 100).toFixed(0) + "%";
      console.log("download progress " + element.value);
    }
    setDownloadedChords(tab);
    console.log(tab);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "statusDiv",
    style: {display: "none"}
  }, "Status:", " "), /* @__PURE__ */ React.createElement("button", {
    className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-absolute",
    color: "pink",
    onClick: () => getGet()
  }, "Read chords from device"));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2Rvd25sb2FkLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUdBLGtDQUFrQztBQUNoQyxRQUFNLE1BQU07QUFDWjtBQUVBLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sQ0FBRSxTQUFVLE1BQU0sYUFBYSxXQUFXO0FBQ2hELFFBQU0sa0JBQWtCLE1BQU0sTUFBTTtBQUNwQyxRQUFNLHdCQUF3QixTQUM1QixnQkFBZ0IsZ0JBQWdCLFNBQVM7QUFHM0MsV0FBUyxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsS0FBSztBQUU5QyxVQUFNLGtCQUFrQixZQUFZO0FBRXBDLFVBQU07QUFBQTtBQUFBO0FBSVYsTUFBTSxjQUFjLE9BQU8sU0FBUztBQUNsQyxNQUFJO0FBQ0YsVUFBTSxDQUFFLFFBQVMsTUFBTSwyQkFBMkIsTUFBTTtBQUFBLFdBRWpELEtBQVA7QUFDQSxVQUFNLDJCQUEyQixNQUFNO0FBQUE7QUFBQTtBQUkzQyx5REFBeUQ7QUFDdkQsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxDQUFFLFNBQVUsTUFBTSxhQUFhLFdBQVc7QUFDaEQsUUFBTSxrQkFBa0IsTUFBTSxNQUFNO0FBQ3BDLFFBQU0sd0JBQXdCLFNBQzVCLGdCQUFnQixnQkFBZ0IsU0FBUztBQUUzQyxRQUFNLFlBQVk7QUFDbEIsUUFBTSx1QkFBdUI7QUFFN0IsUUFBTSxVQUF1QixTQUFTLGVBQ3BDO0FBR0YsV0FBUyxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsS0FBSztBQUM5QyxZQUFRLElBQUksYUFBYTtBQUV6QixVQUFNLFlBQVksa0JBQWtCLFlBQVksSUFBSTtBQUVwRCxVQUFNLENBQUUsaUJBQVUsTUFBTSxhQUFhLFdBQVc7QUFDaEQsVUFBTSxXQUFXLE9BQU0sTUFBTTtBQUM3QixVQUFNLG1CQUFtQjtBQUN6QixRQUFJLFNBQVM7QUFDYixRQUFJLFFBQWtCO0FBQ3RCLFlBQVEsSUFBSTtBQUNaLFFBQUksUUFBTztBQUNULFlBQU0sV0FBVyxDQUFDLEdBQUc7QUFFckIsWUFBTSxXQUFXO0FBQ2pCLFVBQUksaUJBQWlCO0FBQ3JCLHVCQUFpQixTQUFTO0FBQzFCLFVBQUksaUJBQWlCO0FBQ3JCLHVCQUFpQixTQUFTO0FBRTFCLHVCQUFpQixLQUNmLG9EQUFvRDtBQUN0RCx1QkFBaUIsS0FDZixzQ0FBc0M7QUFDeEMsY0FDRSxvREFBb0Q7QUFDdEQsZUFBUyxzQ0FBc0M7QUFBQTtBQUVqRCxVQUFNLFVBQ0oscUNBQXFDLFFBQVEsYUFBYSxJQUFJO0FBRWhFLHlCQUFxQixLQUFLO0FBQzFCLFlBQVEsSUFBSTtBQUdaLFlBQVEsWUFDTiw4QkFDRSxLQUFJLHdCQUF5QixLQUFLLFFBQVEsS0FDNUM7QUFBQTtBQUdKLGVBQWEsUUFDWCx3QkFDQSxLQUFLLFVBQVUsQ0FBRSxZQUFZO0FBRS9CLFNBQU87QUFBQTtBQUdGLDJCQUFrQztBQUN2QyxRQUFNLHNCQUFzQixnQkFDMUIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsMEJBQXdCO0FBQ3RCLFVBQU0sTUFBTTtBQUVaLFVBQU0sa0JBQWtCO0FBQ3hCLFVBQU0sQ0FBRSxTQUFVLE1BQU0sYUFBYSxXQUFXO0FBQ2hELFVBQU0sa0JBQWtCLE1BQU0sTUFBTTtBQUNwQyxVQUFNLHdCQUF3QixTQUM1QixnQkFBZ0IsZ0JBQWdCLFNBQVM7QUFFM0MsVUFBTSxVQUF1QixTQUFTLGVBQ3BDO0FBR0YsYUFBUyxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsS0FBSztBQUM5QyxjQUFRLElBQUksYUFBYTtBQUV6QixZQUFNLGtCQUFrQixZQUFZO0FBS3BDLFlBQU0sVUFBVSxNQUFNO0FBQ3RCLFlBQU0sY0FBYyxZQUNsQixRQUFRLElBQ1IsUUFBUSxJQUNSLFFBQVEsSUFDUixRQUFRO0FBRVYsVUFBSSxLQUFLO0FBQ1QsY0FBUSxZQUNOLDhCQUNFLEtBQUksd0JBQXlCLEtBQUssUUFBUSxLQUM1QztBQUNGLGNBQVEsSUFBSSx1QkFBdUIsUUFBUTtBQUFBO0FBRzdDLHdCQUFvQjtBQUNwQixZQUFRLElBQUk7QUFBQTtBQUVkLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQVksT0FBTyxDQUFFLFNBQVM7QUFBQSxLQUFVLFdBQ3RDLE1BR1Ysb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQUEsS0FDaEI7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
