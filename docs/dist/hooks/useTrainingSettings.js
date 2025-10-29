import {useStoreActions, useStoreState} from "../store/store.js";
function useTrainingSettings() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  return [trainingSettings, setTrainingSettings];
}
export {useTrainingSettings};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlVHJhaW5pbmdTZXR0aW5ncy50cyJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBRUEsK0JBR0U7QUFDQSxRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3hELFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQVUsTUFBTTtBQUduQixTQUFPLENBQUMsa0JBQWtCO0FBQUE7QUFHNUI7IiwKICAibmFtZXMiOiBbXQp9Cg==
