import React from "../../../../snowpack/pkg/react.js";
import ForwardIcon from "./ForwardIcon.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
function NextTestButton() {
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const payload = [currentTrainingScenario, wordTestNumber];
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode);
  const setTrainingIsDone = useStoreActions((store) => store.setTrainingIsDone);
  return /* @__PURE__ */ React.createElement("button", {
    className: "p-2 bg-[#333] flex w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]",
    onClick: () => {
      sessionStorage.removeItem("tempTestDeIncrement");
      setTrainingIsDone(true);
    }
  }, /* @__PURE__ */ React.createElement(ForwardIcon, null));
}
export default NextTestButton;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL05leHRUZXN0QnV0dG9uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUVBLDBCQUF3QztBQUN0QyxRQUFNLGlCQUFpQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzNELFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sZ0JBQWdCLGdCQUNwQixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLFVBQVUsQ0FBQyx5QkFBeUI7QUFDMUMsUUFBTSxxQkFBcUIsZ0JBQ3pCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sb0JBQW9CLGdCQUFnQixDQUFDLFVBQVUsTUFBTTtBQUUzRCxTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUNiLHFCQUFlLFdBQVc7QUFDMUIsd0JBQWtCO0FBQUE7QUFBQSxLQUlwQixvQ0FBQyxhQUFEO0FBQUE7QUFLTixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
