import {action} from "../../../snowpack/pkg/easy-peasy.js";
import {
  createEmptyChordStatistics
} from "../../models/trainingStatistics.js";
import {SAVED_FASTEST_WPM_KEY} from "./state.js";
const SAVED_STATS_STORAGE_KEY = "SAVED_STATS_STORAGE_KEY";
const ifHasOccurredAtLeastOnce = (e) => e.numberOfOccurrences !== 0;
const statisticsStorageStoreActions = {
  clearStatsForOneModule: action((state, payload) => {
    state.fastestRecordedWordsPerMinute[payload] = 0;
    updateWPMInLocalStorage(state);
    state.totalSavedTrainingStatistics = {
      statistics: state.totalSavedTrainingStatistics.statistics.filter((stat) => stat.scenario !== payload)
    };
    localStorage.setItem(SAVED_STATS_STORAGE_KEY, JSON.stringify(state.totalSavedTrainingStatistics));
  }),
  setTotalSavedTrainingStatistics: action((store2, payload) => {
    const statisticsAlreadyExist = store2.totalSavedTrainingStatistics?.statistics?.length > 0;
    if (statisticsAlreadyExist) {
      const objectToSave = {
        statistics: handleStatsMerge(store2.totalSavedTrainingStatistics, payload)
      };
      store2.totalSavedTrainingStatistics = objectToSave;
      localStorage.setItem(SAVED_STATS_STORAGE_KEY, JSON.stringify(objectToSave));
    } else {
      console.log("Here we are handle merge");
      const objectToSave = {
        statistics: payload.statistics.filter(ifHasOccurredAtLeastOnce)
      };
      store2.totalSavedTrainingStatistics = objectToSave;
      localStorage.setItem(SAVED_STATS_STORAGE_KEY, JSON.stringify(objectToSave));
    }
  }),
  clearAllStorage: action((store2) => {
    store2.totalSavedTrainingStatistics = {statistics: []};
    store2.fastestRecordedWordsPerMinute = {
      ALPHABET: 0,
      TRIGRAM: 0,
      LEXICAL: 0,
      CHORDING: 0,
      LEXICOGRAPHIC: 0,
      SUPERSONIC: 0,
      CUSTOMTIER: 0
    };
    localStorage.clear();
  }),
  setFastestRecordedWordsPerMinute: action((store2, payload) => {
    store2.fastestRecordedWordsPerMinute = payload;
    updateWPMInLocalStorage(store2);
  })
};
export const handleStatsMerge = (firstStats, secondStats) => {
  const existingStatistics = {
    statistics: firstStats.statistics.filter(ifHasOccurredAtLeastOnce)
  };
  const statisticsToMerge = {
    statistics: secondStats.statistics.filter(ifHasOccurredAtLeastOnce)
  };
  const allChordKeys = [
    ...new Set([
      ...existingStatistics.statistics.filter((s) => s.numberOfOccurrences > 0).map((s) => s.id),
      ...statisticsToMerge.statistics.filter((s) => s.numberOfOccurrences > 0).map((s) => s.id)
    ])
  ];
  const newStats = [];
  allChordKeys.map((key) => {
    const existingStat = existingStatistics.statistics.find((s) => s.id === key);
    const mergingStat = statisticsToMerge.statistics.find((s) => s.id === key);
    let newStat = createEmptyChordStatistics(key);
    if (existingStat && mergingStat && existingStat.scenario === mergingStat.scenario) {
      newStat = {
        averageSpeed: (existingStat.averageSpeed + mergingStat.averageSpeed) / 2,
        id: key,
        displayTitle: key,
        numberOfErrors: existingStat.numberOfErrors + mergingStat.numberOfErrors,
        numberOfOccurrences: existingStat.numberOfOccurrences + mergingStat.numberOfOccurrences,
        lastSpeed: 0,
        scenario: existingStat.scenario
      };
      newStats.push(newStat);
    } else {
      if (mergingStat)
        newStats.push(mergingStat);
      if (existingStat)
        newStats.push(existingStat);
    }
  });
  return newStats;
};
function updateWPMInLocalStorage(state) {
  localStorage.setItem(SAVED_FASTEST_WPM_KEY, JSON.stringify(state.fastestRecordedWordsPerMinute));
}
export default statisticsStorageStoreActions;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvc3RhdGlzdGljc1N0b3JhZ2VTdG9yZS9hY3Rpb25zLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFLQTtBQUFBO0FBQUE7QUFNQTtBQUVBLE1BQU0sMEJBQTBCO0FBRWhDLE1BQU0sMkJBQTJCLENBQUMsTUFDaEMsRUFBRSx3QkFBd0I7QUFPNUIsTUFBTSxnQ0FBd0Q7QUFBQSxFQUM1RCx3QkFBd0IsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUNqRCxVQUFNLDhCQUE4QixXQUFXO0FBQy9DLDRCQUF3QjtBQUN4QixVQUFNLCtCQUErQjtBQUFBLE1BQ25DLFlBQVksTUFBTSw2QkFBNkIsV0FBVyxPQUN4RCxDQUFDLFNBQVMsS0FBSyxhQUFhO0FBQUE7QUFHaEMsaUJBQWEsUUFDWCx5QkFDQSxLQUFLLFVBQVUsTUFBTTtBQUFBO0FBQUEsRUFHekIsaUNBQWlDLE9BQU8sQ0FBQyxRQUFPLFlBQVk7QUFJMUQsVUFBTSx5QkFDSixPQUFNLDhCQUE4QixZQUFZLFNBQVM7QUFFM0QsUUFBSSx3QkFBd0I7QUFDMUIsWUFBTSxlQUFlO0FBQUEsUUFDbkIsWUFBWSxpQkFDVixPQUFNLDhCQUNOO0FBQUE7QUFHSixhQUFNLCtCQUErQjtBQUNyQyxtQkFBYSxRQUNYLHlCQUNBLEtBQUssVUFBVTtBQUFBLFdBRVo7QUFDTCxjQUFRLElBQUk7QUFDWixZQUFNLGVBQWU7QUFBQSxRQUNuQixZQUFZLFFBQVEsV0FBVyxPQUFPO0FBQUE7QUFFeEMsYUFBTSwrQkFBK0I7QUFDckMsbUJBQWEsUUFDWCx5QkFDQSxLQUFLLFVBQVU7QUFBQTtBQUFBO0FBQUEsRUFJckIsaUJBQWlCLE9BQU8sQ0FBQyxXQUFVO0FBQ2pDLFdBQU0sK0JBQStCLENBQUUsWUFBWTtBQUNuRCxXQUFNLGdDQUFnQztBQUFBLE1BQ3BDLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQTtBQUVkLGlCQUFhO0FBQUE7QUFBQSxFQUVmLGtDQUFrQyxPQUFPLENBQUMsUUFBTyxZQUFZO0FBQzNELFdBQU0sZ0NBQWdDO0FBQ3RDLDRCQUF3QjtBQUFBO0FBQUE7QUFJckIsYUFBTSxtQkFBbUIsQ0FDOUIsWUFDQSxnQkFDc0I7QUFDdEIsUUFBTSxxQkFBcUI7QUFBQSxJQUN6QixZQUFZLFdBQVcsV0FBVyxPQUFPO0FBQUE7QUFFM0MsUUFBTSxvQkFBb0I7QUFBQSxJQUN4QixZQUFZLFlBQVksV0FBVyxPQUFPO0FBQUE7QUFJNUMsUUFBTSxlQUFlO0FBQUEsSUFDbkIsR0FBRyxJQUFJLElBQUk7QUFBQSxNQUNULEdBQUcsbUJBQW1CLFdBQ25CLE9BQU8sQ0FBQyxNQUF1QixFQUFFLHNCQUFzQixHQUN2RCxJQUFJLENBQUMsTUFBdUIsRUFBRTtBQUFBLE1BQ2pDLEdBQUcsa0JBQWtCLFdBQ2xCLE9BQU8sQ0FBQyxNQUF1QixFQUFFLHNCQUFzQixHQUN2RCxJQUFJLENBQUMsTUFBdUIsRUFBRTtBQUFBO0FBQUE7QUFPckMsUUFBTSxXQUE4QjtBQUNwQyxlQUFhLElBQUksQ0FBQyxRQUFnQjtBQUNoQyxVQUFNLGVBQWUsbUJBQW1CLFdBQVcsS0FDakQsQ0FBQyxNQUF1QixFQUFFLE9BQU87QUFFbkMsVUFBTSxjQUFjLGtCQUFrQixXQUFXLEtBQy9DLENBQUMsTUFBdUIsRUFBRSxPQUFPO0FBR25DLFFBQUksVUFBMkIsMkJBQTJCO0FBSTFELFFBQ0UsZ0JBQ0EsZUFDQSxhQUFhLGFBQWEsWUFBWSxVQUN0QztBQUNBLGdCQUFVO0FBQUEsUUFDUixjQUNHLGNBQWEsZUFBZSxZQUFZLGdCQUFnQjtBQUFBLFFBQzNELElBQUk7QUFBQSxRQUNKLGNBQWM7QUFBQSxRQUNkLGdCQUNFLGFBQWEsaUJBQWlCLFlBQVk7QUFBQSxRQUM1QyxxQkFDRSxhQUFhLHNCQUFzQixZQUFZO0FBQUEsUUFDakQsV0FBVztBQUFBLFFBQ1gsVUFBVSxhQUFhO0FBQUE7QUFHekIsZUFBUyxLQUFLO0FBQUEsV0FDVDtBQUNMLFVBQUk7QUFBYSxpQkFBUyxLQUFLO0FBQy9CLFVBQUk7QUFBYyxpQkFBUyxLQUFLO0FBQUE7QUFBQTtBQUlwQyxTQUFPO0FBQUE7QUFHVCxpQ0FBaUMsT0FBNkI7QUFDNUQsZUFBYSxRQUNYLHVCQUNBLEtBQUssVUFBVSxNQUFNO0FBQUE7QUFJekIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
