import React, {useState} from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {connectDeviceAndPopUp} from "../../manager/components/connect.js";
import {getId} from "../../manager/components/getID.js";
import {chordLibrary} from "../../../data/chordLibrary.js";
import {useWordsPerMinute} from "../../../hooks/useWordsPerMinute.js";
import {createEmptyChordStatistics} from "../../../models/trainingStatistics.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
export function TrainingModeSelector() {
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const trainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const testValue = useStoreState((store) => store.wordTestNumber);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const moduleNumber = useStoreState((store) => store.moduleNumber);
  const setModuleNumber = useStoreActions((store) => store.setModuleNumber);
  const setDownloadModuleModalToggle = useStoreActions((store) => store.setDownloadModuleModalToggle);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const updateTrainingSetting = (newProperty) => setTrainingSettings({...trainingSettings, ...newProperty});
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const wpm = useWordsPerMinute();
  const [checkIfUserChangedLevels, setCheckIfUserChangedLevels] = useState("CPM");
  async function LearnPageFunction(value, tier) {
    const payload = [];
    payload.push(value);
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  function allChords() {
    const doesLibraryExist = localStorage.getItem("chordsReadFromDevice");
    const id = getId();
    if (id != null && doesLibraryExist == void 0 || null) {
      connectDeviceAndPopUp();
      setDownloadModuleModalToggle(true);
    } else {
      LearnPageFunction("ALLCHORDS", trainingLevel);
    }
  }
  function TestPageFunction(value, testLength) {
    const payload = [];
    payload.push(value);
    payload.push(testLength);
    sessionStorage.removeItem("tempTestDeIncrement");
    sessionStorage.removeItem("Refresh");
    sessionStorage.setItem("CustomNonRefresh", JSON.stringify(1));
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  function whatModuleSelectionToShow() {
    const tempStoredChordStatistics = [];
    if (checkIfUserChangedLevels != trainingLevel) {
      setCheckIfUserChangedLevels(trainingLevel);
      setModuleNumber(1);
    }
    if (trainingLevel == "CPM") {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 1 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(1),
          LearnPageFunction("ALPHABET", trainingLevel)
        ]
      }, "Letters"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 2 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(2),
          LearnPageFunction("TRIGRAM", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Trigrams"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 3 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(3),
          LearnPageFunction("LEXICAL", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Words"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 4 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(4),
          TestPageFunction("LEXICAL", 26),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Test"));
    } else if (trainingLevel == "CHM") {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 1 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(1),
          LearnPageFunction("LEXICAL", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "English 300"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 2 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(2),
          allChords(),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "All Chords"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 3 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(3),
          LearnPageFunction("LEXICOGRAPHIC", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Custom"));
    } else if (trainingLevel == "StM") {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 1 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(1),
          LearnPageFunction("LEXICALSENTENCES", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Chords"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 2 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(2),
          LearnPageFunction("LEXICALSENTENCESDUOS", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Duos"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 3 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(3),
          LearnPageFunction("LEXICALSENTENCESTRIOS", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Trios"), /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement("button", {
        ...moduleNumber == 4 ? {className: " text-white m-2 font-mono"} : {className: " text-neutral-400 m-2 font-mono"},
        onClick: () => [
          setModuleNumber(4),
          LearnPageFunction("LEXICALSENTENCES", trainingLevel),
          document.getElementById("chordsInput")?.focus()
        ]
      }, "Test"));
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ItemsContainer, null, whatModuleSelectionToShow()));
}
export async function oneTimeCreateStoredChordStats(value, tier, library) {
  const check = localStorage?.getItem(tier + "_" + value);
  if (check == null || void 0) {
    const storedChordStatArray = [];
    for (let i = 0; i < Object?.keys(library)?.length; i++) {
      storedChordStatArray.push(createEmptyChordStatistics(Object?.keys(library)[i], value));
    }
    localStorage.setItem(tier + "_" + value, JSON.stringify({statistics: storedChordStatArray}));
  }
}
export async function oneTimeCreateLexicalStoredSentences(value, tier) {
  const check = localStorage?.getItem(tier + "_Scores");
  const ItemArray = [];
  if (check == null || void 0) {
    Object.keys(chordLibrary.lexicalSentences).forEach((key, index) => {
      ItemArray.push(key);
    });
    const storedChordStatArray = [];
    for (let i = 0; i < ItemArray.length; i++) {
      storedChordStatArray.push(createEmptyLexicalSentenceStatistics(ItemArray[i], value));
    }
    localStorage.setItem(tier + "_Scores", JSON.stringify({statistics: storedChordStatArray}));
  }
}
const ItemsContainer = styled.div`
  height: 50px;
  display: flex;
  color: white;
  position: relative;
  flex-direction: row;
  padding: '1rem';
  justify-content: center;
  align-items: center;
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1RyYWluaW5nTW9kZVNlbGVjdG9yLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyx1Q0FBOEM7QUFDbkQsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sbUJBQW1CLGNBQ3ZCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sWUFBWSxjQUFjLENBQUMsVUFBZSxNQUFNO0FBQ3RELFFBQU0sZ0JBQWdCLGNBQWMsQ0FBQyxVQUFlLE1BQU07QUFDMUQsUUFBTSxlQUFlLGNBQWMsQ0FBQyxVQUFlLE1BQU07QUFDekQsUUFBTSxrQkFBa0IsZ0JBQ3RCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sK0JBQStCLGdCQUNuQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLG1CQUFtQixjQUN2QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLHdCQUF3QixDQUFDLGdCQUM3QixvQkFBb0IsSUFBSyxxQkFBcUI7QUFDaEQsUUFBTSxzQkFBc0IsZ0JBQzFCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sTUFBTTtBQUVaLFFBQU0sQ0FBQywwQkFBMEIsK0JBQStCLFNBQzlEO0FBR0YsbUNBQWlDLE9BQVksTUFBc0I7QUFDakUsVUFBTSxVQUFpQjtBQUN2QixZQUFRLEtBQUs7QUFDYixtQkFBZSxXQUFXO0FBQzFCLGtCQUFjO0FBQUE7QUFFaEIsdUJBQXFCO0FBQ25CLFVBQU0sbUJBQW1CLGFBQWEsUUFBUTtBQUM5QyxVQUFNLEtBQUs7QUFDWCxRQUFLLE1BQU0sUUFBUSxvQkFBb0IsVUFBYyxNQUFNO0FBQ3pEO0FBQ0EsbUNBQTZCO0FBQUEsV0FDeEI7QUFDTCx3QkFBa0IsYUFBYTtBQUFBO0FBQUE7QUFJbkMsNEJBQTBCLE9BQWUsWUFBaUI7QUFD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
