import React from "../../../../snowpack/pkg/react.js";
import {useCurrentTrainingScenario} from "../../../hooks/useCurrentTrainingScenario.js";
import {useStoreState} from "../../../store/store.js";
export function StatisticsTableTitle() {
  const trainingMode = useCurrentTrainingScenario();
  const chords = useStoreState((store) => store.chordsToPullFrom);
  const numberOfChords = Object.keys(chords).length;
  const shouldDisplayNumberOfChords = trainingMode === "LEXICAL" || trainingMode === "TRIGRAM";
  return /* @__PURE__ */ React.createElement("span", {
    className: "text-white text-2xl font-semibold"
  }, "Statistics", shouldDisplayNumberOfChords && ` - ${numberOfChords}`);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1N0YXRpc3RpY3NUYWJsZVRpdGxlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVPLHVDQUE4QztBQUNuRCxRQUFNLGVBQWU7QUFDckIsUUFBTSxTQUFTLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDOUMsUUFBTSxpQkFBaUIsT0FBTyxLQUFLLFFBQVE7QUFFM0MsUUFBTSw4QkFDSixpQkFBaUIsYUFBYSxpQkFBaUI7QUFDakQsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBb0MsY0FDdkMsK0JBQStCLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
