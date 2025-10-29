import React, {useEffect} from "../../snowpack/pkg/react.js";
import store, {useStoreActions} from "../store/store.js";
import {PromptBeforeClosing} from "./promptBeforeClosing.js";
import {useHistory} from "../../snowpack/pkg/react-router-dom.js";
import {ROUTER_PATHS} from "./router.js";
export function ClosingPrompt() {
  const history = useHistory();
  const setStoredChordTrainingStats = useStoreActions((store2) => store2.setTotalSavedTrainingStatistics);
  const clearChordStatistics = useStoreActions((store2) => store2.clearTemporaryTrainingData);
  const handleLocationChange = (location) => {
    const didLeaveTrainingSession = !location?.pathname?.endsWith(ROUTER_PATHS.training);
    const isAutoWriteEnabled = store.getState().trainingSettings.isAutoWrite;
    if (didLeaveTrainingSession && isAutoWriteEnabled)
      handleAutowriteData(true);
  };
  useEffect(() => {
    const backListener = history.listen(handleLocationChange);
    return () => {
      backListener();
    };
  }, []);
  const handleAutowriteData = (isAutoWriteEnabled) => {
    if (isAutoWriteEnabled) {
      setStoredChordTrainingStats(store.getState().trainingStatistics);
      clearChordStatistics();
    }
  };
  return /* @__PURE__ */ React.createElement(PromptBeforeClosing, {
    onClose: handleAutowriteData
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9jbG9zaW5nUHJvbXB0LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxnQ0FBdUM7QUFDNUMsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sOEJBQThCLGdCQUNsQyxDQUFDLFdBQVUsT0FBTTtBQUVuQixRQUFNLHVCQUF1QixnQkFDM0IsQ0FBQyxXQUFVLE9BQU07QUFHbkIsUUFBTSx1QkFBdUIsQ0FBQyxhQUF1QjtBQUVuRCxVQUFNLDBCQUEwQixDQUFDLFVBQVUsVUFBVSxTQUNuRCxhQUFhO0FBRWYsVUFBTSxxQkFBcUIsTUFBTSxXQUFXLGlCQUFpQjtBQUM3RCxRQUFJLDJCQUEyQjtBQUM3QiwwQkFBb0I7QUFBQTtBQUd4QixZQUFVLE1BQU07QUFDZCxVQUFNLGVBQWUsUUFBUSxPQUFPO0FBRXBDLFdBQU8sTUFBTTtBQUNYO0FBQUE7QUFBQSxLQUVEO0FBRUgsUUFBTSxzQkFBc0IsQ0FBQyx1QkFBZ0M7QUFFM0QsUUFBSSxvQkFBb0I7QUFDdEIsa0NBQTRCLE1BQU0sV0FBVztBQUM3QztBQUFBO0FBQUE7QUFJSixTQUFPLG9DQUFDLHFCQUFEO0FBQUEsSUFBcUIsU0FBUztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
