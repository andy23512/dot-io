import {useStoreState} from "../store/store.js";
export const useHUD = () => {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const isHUDEnabled = trainingSettings.isDisplayingHUD;
  return isHUDEnabled;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlSFVELnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFTyxhQUFNLFNBQVMsTUFBZTtBQUNuQyxRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBRXhELFFBQU0sZUFBZSxpQkFBaUI7QUFFdEMsU0FBTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
