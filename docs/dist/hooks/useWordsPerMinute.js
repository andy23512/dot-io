import {useStoreState, useStoreActions} from "../store/store.js";
import {getCumulativeAverageChordTypeTime} from "../helpers/aggregation.js";
import {
  storeAverageData,
  storeData
} from "../pages/manager/components/chordGraphs.js";
export const useWordsPerMinute = () => {
  const timeAtTrainingStart = useStoreState((store) => store.timeAtTrainingStart);
  const trainingIsDone = useStoreState((store) => store.trainingIsDone);
  const trainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const testTierHighestWPM = useStoreState((store) => store.testTierHighestWPM);
  const fastestRecordedWPM = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const numberOfWordsTypedCorrectly = useStoreState((store) => store.numberOfWordsTypedCorrectly);
  const testNumber = useStoreState((store) => store.wordTestNumber);
  const setFastestWPM = useStoreActions((store) => store.setFastestRecordedWordsPerMinute);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const storedTestTextData = useStoreState((store) => store.storedTestTextData);
  const allTypedText = useStoreState((store) => store.allTypedCharactersStore);
  const numberOfWordsChorded = useStoreState((state) => state.numberOfWordsChorded);
  const trainingSessionErrors = useStoreState((store) => store.trainingSessionErrors);
  let totalNumberOfCharactersTyped = 0;
  let wpm = 0;
  const Accuracy = (allTypedText.length - 1 - trainingSessionErrors) / (allTypedText.length - 1) * 100;
  const timeAtTrainingStartInSeconds = timeAtTrainingStart * 1e-3;
  const timeNowInSeconds = performance.now() * 1e-3;
  const timeNowInMilli = timeNowInSeconds * 1e3;
  const timeDifferenceInSeconds = timeNowInSeconds - timeAtTrainingStartInSeconds;
  const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
  const trainingStatistics = useStoreState((store) => store.trainingStatistics);
  trainingStatistics.statistics.forEach((stat) => {
    const charactersTyped = stat.displayTitle.length * stat.numberOfOccurrences;
    totalNumberOfCharactersTyped += charactersTyped;
  });
  const y = trainingStatistics.statistics.filter((s) => s.averageSpeed);
  let currentChordSpeed = y[y?.length - 1]?.lastSpeed;
  const average = getCumulativeAverageChordTypeTime(y);
  const averageDailyCount = y.length;
  const charactersTypedCorrectly = totalNumberOfCharactersTyped;
  const charactersTypedCorrectlyPerMinute = charactersTypedCorrectly / timeDifferenceInMinutes;
  if (trainingSettings.isAutoWrite) {
    if (typeof trainingScenario === "string") {
      let averageSpeed = 0;
      let averageSpeedCount = 0;
      if (trainingScenario == "ALPHABET") {
        if (totalNumberOfCharactersTyped == 0) {
          wpm = 0;
        } else {
          let avgSpeedMilliseconds = average * 10;
          let millisecondsPerCharacter = avgSpeedMilliseconds;
          let averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
          wpm = averageCharacterPerMin / 5;
          avgSpeedMilliseconds = currentChordSpeed * 10;
          millisecondsPerCharacter = avgSpeedMilliseconds / 5;
          averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
          currentChordSpeed = averageCharacterPerMin / 5;
          averageSpeed = averageSpeed + wpm;
          averageSpeedCount++;
          const currentDate = new Date();
          if (currentChordSpeed >= 100 && currentChordSpeed != 6276) {
          }
        }
      } else {
        if (totalNumberOfCharactersTyped == 0) {
          wpm = 0;
        } else {
          let avgSpeedMilliseconds = average * 10;
          let millisecondsPerCharacter = avgSpeedMilliseconds / 5;
          let averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
          wpm = averageCharacterPerMin / 5;
          avgSpeedMilliseconds = currentChordSpeed * 10;
          millisecondsPerCharacter = avgSpeedMilliseconds / 5;
          averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
          currentChordSpeed = averageCharacterPerMin / 5;
          averageSpeed += wpm;
          averageSpeedCount++;
          const currentDate = new Date();
          if (currentChordSpeed >= 100 && currentChordSpeed != 6276) {
          }
          if (trainingScenario == "LEXICAL") {
          }
        }
      }
      if (trainingIsDone) {
        const currentDate = new Date();
        if (6 > numberOfWordsChorded.toFixed(0) / 25 * 100 && Accuracy >= 95 && testTierHighestWPM > fastestRecordedWPM[trainingScenario]) {
          storeData(testTierHighestWPM, currentDate);
          setFastestWPM({
            ...fastestRecordedWPM,
            [trainingScenario]: testTierHighestWPM
          });
        }
        storeAverageData(testTierHighestWPM, currentDate, currentChordSpeed, 1);
      }
    }
  }
  return wpm;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlV29yZHNQZXJNaW51dGUudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLTyxhQUFNLG9CQUFvQixNQUFjO0FBQzdDLFFBQU0sc0JBQXNCLGNBQzFCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFdEQsUUFBTSxtQkFBbUIsY0FDdkIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUV4RCxRQUFNLHFCQUFxQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBRTFELFFBQU0scUJBQXFCLGNBQ3pCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sOEJBQThCLGNBQ2xDLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sYUFBYSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBRWxELFFBQU0sZ0JBQWdCLGdCQUNwQixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLGlCQUFpQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3RELFFBQU0scUJBQXFCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDMUQsUUFBTSxlQUFlLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDcEQsUUFBTSx1QkFBdUIsY0FDM0IsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSx3QkFBd0IsY0FDNUIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsTUFBSSwrQkFBK0I7QUFDbkMsTUFBSSxNQUFNO0FBQ1YsUUFBTSxXQUNGLGNBQWEsU0FBUyxJQUFJLHlCQUN6QixjQUFhLFNBQVMsS0FDekI7QUFDRixRQUFNLCtCQUErQixzQkFBc0I7QUFFM0QsUUFBTSxtQkFBbUIsWUFBWSxRQUFRO0FBQzdDLFFBQU0saUJBQWlCLG1CQUFtQjtBQUMxQyxRQUFNLDBCQUNKLG1CQUFtQjtBQUVyQixRQUFNLDBCQUEwQiwwQkFBMEI7QUFDMUQsUUFBTSxxQkFBcUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUMxRCxxQkFBbUIsV0FBVyxRQUFRLENBQUMsU0FBUztBQUM5QyxVQUFNLGtCQUFrQixLQUFLLGFBQWEsU0FBUyxLQUFLO0FBQ3hELG9DQUFnQztBQUFBO0FBRWxDLFFBQU0sSUFBSSxtQkFBbUIsV0FBVyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3hELE1BQUksb0JBQW9CLEVBQUUsR0FBRyxTQUFTLElBQUk7QUFDMUMsUUFBTSxVQUFVLGtDQUFrQztBQUNsRCxRQUFNLG9CQUFvQixFQUFFO0FBSTVCLFFBQU0sMkJBQTJCO0FBQ2pDLFFBQU0sb0NBQ0osMkJBQTJCO0FBRTdCLE1BQUksaUJBQWlCLGFBQWE7QUFDaEMsUUFBSSxPQUFPLHFCQUFxQixVQUFVO0FBQ3hDLFVBQUksZUFBZTtBQUNuQixVQUFJLG9CQUFvQjtBQUV4QixVQUFJLG9CQUFvQixZQUFZO0FBQ2xDLFlBQUksZ0NBQWdDLEdBQUc7QUFDckMsZ0JBQU07QUFBQSxlQUNEO0FBQ0wsY0FBSSx1QkFBdUIsVUFBVTtBQUNyQyxjQUFJLDJCQUEyQjtBQUMvQixjQUFJLHlCQUF5QixNQUFRO0FBQ3JDLGdCQUFNLHlCQUF5QjtBQUcvQixpQ0FBdUIsb0JBQW9CO0FBQzNDLHFDQUEyQix1QkFBdUI7QUFDbEQsbUNBQXlCLE1BQVE7QUFDakMsOEJBQW9CLHlCQUF5QjtBQUU3Qyx5QkFBZSxlQUFlO0FBQzlCO0FBRUEsZ0JBQU0sY0FBYyxJQUFJO0FBRXhCLGNBQUkscUJBQXFCLE9BQU8scUJBQXFCLE1BQU07QUFBQTtBQUFBO0FBQUEsYUFLeEQ7QUFDTCxZQUFJLGdDQUFnQyxHQUFHO0FBQ3JDLGdCQUFNO0FBQUEsZUFDRDtBQUNMLGNBQUksdUJBQXVCLFVBQVU7QUFDckMsY0FBSSwyQkFBMkIsdUJBQXVCO0FBQ3RELGNBQUkseUJBQXlCLE1BQVE7QUFDckMsZ0JBQU0seUJBQXlCO0FBRS9CLGlDQUF1QixvQkFBb0I7QUFDM0MscUNBQTJCLHVCQUF1QjtBQUNsRCxtQ0FBeUIsTUFBUTtBQUNqQyw4QkFBb0IseUJBQXlCO0FBRTdDLDBCQUFnQjtBQUNoQjtBQUNBLGdCQUFNLGNBQWMsSUFBSTtBQUV4QixjQUFJLHFCQUFxQixPQUFPLHFCQUFxQixNQUFNO0FBQUE7QUFHM0QsY0FBSSxvQkFBcUIsV0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFLdEQsVUFBSSxnQkFBZ0I7QUFDbEIsY0FBTSxjQUFjLElBQUk7QUFFeEIsWUFDRSxJQUFLLHFCQUFxQixRQUFRLEtBQUssS0FBTSxPQUM3QyxZQUFZLE1BQ1oscUJBQXFCLG1CQUFtQixtQkFDeEM7QUFDQSxvQkFBVSxvQkFBb0I7QUFFOUIsd0JBQWM7QUFBQSxlQUNUO0FBQUEsYUFDRixtQkFBbUI7QUFBQTtBQUFBO0FBR3hCLHlCQUFpQixvQkFBb0IsYUFBYSxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFLM0UsU0FBTztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
