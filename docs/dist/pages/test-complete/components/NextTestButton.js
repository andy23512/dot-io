import React from "../../../../snowpack/pkg/react.js";
import ForwardIcon from "../../test/components/ForwardIcon.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
function NextTestButton() {
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const payload = [currentTrainingScenario, wordTestNumber];
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode);
  const setModuleNumber = useStoreActions((store) => store.setModuleNumber);
  const moduleNumber = useStoreState((store) => store.moduleNumber);
  return /* @__PURE__ */ React.createElement("button", {
    className: "p-2 bg-[#333] flex w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]",
    onClick: () => [
      sessionStorage.removeItem("tempTestDeIncrement"),
      setRestartTestMode(false),
      setModuleNumber(4),
      beginTraining(payload)
    ]
  }, /* @__PURE__ */ React.createElement(ForwardIcon, null));
}
export default NextTestButton;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC1jb21wbGV0ZS9jb21wb25lbnRzL05leHRUZXN0QnV0dG9uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUVBLDBCQUF3QztBQUN0QyxRQUFNLGlCQUFpQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzNELFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sZ0JBQWdCLGdCQUNwQixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLFVBQVUsQ0FBQyx5QkFBeUI7QUFDMUMsUUFBTSxxQkFBcUIsZ0JBQ3pCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sa0JBQWtCLGdCQUFnQixDQUFDLFVBQVUsTUFBTTtBQUN6RCxRQUFNLGVBQWUsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUVwRCxTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUFBLE1BQ2IsZUFBZSxXQUFXO0FBQUEsTUFDMUIsbUJBQW1CO0FBQUEsTUFDbkIsZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBO0FBQUEsS0FHaEIsb0NBQUMsYUFBRDtBQUFBO0FBS04sZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
