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
  const shouldDisplayEditChordsButton = currentTrainingMode === "LEXICAL" || currentTrainingMode === "TRIGRAM" || currentTrainingMode === "SUPERSONIC" || currentTrainingMode === "LEXICOGRAPHIC" || currentTrainingMode === "CUSTOMTIER";
  return /* @__PURE__ */ React.createElement(StatisticsColumnContainer, {
    isDisplayingModal: trainingSettings.isDisplayingStatisticsModal,
    onClick: onClickOutside
  }, /* @__PURE__ */ React.createElement(StatisticsTableContainer, {
    transitionTransform
  }, /* @__PURE__ */ React.createElement(Row, null, shouldDisplayEditChordsButton && /* @__PURE__ */ React.createElement(EditChordsButton, {
    openChordEditModal
  }), /* @__PURE__ */ React.createElement(StatisticsTableTitle, null)), /* @__PURE__ */ React.createElement(StatisticsTable, null)));
}
const Row = styled.div.attrs({
  className: `flex flex-row w-full justify-end items-end mb-4 `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1N0YXRpc3RpY3NDb2x1bW4udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sb0JBQW9CO0FBRW5CLG1DQUEwQztBQUMvQyxRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3hELFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQVUsTUFBTTtBQUtuQix3QkFBc0I7QUFBQSxJQUNwQixVQUFVO0FBQUEsSUFDVixVQUFVLENBQUMsY0FBYztBQUN2QixzQkFBZ0IsY0FBYztBQUFBO0FBQUE7QUFJbEMsUUFBTSxzQkFBc0IsbURBQzFCLGlCQUFpQiwrQkFBK0I7QUFHbEQsUUFBTSxhQUFhO0FBQ25CLFFBQU0saUJBQWlCLE1BQU07QUFDM0IsUUFBSSxXQUFXLFFBQVE7QUFBbUIsc0JBQWdCO0FBQUE7QUFHNUQsUUFBTSxxQkFBcUIsZ0JBQ3pCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sc0JBQXNCO0FBRTVCLFFBQU0sZ0NBQ0osd0JBQXdCLGFBQ3hCLHdCQUF3QixhQUN4Qix3QkFBd0IsZ0JBQ3hCLHdCQUF3QixtQkFDeEIsd0JBQXdCO0FBRTFCLFNBQ0Usb0NBQUMsMkJBQUQ7QUFBQSxJQUNFLG1CQUFtQixpQkFBaUI7QUFBQSxJQUNwQyxTQUFTO0FBQUEsS0FFVCxvQ0FBQywwQkFBRDtBQUFBLElBQTBCO0FBQUEsS0FDeEIsb0NBQUMsS0FBRCxNQUNHLGlDQUNDLG9DQUFDLGtCQUFEO0FBQUEsSUFBa0I7QUFBQSxNQUVwQixvQ0FBQyxzQkFBRCxRQUdGLG9DQUFDLGlCQUFEO0FBQUE7QUFNUixNQUFNLE1BQU0sT0FBTyxJQUFJLE1BQU07QUFBQSxFQUMzQixXQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
