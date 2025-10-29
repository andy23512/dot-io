import React from "../../../../snowpack/pkg/react.js";
import {
  asyncCallWithTimeout,
  readGetOneAndReturnOne
} from "../controls/mainControls.js";
import {useStoreState} from "../../../../snowpack/pkg/easy-peasy.js";
import {
  convertHumanChordToHexadecimalChord,
  convertHumanStringToHexadecimalPhrase,
  sendCommandString
} from "../controls/mainControls.js";
function greet() {
  console.log("trigger timeout");
}
export function PressCommit() {
  const downloadedChords = useStoreState((store) => store.downloadedChords.chords);
  async function saveAll() {
    console.log("saveAll()");
    const element = document.getElementById("commitAllProgress");
    for (let i = 0; i < downloadedChords.length; i++) {
      const card = downloadedChords[i];
      const hexChord = convertHumanChordToHexadecimalChord(card.currentChord);
      const hexPhrase = convertHumanStringToHexadecimalPhrase(card.currentPhrase);
      await wontTimeout(sendCommandString("CML C3 " + hexChord + " " + hexPhrase), i);
      await sleep();
      element.innerHTML = "Commit Progress: " + (i / downloadedChords.length * 100).toFixed(0) + "% Please do not touch your device until completion.";
    }
  }
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function sleep() {
    await timeout(1);
    return greet;
  }
  const wontTimeout = async (func, virtualId) => {
    try {
      const {data} = await asyncCallWithTimeout(func, 1e4, virtualId);
      console.log(data);
    } catch (err) {
      await asyncCallWithTimeout(func, 1e4, virtualId);
    }
    await readGetOneAndReturnOne();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: async () => saveAll()
  }, "Save All", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL3NhdmVBbGwudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLGlCQUFpQjtBQUNmLFVBQVEsSUFBSTtBQUFBO0FBR1AsOEJBQXFDO0FBQzFDLFFBQU0sbUJBQW1CLGNBQ3ZCLENBQUMsVUFBVSxNQUFNLGlCQUFpQjtBQUdwQywyQkFBeUI7QUFDdkIsWUFBUSxJQUFJO0FBR1osVUFBTSxVQUF1QixTQUFTLGVBQ3BDO0FBRUYsYUFBUyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsUUFBUSxLQUFLO0FBQ2hELFlBQU0sT0FBTyxpQkFBaUI7QUFDOUIsWUFBTSxXQUFXLG9DQUFvQyxLQUFLO0FBQzFELFlBQU0sWUFBWSxzQ0FDaEIsS0FBSztBQVdQLFlBQU0sWUFDSixrQkFBa0IsWUFBWSxXQUFXLE1BQU0sWUFDL0M7QUFFRixZQUFNO0FBRU4sY0FBUSxZQUNOLHNCQUNFLEtBQUksaUJBQWlCLFNBQVUsS0FBSyxRQUFRLEtBQzlDO0FBQUE7QUFBQTtBQUtOLG1CQUFpQixJQUFJO0FBQ25CLFdBQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxXQUFXLFNBQVM7QUFBQTtBQUV0RCx5QkFBdUI7QUFDckIsVUFBTSxRQUFRO0FBQ2QsV0FBTztBQUFBO0FBRVQsUUFBTSxjQUFjLE9BQU8sTUFBTSxjQUFjO0FBQzdDLFFBQUk7QUFDRixZQUFNLENBQUUsUUFBUyxNQUFNLHFCQUFxQixNQUFNLEtBQU87QUFDekQsY0FBUSxJQUFJO0FBQUEsYUFDTCxLQUFQO0FBQ0EsWUFBTSxxQkFBcUIsTUFBTSxLQUFPO0FBQUE7QUFFMUMsVUFBTTtBQUFBO0FBR1IsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixTQUFTLFlBQVk7QUFBQSxLQUN0QixZQUNVO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
