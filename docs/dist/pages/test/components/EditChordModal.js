import React, {useRef, useState} from "../../../../snowpack/pkg/react.js";
import {Portal} from "../../../../snowpack/pkg/react-portal.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {
  avgCalculatorForTheSpeedOfLastTen,
  stmCalculator
} from "../../../helpers/aggregation.js";
import {chordLibrary} from "../../../data/chordLibrary.js";
import {useCurrentTrainingScenario} from "../../../hooks/useCurrentTrainingScenario.js";
import usePopover from "../../../hooks/usePopover.js";
import {
  pickerLite,
  pickerV1
} from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {
  getGlobalDictionaries,
  setGlobalDictionaries
} from "../../../store/trainingStore/actions.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
import {ThirdButton} from "./ThirdButton.js";
import {XIcon} from "./XIcon.js";
export const triggerResizeForChordModal = () => {
  window.dispatchEvent(new Event("resize"));
};
function EditChordsModal() {
  const isShowingPortal = useStoreState((store) => store.isDisplayingChordEditModal);
  const trainingMode = useStoreState((store) => store.currentTrainingScenario);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const level = [trainingMode];
  const lexicalSentencesIndex = useStoreState((store) => store.lexicalSentencesIndex);
  const setLexicalSentencesIndex = useStoreActions((store) => store.setLexicalSentencesIndex);
  const beginTrainingMode = useStoreActions((store) => store.beginTrainingMode);
  const payload = [];
  payload.push(trainingMode);
  const chordsToPullFrom = useStoreState((store) => store.chordsToPullFrom);
  const storedChordsRepresentation = useStoreState((store) => store.storedChordsRepresentation);
  const [chords, setChords] = useState(getDefaultChords(trainingMode, storedChordsRepresentation, lexicalSentencesIndex, trainingLevel, chordsToPullFrom));
  const [clearChordsState, setClearChords] = useState(false);
  const [tempChords, setTempChords] = useState(chords);
  {
    tempChords.length == 0 && isShowingPortal && !clearChordsState ? [
      setTempChords(getDefaultChords(trainingMode, storedChordsRepresentation, lexicalSentencesIndex, trainingLevel, chordsToPullFrom)),
      setChords(getDefaultChords(trainingMode, storedChordsRepresentation, lexicalSentencesIndex, trainingLevel, chordsToPullFrom))
    ] : "";
  }
  const inputRef = useRef(null);
  const trainingScenario = useCurrentTrainingScenario();
  const trainingStatistics = useStoreState((store) => store.trainingStatistics);
  const updateChordsUsedInStore = useStoreActions((store) => store.updateChordsUsedForTraining);
  const togglePortal = useStoreActions((store) => store.toggleChordEditModal);
  const removeChord = (index) => {
    setTempChords(tempChords.map((c, i) => i === index ? void 0 : c).filter((item) => typeof item === "string"));
  };
  const setInputValue = (value) => {
    if (inputRef.current)
      inputRef.current.value = value;
  };
  const phraseSeparator = " ";
  const spaceSeparator = "_";
  const canCloseModal = trainingScenario === "LEXICAL" || trainingScenario === "TRIGRAM";
  const addChord = (chord) => {
    const parts = chord?.split(phraseSeparator).map((e) => e.replaceAll(spaceSeparator, " ")) || [];
    if (parts.length) {
      setTempChords([...tempChords, ...parts]);
      setInputValue("");
    }
  };
  const clearChords = () => {
    setClearChords(true);
    setTempChords([]);
  };
  const restoreDefaults = () => {
    setTempChords(getDefaultChordsFromChordLibrary(trainingMode));
  };
  const cancelEditing = () => {
    setTempChords(chords);
    togglePortal();
    setInputValue("");
  };
  const groupIntoPairs = (array) => {
    if (array.length < 2) {
      return array;
    } else {
      return array.map((e, i) => i < array.length - 1 ? [e + " " + array[i + 1]] : void 0).filter((e) => !!e);
    }
  };
  const confirmEditing = async () => {
    sessionStorage.removeItem("CustomTierTestValue");
    sessionStorage.removeItem("tempTestDeIncrement");
    if (typeof trainingScenario === "string")
      setGlobalDictionaries({
        ...getGlobalDictionaries(),
        [trainingScenario]: generateNewChordRecord(tempChords)
      });
    let chordsToUse = [];
    const shouldGroupChords = trainingScenario === "SUPERSONIC";
    if (shouldGroupChords)
      chordsToUse = groupIntoPairs(tempChords);
    else
      chordsToUse = tempChords;
    const hasChangeBeenMade = JSON.stringify(tempChords) !== JSON.stringify(chords) || trainingScenario === "SUPERSONIC" || trainingScenario == "ALLCHORDS";
    if (hasChangeBeenMade) {
      const newChordLibraryRecord = generateNewChordRecord(chordsToUse);
      updateChordsUsedInStore(newChordLibraryRecord);
      setChords(tempChords);
      setInputValue("");
    }
    togglePortal();
    document.getElementById("chordsInput")?.focus();
  };
  const generateNewChordRecord = (chords2) => {
    const newChordLibraryRecord = {};
    chords2.forEach((chord) => {
      if (chordLibrary.all[chord])
        newChordLibraryRecord[chord] = chordLibrary.all[chord];
      else
        newChordLibraryRecord[chord] = [];
    });
    return newChordLibraryRecord;
  };
  const addChords = () => {
    if (inputRef.current?.value)
      addChord(inputRef.current?.value);
  };
  const {parentProps, Popper} = usePopover(`You can enter multiple chords at once by separating them with a "${phraseSeparator}" character. Create multi-word chords by separating words with a "${spaceSeparator}"`);
  const StMIndexes = [];
  let stmStats = trainingStatistics?.stmStatistics?.find((c) => c.sentenceIndex === lexicalSentencesIndex);
  let tempWPM = "0";
  Object.keys(chordLibrary.lexicalSentences).forEach((key, index) => {
    StMIndexes.push(key);
  });
  return /* @__PURE__ */ React.createElement("div", null, isShowingPortal && /* @__PURE__ */ React.createElement(Portal, null, isShowingPortal && sessionStorage.getItem("Refresh") != void 0 ? [confirmEditing] : /* @__PURE__ */ React.createElement("div", {
    onClick: cancelEditing,
    className: "fixed inset-0 width-screen height-screen bg-opacity-70 bg-black flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: stopPropagation,
    className: "w-[600px] max-w-[100vw] bg-black p-2 shadow-lg"
  }, trainingLevel != "StM" && /* @__PURE__ */ React.createElement(ChordGrid, null, tempChords.map((chord, index) => {
    return /* @__PURE__ */ React.createElement(ChordTag, {
      onClick: () => {
        removeChord(index);
      },
      key: Math.random()
    }, /* @__PURE__ */ React.createElement(Chord, null, chord), /* @__PURE__ */ React.createElement(XIcon, null));
  })), trainingLevel == "StM" && /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement(HeaderSentenceItem, null, "Sentence"), /* @__PURE__ */ React.createElement(HeaderItems, null, "Chords"), /* @__PURE__ */ React.createElement(HeaderItems, null, "WPM"), /* @__PURE__ */ React.createElement(HeaderItems, null, "StM")), StMIndexes.map((sentenceIndex, index) => {
    stmStats = trainingStatistics?.stmStatistics?.find((c) => c.sentenceIndex === sentenceIndex);
    stmStats == void 0 || null ? tempWPM = "0" : tempWPM = avgCalculatorForTheSpeedOfLastTen(stmStats.speedOfLastTenTests).toFixed(0);
    return /* @__PURE__ */ React.createElement(SentenceAndStatsContainer, {
      key: Math.random(),
      onClick: () => {
        [
          setLexicalSentencesIndex("" + sentenceIndex + ""),
          togglePortal(!isShowingPortal),
          beginTrainingMode(payload)
        ];
      }
    }, /* @__PURE__ */ React.createElement(SentenceContainer, null, Object.keys(chordLibrary.lexicalSentences[sentenceIndex]).join(" ")), /* @__PURE__ */ React.createElement(SentenceStats, null, Object.keys(chordLibrary.lexicalSentences[sentenceIndex]).length), /* @__PURE__ */ React.createElement(SentenceStats, null, tempWPM), /* @__PURE__ */ React.createElement(SentenceStats, null, stmCalculator(tempWPM, Object.keys(chordLibrary.lexicalSentences[sentenceIndex]).length).toFixed(2)));
  })), trainingLevel != "StM" && /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full mt-2"
  }, /* @__PURE__ */ React.createElement(ChordInput, {
    type: "text",
    id: "ChordModalInput",
    placeholder: "New chord...",
    ref: inputRef,
    onKeyDown: (e) => {
      if (e.key === "Enter")
        addChords();
    }
  }), /* @__PURE__ */ React.createElement("div", {
    ...parentProps,
    className: "absolute right-0 top-0 h-full flex flex-col items-center justify-center w-10"
  }, /* @__PURE__ */ React.createElement(HelpCircleIcon, null))), Popper, /* @__PURE__ */ React.createElement(AddButton, {
    onClick: addChords
  }, "Add")), /* @__PURE__ */ React.createElement(BottomButtonRow, null, /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Cancel",
    onClick: cancelEditing
  }), trainingLevel != "StM" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Confirm",
    onClick: confirmEditing
  }), /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Clear",
    onClick: clearChords
  })))))));
}
export const getDefaultChords = (trainingMode, storedChordsRepresentation, lexicalSentencesIndex, trainingLevel, chordsToPullFrom) => {
  const globalDictionaries = getGlobalDictionaries();
  if (trainingLevel == "StM") {
    const tp = chordsToPullFrom;
    return Object.keys(tp[lexicalSentencesIndex]);
  }
  if (trainingMode && globalDictionaries[trainingMode]) {
    return Object.keys(globalDictionaries[trainingMode]);
  } else if (trainingMode == "ALLCHORDS") {
    return Object.keys(getChordLibraryForTrainingScenario(trainingMode, storedChordsRepresentation) || {});
  } else {
    return Object.keys(getChordLibraryForTrainingScenario(trainingMode) || {});
  }
};
export const getDefaultChordsFromChordLibrary = (trainingMode) => {
  return Object.keys(getChordLibraryForTrainingScenario(trainingMode) || {});
};
export const stopPropagation = (e) => e.stopPropagation();
export default EditChordsModal;
const AddButton = styled.button.attrs({
  className: `ml-2 rounded mt-2 w-16 h-10 bg-white hover:bg-gray-200 active:bg-gray-300 text-sm`
})``;
const BottomButtonRow = styled.div.attrs({
  className: `flex flex-row mt-2 text-sm gap-2`
})``;
const ChordInput = styled.input.attrs({
  className: `relative shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
})``;
const Row = styled.div.attrs({
  className: `flex flex-row`
})``;
const Chord = styled.span.attrs({
  className: `mb-1`
})``;
const ChordTag = styled.span.attrs({
  className: `bg-gray-300 text-gray-900 hover:bg-gray-400 rounded-full px-3 h-8 flex flex-row items-center pr-2 leading-loose`
})``;
const ChordGrid = styled.div.attrs({
  className: `bg-white break-all rounded overflow-x-hidden h-[400px] max-h-[90vh] flex flex-row flex-wrap p-2 gap-x-1 gap-y-1 content-start overflow-scroll`
})``;
const Container = styled.button.attrs({
  className: ` bg-white rounded overflow-x-hidden h-[400px] max-h-[90vh] flex flex-row w-full flex-wrap p-2 gap-x-1 gap-y-1 content-start overflow-scroll`
})``;
const SentenceAndStatsContainer = styled.button.attrs({
  className: `bg-gray-300 text-gray-900 w-full hover:bg-gray-400 rounded px-3 flex flex-row items-left pr-2 leading-loose`
})``;
const Header = styled.div.attrs({
  className: `text-gray-900 w-full font-bold rounded px-3 flex flex-row items-left pr-2 leading-loose`
})``;
const HeaderItems = styled.div.attrs({
  className: `w-1/4`
})``;
const HeaderSentenceItem = styled.div.attrs({
  className: `tile w-3/4 text-left	`
})``;
const SentenceContainer = styled.div.attrs({
  className: `tile w-3/4 text-left	`
})``;
const SentenceStats = styled.div.attrs({
  className: `w-1/4`
})``;
export const generateNewChordRecordForAllChordsModule = (chords) => {
  const chordStats = chords?.statistics;
  const newChordLibraryRecord = {};
  for (let i = 0; i < chordStats?.length; i++) {
    if (chordLibrary?.all[chordStats[i]?.id])
      newChordLibraryRecord[chordStats[i]?.id] = chordLibrary?.all[chordStats[i].id];
    else
      newChordLibraryRecord[chordStats[i]?.id] = [];
  }
  return newChordLibraryRecord;
};
export const getChordLibraryForTrainingScenario = (scenario, chordRepresentation) => {
  if (scenario === "ALPHABET")
    return chordLibrary.letters;
  else if (scenario === "CHORDING" && pickerV1)
    return chordLibrary.chords;
  else if (scenario === "CHORDING" && pickerLite)
    return chordLibrary.chordsLite;
  else if (scenario === "CUSTOMTIER")
    return chordLibrary.customtier;
  else if (scenario === "LEXICAL")
    return chordLibrary.lexical;
  else if (scenario === "TRIGRAM")
    return chordLibrary.trigrams;
  else if (scenario === "LEXICOGRAPHIC")
    return chordLibrary.lexicographic;
  else if (scenario === "SUPERSONIC")
    return chordLibrary.supersonic;
  else if (scenario === "LEXICALSENTENCES")
    return chordLibrary.lexicalSentences;
  else if (scenario === "LEXICALSENTENCESDUOS")
    return chordLibrary.lexicalSentencesDuos;
  else if (scenario === "LEXICALSENTENCESTRIOS")
    return chordLibrary.lexicalSentencesTrios;
  else if (scenario === "ALLCHORDS") {
    return chordRepresentation;
  }
  return void 0;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0VkaXRDaG9yZE1vZGFsLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRU8sYUFBTSw2QkFBNkIsTUFBTTtBQUk5QyxTQUFPLGNBQWMsSUFBSSxNQUFNO0FBQUE7QUFHakMsMkJBQXlDO0FBQ3ZDLFFBQU0sa0JBQWtCLGNBQ3RCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sZUFBZSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3BELFFBQU0sZ0JBQWdCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDckQsUUFBTSxRQUFRLENBQUM7QUFDZixRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLDJCQUEyQixnQkFDL0IsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxvQkFBb0IsZ0JBQWdCLENBQUMsVUFBVSxNQUFNO0FBQzNELFFBQU0sVUFBaUI7QUFDdkIsVUFBUSxLQUFLO0FBRWIsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUN4RCxRQUFNLDZCQUE2QixjQUNqQyxDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLENBQUMsUUFBUSxhQUFhLFNBQzFCLGlCQUNFLGNBQ0EsNEJBQ0EsdUJBQ0EsZUFDQTtBQUdKLFFBQU0sQ0FBQyxrQkFBa0Isa0JBQWtCLFNBQVM7QUFFcEQsUUFBTSxDQUFDLFlBQVksaUJBQWlCLFNBQVM7QUFFN0M7QUFDRSxlQUFXLFVBQVUsS0FBSyxtQkFBbUIsQ0FBQyxtQkFDMUM7QUFBQSxNQUNFLGNBQ0UsaUJBQ0UsY0FDQSw0QkFDQSx1QkFDQSxlQUNBO0FBQUEsTUFHSixVQUNFLGlCQUNF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
