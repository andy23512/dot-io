import React, {useRef, useState} from "../../../../snowpack/pkg/react.js";
import {useHUD} from "../../../hooks/useHUD.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
function ChordTextInput() {
  const setStoreText = useStoreActions((store) => store.setTypedTrainingText);
  const textTyped = useStoreState((store) => store.typedTrainingText);
  const allTypedCharactersStore = useStoreState((store) => store.allTypedCharactersStore);
  const storedTestTextData = useStoreState((store) => store.storedTestTextData);
  const inputRef = useRef(null);
  const regenerateTrainingText = useStoreActions((store) => store.resetTrainingText);
  const restartMode = useStoreState((store) => store.restartTestMode);
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode);
  const setStartTimer = useStoreActions((store) => store.setStartTimer);
  const startTimer = useStoreState((store) => store.startTimer);
  const setTextPromptUnFocused = useStoreActions((store) => store.setTextPromptUnFocused);
  const trainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const displayHUD = useHUD();
  const isShowingPortal = useStoreState((store) => store.isDisplayingChordEditModal);
  const set = useStoreActions((store) => store.setCompareText);
  const setGenerateThePreviousLine = useStoreActions((store) => store.setGenerateThePreviousLine);
  const generateThePreviousLine = useStoreActions((store) => store.generateThePreviousLine);
  const setS = useStoreState((store) => store.compareText);
  const currentLineOfTrainingText = useStoreState((store) => store.currentLineOfTrainingText);
  const currentSubindexInTrainingText = useStoreState((store) => store.currentSubindexInTrainingText);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const targetCharacterIndex = useStoreState((store) => store.targetCharacterIndex);
  const {parentProps, Popper} = usePopover("Generate a new set of training text.");
  const [firstTyped, setFirstTyped] = useState(true);
  const yer = restartMode;
  const userIsTypingFirstChord = currentLineOfTrainingText === 0 && currentSubindexInTrainingText === 0 && targetCharacterIndex === 0;
  const wasPreviousTextIncorrect = currentTrainingScenario == "ALPHABET" ? allTypedCharactersStore[allTypedCharactersStore.length - 1] != storedTestTextData[allTypedCharactersStore.length - 1] : allTypedCharactersStore[allTypedCharactersStore.length - 1]?.slice(0, -1) != storedTestTextData[allTypedCharactersStore.length - 1];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-row items-end justify-center"
  }, Popper, /* @__PURE__ */ React.createElement("span", {
    className: `mb-2 mr-2 text-white font-semibold ${!displayHUD && "hidden"}`
  }), /* @__PURE__ */ React.createElement("input", {
    autoCorrect: "off",
    autoCapitalize: "none",
    className: "relative bg-transparent caret-transparent focus:outline-none w-0 text-white font-bold text-center max-w-[60vw] border-b-2 border-solid border-transparent",
    ref: inputRef,
    id: "chordsInput",
    autoFocus: true,
    onBlurCapture: () => [
      setTextPromptUnFocused(true),
      setStartTimer(false)
    ],
    onFocus: () => isShowingPortal == true ? document.getElementById("chordsInput")?.focus() : document.getElementById("chordsInput")?.focus(),
    value: textTyped,
    onChange: (e) => {
      {
        userIsTypingFirstChord ? [
          sessionStorage.setItem("timeThat", JSON.stringify(performance.now()))
        ] : "";
      }
      e.target.value[0] == " " ? "" : setStoreText(e.target.value);
      {
        e.target.value[0] == " " ? "" : set(e.target.value);
      }
    },
    onKeyDownCapture: (e) => {
      if (e.target.value.length == 0 && currentSubindexInTrainingText == 0 && targetCharacterIndex == 0 && e.key === "Backspace" && currentLineOfTrainingText != 0 && wasPreviousTextIncorrect)
        setGenerateThePreviousLine(true);
    }
  }));
}
export default ChordTextInput;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0Nob3JkVGV4dElucHV0LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsMEJBQXdDO0FBQ3RDLFFBQU0sZUFBZSxnQkFDbkIsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSxZQUFZLGNBQWMsQ0FBQyxVQUFlLE1BQU07QUFDdEQsUUFBTSwwQkFBMEIsY0FDOUIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxxQkFBcUIsY0FDekIsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSxXQUFXLE9BQXlCO0FBQzFDLFFBQU0seUJBQXlCLGdCQUM3QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGNBQWMsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUNuRCxRQUFNLHFCQUFxQixnQkFDekIsQ0FBQyxVQUFVLE1BQU07QUFHbkIsUUFBTSxnQkFBZ0IsZ0JBQWdCLENBQUMsVUFBVSxNQUFNO0FBQ3ZELFFBQU0sYUFBYSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBRWxELFFBQU0seUJBQXlCLGdCQUM3QixDQUFDLFVBQVUsTUFBTTtBQUduQixRQUFNLG1CQUFtQixjQUN2QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxrQkFBa0IsY0FDdEIsQ0FBQyxVQUFVLE1BQU07QUFHbkIsUUFBTSxNQUFNLGdCQUFnQixDQUFDLFVBQWUsTUFBTTtBQUNsRCxRQUFNLDZCQUE2QixnQkFDakMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSwwQkFBMEIsZ0JBQzlCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sT0FBTyxjQUFjLENBQUMsVUFBZSxNQUFNO0FBQ2pELFFBQU0sNEJBQTRCLGNBQ2hDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sZ0NBQWdDLGNBQ3BDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sdUJBQXVCLGNBQzNCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sQ0FBRSxhQUFhLFVBQVcsV0FDOUI7QUFFRixRQUFNLENBQUMsWUFBWSxpQkFBaUIsU0FBUztBQUM3QyxRQUFNLE1BQU07QUFFWixRQUFNLHlCQUNKLDhCQUE4QixLQUM5QixrQ0FBa0MsS0FDbEMseUJBQXlCO0FBRTNCLFFBQU0sMkJBQ0osMkJBQTJCLGFBQ3ZCLHdCQUF3Qix3QkFBd0IsU0FBUyxNQUN6RCxtQkFBbUIsd0JBQXdCLFNBQVMsS0FDcEQsd0JBQXdCLHdCQUF3QixTQUFTLElBQUksTUFDM0QsR0FDQSxPQUNHLG1CQUFtQix3QkFBd0IsU0FBUztBQUUvRCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFFBQ0Qsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVyxzQ0FDVCxDQUFDLGNBQWM7QUFBQSxNQUluQixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxhQUFZO0FBQUEsSUFDWixnQkFBZTtBQUFBLElBQ2YsV0FBVTtBQUFBLElBQ1YsS0FBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBUztBQUFBLElBQ1QsZUFBZSxNQUFNO0FBQUEsTUFDbkIsdUJBQXVCO0FBQUEsTUFDdkIsY0FBYztBQUFBO0FBQUEsSUFFaEIsU0FBUyxNQUNQLG1CQUFtQixPQUNmLFNBQVMsZUFBZSxnQkFBZ0IsVUFDeEMsU0FBUyxlQUFlLGdCQUFnQjtBQUFBLElBRTlDLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2Y7QUFDRSxpQ0FDSTtBQUFBLFVBQ0UsZUFBZSxRQUNiLFlBQ0EsS0FBSyxVQUFVLFlBQVk7QUFBQSxZQUcvQjtBQUFBO0FBRU4sUUFBRSxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssYUFBYSxFQUFFLE9BQU87QUFDdEQ7QUFDRSxVQUFFLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxJQUFJLEVBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUlqRCxrQkFBa0IsQ0FBQyxNQUFNO0FBQ3ZCLFVBQ0UsRUFBRSxPQUFPLE1BQU0sVUFBVSxLQUN6QixpQ0FBaUMsS0FDakMsd0JBQXdCLEtBQ3hCLEVBQUUsUUFBUSxlQUNWLDZCQUE2QixLQUM3QjtBQUVBLG1DQUEyQjtBQUFBO0FBQUE7QUFBQTtBQVF2QyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
