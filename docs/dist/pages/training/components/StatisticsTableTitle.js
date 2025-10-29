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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aXN0aWNzVGFibGVUaXRsZS50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFFTyx1Q0FBOEM7QUFDbkQsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sU0FBUyxjQUFjLENBQUMsVUFBVSxNQUFNO0FBQzlDLFFBQU0saUJBQWlCLE9BQU8sS0FBSyxRQUFRO0FBRTNDLFFBQU0sOEJBQ0osaUJBQWlCLGFBQWEsaUJBQWlCO0FBQ2pELFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQW9DLGNBQ3ZDLCtCQUErQixNQUFNO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
