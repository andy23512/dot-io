import {wpmMethodCalculatorForStoredChords} from "./aggregation.js";
let checkIt = 0;
const getRandomElementFromArray = (list) => list[Math.floor(Math.random() * list.length)];
let pageAccessedByReload = window.performance.navigation && window.performance.navigation.type === 1 || window.performance.getEntriesByType("navigation").map((nav) => nav.type).includes("reload");
function removeSessionValueAndSetToFalse() {
  sessionStorage.removeItem("tempTestDeIncrement");
  checkIt = 0;
  pageAccessedByReload = false;
}
function hasWhiteSpace(s) {
  return s.indexOf(" ") >= 0;
}
export const generateChords = (parameters) => {
  parameters.storedTestData.length == 0 ? checkIt = 0 : "";
  if (parameters.scenario == "LEXICAL" && parameters.wordTestNumberValue != void 0) {
    const wordTestValue = parseInt(parameters.wordTestNumberValue);
    pageAccessedByReload ? removeSessionValueAndSetToFalse() : "";
    const chordLibraryCharacters1 = Object.keys(parameters.chordsToChooseFrom);
    const fullTestData = [];
    for (let i = 0; i < wordTestValue; i++) {
      fullTestData.push(getRandomElementFromArray(chordLibraryCharacters1));
    }
    sessionStorage.getItem("tempTestDeIncrement") == void 0 ? sessionStorage.setItem("tempTestDeIncrement", JSON.stringify(wordTestValue)) : "";
    let tempDeIncrementValue = parseInt(sessionStorage.getItem("tempTestDeIncrement"));
    const newString = [];
    while (newString.join("").length < parameters.lineLength) {
      if (tempDeIncrementValue == 0) {
        const valToEvaluate = newString.length - 1 + wordTestValue;
        const loopValue = valToEvaluate - wordTestValue;
        if (loopValue < 0) {
          for (let i = 0; i <= loopValue; i++) {
            newString.pop();
          }
        }
        break;
      } else {
        newString.push(parameters?.storedTestData[parameters?.storedTestData.length - tempDeIncrementValue]);
        tempDeIncrementValue = tempDeIncrementValue - 1;
      }
      sessionStorage.setItem("tempTestDeIncrement", JSON.stringify(tempDeIncrementValue));
    }
    return newString;
  } else if (parameters.scenario == "CUSTOMTIER" && parameters.wordTestNumberValue == void 0) {
    const chordToFeed = "";
    const allCharacters = [chordToFeed].filter((a) => !!a);
    const chordLibraryCharacters = Object.keys(parameters.chordsToChooseFrom);
    const wordTestValue = chordLibraryCharacters.length;
    pageAccessedByReload ? removeSessionValueAndSetToFalse() : "";
    const checkVal = sessionStorage.getItem("tempTestDeIncrement");
    if (sessionStorage.getItem("tempTestDeIncrement") == void 0 || isNaN(parseInt(sessionStorage.getItem("tempTestDeIncrement")))) {
      sessionStorage.setItem("tempTestDeIncrement", JSON.stringify(wordTestValue));
      localStorage.setItem("chordsToChooseFrom", JSON.stringify(chordLibraryCharacters));
    }
    sessionStorage.setItem("CustomTierTestValue", JSON.stringify(wordTestValue));
    let tempDeIncrementValue = parseInt(sessionStorage.getItem("tempTestDeIncrement"));
    while (allCharacters.join("").length < parameters.lineLength) {
      if (allCharacters[0] == "sample" && allCharacters[1] == "words" && tempDeIncrementValue == 0) {
        sessionStorage.removeItem("tempTestDeIncrement");
      }
      if (tempDeIncrementValue == 0) {
        const valToEvaluate = allCharacters.length - 1 + wordTestValue;
        const loopValue = valToEvaluate - wordTestValue;
        if (loopValue < 0) {
          for (let i = 0; i <= loopValue; i++) {
            allCharacters.pop();
          }
        }
        break;
      } else {
        allCharacters.push(chordLibraryCharacters[chordLibraryCharacters.length - tempDeIncrementValue]);
        tempDeIncrementValue = tempDeIncrementValue - 1;
        sessionStorage.setItem("tempTestDeIncrement", JSON.stringify(tempDeIncrementValue));
      }
    }
    return allCharacters;
  } else if (parameters.scenario == "ALLCHORDS") {
    const chordToFeed = "";
    const allCharacters = [chordToFeed].filter((a) => !!a);
    const chordLibraryCharacters = Object.keys(parameters.chordsToChooseFrom);
    const numberOfChordsNotMastered = parameters.storedChordsFromDevice.filter((s) => wpmMethodCalculatorForStoredChords(s.chordsMastered, s.id.length).toFixed(0) / 100 >= 1 && s.chordsMastered.length >= 10 || s.chordsMastered === void 0).length;
    const chordsSortedByMastered = parameters.storedChordsFromDevice.sort((a, b) => wpmMethodCalculatorForStoredChords(a.chordsMastered, a.id.length) - wpmMethodCalculatorForStoredChords(b.chordsMastered, b.id.length));
    const seen = new Set();
    const newSet = chordsSortedByMastered.filter((item) => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
    const finalChordsToUse = newSet.slice(0 + numberOfChordsNotMastered, parameters.numberOfTargetChords + numberOfChordsNotMastered).map((s) => s.id);
    while (allCharacters.join("").length < parameters.lineLength) {
      const shouldChooseBasedOnSpeed = parameters.recursionRate > Math.random() * 100;
      if (shouldChooseBasedOnSpeed && parameters.numberOfTargetChords > 0 && parameters.recursionIsEnabledGlobally) {
        allCharacters.push(getRandomElementFromArray(finalChordsToUse));
      } else
        allCharacters.push(getRandomElementFromArray(chordLibraryCharacters));
    }
    for (let i = 0; i < allCharacters.length; i++) {
      parameters.storedTestData?.push(allCharacters[i]);
    }
    return allCharacters;
  } else if (parameters.trainingLevel == "StM") {
    parameters.storedTestData.length == 0 && parameters.wordTestNumberValue == 4 ? checkIt = 0 : "";
    const allCharacters = [];
    if (parameters.moduleNumber == 4) {
      const tempChords = Object.keys(parameters.chordsToChooseFrom[parameters.lexicalSentenceToChoose]);
      let i = 0;
      let increment = 0;
      if (parameters.allTypedText.length > 0 && checkIt == 0 && !parameters.continueSentenceFlow) {
        return allCharacters;
      }
      while (allCharacters.join("").length < parameters.lineLength) {
        if (checkIt <= tempChords.length - 1) {
          allCharacters.push(tempChords[checkIt]);
          checkIt++;
          increment++;
        } else {
          break;
        }
        i++;
      }
      if (checkIt >= tempChords.length) {
        checkIt = 0;
      }
    } else {
      const chordsSortedByTypingSpeed = parameters.stats.sort((a, b) => b.averageSpeed - a.averageSpeed);
      const chordToFeed = "";
      const numberOfChordsNotConquered = parameters.stats.filter((s) => s.averageSpeed > parameters.speedGoal || s.averageSpeed === 0).length;
      if (numberOfChordsNotConquered > 0) {
        const chordsWithZeroSpeed = parameters.stats.filter((stat) => stat.averageSpeed === 0);
      }
      const chordLibraryCharacters = Object.keys(parameters.chordsToChooseFrom[parameters.lexicalSentenceToChoose]);
      while (allCharacters.join("").length < parameters.lineLength) {
        const shouldChooseBasedOnSpeed = parameters.recursionRate > Math.random() * 100;
        allCharacters.push(getRandomElementFromArray(chordLibraryCharacters));
      }
    }
    for (let i = 0; i < allCharacters.length; i++) {
      parameters.storedTestData?.push(allCharacters[i]);
    }
    return allCharacters;
  } else {
    const chordsSortedByTypingSpeed = parameters.stats.sort((a, b) => b.averageSpeed - a.averageSpeed);
    let chordToFeed = "";
    const numberOfChordsNotConquered = parameters.stats.filter((s) => parameters.speedGoal > s.averageSpeed && 10 >= 10 || s.averageSpeed === 0).length;
    const numberOfChordsConquered = parameters.stats.filter((s) => s.averageSpeed > parameters.speedGoal && s.numberOfOccurrences >= 10).length;
    if (numberOfChordsNotConquered > 0) {
      const chordsWithZeroSpeed = parameters.stats.filter((stat) => stat.averageSpeed === 0);
      if (chordsWithZeroSpeed.length > 0)
        chordToFeed = getRandomElementFromArray(chordsWithZeroSpeed).displayTitle;
      else
        chordToFeed = chordsSortedByTypingSpeed[0].displayTitle;
    }
    let theCondensedChordStat = parameters.stats.sort((a, b) => b.averageSpeed - a.averageSpeed);
    const allCharacters = [chordToFeed].filter((a) => !!a);
    allCharacters.shift();
    for (let i2 = 0; i2 < theCondensedChordStat.length; i2++) {
      if (theCondensedChordStat[i2].averageSpeed > parameters.speedGoal && theCondensedChordStat[i2].numberOfOccurrences >= 10) {
        theCondensedChordStat.push(theCondensedChordStat.splice(theCondensedChordStat.indexOf(theCondensedChordStat[i2]), 1)[0]);
      }
    }
    theCondensedChordStat = theCondensedChordStat.sort((a, b) => b.numberOfOccurrences - a.numberOfOccurrences);
    const slowestTypedChordsAccountingForDepth = theCondensedChordStat.slice(0, parameters.numberOfTargetChords).map((s) => s.id);
    const chordLibraryCharacters = Object.keys(parameters.chordsToChooseFrom);
    let sel = [];
    let i = 0;
    while (sel.length < parameters.numberOfTargetChords && i < parameters.stats.length && numberOfChordsConquered < parameters.stats.length) {
      if (theCondensedChordStat[i].averageSpeed > parameters.speedGoal && theCondensedChordStat[i].numberOfOccurrences >= 10) {
      } else {
        sel.push(theCondensedChordStat[i].displayTitle);
      }
      i++;
    }
    if (numberOfChordsConquered > parameters.stats.length - 1) {
      chordsSortedByTypingSpeed.sort((a, b) => b.averageSpeed - a.averageSpeed);
      sel = chordsSortedByTypingSpeed.slice(0, parameters.numberOfTargetChords).map((s) => s.id);
    }
    while (allCharacters.join("").length < parameters.lineLength) {
      const shouldChooseBasedOnSpeed = parameters.recursionRate > Math.random() * 100;
      if (shouldChooseBasedOnSpeed && parameters.numberOfTargetChords > 0 && parameters.recursionIsEnabledGlobally) {
        allCharacters.push(getRandomElementFromArray(sel));
      } else
        allCharacters.push(getRandomElementFromArray(chordLibraryCharacters));
    }
    for (let i2 = 0; i2 < allCharacters.length; i2++) {
      parameters.storedTestData?.push(allCharacters[i2]);
    }
    return allCharacters;
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaGVscGVycy9nZW5lcmF0ZVRyYWluaW5nRGF0YS50cyJdLAogICJtYXBwaW5ncyI6ICJBQVNBO0FBRUEsSUFBSSxVQUFVO0FBRWQsTUFBTSw0QkFBNEIsQ0FBSSxTQUNwQyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSztBQW1DdkMsSUFBSSx1QkFDRCxPQUFPLFlBQVksY0FBYyxPQUFPLFlBQVksV0FBVyxTQUFTLEtBQ3pFLE9BQU8sWUFDSixpQkFBaUIsY0FDakIsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUNqQixTQUFTO0FBRWQsMkNBQTJDO0FBQ3pDLGlCQUFlLFdBQVc7QUFDMUIsWUFBVTtBQUNWLHlCQUF1QjtBQUFBO0FBR3pCLHVCQUF1QixHQUFHO0FBQ3hCLFNBQU8sRUFBRSxRQUFRLFFBQVE7QUFBQTtBQUdwQixhQUFNLGlCQUFpQixDQUM1QixlQUNhO0FBQ2IsYUFBVyxlQUFlLFVBQVUsSUFBSyxVQUFVLElBQUs7QUFDeEQsTUFDRSxXQUFXLFlBQVksYUFDdkIsV0FBVyx1QkFBdUIsUUFDbEM7QUFDQSxVQUFNLGdCQUFnQixTQUFTLFdBQVc7QUFDMUMsMkJBQXVCLG9DQUFvQztBQUUzRCxVQUFNLDBCQUEwQixPQUFPLEtBQUssV0FBVztBQUV2RCxVQUFNLGVBQWU7QUFDckIsYUFBUyxJQUFJLEdBQUcsSUFBSSxlQUFlLEtBQUs7QUFDdEMsbUJBQWEsS0FBSywwQkFBMEI7QUFBQTtBQUU5QyxtQkFBZSxRQUFRLDBCQUEwQixTQUM3QyxlQUFlLFFBQ2IsdUJBQ0EsS0FBSyxVQUFVLGtCQUVqQjtBQUVKLFFBQUksdUJBQXVCLFNBQ3pCLGVBQWUsUUFBUTtBQUd6QixVQUFNLFlBQXNCO0FBRTVCLFdBQU8sVUFBVSxLQUFLLElBQUksU0FBUyxXQUFXLFlBQVk7QUFDeEQsVUFBSSxBQUFLLHdCQUFMLEdBQTJCO0FBQzdCLGNBQU0sZ0JBQWdCLFVBQVUsU0FBUyxJQUFJ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
