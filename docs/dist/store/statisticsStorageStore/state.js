import {computed} from "../../../snowpack/pkg/easy-peasy.js";
import {chordLibrary} from "../../data/chordLibrary.js";
const SAVED_STATS_STORAGE_KEY = "SAVED_STATS_STORAGE_KEY";
export const SAVED_FASTEST_WPM_KEY = "FASTEST_WPM_KEY";
const storedTrainingStats = JSON.parse(localStorage.getItem(SAVED_STATS_STORAGE_KEY) || '{"statistics":[]}');
const defaultWPM = JSON.stringify({
  ALPHABET: 0,
  TRIGRAM: 0,
  LEXICAL: 0,
  CHORDING: 0,
  LEXICOGRAPHIC: 0,
  SUPERSONIC: 0,
  CUSTOMTIER: 0
});
const fastestWPMFromStorage = JSON.parse(localStorage.getItem(SAVED_FASTEST_WPM_KEY) || defaultWPM);
const statisticsStoreState = {
  totalSavedTrainingStatistics: storedTrainingStats,
  totalSavedCharacterChordStats: computed((store) => {
    const totalSavedStats = store.totalSavedTrainingStatistics;
    const characterKeys = Object.keys(chordLibrary.letters);
    return {
      statistics: totalSavedStats.statistics.filter((s) => characterKeys.includes(s.id))
    };
  }),
  totalSavedChordStats: computed((store) => {
    const totalSavedStats = store.totalSavedTrainingStatistics;
    const characterKeys = Object.keys(chordLibrary.chords);
    return {
      statistics: totalSavedStats.statistics.filter((s) => characterKeys.includes(s.id))
    };
  }),
  fastestRecordedWordsPerMinute: fastestWPMFromStorage
};
export default statisticsStoreState;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvc3RhdGlzdGljc1N0b3JhZ2VTdG9yZS9zdGF0ZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFRQSxNQUFNLDBCQUEwQjtBQUN6QixhQUFNLHdCQUF3QjtBQUtyQyxNQUFNLHNCQUEwQyxLQUFLLE1BQ25ELGFBQWEsUUFBUSw0QkFBNEI7QUFHbkQsTUFBTSxhQUFhLEtBQUssVUFBVTtBQUFBLEVBQ2hDLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQTtBQUdkLE1BQU0sd0JBQTBELEtBQUssTUFDbkUsYUFBYSxRQUFRLDBCQUEwQjtBQU1qRCxNQUFNLHVCQUE2QztBQUFBLEVBQ2pELDhCQUE4QjtBQUFBLEVBQzlCLCtCQUErQixTQUFTLENBQUMsVUFBVTtBQUNqRCxVQUFNLGtCQUFrQixNQUFNO0FBQzlCLFVBQU0sZ0JBQWdCLE9BQU8sS0FBSyxhQUFhO0FBRS9DLFdBQU87QUFBQSxNQUNMLFlBQVksZ0JBQWdCLFdBQVcsT0FBTyxDQUFDLE1BQzdDLGNBQWMsU0FBUyxFQUFFO0FBQUE7QUFBQTtBQUFBLEVBSS9CLHNCQUFzQixTQUFTLENBQUMsVUFBVTtBQUN4QyxVQUFNLGtCQUFrQixNQUFNO0FBQzlCLFVBQU0sZ0JBQWdCLE9BQU8sS0FBSyxhQUFhO0FBRS9DLFdBQU87QUFBQSxNQUNMLFlBQVksZ0JBQWdCLFdBQVcsT0FBTyxDQUFDLE1BQzdDLGNBQWMsU0FBUyxFQUFFO0FBQUE7QUFBQTtBQUFBLEVBSS9CLCtCQUErQjtBQUFBO0FBR2pDLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
