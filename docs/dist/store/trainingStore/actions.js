import {action, actionOn, thunkOn} from "../../../snowpack/pkg/easy-peasy.js";
import {chordLibrary} from "../../data/chordLibrary.js";
import {
  avgCalculatorForTheSpeedOfLastTen,
  getCumulativeAverageChordTypeTime,
  wpmMethodCalculator
} from "../../helpers/aggregation.js";
import {generateChords} from "../../helpers/generateTrainingData.js";
import {
  defaultAlphabeticTestTraining,
  defaultTrainingSettings,
  defaultTrainingSettingsState,
  defaultTrigramsTestTraining
} from "../../models/trainingSettingsStateModel.js";
import {
  createEmptyChordStatistics,
  createEmptyChordStatisticsFromDevice,
  createEmptyLexicalStMStatistics,
  MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS
} from "../../models/trainingStatistics.js";
import {getChordLibraryForTrainingScenario} from "../../pages/test/components/EditChordModal.js";
import {oneTimeCreateStoredChordStats} from "../../pages/test/components/TrainingModeSelector.js";
const CHORD_LINE_LENGTH = 30;
const ALPHABET_LINE_LENGTH = 24;
const dictNameOfLibrary = {
  ALPHABET: chordLibrary.letters,
  LEXICAL: chordLibrary.lexical,
  ENGLISH: chordLibrary.lexical,
  TRIGRAM: chordLibrary.trigrams,
  SUPERSONIC: chordLibrary.supersonic,
  LEXICOGRAPHIC: chordLibrary.lexicographic,
  LEXICALSENTENCES: chordLibrary.lexicalSentences,
  LEXICALSENTENCESDUOS: chordLibrary.lexicalSentencesDuos,
  LEXICALSENTENCESTRIOS: chordLibrary.lexicalSentencesTrios
};
let globalDictionaries = {
  ALPHABET: void 0,
  CHORDING: void 0,
  LEXICAL: void 0,
  LEXICOGRAPHIC: void 0,
  SUPERSONIC: void 0,
  TRIGRAM: void 0,
  CUSTOMTIER: void 0,
  LEXICALSENTENCES: void 0,
  LEXICALSENTENCESDUOS: void 0,
  LEXICALSENTENCESTRIOS: void 0,
  ALLCHORDS: void 0
};
export const getGlobalDictionaries = () => globalDictionaries;
export const setGlobalDictionaries = (dict) => {
  globalDictionaries = dict;
};
const trainingStoreActions = {
  setTrainingSettings: action((state, payload) => {
    state.trainingSettings = payload;
  }),
  setStoredChordsRepresentation: action((state, payload) => {
    state.storedChordsRepresentation = payload;
  }),
  setIsDisplayingStatisticsModal: action((state, payload) => {
    state.trainingSettings.isDisplayingStatisticsModal = payload;
  }),
  setIsDisplayingTestComplete: action((state, payload) => {
    state.trainingSettings.isTestDone = payload;
  }),
  setTextPromptUnFocused: action((state, payload) => {
    state.textPromptUnFocused = payload;
  }),
  setUserIsEditingPreviousWord: action((state, payload) => {
    state.userIsEditingPreviousWord = payload;
  }),
  clearTemporaryTrainingData: action((state) => {
    state.trainingStatistics = {statistics: []};
    state.trainingText = [];
  }),
  setRestartTestMode: action((state, payload) => {
    state.restartTestMode = payload;
  }),
  setTrainingLevel: action((state, payload) => {
    state.trainingLevel = payload;
  }),
  setStoredChordsFromDevice: action((state) => {
    state.storedChordsFromDevice = JSON?.parse(localStorage?.getItem("chordsReadFromDevice"));
  }),
  setStartTimer: action((state, payload) => {
    state.startTimer = payload;
  }),
  setTrainingTestCounter: action((state, payload) => {
    state.trainingTestCounter = payload;
  }),
  setModuleCompleteModalToggle: action((state, payload) => {
    state.moduleCompleteModalToggle = payload;
  }),
  setDownloadModuleModalToggle: action((state, payload) => {
    state.downloadModuleModalToggle = payload;
  }),
  setPasswordModuleModalToggle: action((state, payload) => {
    state.passwordModuleModalToggle = payload;
  }),
  setChmTierPasswordBypass: action((state, payload) => {
    localStorage.setItem("chmTierPasswordBypass", JSON.stringify(true));
    state.chmTierPasswordBypass = payload;
  }),
  setModuleNumber: action((state, payload) => {
    state.moduleNumber = payload;
  }),
  setIsDisplayingIntroductionModal: action((state, payload) => {
    state.isDisplayingIntroductionModal = payload;
  }),
  setTrainingIsDone: action((state, payload) => {
    state.trainingIsDone = payload;
  }),
  setTimerValue: action((state, payload) => {
    state.timerValue = payload;
  }),
  setLexicalSentencesIndex: action((state, payload) => {
    state.lexicalSentencesIndex = payload;
  }),
  beginTrainingMode: action((state, payload) => {
    savedStoredChordStats(state);
    resetTrainingStore(state);
    state.currentTrainingScenario = payload[0];
    state.wordTestNumber = payload[1];
    state.allTypedCharactersStore = [];
    state.compareText = [];
    state.isProgressBarDynamic = false;
    state.trainingTestCounter = 0;
    state.isTestDone = false;
    state.storedTestTextData = [];
    state.numberOfWordsChorded = 0;
    state.numberOfWordsTypedCorrectly = 0;
    state.trainingSessionErrors = 0;
    state.numberOfErrorsArrayForTestMode = [];
    state.startTimer = false;
    state.trainingIsDone = false;
    state.timeTakenToTypeEachWordInOrder = [];
    state.wordsPracticedInOrder = [];
    state.localTrainingStatistics = {statistics: []};
    state.generateThePreviousLine = false;
    state.storedChordsFromDevice = JSON?.parse(localStorage?.getItem("chordsReadFromDevice"));
    if (state.currentTrainingScenario != "ALLCHORDS")
      oneTimeCreateStoredChordStats(state.currentTrainingScenario, state.trainingLevel, dictNameOfLibrary[state.currentTrainingScenario]);
    else if (state.currentTrainingScenario != "LEXICALSENTENCES")
      oneTimeCreateStoredChordStats(state.currentTrainingScenario, state.trainingLevel, dictNameOfLibrary[state.currentTrainingScenario]);
    state.storedChordStatistics = JSON?.parse(localStorage?.getItem(state.trainingLevel + "_" + payload[0]));
    if (state.currentTrainingScenario === "ALLCHORDS") {
      state.chordsToPullFrom = getChordLibraryForTrainingScenario(state.currentTrainingScenario, state.storedChordsRepresentation);
    } else if (typeof state.currentTrainingScenario === "string" && globalDictionaries[state.currentTrainingScenario] != void 0) {
      state.chordsToPullFrom = globalDictionaries[state.currentTrainingScenario];
    } else {
      state.chordsToPullFrom = getChordLibraryForTrainingScenario(state.currentTrainingScenario);
    }
    state.trainingSettings = generateTrainingSettings(state);
    if (state.currentTrainingScenario != "ALLCHORDS" && state.trainingLevel != "StM")
      state.trainingStatistics = JSON.parse(localStorage.getItem(state.trainingLevel + "_" + state.currentTrainingScenario));
    else if (state.trainingLevel == "StM") {
      state.trainingStatistics = generateEmptyChordStatistics(state?.chordsToPullFrom[state?.lexicalSentencesIndex], payload[0]);
    } else
      state.trainingStatistics = state.storedChordsFromDevice;
    state.trainingStatistics.stmStatistics = getStMStats();
    if (state.currentTrainingScenario == "LEXICAL" && state.wordTestNumber != void 0 && state.restartTestMode == false) {
      state.storedTestTextData = generateTestTrainingData(state.chordsToPullFrom, parseInt(state.wordTestNumber));
    } else if (state.currentTrainingScenario == "LEXICAL" && state.wordTestNumber != void 0 && state.restartTestMode == true) {
      const tempStoredState = state.storedTestTextData;
      state.storedTestTextData = tempStoredState;
    } else {
      state.storedTestTextData = [];
    }
    state.numberOfChordsForTrainingLevel = state?.trainingStatistics?.statistics?.length;
    generateStartingTrainingData(state);
    if (payload[0] === "LEXICOGRAPHIC" || payload[0] === "SUPERSONIC" || payload[0] === "CUSTOMTIER")
      state.isDisplayingChordEditModal = true;
    else
      state.isDisplayingChordEditModal = false;
  }),
  proceedToNextWord: action((state) => {
    moveIndiciesOfTargetChord(state);
    calculateStatisticsForTargetChord(state);
    resetTargetChordMetaInformation(state);
    updateRecursionRateSettings(state);
    if (state.storedTestTextData?.length == state.allTypedCharactersStore?.length && state.moduleNumber == 4) {
      if (state.trainingStatistics.stmStatistics == null || void 0) {
        localStorage.setItem("StMStatistics", JSON.stringify({stmStatistics: []}));
        state.trainingStatistics.stmStatistics = JSON.parse(localStorage.getItem("StMStatistics")).stmStatistics;
      }
      const emptyStmStats = createEmptyLexicalStMStatistics(state.lexicalSentencesIndex, state.currentTrainingScenario);
      let stmStats = state?.trainingStatistics?.stmStatistics.find((c) => c.sentenceIndex === state.lexicalSentencesIndex);
      const couldFindChordInLibrary = !!stmStats;
      if (!couldFindChordInLibrary)
        stmStats = emptyStmStats;
      const averageWPM = wpmMethodCalculator(getCumulativeAverageChordTypeTime(state.localTrainingStatistics.statistics));
      stmStats.numberOfOccurrences = stmStats.numberOfOccurrences + 1;
      if (stmStats.speedOfLastTenTests.length == 10) {
        stmStats.speedOfLastTenTests.push(averageWPM);
        stmStats.speedOfLastTenTests.shift();
      } else {
        stmStats.speedOfLastTenTests.push(averageWPM);
      }
      stmStats.averageTestSpeed = avgCalculatorForTheSpeedOfLastTen(stmStats.speedOfLastTenTests);
      state.trainingIsDone = true;
      if (couldFindChordInLibrary) {
        state.trainingStatistics = {
          stmStatistics: state.trainingStatistics.stmStatistics.map((e) => e.sentenceIndex === stmStats.sentenceIndex ? stmStats : e)
        };
      } else {
        state.trainingStatistics.stmStatistics.push(stmStats);
      }
      localStorage.setItem("StMStatistics", JSON.stringify({
        stmStatistics: state.trainingStatistics.stmStatistics
      }));
    }
  }),
  setErrorOccurredWhileAttemptingToTypeTargetChord: action((state, payload) => {
    state.errorOccurredWhileAttemptingToTypeTargetChord = payload;
  }),
  checkForAdvanceToNextTrainingLevel: actionOn((actions) => actions.proceedToNextWord, (state) => {
    const speedThesholdToCompleteLevel = state.trainingSettings.speedGoal;
    const hasCompletedLevel = state.trainingStatistics.statistics?.filter((s) => s.averageSpeed === 0 || s.averageSpeed > speedThesholdToCompleteLevel).length === 0;
    const isSettingsSetToAuto = state.trainingSettings.autoOrCustom === "AUTO";
    if (!hasCompletedLevel)
      state.isShowingPlusIcon = false;
    if (hasCompletedLevel) {
      const targetChordStatistics = state.trainingStatistics.statistics.sort((a, b) => b.averageSpeed - a.averageSpeed)[0];
      if (targetChordStatistics) {
        const newSpeedGoal = Math.floor(targetChordStatistics?.averageSpeed - 1);
        const newNumberOfTargetChords = state.trainingStatistics.statistics.filter((s) => s.averageSpeed > newSpeedGoal)?.length;
        const newLevel = Math.max(0, 200 - newSpeedGoal);
        if (newLevel <= state.currentLevel)
          return;
        state.currentLevel = newLevel;
        state.numberOfChordsForTrainingLevel = newNumberOfTargetChords;
        state.isShowingPlusIcon = true;
        if (isSettingsSetToAuto) {
          state.trainingSettings.speedGoal = newSpeedGoal;
          state.trainingSettings.targetChords = newNumberOfTargetChords;
        }
      } else {
        console.error("Could not find the correct chord statistic to update the level.");
      }
    } else if (isSettingsSetToAuto) {
      const newNumberOfTargetChords = state.trainingStatistics.statistics.filter((s) => s.averageSpeed > state.trainingSettings.speedGoal)?.length;
      state.trainingSettings.targetChords = newNumberOfTargetChords;
    }
  }),
  setCurrentSubindexInTrainingText: action((store, payload) => {
    store.currentSubindexInTrainingText = payload;
  }),
  resetTrainingText: action((store) => {
    store.allTypedCharactersStore = [];
    store.trainingText = [];
    store.currentLineOfTrainingText = 0;
    store.currentSubindexInTrainingText = 0;
    generateNextLineOfInputdata(store);
    generateNextLineOfInputdata(store);
  }),
  setTypedTrainingText: action((state, payload) => {
    state.typedTrainingText = payload;
  }),
  setTestTierHighestWPM: action((state, payload) => {
    state.testTierHighestWPM = payload;
  }),
  onChangeTypedTrainingText: thunkOn((actions) => actions.setTypedTrainingText, (actions, _, {getState}) => {
    const storeState = getState();
    const currentTrainingMode = storeState.currentTrainingScenario;
    const isInAlphabetMode = currentTrainingMode === "ALPHABET";
    checkIfErrorExistsInUserEnteredText(storeState, isInAlphabetMode, actions);
    checkIfShouldProceedToNextTargetChord(isInAlphabetMode, storeState, actions);
  }),
  toggleChordEditModal: action((state) => {
    state.isDisplayingChordEditModal = !state.isDisplayingChordEditModal;
  }),
  setAllTypedCharactersStore: action((state, payload) => {
    state.allTypedCharactersStore?.push(payload);
  }),
  setStoredTestTextData: action((state, payload) => {
    state.storedTestTextData = payload;
  }),
  updateChordsUsedForTraining: action((state, payload) => {
    state.timeOfLastChordStarted = performance.now();
    state.chordsToPullFrom = payload;
    state.trainingStatistics = generateEmptyChordStatistics(state.chordsToPullFrom, state.currentTrainingScenario);
    state.trainingText = [];
    state.currentLineOfTrainingText = 0;
    state.currentSubindexInTrainingText = 0;
    const oldDisplay = {
      settings: state.trainingSettings.isDisplayingSettingsModal,
      stats: state.trainingSettings.isDisplayingStatisticsModal
    };
    state.trainingSettings.isDisplayingStatisticsModal = oldDisplay.stats;
    state.trainingSettings.isDisplayingSettingsModal = oldDisplay.settings;
    state.timeTakenToTypePreviousChord = 0;
    state.numberOfChordsForTrainingLevel = state.trainingStatistics.statistics.length;
    generateStartingTrainingData(state);
  }),
  UNSAFE_setTrainingText: action((state, payload) => {
    state.trainingText = payload;
  }),
  setCompareText: action((state, payload) => {
    state.compareText = payload;
  }),
  setGenerateThePreviousLine: action((state, payload) => {
    if (payload == true) {
      return state.currentSubindexInTrainingText = state.trainingText[state.currentLineOfTrainingText + -1].length, state.currentLineOfTrainingText -= 1, console.log("Am I setting and running" + state.allTypedCharactersStore + " " + state.currentSubindexInTrainingText);
    }
  }),
  toggleTestCompletePage: {
    type: "action",
    payload: void 0,
    result: void 0
  },
  setPopAllTypedCharactersStore: {
    type: "action",
    payload: void 0,
    result: void 0
  },
  setNumberOfWordsChorded: {
    type: "action",
    payload: void 0,
    result: void 0
  }
};
function checkIfShouldProceedToNextTargetChord(isInAlphabetMode, storeState, actions) {
  const wordValue = document.getElementById("chordsInput")?.value;
  const wordToCompare = isInAlphabetMode ? storeState.targetWord : storeState.targetWord + " ";
  const userHasEnteredChordCorrectly = wordToCompare === storeState.typedTrainingText;
  let isPhrase;
  if (!isNaN(parseFloat(storeState?.targetWord?.indexOf(" "))) || !isNaN(storeState?.targetCharacterIndex - 1)) {
    isPhrase = storeState?.targetWord[storeState?.targetCharacterIndex - 1] === " " && parseFloat(storeState?.targetWord?.indexOf(" ")) >= 0;
    storeState?.targetWord[storeState?.targetCharacterIndex - 1] === " ";
  } else {
    isPhrase = false;
  }
  if (isInAlphabetMode && userHasEnteredChordCorrectly) {
    actions.setAllTypedCharactersStore(storeState.typedTrainingText);
    actions.proceedToNextWord();
    actions.setTypedTrainingText("");
  } else if (storeState.typedTrainingText.charAt(storeState.typedTrainingText.length - 1) == " " && !isPhrase && storeState.typedTrainingText.length > 0 && wordValue[0] != " " && wordValue[0] != void 0) {
    actions.setAllTypedCharactersStore(storeState.typedTrainingText);
    actions.proceedToNextWord();
    actions.setTypedTrainingText("");
  }
}
function generateTrainingSettings(storeState) {
  if (storeState.currentTrainingScenario == "ALPHABET") {
    return JSON.parse(JSON.stringify(defaultAlphabeticTestTraining));
  } else if (storeState.currentTrainingScenario == "TRIGRAM") {
    return JSON.parse(JSON.stringify(defaultTrigramsTestTraining));
  } else if (storeState.currentTrainingScenario == "ALLCHORDS") {
    return JSON.parse(JSON.stringify(defaultTrainingSettingsState));
  } else if (storeState.currentTrainingScenario == void 0) {
    return JSON.parse(JSON.stringify(defaultAlphabeticTestTraining));
  } else {
    return JSON.parse(JSON.stringify(defaultTrainingSettings));
  }
}
function checkIfErrorExistsInUserEnteredText(storeState, isInAlphabetMode, actions) {
  console.log(`"${storeState.targetWord}"`);
  if (!storeState.targetWord)
    return;
  if (isInAlphabetMode) {
    const isError = !String(storeState.targetWord)?.startsWith(storeState.typedTrainingText);
    if (isError)
      actions.setErrorOccurredWhileAttemptingToTypeTargetChord(true);
  } else if (storeState.typedTrainingText.includes(" ")) {
    const isError = !String(storeState.targetWord + " ")?.startsWith(storeState.typedTrainingText);
    if (isError)
      actions.setErrorOccurredWhileAttemptingToTypeTargetChord(true);
  }
}
function resetTrainingStore(state) {
  state.currentLineOfTrainingText = 0;
  state.currentSubindexInTrainingText = 0;
  state.timeOfLastChordStarted = performance.now();
  state.timeTakenToTypePreviousChord = 0;
  state.timeAtTrainingStart = performance.now();
  state.trainingSettings = generateTrainingSettings(state);
  state.typedTrainingText = "";
  state.currentLevel = 0;
  state.isTestDone = false;
  state.errorOccurredWhileAttemptingToTypeTargetChord = false;
  state.isShowingPlusIcon = false;
  state.numberOfWordsTypedCorrectly = 0;
  state.numberOfErrorsArrayForTestMode = [];
  state.isDisplayingChordEditModal = false;
}
function resetTargetChordMetaInformation(state) {
  state.errorOccurredWhileAttemptingToTypeTargetChord = false;
  state.timeOfLastChordStarted = performance.now();
}
export async function calculateStatisticsForTargetChord(store) {
  const id = store.targetWord;
  if (!id) {
    return;
  }
  const emptyChordStats = createEmptyChordStatistics(id);
  let chordStats = store.trainingStatistics.statistics.find((c) => c.id === id);
  let localChordStats = store.localTrainingStatistics.statistics.find((c) => c.id === id);
  const couldFindChordInLibrary = !!chordStats;
  if (!couldFindChordInLibrary)
    chordStats = emptyChordStats;
  const couldFindChordInLocalLibrary = !!localChordStats;
  if (!couldFindChordInLocalLibrary)
    localChordStats = emptyChordStats;
  const userIsTypingFirstChord = store.currentLineOfTrainingText === 0 && store.currentSubindexInTrainingText === 1;
  let timeTakenToTypeChord = (performance.now() - store.timeOfLastChordStarted) / 10;
  let numberOfOccurences = 0;
  localChordStats.lastSpeed = Math.min(timeTakenToTypeChord, MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS);
  if (!userIsTypingFirstChord) {
    if (store.errorOccurredWhileAttemptingToTypeTargetChord && !store.userIsEditingPreviousWord && !userIsTypingFirstChord) {
      chordStats.numberOfErrors++;
      store.trainingSessionErrors = store.trainingSessionErrors + 1;
      store.trainingTestCounter = store.trainingTestCounter + 1;
      store.numberOfErrorsArrayForTestMode.push(1);
    } else if (store.errorOccurredWhileAttemptingToTypeTargetChord && store.userIsEditingPreviousWord && !userIsTypingFirstChord) {
      store.numberOfErrorsArrayForTestMode.pop();
      store.numberOfErrorsArrayForTestMode.push(1);
    } else if (!store.errorOccurredWhileAttemptingToTypeTargetChord && store.userIsEditingPreviousWord && !userIsTypingFirstChord) {
      store.numberOfErrorsArrayForTestMode.pop();
      store.trainingSessionErrors = store.trainingSessionErrors - 1;
      store.numberOfErrorsArrayForTestMode.push(0);
    } else {
      store.numberOfErrorsArrayForTestMode.push(0);
    }
  }
  const numberOfChordsConquered = store.trainingStatistics.statistics.filter((s) => s.averageSpeed > store.trainingSettings.speedGoal && s.numberOfOccurrences >= 10).length;
  if (numberOfChordsConquered > store.trainingStatistics.statistics.length - 1 && store.wasModuleShown == false) {
    store.moduleCompleteModalToggle = true;
    store.wasModuleShown = true;
  }
  const regulatedTimeToChord = Math.min(timeTakenToTypeChord, MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS);
  !userIsTypingFirstChord ? store.trainingSessionAggregatedTime = store.trainingSessionAggregatedTime + regulatedTimeToChord : "";
  if (userIsTypingFirstChord) {
    timeTakenToTypeChord = 0;
    numberOfOccurences = -1;
    store.startTimer = true;
  }
  if (!userIsTypingFirstChord && !store.userIsEditingPreviousWord) {
    store.wordsPracticedInOrder.push(id);
  }
  if (!userIsTypingFirstChord && !store.userIsEditingPreviousWord) {
    store.timeTakenToTypeEachWordInOrder.push(regulatedTimeToChord);
    store.timeTakenToTypePreviousChord = localChordStats?.lastSpeed;
    if (localChordStats.speedOfLastTen.length == 10) {
      localChordStats.speedOfLastTen.push(localChordStats.lastSpeed);
      localChordStats.speedOfLastTen.shift();
    } else {
      localChordStats.speedOfLastTen.push(localChordStats.lastSpeed);
    }
    localChordStats.averageSpeed = avgCalculatorForTheSpeedOfLastTen(localChordStats.speedOfLastTen);
    if (couldFindChordInLocalLibrary) {
      store.localTrainingStatistics = {
        statistics: store.localTrainingStatistics.statistics.map((e) => e.id === localChordStats.id ? localChordStats : e)
      };
    } else {
      store.localTrainingStatistics.statistics.push(localChordStats);
    }
  }
  if (store.currentTrainingScenario != "ALLCHORDS" && !userIsTypingFirstChord) {
    chordStats.lastSpeed = Math.min(timeTakenToTypeChord, MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS);
    store.timeTakenToTypePreviousChord = chordStats?.lastSpeed;
    if (chordStats.speedOfLastTen.length == 10) {
      chordStats.speedOfLastTen.push(chordStats.lastSpeed);
      chordStats.speedOfLastTen.shift();
    } else {
      chordStats.speedOfLastTen.push(chordStats.lastSpeed);
    }
    chordStats.averageSpeed = avgCalculatorForTheSpeedOfLastTen(chordStats.speedOfLastTen);
    if (userIsTypingFirstChord) {
      if (chordStats.numberOfOccurrences != 0)
        chordStats.numberOfOccurrences = chordStats.numberOfOccurrences - 1;
      else {
        chordStats.numberOfOccurrences = chordStats.numberOfOccurrences - 1;
      }
      console.log("Calculating hthe occurence and subtracting");
    } else {
      chordStats.numberOfOccurrences = chordStats.numberOfOccurrences + numberOfOccurences;
      store.userIsEditingPreviousWord === false ? chordStats.numberOfOccurrences++ : "";
    }
    if (store.currentTrainingScenario != "ALPHABET" && store.userIsEditingPreviousWord && store.storedTestTextData[store?.allTypedCharactersStore.length - 1] == store?.allTypedCharactersStore[store?.allTypedCharactersStore?.length - 1]?.slice(0, -1)) {
      chordStats.numberOfErrors = chordStats.numberOfErrors - 1;
      store.trainingTestCounter = store.trainingTestCounter - 1;
    } else if (store.currentTrainingScenario == "ALPHABET" && store.userIsEditingPreviousWord && store.storedTestTextData[store?.allTypedCharactersStore.length - 1] == store?.allTypedCharactersStore[store?.allTypedCharactersStore?.length - 1]) {
      chordStats.numberOfErrors = chordStats.numberOfErrors - 1;
      store.trainingTestCounter = store.trainingTestCounter - 1;
    }
    if (couldFindChordInLibrary) {
      store.trainingStatistics = {
        statistics: store.trainingStatistics.statistics.map((e) => e.id === chordStats.id ? chordStats : e)
      };
    } else {
      store.trainingStatistics.statistics.push(chordStats);
    }
    if (store.wordTestNumber == void 0)
      localStorage.setItem(store.trainingLevel + "_" + store.currentTrainingScenario, JSON.stringify({statistics: store.trainingStatistics.statistics}));
  } else if (!userIsTypingFirstChord && store.trainingLevel != "StM") {
    const chordStatsFromDevice = store?.storedChordsFromDevice?.statistics.find((c) => c.id === id);
    if (store.currentTrainingScenario != "ALPHABET" && store.userIsEditingPreviousWord && store.storedTestTextData[store?.allTypedCharactersStore.length - 1] == store?.allTypedCharactersStore[store?.allTypedCharactersStore?.length - 1]?.slice(0, -1)) {
      chordStatsFromDevice.numberOfErrors = chordStatsFromDevice.numberOfErrors - 1;
    }
    if (store.currentTrainingScenario == "ALLCHORDS" && !userIsTypingFirstChord) {
      if (store.errorOccurredWhileAttemptingToTypeTargetChord && !store.userIsEditingPreviousWord) {
        chordStatsFromDevice.numberOfErrors++;
      }
      chordStatsFromDevice.lastSpeed = Math.min(timeTakenToTypeChord, MAXIMUM_ALLOWED_SPEED_FOR_CHORD_STATS);
      chordStatsFromDevice.averageSpeed = (chordStatsFromDevice.averageSpeed * chordStatsFromDevice.numberOfOccurrences + chordStatsFromDevice.lastSpeed) / (chordStatsFromDevice.numberOfOccurrences + 1);
      if (userIsTypingFirstChord) {
        if (chordStatsFromDevice.numberOfOccurrences != 0) {
          chordStatsFromDevice.numberOfOccurrences = chordStatsFromDevice.numberOfOccurrences - 1;
          chordStatsFromDevice.numberOfErrors = chordStatsFromDevice.numberOfErrors - 1;
        } else {
          chordStatsFromDevice.numberOfOccurrences = chordStatsFromDevice.numberOfOccurrences = 0;
          chordStatsFromDevice.numberOfErrors = chordStatsFromDevice.numberOfErrors = 0;
        }
      } else {
        chordStatsFromDevice.numberOfOccurrences = chordStatsFromDevice.numberOfOccurrences + numberOfOccurences;
        store.userIsEditingPreviousWord === false ? chordStatsFromDevice.numberOfOccurrences++ : "";
      }
      if (chordStatsFromDevice.chordsMastered?.length == 10) {
        chordStatsFromDevice.chordsMastered?.push(chordStatsFromDevice.averageSpeed);
        chordStatsFromDevice.chordsMastered?.shift();
      } else {
        chordStatsFromDevice.chordsMastered?.push(chordStatsFromDevice.averageSpeed);
      }
      const sum = chordStatsFromDevice?.chordsMastered?.reduce((a, b) => a + b, 0);
      chordStatsFromDevice.averageSpeed = sum / chordStatsFromDevice.chordsMastered?.length || 0;
      store.trainingStatistics = {
        statistics: store.trainingStatistics.statistics.map((e) => e.id === chordStats.id ? chordStats : e)
      };
      store.storedChordsFromDevice = {
        statistics: store.storedChordsFromDevice.statistics.map((e) => e.id === chordStatsFromDevice.id && e.chord === chordStatsFromDevice.chord ? chordStatsFromDevice : e)
      };
      const value = store.storedChordsFromDevice;
      window.addEventListener("beforeunload", function() {
        const x = 500;
        const a = new Date().getTime() + x;
        localStorage.setItem("chordsReadFromDevice", JSON.stringify(value));
        while (new Date().getTime() < a) {
        }
      }, false);
    }
  } else {
    chordStats.averageSpeed = (chordStats.averageSpeed * chordStats.numberOfOccurrences + chordStats.lastSpeed) / (chordStats.numberOfOccurrences + 1);
    if (couldFindChordInLibrary) {
      store.trainingStatistics = {
        statistics: store.trainingStatistics.statistics.map((e) => e.id === chordStats.id ? chordStats : e)
      };
    } else {
      store.trainingStatistics.statistics.push(chordStats);
    }
  }
  if (!userIsTypingFirstChord) {
    if (store.storedTestTextData[store?.allTypedCharactersStore.length - 1] == store?.allTypedCharactersStore[store?.allTypedCharactersStore?.length - 1]?.slice(0, -1) && store.currentTrainingScenario != "ALPHABET") {
      store.numberOfWordsTypedCorrectly = store.numberOfWordsTypedCorrectly + 1;
    } else if (store.storedTestTextData[store?.allTypedCharactersStore.length - 1] == store?.allTypedCharactersStore[store?.allTypedCharactersStore?.length - 1] && store.currentTrainingScenario == "ALPHABET") {
      store.numberOfWordsTypedCorrectly = store.numberOfWordsTypedCorrectly + 1;
    }
  }
  store.userIsEditingPreviousWord = false;
}
export function savedStoredChordStats(state) {
  if (state.currentTrainingScenario == "ALLCHORDS")
    localStorage.setItem("chordsReadFromDevice", JSON.stringify(state.storedChordsFromDevice));
}
function moveIndiciesOfTargetChord(state) {
  const isReadyToAdvanceToNextLineOfTrainingText = state.currentSubindexInTrainingText + 1 >= state.trainingText[state.currentLineOfTrainingText].length;
  if (isReadyToAdvanceToNextLineOfTrainingText && state.targetTextLineFour != null) {
    state.currentLineOfTrainingText += 1;
    state.currentSubindexInTrainingText = 0;
  } else if (isReadyToAdvanceToNextLineOfTrainingText && state.targetTextLineFour == null) {
    state.currentLineOfTrainingText += 1;
    state.currentSubindexInTrainingText = 0;
    generateNextLineOfInputdata(state);
  } else {
    state.currentSubindexInTrainingText += 1;
  }
}
function generateEmptyChordStatistics(library, scenario) {
  return {
    statistics: Object.keys(library).map((key) => {
      if (scenario == "ALLCHORDS")
        return createEmptyChordStatisticsFromDevice(key, scenario, [], []);
      else
        return createEmptyChordStatistics(key, scenario);
    })
  };
}
const getRandomElementFromArray = (list) => list[Math.floor(Math.random() * list.length)];
function generateTestTrainingData(library, wordTestNumber) {
  const fullTestData = [];
  const chordLibraryToUse = Object.keys(library);
  for (let i = 0; i < wordTestNumber; i++) {
    fullTestData.push(getRandomElementFromArray(chordLibraryToUse));
  }
  return fullTestData;
}
function generateNextLineOfInputdata(state) {
  const lineLength = state.currentTrainingScenario === "ALPHABET" ? ALPHABET_LINE_LENGTH : CHORD_LINE_LENGTH;
  state.trainingText = [
    ...state.trainingText,
    generateChords({
      chordsToChooseFrom: state.chordsToPullFrom,
      numberOfTargetChords: state.trainingSettings.targetChords,
      recursionIsEnabledGlobally: state.trainingSettings.isUsingRecursion,
      recursionRate: state.trainingSettings.recursionRate,
      stats: state?.trainingStatistics?.statistics,
      lineLength,
      speedGoal: state.trainingSettings.speedGoal,
      wordTestNumberValue: state.wordTestNumber,
      scenario: state.currentTrainingScenario,
      storedTestData: state.storedTestTextData,
      storedChordsFromDevice: state.storedChordsFromDevice?.statistics,
      lexicalSentenceToChoose: state.lexicalSentencesIndex,
      indexOfTrainingText: state.allTypedCharactersStore.length,
      allTypedText: state.allTypedCharactersStore,
      subIndexOfTrainingText: state.currentSubindexInTrainingText,
      trainingLevel: state.trainingLevel,
      moduleNumber: state.moduleNumber
    })
  ];
}
function updateRecursionRateSettings(state) {
  const chordsWithSpeedHigherThanSpeedGoal = state.trainingStatistics.statistics.filter((s) => s.averageSpeed > state.trainingSettings.speedGoal);
  const numberOfChordsAboveSpeedGoal = chordsWithSpeedHigherThanSpeedGoal.length;
  let recursionRate = 95;
  const currentTrainingScenario = state.currentTrainingScenario;
  if (state.trainingSettings.autoOrCustom === "AUTO") {
    if (currentTrainingScenario === "ALPHABET") {
      if (numberOfChordsAboveSpeedGoal <= 2)
        recursionRate = numberOfChordsAboveSpeedGoal * 35;
      if (numberOfChordsAboveSpeedGoal == 0)
        recursionRate = 0;
    } else if (currentTrainingScenario === "CHORDING" || currentTrainingScenario === "LEXICAL" || currentTrainingScenario === "TRIGRAM") {
      if (numberOfChordsAboveSpeedGoal <= 10)
        recursionRate = numberOfChordsAboveSpeedGoal * 8 + 12;
      if (numberOfChordsAboveSpeedGoal == 0)
        recursionRate = 0;
    }
    state.trainingSettings.recursionRate = recursionRate;
  }
}
const getStMStats = () => {
  const storedSTMData = localStorage.getItem("StMStatistics");
  if (storedSTMData == null || void 0) {
    return [];
  } else {
    return JSON.parse(storedSTMData).stmStatistics;
  }
};
const generateLexicalSentenceIndex = (state) => {
  const allCharacters = Object.keys(state.chordsToPullFrom);
  const returnRandom = allCharacters[allCharacters.length * Math.random() | 0];
  return returnRandom;
};
const generateStartingTrainingData = (state) => {
  const lineLength = state.currentTrainingScenario === "ALPHABET" ? ALPHABET_LINE_LENGTH : CHORD_LINE_LENGTH;
  const generateOneLineOfChords = () => generateChords({
    chordsToChooseFrom: state.chordsToPullFrom,
    numberOfTargetChords: state.trainingSettings.targetChords,
    recursionIsEnabledGlobally: state.trainingSettings.isUsingRecursion,
    recursionRate: state.trainingSettings.recursionRate,
    stats: state?.trainingStatistics?.statistics,
    lineLength,
    speedGoal: state.trainingSettings.speedGoal,
    wordTestNumberValue: state.wordTestNumber,
    scenario: state.currentTrainingScenario,
    storedTestData: state.storedTestTextData,
    storedChordsFromDevice: state.storedChordsFromDevice?.statistics,
    lexicalSentenceToChoose: state.lexicalSentencesIndex,
    indexOfTrainingText: state.allTypedCharactersStore.length,
    allTypedText: state.allTypedCharactersStore,
    subIndexOfTrainingText: state.currentSubindexInTrainingText,
    trainingLevel: state.trainingLevel,
    moduleNumber: state.moduleNumber
  });
  state.trainingText = [
    generateOneLineOfChords(),
    generateOneLineOfChords(),
    generateOneLineOfChords()
  ];
  document.getElementById("chordsInput")?.focus();
};
export default trainingStoreActions;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvdHJhaW5pbmdTdG9yZS9hY3Rpb25zLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFFQSxNQUFNLG9CQUFvQjtBQUMxQixNQUFNLHVCQUF1QjtBQUU3QixNQUFNLG9CQUFvQjtBQUFBLEVBQ3hCLFVBQVUsYUFBYTtBQUFBLEVBQ3ZCLFNBQVMsYUFBYTtBQUFBLEVBQ3RCLFNBQVMsYUFBYTtBQUFBLEVBQ3RCLFNBQVMsYUFBYTtBQUFBLEVBQ3RCLFlBQVksYUFBYTtBQUFBLEVBQ3pCLGVBQWUsYUFBYTtBQUFBLEVBQzVCLGtCQUFrQixhQUFhO0FBQUEsRUFDL0Isc0JBQXNCLGFBQWE7QUFBQSxFQUNuQyx1QkFBdUIsYUFBYTtBQUFBO0FBR3RDLElBQUkscUJBR0E7QUFBQSxFQUNGLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLHNCQUFzQjtBQUFBLEVBQ3RCLHVCQUF1QjtBQUFBLEVBQ3ZCLFdBQVc7QUFBQTtBQUVOLGFBQU0sd0JBQXdCLE1BQ25DO0FBQ0ssYUFBTSx3QkFBd0IsQ0FDbkMsU0FDUztBQUNULHVCQUFxQjtBQUFBO0FBV3ZCLE1BQU0sdUJBQWtEO0FBQUEsRUFDdEQscUJBQXFCLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDOUMsVUFBTSxtQkFBbUI7QUFBQTtBQUFBLEVBRTNCLCtCQUErQixPQUFPLENBQUMsT0FBTyxZQUFZO0FBQ3hELFVBQU0sNkJBQTZCO0FBQUE7QUFBQSxFQUVyQyxnQ0FB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
