import {useStoreState} from "../store/store.js";
export default function useNumberOfChordsConquered() {
  const numberOfChords = useStoreState((store) => store.numberOfChordsForTrainingLevel);
  const trainingStats = useStoreState((store) => store.trainingStatistics);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const statsLength = trainingStats.statistics.filter((s) => s.averageSpeed > trainingSettings.speedGoal || s.averageSpeed === 0).length;
  return numberOfChords - statsLength;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlQ2hvcmRzQ29ucXVlcmVkLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUEscURBQTZEO0FBQzNELFFBQU0saUJBQWlCLGNBQ3JCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sZ0JBQWdCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDckQsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUV4RCxRQUFNLGNBQWMsY0FBYyxXQUFXLE9BQzNDLENBQUMsTUFBTSxFQUFFLGVBQWUsaUJBQWlCLGFBQWEsRUFBRSxpQkFBaUIsR0FDekU7QUFFRixTQUFPLGlCQUFpQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
