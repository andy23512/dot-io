import React from "../../../../snowpack/pkg/react.js";
import {createChord} from "../../../models/managerModels.js";
import {useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
export function AddChordMap() {
  const setSingleDownloadedChord = useStoreActions((store) => store.setSingleDownloadedChord);
  function addChordMap() {
    const newChordMap = createChord("", "", "", "");
    setSingleDownloadedChord(newChordMap);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "sc-bYwzuL  text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    onClick: () => addChordMap()
  }, "Add Chord Map"));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2FkZENob3JkTWFwLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUVPLDhCQUFxQztBQUMxQyxRQUFNLDJCQUEyQixnQkFDL0IsQ0FBQyxVQUFVLE1BQU07QUFFbkIseUJBQXVCO0FBQ3JCLFVBQU0sY0FBYyxZQUFZLElBQUksSUFBSSxJQUFJO0FBQzVDLDZCQUF5QjtBQUFBO0FBRTNCLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQUEsS0FDaEI7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
