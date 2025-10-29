import React, {useEffect, useState} from "../../../snowpack/pkg/react.js";
import SettingsColumn from "./components/SettingsColumn.js";
import CenterTrainingColumn from "./components/CenterTrainingColumn.js";
import {useContrast} from "../../hooks/useContrast.js";
import EditChordsModal from "./components/EditChordModal.js";
import {PageContainer} from "./trainingTest.styled.js";
import useTrainingScenarioAsDocumentTitle from "../../hooks/useTrainingScenarioAsDocumentTitle.js";
import {useStoreState, useStoreActions} from "../../store/store.js";
import {Redirect} from "../../../snowpack/pkg/react-router-dom.js";
import {PreviousTest} from "./components/PreviousTests.js";
import TestCompletePage from "../test-complete/testComplete.js";
import ImageSlider from "./components/imageSlider.js";
import {chordLibrary} from "../../data/chordLibrary.js";
function TrainingTestPage() {
  const contrast = useContrast();
  const currentTrainingScenario = useStoreState((store) => store.currentTriningScenario);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  useTrainingScenarioAsDocumentTitle();
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const currentTrainingSetting = useStoreState((store) => store.trainingSettings);
  const isTrainingTestDone = currentTrainingSetting.isTestDone;
  const isDisplayingIntroductionModal = useStoreState((store) => store.isDisplayingIntroductionModal);
  const setIsDisplayingIntroductionModal = useStoreActions((store) => store.setIsDisplayingIntroductionModal);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const trainingIsDone = useStoreState((store) => store.trainingIsDone);
  const [toggleValue, setToggleValue] = useState(true);
  const dictNameOfLibrary = {
    ALPHABET: chordLibrary.letters,
    LEXICAL: chordLibrary.lexical,
    ENGLISH: chordLibrary.lexical,
    TRIGRAM: chordLibrary.trigrams
  };
  useEffect(() => {
    document.title = "dot i/o";
    sessionStorage.removeItem("tempTestDeIncrement");
    sessionStorage.removeItem("Refresh");
    const payload = [];
    if (trainingLevel == "CPM") {
      payload.push("ALPHABET");
      if (wordTestNumber != void 0) {
        payload.push(wordTestNumber);
      }
    } else if (trainingLevel == "CHM") {
      payload.push("LEXICAL");
      if (wordTestNumber != void 0) {
        payload.push(wordTestNumber);
      }
    }
    beginTraining(payload);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageContainer, {
    contrast
  }, !currentTrainingScenario && /* @__PURE__ */ React.createElement(Redirect, {
    to: ""
  }), isTrainingTestDone == false && trainingIsDone == false && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(EditChordsModal, null), /* @__PURE__ */ React.createElement(SettingsColumn, null), /* @__PURE__ */ React.createElement(CenterTrainingColumn, null), wordTestNumber == void 0 ? /* @__PURE__ */ React.createElement(PreviousTest, null) : /* @__PURE__ */ React.createElement("div", {
    className: "invisible"
  }, /* @__PURE__ */ React.createElement(PreviousTest, null)), isDisplayingIntroductionModal || localStorage.getItem("FirstTimeViewingModal") == void 0 ? /* @__PURE__ */ React.createElement("div", {
    style: modal
  }, /* @__PURE__ */ React.createElement("div", {
    style: modal_content
  }, /* @__PURE__ */ React.createElement("button", {
    className: "close absolute ml-96 text-5xl text-white",
    onClick: () => [
      setToggleValue(!toggleValue),
      localStorage.setItem("FirstTimeViewingModal", JSON.stringify(true)),
      setIsDisplayingIntroductionModal(false)
    ]
  }, "×"), /* @__PURE__ */ React.createElement(ImageSlider, null))) : null), (isTrainingTestDone == true || trainingIsDone) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TestCompletePage, null))));
}
export default TrainingTestPage;
const modal = {
  position: "absolute",
  zIndex: "1",
  left: "5%",
  width: "75%",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.25)"
};
const modal_content = {
  backgroundColor: "#222424",
  position: "absolute",
  top: "20%",
  left: "20%",
  borderRadius: "5px",
  border: "2px solid black"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC90cmFpbmluZ1Rlc3QudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSw0QkFBMEM7QUFDeEMsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFlLE1BQU07QUFDM0Q7QUFDQSxRQUFNLGdCQUFnQixnQkFDcEIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSx5QkFBeUIsY0FDN0IsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxxQkFBcUIsdUJBQXVCO0FBQ2xELFFBQU0sZ0NBQWdDLGNBQ3BDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sbUNBQW1DLGdCQUN2QyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBRTFELFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFJdEQsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVM7QUFFL0MsUUFBTSxvQkFBb0I7QUFBQSxJQUN4QixVQUFVLGFBQWE7QUFBQSxJQUN2QixTQUFTLGFBQWE7QUFBQSxJQUN0QixTQUFTLGFBQWE7QUFBQSxJQUN0QixTQUFTLGFBQWE7QUFBQTtBQUd4QixZQUFVLE1BQU07QUFDZCxhQUFTLFFBQVE7QUFDakIsbUJBQWUsV0FBVztBQUMxQixtQkFBZSxXQUFXO0FBQzFCLFVBQU0sVUFBaUI7QUFFdkIsUUFBSSxpQkFBaUIsT0FBTztBQUMxQixjQUFRLEtBQUs7QUFDYixVQUFJLGtCQUFrQixRQUFXO0FBQy9CLGdCQUFRLEtBQUs7QUFBQTtBQUFBLGVBRU4saUJBQWlCLE9BQU87QUFDakMsY0FBUSxLQUFLO0FBQ2IsVUFBSSxrQkFBa0IsUUFBVztBQUMvQixnQkFBUSxLQUFLO0FBQUE7QUFBQTtBQUdqQixrQkFBYztBQUFBLEtBQ2I7QUFFSCxTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLGVBQUQ7QUFBQSxJQUFlO0FBQUEsS0FDWixDQUFDLDJCQUEyQixvQ0FBQyxVQUFEO0FBQUEsSUFBVSxJQUFHO0FBQUEsTUFDekMsc0JBQXNCLFNBQVMsa0JBQWtCLFNBQ2hELG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLGlCQUFELE9BQ0Esb0NBQUMsZ0JBQUQsT0FDQSxvQ0FBQyxzQkFBRCxPQUNDLGtCQUFrQixTQUNqQixvQ0FBQyxjQUFELFFBRUEsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsY0FBRCxRQUdILGlDQUNELGFBQWEsUUFBUSw0QkFBNEIsU0FDL0Msb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTztBQUFBLEtBQ1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTztBQUFBLEtBQ1Ysb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQUEsTUFDYixlQUFlLENBQUM7QUFBQSxNQUNoQixhQUFhLFFBQ1gseUJBQ0EsS0FBSyxVQUFVO0FBQUEsTUFFakIsaUNBQWlDO0FBQUE7QUFBQSxLQUVwQyxNQUdELG9DQUFDLGFBQUQsVUFHRixPQUdOLHVCQUFzQixRQUFRLG1CQUM5QixvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxrQkFBRDtBQUFBO0FBUVosZUFBZTtBQUVmLE1BQU0sUUFBUTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsaUJBQWlCO0FBQUE7QUFHbkIsTUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixpQkFBaUI7QUFBQSxFQUNqQixVQUFVO0FBQUEsRUFDVixLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixjQUFjO0FBQUEsRUFDZCxRQUFRO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
