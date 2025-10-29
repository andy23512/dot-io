import React from "../../../../snowpack/pkg/react.js";
import {
  sendCommandString
} from "../controls/mainControls.js";
import {useStoreState} from "../../../../snowpack/pkg/easy-peasy.js";
export async function commitAll() {
  await sendCommandString("VAR B0");
}
const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
export function CommitAllLayoutChanges() {
  const downloadedChordLayout = useStoreState((store) => store.downloadedChordLayout.chordLayout);
  async function storeAllChanges() {
    for (let i = 0; i < downloadedChordLayout.length; i++) {
      await sendCommandString("VAR B4 " + downloadedChordLayout[i].keyMap.replace(/(\r\n|\n|\r)/gm, "") + " " + downloadedChordLayout[i].keyMapPosition.replace(/(\r\n|\n|\r)/gm, "") + " " + downloadedChordLayout[i].keyMapValue);
      await delay(10);
    }
    await sendCommandString("VAR B0");
  }
  async function combined() {
    await storeAllChanges();
    await sendCommandString("VAR B0");
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => commitAll()
  }, "Save to device", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2NvbW1pdEFsbExheW91dHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUVBLGtDQUFrQztBQUNoQyxRQUFNLGtCQUFrQjtBQUFBO0FBRzFCLE1BQU0sUUFBUSxDQUFDLGNBQWM7QUFDM0IsU0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLFdBQVcsU0FBUztBQUFBO0FBRy9DLHlDQUFnRDtBQUNyRCxRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTSxzQkFBc0I7QUFFekMsbUNBQWlDO0FBQy9CLGFBQVMsSUFBSSxHQUFHLElBQUksc0JBQXNCLFFBQVEsS0FBSztBQUNyRCxZQUFNLGtCQUNKLFlBQ0Usc0JBQXNCLEdBQUcsT0FBTyxRQUFRLGtCQUFrQixNQUMxRCxNQUNBLHNCQUFzQixHQUFHLGVBQWUsUUFDdEMsa0JBQ0EsTUFFRixNQUNBLHNCQUFzQixHQUFHO0FBRTdCLFlBQU0sTUFBTTtBQUFBO0FBRWQsVUFBTSxrQkFBa0I7QUFBQTtBQUUxQiw0QkFBMEI7QUFDeEIsVUFBTTtBQUNOLFVBQU0sa0JBQWtCO0FBQUE7QUFFMUIsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixTQUFTLE1BQU07QUFBQSxLQUNoQixrQkFDZ0I7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
