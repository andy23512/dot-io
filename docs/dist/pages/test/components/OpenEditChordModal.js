import React from "../../../../snowpack/pkg/react.js";
import EditIcon from "./EditIcon.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
function OpenEditChordModal() {
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const trainingSceneario = useStoreState((store) => store.currentTrainingScenario);
  const currentWordTestNumber = useStoreState((store) => store.wordTestNumber);
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode);
  const mode = useStoreState((store) => store.restartTestMode);
  const payload = [];
  payload.push(trainingSceneario);
  payload.push(currentWordTestNumber);
  function letsGoAgain() {
    sessionStorage.setItem("Refresh", JSON.stringify(1));
    sessionStorage.removeItem("CutomTierTestValue");
    sessionStorage.removeItem("tempTestDeIncrement");
    setRestartTestMode(true);
    beginTraining(payload);
  }
  return /* @__PURE__ */ React.createElement("button", {
    className: "p-2 bg-[#333] flex  w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]",
    onClick: () => {
      letsGoAgain();
    }
  }, /* @__PURE__ */ React.createElement(EditIcon, null));
}
export default OpenEditChordModal;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL09wZW5FZGl0Q2hvcmRNb2RhbC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVBO0FBQ0E7QUFFQSw4QkFBNEM7QUFDMUMsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sb0JBQW9CLGNBQ3hCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDN0QsUUFBTSxxQkFBcUIsZ0JBQ3pCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sT0FBTyxjQUFjLENBQUMsVUFBVSxNQUFNO0FBRTVDLFFBQU0sVUFBVTtBQUNoQixVQUFRLEtBQUs7QUFDYixVQUFRLEtBQUs7QUFDYix5QkFBdUI7QUFDckIsbUJBQWUsUUFBUSxXQUFXLEtBQUssVUFBVTtBQUNqRCxtQkFBZSxXQUFXO0FBQzFCLG1CQUFlLFdBQVc7QUFDMUIsdUJBQW1CO0FBQ25CLGtCQUFjO0FBQUE7QUFHaEIsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYjtBQUFBO0FBQUEsS0FHRixvQ0FBQyxVQUFEO0FBQUE7QUFLTixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
