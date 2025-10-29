export const createEmptyChordStatisticsFromDevice = (id, scenario, inChordsMastered) => {
  return {
    id,
    displayTitle: id,
    averageSpeed: 0,
    lastSpeed: 0,
    numberOfErrors: 0,
    numberOfOccurrences: 0,
    scenario,
    chordsMastered: inChordsMastered,
    dateAdded: new Date()
  };
};
export const MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS = 500;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvbW9kZWxzL3RyYWluaW5nU3RhdGlzdGljc0Zyb21EZXZpY2UudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBa0JPLGFBQU0sdUNBQXVDLENBQ2xELElBQ0EsVUFDQSxxQkFDOEI7QUFDOUIsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLHFCQUFxQjtBQUFBLElBQ3JCO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxJQUNoQixXQUFXLElBQUk7QUFBQTtBQUFBO0FBS1osYUFBTSx3Q0FBd0M7IiwKICAibmFtZXMiOiBbXQp9Cg==
