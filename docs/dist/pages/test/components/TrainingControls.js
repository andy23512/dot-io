import React, {useEffect, useState} from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
const LIST_LENGTH_OFFSET = 2;
function TrainingControls() {
  const stats = useStoreState((state) => state.trainingStatistics).statistics.sort((a, b) => b.averageSpeed - a.averageSpeed);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AggregateRow, {
    data: stats
  }));
}
const AggregateStatRow = styled.div.attrs({
  className: `text-gray-300 flex flex-row w-full text-white items-center max-w-xs`
})``;
const AggregateRow = ({data}) => {
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const trainingSetting = useStoreState((store) => store.trainingStatistics);
  const currentTrainingSetting = useStoreState((store) => store.trainingSettings);
  const setIsDisplaying = useStoreActions((store) => store.setIsDisplayingTestComplete);
  const trainingTestCounter = useStoreState((store) => store.trainingTestCounter);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const setTrainingLevel = useStoreActions((store) => store.setTrainingLevel);
  const maxWPM = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const setIsDisplayingIntroductionModal = useStoreActions((store) => store.setIsDisplayingIntroductionModal);
  const allTypedCharactersStore = useStoreState((store) => store.allTypedCharactersStore);
  let sumErrors = 0;
  let sumOccurrences = 0;
  data.forEach((d) => {
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
  });
  const [popUpDisplayValue, setPopUpDisplayValue] = useState(false);
  const setVariable = wordTestNumber == void 0 ? 26 : wordTestNumber;
  const [count, setCount] = useState(setVariable);
  function LearnPageFunction(value) {
    const payload = [];
    payload.push(value);
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  const [tempCounter, setTempCounter] = useState(-100);
  useEffect(() => {
    const temp = parseInt(sessionStorage.getItem("tempTestDeIncrement"));
    if (tempCounter == -100) {
      setTempCounter(temp);
      sessionStorage.getItem("CustomTierTestValue");
    }
    if (currentTrainingScenario == "CUSTOMTIER") {
      if (sumOccurrences + 1 >= parseInt(sessionStorage.getItem("CustomTierTestValue"))) {
        setIsDisplaying(true);
        setPopUpDisplayValue(true);
        setTempCounter(-100);
      }
    } else if (allTypedCharactersStore.length >= parseInt(count) && wordTestNumber != void 0) {
      setIsDisplaying(true);
      setPopUpDisplayValue(true);
    }
    const canCHMTierBeUnlocked = parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed()) * 5 > 200;
    if (canCHMTierBeUnlocked && JSON.parse(localStorage.getItem("FirstTimeEnteringCHMTier") == null)) {
      setTrainingLevel("CHM");
      setIsDisplayingIntroductionModal(true);
      localStorage.setItem("FirstTimeEnteringCHMTier", JSON.parse(true));
      LearnPageFunction("LEXICAL");
      console.log("Trigger for CHM tier");
    }
  }, [sumOccurrences, setIsDisplaying]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};
const TrainingStatsColumnContainer = styled.div.attrs({
  className: "flex flex-col text-center align-center w-full  ml-auto mr-auto relative bg-[#222424]"
})``;
const WordRowContainer = styled.div`
float-left
  max-width: 100%;
  max-height: 100%;
 `;
const RowStatItem = styled.button.attrs({
  className: `
  hover:color-[#1e90ff]
  whitespace-nowrap
  text-sm w-1/4
  font-semibold`
})``;
const RowStatItemName = styled.button.attrs({
  className: `
  float-left
  whitespace-nowrap
  text-sm w-1/4
  font-semibold`
})``;
export default TrainingControls;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1RyYWluaW5nQ29udHJvbHMudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFHQTtBQUNBO0FBRUEsTUFBTSxxQkFBcUI7QUFFM0IsNEJBQTBDO0FBQ3hDLFFBQU0sUUFBUSxjQUNaLENBQUMsVUFBZSxNQUFNLG9CQUN0QixXQUFXLEtBQUssQ0FBQyxHQUFRLE1BQVcsRUFBRSxlQUFlLEVBQUU7QUFFekQsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxjQUFEO0FBQUEsSUFBYyxNQUFNO0FBQUE7QUFBQTtBQUsxQixNQUFNLG1CQUFtQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3hDLFdBQVc7QUFBQTtBQUdiLE1BQU0sZUFBZSxDQUFDLENBQUUsVUFBMEI7QUFDaEQsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sa0JBQWtCLGNBQ3RCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0seUJBQXlCLGNBQzdCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLHNCQUFzQixjQUMxQixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLGlCQUFpQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3RELFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sbUJBQW1CLGdCQUFnQixDQUFDLFVBQVUsTUFBTTtBQUMxRCxRQUFNLFNBQVMsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUM5QyxRQUFNLG1DQUFtQyxnQkFDdkMsQ0FBQyxVQUFVLE1BQU07QUFHbkIsUUFBTSwwQkFBMEIsY0FDOUIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsTUFBSSxZQUFZO0FBQ2hCLE1BQUksaUJBQWlCO0FBQ3JCLE9BQUssUUFBUSxDQUFDLE1BQVc7QUFDdkIsaUJBQWEsRUFBRTtBQUNmLHNCQUFrQixFQUFFO0FBQUE7QUFHdEIsUUFBTSxDQUFDLG1CQUFtQix3QkFBd0IsU0FBUztBQUMzRCxRQUFNLGNBQWMsa0JBQWtCLFNBQVksS0FBSztBQUN2RCxRQUFNLENBQUMsT0FBTyxZQUFZLFNBQVM7QUFFbkMsNkJBQTJCLE9BQWU7QUFDeEMsVUFBTSxVQUFpQjtBQUN2QixZQUFRLEtBQUs7QUFDYixtQkFBZSxXQUFXO0FBQzFCLGtCQUFjO0FBQUE7QUFFaEIsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVM7QUFFL0MsWUFBVSxNQUFNO0FBQ2QsVUFBTSxPQUFPLFNBQVMsZUFBZSxRQUFRO0FBQzdDLFFBQUksZUFBZSxNQUFNO0FBQ3ZCLHFCQUFlO0FBQ2YscUJBQWUsUUFBUTtBQUFBO0FBR3pCLFFBQUksMkJBQTJCLGNBQWM7QUFDM0MsVUFDRSxpQkFBaUIsS0FDakIsU0FBUyxlQUFlLFFBQVEseUJBQ2hDO0FBQ0Esd0JBQWdCO0FBQ2hCLDZCQUFxQjtBQUNyQix1QkFBZTtBQUFBO0FBQUEsZUFJakIsd0JBQXdCLFVBQVUsU0FBUyxVQUMzQyxrQkFBa0IsUUFDbEI7QUFDQSxzQkFBZ0I7QUFDaEIsMkJBQXFCO0FBQUE7QUFPdkIsVUFBTSx1QkFDSixTQUFTLEtBQUssSUFBSSxNQUFNLE1BQU0sT0FBTyxPQUFPLFVBQVUsYUFBYSxJQUNuRTtBQUtGLFFBQ0Usd0JBQ0EsS0FBSyxNQUFNLGFBQWEsUUFBUSwrQkFBK0IsT0FDL0Q7QUFDQSx1QkFBaUI7QUFDakIsdUNBQWlDO0FBQ2pDLG1CQUFhLFFBQVEsNEJBQTRCLEtBQUssTUFBTTtBQUM1RCx3QkFBa0I7QUFDbEIsY0FBUSxJQUFJO0FBQUE7QUFBQSxLQUViLENBQUMsZ0JBQWdCO0FBRXBCLFNBQU8sb0NBQUMsTUFBTSxVQUFQO0FBQUE7QUFHVCxNQUFNLCtCQUErQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3BELFdBQ0U7QUFBQTtBQUdKLE1BQU0sbUJBQW1CLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1oQyxNQUFNLGNBQWMsT0FBTyxPQUFPLE1BQU07QUFBQSxFQUN0QyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9iLE1BQU0sa0JBQWtCLE9BQU8sT0FBTyxNQUFNO0FBQUEsRUFDMUMsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPYixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
