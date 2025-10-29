import React from "../../../../snowpack/pkg/react.js";
import useScreenSizeBoundary from "../../../hooks/useScreenSizeBoundary.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {StatisticsColumnContainer} from "./StatisticsColumnContainer.js";
import {StatisticsTableContainer} from "./StatisticsTableContainer.js";
import {StatisticsTableTitle} from "./StatisticsTableTitle.js";
import StatisticsTable from "./StatisticsTable.js";
import {EditChordsButton} from "./EditChordsButton.js";
import {useCurrentTrainingScenario} from "../../../hooks/useCurrentTrainingScenario.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
const HIDDEN_BREAKPOINT = 1024;
export function StatisticsColumn() {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const setIsDisplaying = useStoreActions((store) => store.setIsDisplayingStatisticsModal);
  useScreenSizeBoundary({
    boundary: HIDDEN_BREAKPOINT,
    callback: (direction) => {
      setIsDisplaying(direction === "ABOVE");
    }
  });
  const transitionTransform = `transform translate-x-full transition-transform ${trainingSettings.isDisplayingStatisticsModal && "translate-x-0"}`;
  const windowSize = useWindowSize();
  const onClickOutside = () => {
    if (windowSize.width < HIDDEN_BREAKPOINT)
      setIsDisplaying(false);
  };
  const openChordEditModal = useStoreActions((store) => store.toggleChordEditModal);
  const currentTrainingMode = useCurrentTrainingScenario();
  const shouldDisplayEditChordsButton = currentTrainingMode === "LEXICAL" || currentTrainingMode === "TRIGRAM" || currentTrainingMode === "SUPERSONIC" || currentTrainingMode === "LEXICOGRAPHIC";
  return /* @__PURE__ */ React.createElement(StatisticsColumnContainer, {
    onClick: onClickOutside,
    isDisplayingModal: trainingSettings.isDisplayingStatisticsModal
  }, /* @__PURE__ */ React.createElement(StatisticsTableContainer, {
    transitionTransform
  }, /* @__PURE__ */ React.createElement(Row, null, shouldDisplayEditChordsButton && /* @__PURE__ */ React.createElement(EditChordsButton, {
    openChordEditModal
  }), /* @__PURE__ */ React.createElement(StatisticsTableTitle, null)), /* @__PURE__ */ React.createElement(StatisticsTable, null)));
}
const Row = styled.div.attrs({
  className: `flex flex-row w-full justify-end items-end mb-4 `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aXN0aWNzQ29sdW1uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLG9CQUFvQjtBQUVuQixtQ0FBMEM7QUFDL0MsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUN4RCxRQUFNLGtCQUFrQixnQkFDdEIsQ0FBQyxVQUFVLE1BQU07QUFLbkIsd0JBQXNCO0FBQUEsSUFDcEIsVUFBVTtBQUFBLElBQ1YsVUFBVSxDQUFDLGNBQWM7QUFDdkIsc0JBQWdCLGNBQWM7QUFBQTtBQUFBO0FBSWxDLFFBQU0sc0JBQXNCLG1EQUMxQixpQkFBaUIsK0JBQStCO0FBR2xELFFBQU0sYUFBYTtBQUNuQixRQUFNLGlCQUFpQixNQUFNO0FBQzNCLFFBQUksV0FBVyxRQUFRO0FBQW1CLHNCQUFnQjtBQUFBO0FBRzVELFFBQU0scUJBQXFCLGdCQUN6QixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLHNCQUFzQjtBQUU1QixRQUFNLGdDQUNKLHdCQUF3QixhQUN4Qix3QkFBd0IsYUFDeEIsd0JBQXdCLGdCQUN4Qix3QkFBd0I7QUFFMUIsU0FDRSxvQ0FBQywyQkFBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsbUJBQW1CLGlCQUFpQjtBQUFBLEtBRXBDLG9DQUFDLDBCQUFEO0FBQUEsSUFBMEI7QUFBQSxLQUN4QixvQ0FBQyxLQUFELE1BQ0csaUNBQ0Msb0NBQUMsa0JBQUQ7QUFBQSxJQUFrQjtBQUFBLE1BRXBCLG9DQUFDLHNCQUFELFFBR0Ysb0NBQUMsaUJBQUQ7QUFBQTtBQU1SLE1BQU0sTUFBTSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQzNCLFdBQVc7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
