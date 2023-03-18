import type { GlobalStore } from "../../models/globalStorage";
import globalStorageStoreActions from "./actions";
import globalStoreState from "./state";


/**
 * This is the storage training store, split up by state and actions.
 * It not only contains the statistics and WPM count for the user, but also gets its data from local storage.
 */
const GlobalStorageStore: GlobalStore = {
  ...globalStorageStoreActions,
  ...globalStoreState,
};

export { GlobalStorageStore };
