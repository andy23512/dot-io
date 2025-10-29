import React from "../../../../snowpack/pkg/react.js";
import RefreshIcon from "./RefreshIcon.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
function RefreshButton() {
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const trainingSceneario = useStoreState((store) => store.currentTrainingScenario);
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode);
  const payload = [];
  payload.push(trainingSceneario);
  function letsGoAgain() {
    sessionStorage.setItem("Refresh", JSON.stringify(1));
    sessionStorage.removeItem("CustomTierTestValue");
    sessionStorage.removeItem("tempTestDeIncrement");
    setRestartTestMode(true);
    beginTraining(payload);
  }
  return /* @__PURE__ */ React.createElement("button", {
    className: "p-2 bg-[#333] flex  w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]",
    onClick: () => {
      letsGoAgain();
    }
  }, /* @__PURE__ */ React.createElement(RefreshIcon, null));
}
export default RefreshButton;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1JlZnJlc2hCdXR0b24udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBO0FBRUEseUJBQXVDO0FBQ3JDLFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFlLE1BQU07QUFDM0QsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sb0JBQW9CLGNBQ3hCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0scUJBQXFCLGdCQUN6QixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLFVBQVU7QUFDaEIsVUFBUSxLQUFLO0FBQ2IseUJBQXVCO0FBQ3JCLG1CQUFlLFFBQVEsV0FBVyxLQUFLLFVBQVU7QUFDakQsbUJBQWUsV0FBVztBQUMxQixtQkFBZSxXQUFXO0FBQzFCLHVCQUFtQjtBQUNuQixrQkFBYztBQUFBO0FBR2hCLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQ2I7QUFBQTtBQUFBLEtBR0Ysb0NBQUMsYUFBRDtBQUFBO0FBS04sZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
