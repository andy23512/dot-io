import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import CharachorderOverlayLite from "./CharachorderOverlayCharachorderLite.js";
import {FullWidthFullHeightContainer} from "./FullWidthFullHeightContainer.js";
import {TextPrompt} from "./TextPrompt.js";
import ChordTextInput from "./ChordTextInput.js";
import DropDown from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
import Footer from "../../../components/footer.js";
import NextTestButton from "./NextTestButton.js";
import RefreshButton from "./RefreshButton.js";
import {TrainingModeSelector} from "./TrainingModeSelector.js";
import {ProgressBar} from "./ProgressBar.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
import ModuleCompleteModal from "./ModuleCompleteModal.js";
import {EditChordsButton} from "./EditChordsButton.js";
function CenterTrainingColumn() {
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const openChordEditModal = useStoreActions((store) => store.toggleChordEditModal);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CenterTrainingColumnContainer, null, /* @__PURE__ */ React.createElement(SmallScreenButtons, null), /* @__PURE__ */ React.createElement(TrainingModeSelector, null), /* @__PURE__ */ React.createElement(ProgressBar, null), /* @__PURE__ */ React.createElement(ChordTextInput, null), /* @__PURE__ */ React.createElement(TextPrompt, null), /* @__PURE__ */ React.createElement(ModuleCompleteModal, null), /* @__PURE__ */ React.createElement(ItemsContainer, null, trainingLevel == "StM" || void 0 ? /* @__PURE__ */ React.createElement(EditChordsButton, {
    openChordEditModal
  }) : "", currentTrainingScenario == "LEXICAL" && wordTestNumber != null || void 0 ? "" : /* @__PURE__ */ React.createElement(RefreshButton, null), /* @__PURE__ */ React.createElement(NextTestButton, null)), /* @__PURE__ */ React.createElement(FullWidthFullHeightContainer, null, /* @__PURE__ */ React.createElement(CharachorderOverlayLite, null)), /* @__PURE__ */ React.createElement(DropDown, null), /* @__PURE__ */ React.createElement(Footer, null)));
}
const CenterTrainingColumnContainer = styled.div.attrs({
  className: "flex flex-col text-center align-center w-full xl:w-5/6 ml-auto mr-auto lgml-36 relative bg-[#222424]"
})``;
const ItemsContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: '1rem';
  justify-content: center;
  align-items: center;
`;
const f = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;
const SmallScreenButtons = styled.div.attrs({
  className: "xl:hidden flex flex-row justify-between w-full mb-4"
})``;
export default CenterTrainingColumn;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NlbnRlclRyYWluaW5nQ29sdW1uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUE4QztBQUM1QyxRQUFNLDBCQUEwQixjQUM5QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzFELFFBQU0scUJBQXFCLGdCQUN6QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLGlCQUFpQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzNELFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsK0JBQUQsTUFDRSxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHNCQUFELE9BQ0Esb0NBQUMsYUFBRCxPQUNBLG9DQUFDLGdCQUFELE9BQ0Esb0NBQUMsWUFBRCxPQUNBLG9DQUFDLHFCQUFELE9BRUEsb0NBQUMsZ0JBQUQsTUFDRyxpQkFBaUIsU0FBUyxTQUN6QixvQ0FBQyxrQkFBRDtBQUFBLElBQWtCO0FBQUEsT0FFbEIsSUFFQSwyQkFBMkIsYUFBYSxrQkFBa0IsUUFDNUQsU0FDRSxLQUVBLG9DQUFDLGVBQUQsT0FHRixvQ0FBQyxnQkFBRCxRQUVGLG9DQUFDLDhCQUFELE1BQ0Usb0NBQUMseUJBQUQsUUFFRixvQ0FBQyxVQUFELE9BQ0Esb0NBQUMsUUFBRDtBQUFBO0FBTVIsTUFBTSxnQ0FBZ0MsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUNyRCxXQUNFO0FBQUE7QUFHSixNQUFNLGlCQUFpQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFROUIsTUFBTSxJQUFJLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWpCLE1BQU0scUJBQXFCLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDMUMsV0FBVztBQUFBO0FBR2IsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
