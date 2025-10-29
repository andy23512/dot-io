import {useStoreState} from "../store/store.js";
export const useContrast = () => {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const alphaValue = trainingSettings.contrastPercentage / 100;
  return `[#222424]
  })`;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlQ29udHJhc3QudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVPLGFBQU0sY0FBYyxNQUFjO0FBQ3ZDLFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFeEQsUUFBTSxhQUFhLGlCQUFpQixxQkFBcUI7QUFDekQsU0FBTztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
