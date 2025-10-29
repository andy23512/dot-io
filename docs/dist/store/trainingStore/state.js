import {computed} from "../../../snowpack/pkg/easy-peasy.js";
import {
  ConvertStringToKeyHighlightPositions
} from "../../helpers/convertStringToKeyHighlightPositions.js";
import {ConvertStringToKeyHighlightPositionsLite} from "../../helpers/convertStringToKeyHighlightPositionsCharachorderLite.js";
import {
  defaultAlphabeticTestTraining
} from "../../models/trainingSettingsStateModel.js";
import {generateNewChordRecordForAllChordsModule} from "../../pages/test/components/EditChordModal.js";
async function removeDups(arr) {
  const seen = new Set();
  const newSet = arr?.statistics?.filter((item) => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
  return newSet;
}
const trainingStoreState = {
  trainingSessionErrors: 0,
  typedTrainingText: "",
  trainingText: [],
  compareText: [],
  numberOfWordsChorded: 0,
  currentLineOfTrainingText: 0,
  currentSubindexInTrainingText: 0,
  trainingSettings: JSON.parse(JSON.stringify(defaultAlphabeticTestTraining)),
  errorOccurredWhileAttemptingToTypeTargetChord: false,
  timeOfLastChordStarted: 0,
  timeTakenToTypePreviousChord: 0,
  isTestDone: false,
  restartTestMode: false,
  userIsEditingPreviousWord: false,
  allTypedCharactersStore: [],
  wordsPracticedInOrder: [],
  timeTakenToTypeEachWordInOrder: [],
  trainingLevel: "CPM",
  moduleCompleteModalToggle: false,
  downloadModuleModalToggle: false,
  passwordModuleModalToggle: false,
  wasModuleShown: false,
  moduleNumber: 1,
  numberOfWordsTypedCorrectly: 0,
  trainingSessionAggregatedTime: 0,
  startTimer: false,
  trainingIsDone: false,
  trainingStatistics: {
    statistics: [],
    stmStatistics: []
  },
  localTrainingStatistics: {
    statistics: []
  },
  timer: {
    display: "00:00:00",
    milliseconds: 0,
    running: false
  },
  currentLevel: 0,
  timeAtTrainingStart: 0,
  numberOfChordsForTrainingLevel: 0,
  testTierHighestWPM: 0,
  storedChordsRepresentation: removeDups(generateNewChordRecordForAllChordsModule(JSON?.parse(localStorage?.getItem("chordsReadFromDevice")))),
  numberOfErrorsArrayForTestMode: [],
  lexicalSentencesIndex: "SentenceOne",
  chmTierPasswordBypass: JSON?.parse(localStorage?.getItem("chmTierPasswordBypass")),
  currentlyHighlightedKeys: computed((state) => {
    const highlightMode = state.characterEntryMode;
    if (!highlightMode)
      return [];
    return state.trainingSettings.isHighlightingKeys ? ConvertStringToKeyHighlightPositions(state.currentTrainingScenario, state.targetWord || "", highlightMode, state.targetCharacterIndex ?? -1, state.trainingLevel) : [];
  }),
  characterEntryMode: computed((state) => {
    if (!state.currentTrainingScenario)
      return void 0;
    const highlightMode = state.currentTrainingScenario === "ALPHABET" || state.currentTrainingScenario === "LEXICAL" || state.currentTrainingScenario === "TRIGRAM" || state.currentTrainingScenario === "LEXICALSENTENCES" || state.currentTrainingScenario === "LEXICALSENTENCESDUOS" || state.currentTrainingScenario === "LEXICALSENTENCESTRIOS" || state.currentTrainingScenario === "ALLCHORDS" || state.currentTrainingScenario === "CUSTOMTIER" ? "CHARACTER" : "CHORD";
    return highlightMode;
  }),
  currentlyHighlightedKeysLite: computed((state) => {
    const highlightMode = state.characterEntryMode;
    if (!highlightMode)
      return [];
    return state.trainingSettings.isHighlightingKeys ? ConvertStringToKeyHighlightPositionsLite(state.currentTrainingScenario, state.targetWord || "", highlightMode, state.targetCharacterIndex ?? -1, state.trainingLevel) : [];
  }),
  targetWord: computed((state) => {
    const trainingText = state.trainingText;
    const targetWord = trainingText?.[state.currentLineOfTrainingText]?.[state.currentSubindexInTrainingText];
    return targetWord;
  }),
  targetCharacterIndex: computed((state) => {
    const targetWord = state.targetWord;
    const enteredText = state.typedTrainingText;
    if (targetWord) {
      const largestLength = Math.max(targetWord.length, enteredText.length);
      for (let i = 0; i < largestLength; i++) {
        const targetLetter = targetWord[i];
        const enteredLetter = enteredText[i];
        if (targetLetter !== enteredLetter)
          return i;
      }
    }
    return void 0;
  }),
  storedTestTextData: [],
  previousTargetChord: computed((state) => {
    const trainingText = state.trainingText;
    const theTargetWordIsAtTheBeginningOfALine = state.currentSubindexInTrainingText == 0;
    if (theTargetWordIsAtTheBeginningOfALine) {
      const previousLine = trainingText?.[state.currentLineOfTrainingText - 1];
      return previousLine?.[previousLine.length - 1];
    }
    return trainingText?.[state.currentLineOfTrainingText]?.[state.currentSubindexInTrainingText - 1];
  }),
  currentTrainingScenario: void 0,
  isDisplayingChordEditModal: false,
  chordsToPullFrom: {},
  isShowingPlusIcon: false,
  previousTargetTextLineOne: computed((state) => {
    return state?.trainingText[state?.currentLineOfTrainingText - 1];
  }),
  targetTextLineOne: computed((state) => {
    return state.trainingText[state.currentLineOfTrainingText];
  }),
  targetTextLineTwo: computed((state) => {
    return state.trainingText[state.currentLineOfTrainingText + 1];
  }),
  targetTextLineThree: computed((state) => {
    return state.trainingText[state.currentLineOfTrainingText + 2];
  }),
  targetTextLineFour: computed((state) => {
    return state.trainingText[state.currentLineOfTrainingText + 3];
  })
};
export default trainingStoreState;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvdHJhaW5pbmdTdG9yZS9zdGF0ZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQVNBLDBCQUEwQixLQUFLO0FBQzdCLFFBQU0sT0FBTyxJQUFJO0FBQ2pCLFFBQU0sU0FBUyxLQUFLLFlBQVksT0FBTyxDQUFDLFNBQVM7QUFDL0MsVUFBTSxZQUFZLEtBQUssSUFBSSxLQUFLO0FBQ2hDLFNBQUssSUFBSSxLQUFLO0FBQ2QsV0FBTyxDQUFDO0FBQUE7QUFFVixTQUFPO0FBQUE7QUFFVCxNQUFNLHFCQUE4QztBQUFBLEVBRWxELHVCQUF1QjtBQUFBLEVBQ3ZCLG1CQUFtQjtBQUFBLEVBQ25CLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxFQUNiLHNCQUFzQjtBQUFBLEVBQ3RCLDJCQUEyQjtBQUFBLEVBQzNCLCtCQUErQjtBQUFBLEVBQy9CLGtCQUFrQixLQUFLLE1BQU0sS0FBSyxVQUFVO0FBQUEsRUFDNUMsK0NBQStDO0FBQUEsRUFDL0Msd0JBQXdCO0FBQUEsRUFDeEIsOEJBQThCO0FBQUEsRUFDOUIsWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsMkJBQTJCO0FBQUEsRUFDM0IseUJBQXlCO0FBQUEsRUFDekIsdUJBQXVCO0FBQUEsRUFDdkIsZ0NBQWdDO0FBQUEsRUFDaEMsZUFBZTtBQUFBLEVBQ2YsMkJBQTJCO0FBQUEsRUFDM0IsMkJBQTJCO0FBQUEsRUFDM0IsMkJBQTJCO0FBQUEsRUFDM0IsZ0JBQWdCO0FBQUEsRUFDaEIsY0FBYztBQUFBLEVBQ2QsNkJBQTZCO0FBQUEsRUFDN0IsK0JBQStCO0FBQUEsRUFDL0IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsSUFDbEIsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBO0FBQUEsRUFFakIseUJB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
