import React from "../../snowpack/pkg/react.js";
import {useStoreState} from "../store/store.js";
export default function useTrainingScenarioAsDocumentTitle() {
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  React.useEffect(() => {
    const scenario = String(currentTrainingScenario);
    document.title = scenario.substr(0, 1) + scenario.substr(1, scenario.length - 1).toLowerCase();
  }, []);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlVHJhaW5pbmdTY2VuYXJpb0FzRG9jdW1lbnRUaXRsZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFFQSw2REFBbUU7QUFDakUsUUFBTSwwQkFBMEIsY0FDOUIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxVQUFVLE1BQU07QUFDcEIsVUFBTSxXQUFXLE9BQU87QUFDeEIsYUFBUyxRQUNQLFNBQVMsT0FBTyxHQUFHLEtBQ25CLFNBQVMsT0FBTyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQUEsS0FDekM7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
