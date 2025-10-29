import {useStoreState} from "../store/store.js";
export function useTotalChordsToConquer() {
  return useStoreState((store) => store.numberOfChordsForTrainingLevel);
}
export default function useChordsNotConquered() {
  const trainingStats = useStoreState((store) => store.trainingStatistics);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const statsWeCareAbout = trainingStats.statistics;
  const stats = statsWeCareAbout.filter((s) => s.averageSpeed > trainingSettings.speedGoal || s.averageSpeed === 0);
  return stats.length;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlQ2hvcmRzTm90Q29ucXVlcmVkLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRU8sMENBQTJDO0FBQ2hELFNBQU8sY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUFBO0FBR3hDLGdEQUF3RDtBQUN0RCxRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3JELFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFeEQsUUFBTSxtQkFBbUIsY0FBYztBQUN2QyxRQUFNLFFBQVEsaUJBQWlCLE9BQzdCLENBQUMsTUFBTSxFQUFFLGVBQWUsaUJBQWlCLGFBQWEsRUFBRSxpQkFBaUI7QUFHM0UsU0FBTyxNQUFNO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
