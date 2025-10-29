import React, {useEffect} from "../../snowpack/pkg/react.js";
import {useStoreState} from "../store/store.js";
export const PromptBeforeClosing = ({onClose}) => {
  const isAutoWrite = useStoreState((store) => store.trainingSettings.isAutoWrite);
  const shouldPromptBeforeClosing = document.location.href.includes("training") && !isAutoWrite;
  useEffect(() => {
    if (shouldPromptBeforeClosing)
      window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      if (shouldPromptBeforeClosing)
        window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  }, [isAutoWrite]);
  const handleTabClosing = () => {
    onClose(isAutoWrite);
  };
  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  return /* @__PURE__ */ React.createElement("span", null);
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9wcm9tcHRCZWZvcmVDbG9zaW5nLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFNTyxhQUFNLHNCQUFzQixDQUFDLENBQUUsYUFBbUM7QUFDdkUsUUFBTSxjQUFjLGNBQ2xCLENBQUMsVUFBVSxNQUFNLGlCQUFpQjtBQUdwQyxRQUFNLDRCQUNKLFNBQVMsU0FBUyxLQUFLLFNBQVMsZUFBZSxDQUFDO0FBRWxELFlBQVUsTUFBTTtBQUNkLFFBQUk7QUFDRixhQUFPLGlCQUFpQixnQkFBZ0I7QUFDMUMsV0FBTyxpQkFBaUIsVUFBVTtBQUVsQyxXQUFPLE1BQU07QUFDWCxVQUFJO0FBQ0YsZUFBTyxvQkFBb0IsZ0JBQWdCO0FBQzdDLGFBQU8sb0JBQW9CLFVBQVU7QUFBQTtBQUFBLEtBRXRDLENBQUM7QUFFSixRQUFNLG1CQUFtQixNQUFNO0FBQzdCLFlBQVE7QUFBQTtBQUdWLFFBQU0sWUFBWSxDQUFDLFVBQTZCO0FBQzlDLFVBQU07QUFDTixVQUFNLGNBQWM7QUFBQTtBQUd0QixTQUFPLG9DQUFDLFFBQUQ7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
