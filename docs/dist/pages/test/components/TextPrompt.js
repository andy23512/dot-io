import React, {useState} from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
const r = Math.random;
export function TextBlurredScreen() {
  const setTextPromptUnFocused = useStoreActions((store) => store.setTextPromptUnFocused);
  const setStartTimer = useStoreActions((store) => store.setStartTimer);
  return /* @__PURE__ */ React.createElement("div", {
    className: "wi from-green-800 bg-zinc-300 absolute w-full h-48 rounded-3xl pt-16 text-black",
    onClick: () => [
      document.getElementById("chordsInput")?.focus(),
      setTextPromptUnFocused(false),
      setStartTimer(true)
    ]
  }, "Click to Re-Focus");
}
export function TextPrompt() {
  const indexOfTargetChord = useStoreState((store) => store.currentSubindexInTrainingText);
  const setTextPromptUnFocused = useStoreActions((store) => store.setTextPromptUnFocused);
  const previousTargetTextLineOne = useStoreState((store) => store.previousTargetTextLineOne);
  const firstLineOfTargetText = useStoreState((store) => store.targetTextLineOne);
  const secondLineOfTargetText = useStoreState((store) => store.targetTextLineTwo);
  const thirdLineOfTargetText = useStoreState((store) => store.targetTextLineThree);
  const fourthLineOfTargetText = useStoreState((store) => store.targetTextLineFour);
  const isError = useStoreState((store) => store.errorOccurredWhileAttemptingToTypeTargetChord);
  const textPromptUnFocused = useStoreState((store) => store.textPromptUnFocused);
  const targetCharacterIndex = useStoreState((store) => store.targetCharacterIndex);
  const characterEntryMode = useStoreState((store) => store.characterEntryMode);
  const storeAllTypedText = useStoreActions((store) => store.setAllTypedCharactersStore);
  const allTypedText = useStoreState((store) => store.allTypedCharactersStore);
  const trainingTestCounter = useStoreState((store) => store.trainingTestCounter);
  const setTrainingTestCounter = useStoreActions((store) => store.setTrainingTestCounter);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const setTypedTrainingText = useStoreActions((store) => store.setTypedTrainingText);
  const storedTestTextData = useStoreState((store) => store.storedTestTextData);
  const setS = useStoreState((store) => store.compareText);
  const setCurrentSubindexInTrainingText = useStoreActions((store) => store.setCurrentSubindexInTrainingText);
  const setEditingPreviousWord = useStoreActions((store) => store.setUserIsEditingPreviousWord);
  const isEditingPreviousWord = useStoreState((store) => store.userIsEditingPreviousWord);
  const setChordingEnabled = useStoreActions((store) => store.setIsUsingChordingEnabledDevice);
  const setNumberOfWordsChorded = useStoreActions((store) => store.setNumberOfWordsChorded);
  const numberOfWordsChorded = useStoreState((store) => store.numberOfWordsChorded);
  const isChordingEnabled = useStoreState((store) => store.isUsingChordingEnabledDevice);
  const [bestKeyTime, setBestKeyTime] = useState([]);
  const [letterPressed, setLetterPressed] = useState([]);
  const [keyDownTime, setKeyDownTime] = useState(performance.now());
  const [currentWord, setCurrentWord] = useState(void 0);
  const [
    targetIndexForWhatErrorTextToShow,
    setTargetIndexForWhatErrorTextToShow
  ] = useState(0);
  const ChordingEnabledAlgorithm = (chordValue) => {
    window.performance = window.performance || {};
    performance.now = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || Date.now * 1;
    const body = document.getElementById("chordsInput");
    let isKeyDown = false;
    if (currentWord != chordValue && currentWord != void 0) {
      let numberOfBestTimesUnderTen = 0;
      if (letterPressed.includes("Backspace") && bestKeyTime.length > 2) {
        for (let i = 0; i < bestKeyTime.length - 1; i++) {
          if (bestKeyTime[i] <= 10) {
            numberOfBestTimesUnderTen++;
          }
        }
      }
      if (numberOfBestTimesUnderTen >= 2) {
        setChordingEnabled(true);
        setNumberOfWordsChorded();
      }
      setBestKeyTime([]);
      setLetterPressed([]);
    }
    currentWord != chordValue ? setCurrentWord(chordValue) : "";
    if (body != null) {
      body.onkeydown = function(e) {
        if (!e.metaKey) {
          e.stopPropagation();
        }
        if (!isKeyDown) {
          isKeyDown = true;
          setKeyDownTime(performance.now());
        }
      };
      body.onkeyup = function(e) {
        if (!e.metaKey) {
          e.stopPropagation();
        }
        isKeyDown = false;
        const upTime = performance.now();
        const heldTime = Math.ceil(upTime - keyDownTime);
        const tempBestTime = Math.min(1e4, heldTime);
        bestKeyTime.push(tempBestTime);
        letterPressed.push(e.key);
        setBestKeyTime((bestKeyTime2) => [...bestKeyTime2]);
        setLetterPressed((letterPressed2) => [...letterPressed2]);
      };
    }
  };
  function whatTextToShow(targetTextLineOne, targetChordIndex, indexOfCharacterInTargetChord, arr) {
    let displayArray = [];
    if (allTypedText.length >= 0 && storedTestTextData != void 0) {
      indexOfTargetChord - 1 == 0 && targetIndexForWhatErrorTextToShow != allTypedText.length - 1 ? setTargetIndexForWhatErrorTextToShow(allTypedText.length - 1) : "";
      if (targetIndexForWhatErrorTextToShow > allTypedText.length) {
        setTargetIndexForWhatErrorTextToShow(0);
      }
      let spacesBetweenWords = 0;
      let characterLengthOfTheEntireLine = 0;
      if (targetChordIndex == 0 && targetTextLineOne != void 0 && allTypedText.length >= 0) {
        const tempArray = [];
        let tempValue = "";
        let tempBufferInTheFront = "";
        let tempBufferInTheBack = "";
        let y = 0;
        const tempVal = storedTestTextData[indexOfTargetChord + targetIndexForWhatErrorTextToShow]?.length - arr.length;
        for (y; y < tempVal - targetCharacterIndex; y++) {
          tempBufferInTheBack += ".";
        }
        for (let g = 0; g < targetCharacterIndex; g++) {
          tempBufferInTheFront += ".";
        }
        tempArray.push(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
          className: "text-white m-0 flex"
        }, tempBufferInTheFront), /* @__PURE__ */ React.createElement("div", {
          className: "text-gray-500"
        }, arr), /* @__PURE__ */ React.createElement("span", {
          className: "text-white m-0 flex"
        }, tempBufferInTheBack)));
        for (let f = 1; f < targetTextLineOne.length; f++) {
          tempValue = targetTextLineOne[f] + " ";
          tempArray.push(/* @__PURE__ */ React.createElement("div", {
            className: "text-white"
          }, tempValue));
        }
        displayArray = tempArray;
        return [displayArray];
      }
      for (let i = targetIndexForWhatErrorTextToShow; i < allTypedText.length; i++) {
        const compare = allTypedText[i];
        const alphabetCompare = setS[setS.length - 1];
        characterLengthOfTheEntireLine += storedTestTextData[i]?.length;
        if (compare.charAt(compare.length - 1) == " " || currentTrainingScenario == "ALPHABET") {
          if (compare.slice(0, -1) == storedTestTextData[i] || currentTrainingScenario && compare == storedTestTextData[i]) {
            spacesBetweenWords += storedTestTextData[i]?.length;
            let placeholder = "";
            for (let k = 0; k < spacesBetweenWords; k++) {
              placeholder += "*";
            }
            displayArray.push(/* @__PURE__ */ React.createElement("div", {
              className: "text-white"
            }, placeholder));
            spacesBetweenWords = 0;
          } else {
            if (allTypedText[i]?.length - 1 > storedTestTextData[i]?.length) {
              let periodsIfLengthOfTypedErrorIsLongerThanChordsLength = "";
              for (let y = 0; y < storedTestTextData[i]?.length; y++) {
                periodsIfLengthOfTypedErrorIsLongerThanChordsLength += ".";
              }
              displayArray.push(/* @__PURE__ */ React.createElement("div", {
                className: "text-gray"
              }, periodsIfLengthOfTypedErrorIsLongerThanChordsLength));
            } else if (targetChordIndex != 0) {
              const tempValue = storedTestTextData[i]?.length - allTypedText[i]?.length;
              let tempBufferValues = "";
              for (let y = 0; y < tempValue; y++) {
                tempBufferValues += ".";
              }
              const thisNewArray = [];
              for (let t = 0; t < storedTestTextData[i]?.length; t++) {
                const tempCompareValue = allTypedText[i];
                const tempTargetWord = storedTestTextData[i];
                if (tempCompareValue != void 0) {
                  tempCompareValue[t] == (tempTargetWord[t] == void 0 ? "" : tempTargetWord[t]) ? thisNewArray.push(/* @__PURE__ */ React.createElement("span", {
                    className: "text-white m-0 flex"
                  }, tempTargetWord[t])) : thisNewArray.push(/* @__PURE__ */ React.createElement("span", {
                    className: " m-0 flex"
                  }, tempCompareValue[t]));
                } else {
                  thisNewArray.push(/* @__PURE__ */ React.createElement("span", {
                    className: "text-white m-0 flex"
                  }, tempTargetWord[t]));
                }
              }
              displayArray.push(/* @__PURE__ */ React.createElement("span", {
                className: "m-0 flex"
              }, thisNewArray));
            }
          }
        }
        if (allTypedText.length - i == 1) {
          const y = allTypedText.length;
          for (let d = y; d < targetTextLineOne?.length + targetIndexForWhatErrorTextToShow; d++) {
            let sd = "";
            for (let r2 = 0; r2 < storedTestTextData[d]?.length; r2++) {
              sd += "2";
            }
            sd += " ";
            d == y ? sd == sd.slice(1) : sd;
            displayArray.push(/* @__PURE__ */ React.createElement("div", {
              className: "text-white"
            }, sd));
          }
          if (arr.length != 0) {
            const tempVal = storedTestTextData[indexOfTargetChord + targetIndexForWhatErrorTextToShow]?.length - arr.length;
            let tempBufferValues = "";
            let frontBufferValues = "";
            for (let y2 = 0; y2 < tempVal - targetCharacterIndex; y2++) {
              tempBufferValues += ".";
            }
            for (let g = 0; g < targetCharacterIndex; g++) {
              frontBufferValues += ".";
            }
            displayArray[indexOfTargetChord] = /* @__PURE__ */ React.createElement("div", {
              style: {display: "flex", flexDirection: "row"}
            }, frontBufferValues.indexOf(".") != -1 ? /* @__PURE__ */ React.createElement("span", {
              className: "text-white m-0 flex"
            }, frontBufferValues) : "", /* @__PURE__ */ React.createElement("span", {
              className: "text-gray flex m-0"
            }, arr), tempBufferValues.indexOf(".") != -1 ? /* @__PURE__ */ React.createElement("span", {
              className: "text-white m-0 flex"
            }, tempBufferValues) : "");
          }
        }
      }
    }
    const input = document.getElementById("chordsInput");
    if (input != null) {
      input.onkeydown = (e) => {
        if (!e.metaKey) {
          e.stopPropagation();
        }
        setKeyDownTime(performance.now());
        const key = e.key;
        const sub = indexOfTargetChord - 1;
        if ((key === "Backspace" || key === "Delete") && indexOfTargetChord + targetIndexForWhatErrorTextToShow == allTypedText.length && input.value.length == 0) {
          if (allTypedText[indexOfTargetChord - 1] != void 0) {
            input.innerHTML = allTypedText[indexOfTargetChord - 1];
            const tt = allTypedText[allTypedText.length - 1];
            const canIPressBackspaceForAlphabet = allTypedText[indexOfTargetChord - 1 + targetIndexForWhatErrorTextToShow] != storedTestTextData[indexOfTargetChord - 1 + targetIndexForWhatErrorTextToShow] && indexOfTargetChord != 0;
            if (allTypedText[indexOfTargetChord - 1 + targetIndexForWhatErrorTextToShow].slice(0, -1) != storedTestTextData[indexOfTargetChord - 1 + targetIndexForWhatErrorTextToShow] && indexOfTargetChord != 0 && currentTrainingScenario != "ALPHABET" || currentTrainingScenario == "ALPHABET" && canIPressBackspaceForAlphabet) {
              setEditingPreviousWord(true);
              setCurrentSubindexInTrainingText(sub);
              input.value = tt;
              allTypedText.pop();
            }
          }
        }
      };
    }
    return displayArray;
  }
  function letsFix(word, indexOfCharacterInTargetChord, indexOfTargetChord2, setS2) {
    let arr = [];
    const conditionalValue = allTypedText.length - indexOfTargetChord2;
    const input = document.getElementById("chordsInput");
    if (setS2[setS2.length - 1] == " " && indexOfTargetChord2 != allTypedText.length && conditionalValue < 1) {
      storeAllTypedText(setS2);
      setTypedTrainingText("");
      arr = [];
      return;
    }
    const wordSplit = word != void 0 && indexOfTargetChord2 != void 0 && indexOfCharacterInTargetChord != void 0 ? word[indexOfTargetChord2] : "";
    if (wordSplit[indexOfCharacterInTargetChord] != setS2 && setS2 != void 0) {
      if (wordSplit[indexOfCharacterInTargetChord - 1] != setS2[indexOfCharacterInTargetChord]) {
        for (let counter = indexOfCharacterInTargetChord; counter < setS2.length; counter++) {
          arr.push(setS2[counter]);
        }
      }
    }
    const sd = indexOfTargetChord2 == 0 && allTypedText[allTypedText?.length - 1]?.length == 0;
    if (firstLineOfTargetText != void 0) {
      if (setS2[setS2.length - 1] == " " || currentTrainingScenario == "ALPHABET" && setS2[setS2.length - 1] == firstLineOfTargetText[indexOfTargetChord2 - 1] || currentTrainingScenario == "ALPHABET" && firstLineOfTargetText.length - 1 == indexOfTargetChord2 && setS2[setS2.length - 1] == firstLineOfTargetText[indexOfTargetChord2] || indexOfTargetChord2 == 1 && input?.value.length == 0 || indexOfTargetChord2 == 0 && input?.value.length == 0) {
        arr = [];
      }
    }
    return whatTextToShow(firstLineOfTargetText, indexOfTargetChord2, indexOfCharacterInTargetChord, arr);
  }
  function colorTargetLine(firstLineValue) {
    const newTargetLine = [];
    for (let i = 0; i < firstLineValue?.length; i++) {
      const coloredWordToPush = [];
      if (i < indexOfTargetChord) {
        for (let t = 0; t < firstLineValue[i]?.length; t++) {
          const tempCompareValue = allTypedText[i + targetIndexForWhatErrorTextToShow];
          const tempTargetWord = firstLineValue[i];
          if (tempCompareValue != void 0) {
            tempCompareValue[t] == (tempTargetWord[t] == void 0 ? "" : tempTargetWord[t]) ? coloredWordToPush.push(/* @__PURE__ */ React.createElement("div", {
              className: "text-black whitespace-pre-wrap m-0 flex"
            }, /* @__PURE__ */ React.createElement("span", null, tempTargetWord[t]))) : coloredWordToPush.push(/* @__PURE__ */ React.createElement("div", {
              className: "text-red-500 m-0 whitespace-pre-wrap flex"
            }, /* @__PURE__ */ React.createElement("span", null, tempTargetWord[t])));
          } else {
            coloredWordToPush.push(/* @__PURE__ */ React.createElement("span", {
              className: "text-red m-0 whitespace-pre-wrap flex"
            }, tempTargetWord[t]));
          }
        }
        newTargetLine.splice(i, 1, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
          className: "m-0 whitespace-pre-wrap"
        }, /* @__PURE__ */ React.createElement("span", {
          className: "flex"
        }, coloredWordToPush))));
      } else {
        newTargetLine.push(firstLineValue[i]);
      }
    }
    return newTargetLine;
  }
  function isFocused() {
    const inputValue = document.getElementById("chordsInput");
    const isFocused2 = document.activeElement === inputValue;
    if (!isFocused2) {
      return TextBlurredScreen();
    } else {
      setTextPromptUnFocused(false);
    }
  }
  const currentPos = storedTestTextData?.length - ((previousTargetTextLineOne == null ? thirdLineOfTargetText?.length : previousTargetTextLineOne?.length + thirdLineOfTargetText?.length) + firstLineOfTargetText?.length + secondLineOfTargetText?.length + (fourthLineOfTargetText == null ? 0 : fourthLineOfTargetText?.length));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-red-500"
  }), /* @__PURE__ */ React.createElement(TextPromptContainer, null, textPromptUnFocused ? isFocused() : isFocused(), previousTargetTextLineOne != null && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PreviousChordRow, {
    scenario: currentTrainingScenario
  }, (colorTargetLine(previousTargetTextLineOne) || [])?.map((chord, index) => /* @__PURE__ */ React.createElement(Chord, {
    key: r(),
    error: !(currentTrainingScenario != "ALPHABET" ? allTypedText[currentPos + index]?.slice(0, -1) === storedTestTextData[currentPos + index] : allTypedText[currentPos + index] === storedTestTextData[currentPos + index])
  }, storedTestTextData[currentPos + index]))), /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, /* @__PURE__ */ React.createElement(Spacer, null)))), /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, (colorTargetLine(firstLineOfTargetText) || [])?.map((chord, i) => {
    if (characterEntryMode === "CHORD" || i !== indexOfTargetChord) {
      return /* @__PURE__ */ React.createElement(Chord, {
        key: r(),
        active: i === indexOfTargetChord,
        error: isError && i === indexOfTargetChord
      }, chord);
    } else {
      {
        ChordingEnabledAlgorithm(chord);
      }
      return /* @__PURE__ */ React.createElement(CharacterEntryChord, {
        word: chord,
        index: targetCharacterIndex
      });
    }
  })), /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, letsFix(firstLineOfTargetText, targetCharacterIndex, indexOfTargetChord, setS)), /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, (secondLineOfTargetText || [])?.map((chord) => /* @__PURE__ */ React.createElement(Chord, {
    key: r()
  }, chord))), previousTargetTextLineOne == null && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(ChordRow, {
    scenario: currentTrainingScenario
  }, (thirdLineOfTargetText || [])?.map((chord) => /* @__PURE__ */ React.createElement(Chord, {
    key: r()
  }, chord))))));
}
export default function CharacterEntryChord({
  word,
  index
}) {
  if (index === void 0 || index === null)
    return /* @__PURE__ */ React.createElement("span", {
      className: "text-black whitespace-pre-wrap",
      key: Math.random()
    }, word);
  const wordSplit = word.split("");
  return /* @__PURE__ */ React.createElement("div", {
    style: {whiteSpace: "pre-wrap", flexDirection: "row", color: "gray"}
  }, wordSplit.slice(0, index).map((char) => /* @__PURE__ */ React.createElement("span", {
    className: "text-black whitespace-pre-wrap",
    key: Math.random()
  }, char)), /* @__PURE__ */ React.createElement("span", {
    className: "text-white bg-black whitespace-pre-wrap"
  }, wordSplit[index]), wordSplit.slice(index + 1).map((char) => /* @__PURE__ */ React.createElement("span", {
    className: "text-grey",
    key: Math.random()
  }, char)));
}
const Chord = styled.span.attrs((props) => ({
  className: `${props.active ? "text-blue-500 underline" : ""} ${props.error ? "text-red-500" : ""}`
}))``;
export const ChordRow = styled.div.attrs((props) => ({
  className: `flex flex-row whitespace-nowrap justify-center font-mono w-full ${props.scenario == "ALPHABET" ? "" : "gap-[1vw]"}`
}))``;
const Spacer = styled.div.attrs({
  className: `  flex-row gap-[1vw]  w-full h-8`
})``;
export const PreviousChordRow = styled.div.attrs((props) => ({
  className: `flex flex-row whitespace-nowrap justify-center w-full text-black    ${props.scenario == "ALPHABET" ? "" : "gap-[1vw]"}`
}))``;
const TextPromptContainer = styled.div.attrs({
  className: `
    flex text-md font-bold flex flex-col items-center w-full	justify-center text-gray-400
    sm:text-xl md:text-2xl bg-[#FFF] rounded-3xl p-4 h-50 m-auto font-mono
  `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1RleHRQcm9tcHQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTSxJQUFJLEtBQUs7QUFFUixvQ0FBNkI7QUFDbEMsUUFBTSx5QkFBeUIsZ0JBQzdCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sZ0JBQWdCLGdCQUFnQixDQUFDLFVBQVUsTUFBTTtBQUV2RCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUFBLE1BQ2IsU0FBUyxlQUFlLGdCQUFnQjtBQUFBLE1BQ3hDLHVCQUF1QjtBQUFBLE1BQ3ZCLGNBQWM7QUFBQTtBQUFBLEtBRWpCO0FBQUE7QUFNRSw2QkFBb0M7QUFDekMsUUFBTSxxQkFBcUIsY0FDekIsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSx5QkFBeUIsZ0JBQzdCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sNEJBQTRCLGNBQ2hDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sd0JBQXdCLGNBQzVCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0seUJBQXlCLGNBQzdCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sd0JBQXdCLGNBQzVCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0seUJBQXlCLGNBQzdCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sVUFBVSxjQUNkLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sc0JBQXNCLGNBQzFCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sdUJBQXVCLGNBQzNCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0scUJBQXFCLGNBQ3pCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sb0JBQW9CLGdCQUN4QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGVBQWUsY0FDbkIsQ0FBQyxVQUFl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
