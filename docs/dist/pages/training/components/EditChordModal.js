import React, {useRef, useState} from "../../../../snowpack/pkg/react.js";
import {Portal} from "../../../../snowpack/pkg/react-portal.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {chordLibrary} from "../../../data/chordLibrary.js";
import {useCurrentTrainingScenario} from "../../../hooks/useCurrentTrainingScenario.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import {
  getGlobalDictionaries,
  setGlobalDictionaries
} from "../../../store/trainingStore/actions.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
import {ThirdButton} from "./ThirdButton.js";
import {XIcon} from "./XIcon.js";
import {
  pickerV1,
  pickerLite
} from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
function EditChordsModal() {
  const isShowingPortal = useStoreState((store) => store.isDisplayingChordEditModal);
  const trainingMode = useStoreState((store) => store.currentTrainingScenario);
  const [chords, setChords] = useState(getDefaultChords(trainingMode));
  const [tempChords, setTempChords] = useState(chords);
  const inputRef = useRef(null);
  const trainingScenario = useCurrentTrainingScenario();
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
    setTempChords([]);
  };
  const restoreDefaults = () => {
    setTempChords(getDefaultChordsFromChordLibrary(trainingMode));
  };
  const cancelEditing = () => {
    if (canCloseModal) {
      setTempChords(chords);
      togglePortal();
      setInputValue("");
    }
  };
  const groupIntoPairs = (array) => {
    if (array.length < 2) {
      return array;
    } else {
      return array.map((e, i) => i < array.length - 1 ? [e + " " + array[i + 1]] : void 0).filter((e) => !!e);
    }
  };
  const confirmEditing = () => {
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
    const hasChangeBeenMade = JSON.stringify(tempChords) !== JSON.stringify(chords) || trainingScenario === "SUPERSONIC";
    if (hasChangeBeenMade) {
      const newChordLibraryRecord = generateNewChordRecord(chordsToUse);
      updateChordsUsedInStore(newChordLibraryRecord);
      setChords(tempChords);
      setInputValue("");
    }
    togglePortal();
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
  return /* @__PURE__ */ React.createElement("div", null, isShowingPortal && /* @__PURE__ */ React.createElement(Portal, null, /* @__PURE__ */ React.createElement("div", {
    onClick: cancelEditing,
    className: "fixed inset-0 width-screen height-screen bg-opacity-70 bg-black flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: stopPropagation,
    className: "w-[600px] max-w-[100vw] bg-black p-2 shadow-lg"
  }, /* @__PURE__ */ React.createElement(ChordGrid, null, tempChords.map((chord, index) => {
    return /* @__PURE__ */ React.createElement(ChordTag, {
      onClick: () => {
        removeChord(index);
      },
      key: Math.random()
    }, /* @__PURE__ */ React.createElement(Chord, null, chord), /* @__PURE__ */ React.createElement(XIcon, null));
  })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full mt-2"
  }, /* @__PURE__ */ React.createElement(ChordInput, {
    type: "text",
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
    title: "Restore Defaults",
    onClick: restoreDefaults
  }), canCloseModal && /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Cancel",
    onClick: cancelEditing
  }), /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Confirm",
    onClick: confirmEditing
  }), /* @__PURE__ */ React.createElement(ThirdButton, {
    title: "Clear",
    onClick: clearChords
  }))))));
}
export const getDefaultChords = (trainingMode) => {
  const globalDictionaries = getGlobalDictionaries();
  if (trainingMode && globalDictionaries[trainingMode]) {
    return Object.keys(globalDictionaries[trainingMode]);
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
  className: `bg-white break-all rounded overflow-x-hidden h-[400px] max-h-[90vh] flex flex-row flex-wrap p-2 gap-x-1 gap-y-1 content-start  overflow-scroll`
})``;
export const getChordLibraryForTrainingScenario = (scenario) => {
  if (scenario === "ALPHABET")
    return chordLibrary.letters;
  else if (scenario === "CHORDING" && pickerV1)
    return chordLibrary.chords;
  else if (scenario === "CHORDING" && pickerLite)
    return chordLibrary.chordsLite;
  else if (scenario === "LEXICAL")
    return chordLibrary.lexical;
  else if (scenario === "TRIGRAM")
    return chordLibrary.trigrams;
  else if (scenario === "LEXICOGRAPHIC")
    return chordLibrary.lexicographic;
  else if (scenario === "SUPERSONIC")
    return chordLibrary.supersonic;
  return void 0;
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9FZGl0Q2hvcmRNb2RhbC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQSwyQkFBeUM7QUFDdkMsUUFBTSxrQkFBa0IsY0FDdEIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxlQUFlLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDcEQsUUFBTSxDQUFDLFFBQVEsYUFBYSxTQUFTLGlCQUFpQjtBQUN0RCxRQUFNLENBQUMsWUFBWSxpQkFBaUIsU0FBUztBQUM3QyxRQUFNLFdBQVcsT0FBeUI7QUFDMUMsUUFBTSxtQkFBbUI7QUFFekIsUUFBTSwwQkFBMEIsZ0JBQzlCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sZUFBZSxnQkFBZ0IsQ0FBQyxVQUFVLE1BQU07QUFFdEQsUUFBTSxjQUFjLENBQUMsVUFBa0I7QUFDckMsa0JBQ0UsV0FDRyxJQUFJLENBQUMsR0FBRyxNQUFPLE1BQU0sUUFBUSxTQUFZLEdBQ3pDLE9BQU8sQ0FBQyxTQUF5QixPQUFPLFNBQVM7QUFBQTtBQUl4RCxRQUFNLGdCQUFnQixDQUFDLFVBQWtCO0FBQ3ZDLFFBQUksU0FBUztBQUFTLGVBQVMsUUFBUSxRQUFRO0FBQUE7QUFHakQsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxpQkFBaUI7QUFFdkIsUUFBTSxnQkFDSixxQkFBcUIsYUFBYSxxQkFBcUI7QUFFekQsUUFBTSxXQUFXLENBQUMsVUFBbUI7QUFDbkMsVUFBTSxRQUNKLE9BQ0ksTUFBTSxpQkFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsZ0JBQWdCLFNBQVM7QUFDdEQsUUFBSSxNQUFNLFFBQVE7QUFDaEIsb0JBQWMsQ0FBQyxHQUFHLFlBQVks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
