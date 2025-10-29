export const createEmptyLexicalStMStatistics = (id, scenario) => {
  return {
    sentenceIndex: id,
    averageTestSpeed: 0,
    speedOfLastTenTests: [],
    lastSpeed: 0,
    numberOfOccurrences: 0,
    scenario
  };
};
export const createEmptyChordStatistics = (id, scenario) => {
  return {
    id,
    displayTitle: id,
    averageSpeed: 0,
    lastSpeed: 0,
    numberOfErrors: 0,
    numberOfOccurrences: 0,
    scenario,
    speedOfLastTen: []
  };
};
export const createEmptyChordStatisticsFromDevice = (id, scenario, inChordsMastered, inChord) => {
  return {
    id,
    dateAdded: new Date(),
    displayTitle: id,
    averageSpeed: 0,
    lastSpeed: 0,
    numberOfErrors: 0,
    numberOfOccurrences: 0,
    scenario,
    chordsMastered: inChordsMastered,
    chord: inChord
  };
};
export const MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS = 500;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvbW9kZWxzL3RyYWluaW5nU3RhdGlzdGljcy50cyJdLAogICJtYXBwaW5ncyI6ICJBQXlDTyxhQUFNLGtDQUFrQyxDQUM3QyxJQUNBLGFBQ3dCO0FBQ3hCLFNBQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLGtCQUFrQjtBQUFBLElBQ2xCLHFCQUFxQjtBQUFBLElBQ3JCLFdBQVc7QUFBQSxJQUNYLHFCQUFxQjtBQUFBLElBQ3JCO0FBQUE7QUFBQTtBQUlHLGFBQU0sNkJBQTZCLENBQ3hDLElBQ0EsYUFDb0I7QUFDcEIsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQjtBQUFBLElBQ3JCO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQTtBQUFBO0FBSWIsYUFBTSx1Q0FBdUMsQ0FDbEQsSUFDQSxVQUNBLGtCQUNBLFlBQzhCO0FBQzlCLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxXQUFXLElBQUk7QUFBQSxJQUNmLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQjtBQUFBLElBQ3JCO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxJQUNoQixPQUFPO0FBQUE7QUFBQTtBQUtKLGFBQU0sd0NBQXdDOyIsCiAgIm5hbWVzIjogW10KfQo=
