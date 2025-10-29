import React from "../../../../snowpack/pkg/react.js";
import {_chordMaps} from "../controls/maps.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
export function Export() {
  const clearDownloadedChords = useStoreActions((store) => store.clearDownloadedChords);
  const downloadedChords = useStoreState((store) => store.downloadedChords.chords);
  function exportChordMapLibrary() {
    let csvRows = [];
    _chordMaps.splice(0, _chordMaps.length);
    for (let i = 0; i < downloadedChords.length; i++) {
      _chordMaps.push(downloadedChords[i].currentChord + "," + downloadedChords[i].currentPhrase);
      _chordMaps.push();
    }
    csvRows.push(_chordMaps.join("\n"));
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], {type: "text/csv"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "CharaChorder_ChordLibrary.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    csvRows = [];
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, downloadedChords.length > 0 && /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    color: "pink",
    onClick: () => exportChordMapLibrary()
  }, "Export Library", " "));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2V4cG9ydExpYnJhcnkudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFNQTtBQUNBO0FBRU8seUJBQWdDO0FBQ3JDLFFBQU0sd0JBQXdCLGdCQUM1QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLG1CQUFtQixjQUN2QixDQUFDLFVBQVUsTUFBTSxpQkFBaUI7QUFHcEMsbUNBQWlDO0FBQy9CLFFBQUksVUFBVTtBQUVkLGVBQVcsT0FBTyxHQUFHLFdBQVc7QUFDaEMsYUFBUyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsUUFBUSxLQUFLO0FBRWhELGlCQUFXLEtBQ1QsaUJBQWlCLEdBQUcsZUFDbEIsTUFDQSxpQkFBaUIsR0FBRztBQUV4QixpQkFBVztBQUFBO0FBRWIsWUFBUSxLQUFLLFdBQVcsS0FBSztBQUc3QixVQUFNLFVBQVUsUUFBUSxLQUFLO0FBRzdCLFVBQU0sT0FBTyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUUsTUFBTTtBQUN6QyxVQUFNLE1BQU0sT0FBTyxJQUFJLGdCQUFnQjtBQUN2QyxVQUFNLElBQUksU0FBUyxjQUFjO0FBQ2pDLE1BQUUsYUFBYSxVQUFVO0FBQ3pCLE1BQUUsYUFBYSxRQUFRO0FBQ3ZCLE1BQUUsYUFBYSxZQUFZO0FBQzNCLGFBQVMsS0FBSyxZQUFZO0FBQzFCLE1BQUU7QUFDRixhQUFTLEtBQUssWUFBWTtBQUMxQixjQUFVO0FBQUE7QUFHWixTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNHLGlCQUFpQixTQUFTLEtBQ3pCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU07QUFBQSxJQUNOLFNBQVMsTUFBTTtBQUFBLEtBQ2hCLGtCQUNnQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
