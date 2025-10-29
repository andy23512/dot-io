import {action} from "../../../snowpack/pkg/easy-peasy.js";
const SAVED_STATS_STORAGE_KEY = "SAVED_STATS_STORAGE_KEY";
const sessionChordingState = sessionStorage.getItem("chordingEnabledDevice");
const globalStorageStoreActions = {
  setIsUsingChordingEnabledDevice: action((state, payload) => {
    state.isUsingChordingEnabledDevice = payload;
    updateIsChordingEnabledInSessionStorage(payload);
  }),
  setIsDisplayingSettingsModal: action((state, payload) => {
    state.isDisplayingSettingsModal = payload;
  }),
  setNumberOfWordsChorded: action((state, payload) => {
    state.numberOfWordsChorded = state.numberOfWordsChorded + 1;
  }),
  setIsDisplayingStatisticsModal: action((state, payload) => {
    state.isDisplayingStatisticsModal = payload;
  })
};
export default globalStorageStoreActions;
function updateIsChordingEnabledInSessionStorage(payload) {
  sessionStorage.setItem("chordingEnabledDevice", JSON.stringify(payload));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvZ2xvYmFsUGVyc2lzdGVudFN0b3JlL2FjdGlvbnMudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQU1BLE1BQU0sMEJBQTBCO0FBT2hDLE1BQU0sdUJBQXVCLGVBQWUsUUFBUTtBQUVwRCxNQUFNLDRCQUFnRDtBQUFBLEVBQ3BELGlDQUFpQyxPQUFPLENBQUMsT0FBTyxZQUFZO0FBQzFELFVBQU0sK0JBQStCO0FBQ3JDLDRDQUF3QztBQUFBO0FBQUEsRUFFMUMsOEJBQThCLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDdkQsVUFBTSw0QkFBNEI7QUFBQTtBQUFBLEVBRXBDLHlCQUF5QixPQUFPLENBQUMsT0FBTyxZQUFZO0FBQ2xELFVBQU0sdUJBQXdCLE1BQU0sdUJBQXVCO0FBQUE7QUFBQSxFQUU3RCxnQ0FBZ0MsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUN6RCxVQUFNLDhCQUE4QjtBQUFBO0FBQUE7QUFJeEMsZUFBZTtBQUVmLGlEQUFpRCxTQUFrQjtBQUNqRSxpQkFBZSxRQUFRLHlCQUF5QixLQUFLLFVBQVU7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
