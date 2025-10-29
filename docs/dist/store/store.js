import {createStore, createTypedHooks} from "../../snowpack/pkg/easy-peasy.js";
import {TrainingStorageStore} from "./statisticsStorageStore/index.js";
import {TrainingStore} from "./trainingStore/index.js";
import {GlobalStorageStore} from "./globalPersistentStore/index.js";
import {ManagerStorageStore} from "./managerStorageStore/index.js";
export const defaultStoreState = {
  isDebug: false,
  ...TrainingStorageStore,
  ...TrainingStore,
  ...GlobalStorageStore,
  ...ManagerStorageStore
};
const store = createStore(defaultStoreState);
const typedHooks = createTypedHooks();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
export default store;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvc3RvcmUudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT08sYUFBTSxvQkFBd0M7QUFBQSxFQUNuRCxTQUFTO0FBQUEsS0FDTjtBQUFBLEtBQ0E7QUFBQSxLQUNBO0FBQUEsS0FDQTtBQUFBO0FBR0wsTUFBTSxRQUFRLFlBQWdDO0FBRTlDLE1BQU0sYUFBYTtBQUVaLGFBQU0sa0JBQWtCLFdBQVc7QUFDbkMsYUFBTSxtQkFBbUIsV0FBVztBQUNwQyxhQUFNLGdCQUFnQixXQUFXO0FBQ3hDLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
