export const getCumulativeAverageChordTypeTime = (stats) => {
  const statsWithUntypedChordsRemoved = stats.filter((stat) => stat.averageSpeed != 0);
  const average = statsWithUntypedChordsRemoved.reduce((a, b) => ({
    averageSpeed: a.averageSpeed + b.averageSpeed
  }), {averageSpeed: 0}).averageSpeed / statsWithUntypedChordsRemoved.length;
  return (isNaN(average) ? 0 : average) || 0;
};
export const getCumulativeAverageChordTypeTimeFromDevice = (stats) => {
  const statsWithUntypedChordsRemoved = stats?.filter((stat) => stat.averageSpeed != 0);
  const average = statsWithUntypedChordsRemoved?.reduce((a, b) => ({
    averageSpeed: a.averageSpeed + b.averageSpeed
  }), {averageSpeed: 0}).averageSpeed / statsWithUntypedChordsRemoved?.length;
  return (isNaN(average) ? "0" : average?.toFixed()) || "0";
};
export const getCumulativeOccurrence = (stats) => {
  const occur = stats.filter((stat) => stat.numberOfOccurrences != 0);
  return String(occur);
};
export const wpmMethodCalculator = (value, inputLength, scenario) => {
  const avgSpeedMilliseconds = value * 10;
  const millisecondsPerCharacter = avgSpeedMilliseconds / (inputLength + 1);
  const averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
  const wpm = averageCharacterPerMin / 5;
  return wpm;
};
export const wpmMethodCalculatorForStoredChords = (value, inputLength) => {
  const sum = value?.reduce((a, b) => a + b, 0);
  const avg = sum / value?.length || 0;
  const avgSpeedMilliseconds = avg * 10;
  const millisecondsPerCharacter = avgSpeedMilliseconds / (inputLength + 1);
  const averageCharacterPerMin = 6e4 / millisecondsPerCharacter;
  const wpm = averageCharacterPerMin / 5;
  return wpm;
};
export const averageCalculator = (inValue, divisor) => {
  return inValue / divisor;
};
export const avgCalculatorForTheSpeedOfLastTen = (value) => {
  const sum = value?.reduce((a, b) => a + b, 0);
  const avg = sum / value?.length || 0;
  return avg;
};
export const stmCalculator = (inWPM, numberOfChords) => {
  return inWPM / 250 / (numberOfChords / 10);
};
export const getCumulativeValueByPropertyName = (object, propertyName) => {
  return object.reduce((previousValue, currentValue) => {
    return {
      [propertyName]: previousValue[propertyName] + currentValue[propertyName]
    };
  }, {[propertyName]: 0})[propertyName].toString();
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaGVscGVycy9hZ2dyZWdhdGlvbi50cyJdLAogICJtYXBwaW5ncyI6ICJBQUtPLGFBQU0sb0NBQW9DLENBQy9DLFVBQ1c7QUFDWCxRQUFNLGdDQUFnQyxNQUFNLE9BQzFDLENBQUMsU0FBUyxLQUFLLGdCQUFnQjtBQUdqQyxRQUFNLFVBQ0osOEJBQThCLE9BQzVCLENBQUMsR0FBRyxNQUFPO0FBQUEsSUFDVCxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQUEsTUFJbkMsQ0FBRSxjQUFjLElBQ2hCLGVBQWUsOEJBQThCO0FBRWpELFNBQVEsT0FBTSxXQUFXLElBQUksWUFBWTtBQUFBO0FBR3BDLGFBQU0sOENBQThDLENBQ3pELFVBQ1c7QUFDWCxRQUFNLGdDQUFnQyxPQUFPLE9BQzNDLENBQUMsU0FBUyxLQUFLLGdCQUFnQjtBQUdqQyxRQUFNLFVBQ0osK0JBQStCLE9BQzdCLENBQUMsR0FBRyxNQUFPO0FBQUEsSUFDVCxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQUEsTUFJbkMsQ0FBRSxjQUFjLElBQ2hCLGVBQWUsK0JBQStCO0FBRWxELFNBQVEsT0FBTSxXQUFXLE1BQU0sU0FBUyxjQUFjO0FBQUE7QUFHakQsYUFBTSwwQkFBMEIsQ0FBQyxVQUFxQztBQUMzRSxRQUFNLFFBQVEsTUFBTSxPQUFPLENBQUMsU0FBUyxLQUFLLHVCQUF1QjtBQUNqRSxTQUFPLE9BQU87QUFBQTtBQUVULGFBQU0sc0JBQXNCLENBQ2pDLE9BQ0EsYUFDQSxhQUNHO0FBQ0gsUUFBTSx1QkFBdUIsUUFBUTtBQUNyQyxRQUFNLDJCQUEyQix1QkFBd0IsZUFBYztBQUN2RSxRQUFNLHlCQUF5QixNQUFRO0FBQ3ZDLFFBQU0sTUFBTSx5QkFBeUI7QUFFckMsU0FBTztBQUFBO0FBR0YsYUFBTSxxQ0FBcUMsQ0FDaEQsT0FDQSxnQkFDRztBQUNILFFBQU0sTUFBTSxPQUFPLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxHQUFHO0FBQzNDLFFBQU0sTUFBTSxNQUFNLE9BQU8sVUFBVTtBQUVuQyxRQUFNLHVCQUF1QixNQUFNO0FBQ25DLFFBQU0sMkJBQTJCLHVCQUF3QixlQUFjO0FBQ3ZFLFFBQU0seUJBQXlCLE1BQVE7QUFDdkMsUUFBTSxNQUFNLHlCQUF5QjtBQUVyQyxTQUFPO0FBQUE7QUFHRixhQUFNLG9CQUFvQixDQUFDLFNBQWlCLFlBQW9CO0FBQ3JFLFNBQU8sVUFBVTtBQUFBO0FBR1osYUFBTSxvQ0FBb0MsQ0FBQyxVQUFvQjtBQUNwRSxRQUFNLE1BQU0sT0FBTyxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksR0FBRztBQUMzQyxRQUFNLE1BQU0sTUFBTSxPQUFPLFVBQVU7QUFDbkMsU0FBTztBQUFBO0FBR0YsYUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLG1CQUFtQjtBQUN0RCxTQUFPLFFBQVEsTUFBTyxrQkFBaUI7QUFBQTtBQUdsQyxhQUFNLG1DQUFtQyxDQUM5QyxRQUNBLGlCQUNXO0FBQ1gsU0FBTyxPQUNKLE9BQ0MsQ0FBQyxlQUFlLGlCQUFpQjtBQUMvQixXQUFPO0FBQUEsT0FDSixlQUNFLGNBQWMsZ0JBQ2QsYUFBYTtBQUFBO0FBQUEsS0FHcEIsRUFBRyxlQUFlLElBRW5CLGNBQWM7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
