import React, {useRef, useState} from "../../../../snowpack/pkg/react.js";
import {useHUD} from "../../../hooks/useHUD.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import RefreshIcon from "./RefreshIcon.js";
function ChordTextInput() {
  const setStoreText = useStoreActions((store) => store.setTypedTrainingText);
  const textTyped = useStoreState((store) => store.typedTrainingText);
  const inputRef = useRef(null);
  const regenerateTrainingText = useStoreActions((store) => store.resetTrainingText);
  const timeTakenToTypePreviousChord = useStoreState((store) => store.timeTakenToTypePreviousChord);
  const displayHUD = useHUD();
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const setIsDisplaying = useStoreActions((store) => store.setIsDisplayingStatisticsModal);
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const updateTrainingSetting = (newProperty) => setTrainingSettings({...trainingSettings, ...newProperty});
  const payload = [];
  payload.push(currentTrainingScenario);
  const {parentProps, Popper} = usePopover("Generate a new set of training text.");
  const [firstTyped, setFirstTyped] = useState(true);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-row items-end mt-16 justify-center"
  }, Popper, /* @__PURE__ */ React.createElement("span", {
    className: `mb-2 mr-2 text-white font-semibold ${!displayHUD && "hidden"}`
  }, "Last: ", timeTakenToTypePreviousChord.toFixed()), /* @__PURE__ */ React.createElement("input", {
    autoCorrect: "off",
    autoCapitalize: "none",
    className: "bg-transparent focus:outline-none text-4xl min-h-[40px] mb-2 text-white font-bold text-center max-w-[60vw] pb-4 border-b-2 border-solid border-[#222]",
    ref: inputRef,
    autoFocus: true,
    value: textTyped,
    onChange: (e) => {
      {
        firstTyped ? [
          sessionStorage.setItem("timeThat", JSON.stringify(performance.now())),
          setFirstTyped(false)
        ] : "";
      }
      setStoreText(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 bg-[#333] flex items-center justify-center rounded mb-2 ml-2 cursor-pointer hover:bg-[#444] active:bg-[#222]",
    onClick: () => {
      setStoreText("");
      regenerateTrainingText();
      setIsDisplaying(true);
      updateTrainingSetting({isDisplayingSettingsModal: true});
      inputRef.current?.focus();
    },
    ...parentProps
  }, /* @__PURE__ */ React.createElement(RefreshIcon, null)));
}
export default ChordTextInput;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9DaG9yZFRleHRJbnB1dC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsMEJBQXdDO0FBQ3RDLFFBQU0sZUFBZSxnQkFBZ0IsQ0FBQyxVQUFVLE1BQU07QUFDdEQsUUFBTSxZQUFZLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDakQsUUFBTSxXQUFXLE9BQXlCO0FBQzFDLFFBQU0seUJBQXlCLGdCQUM3QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLCtCQUErQixjQUNuQyxDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLGFBQWE7QUFFbkIsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLHNCQUFzQixnQkFDMUIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxtQkFBbUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUV4RCxRQUFNLHdCQUF3QixDQUFDLGdCQUM3QixvQkFBb0IsSUFBSyxxQkFBcUI7QUFFaEQsUUFBTSxVQUFpQjtBQUN2QixVQUFRLEtBQUs7QUFFYixRQUFNLENBQUUsYUFBYSxVQUFXLFdBQzlCO0FBRUYsUUFBTSxDQUFDLFlBQVksaUJBQWlCLFNBQVM7QUFFN0MsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixRQUVELG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVcsc0NBQ1QsQ0FBQyxjQUFjO0FBQUEsS0FFbEIsVUFDUSw2QkFBNkIsWUFHdEMsb0NBQUMsU0FBRDtBQUFBLElBQ0UsYUFBWTtBQUFBLElBQ1osZ0JBQWU7QUFBQSxJQUNmLFdBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLFdBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2Y7QUFDRSxxQkFDSTtBQUFBLFVBQ0UsZUFBZSxRQUNiLFlBQ0EsS0FBSyxVQUFVLFlBQVk7QUFBQSxVQUU3QixjQUFjO0FBQUEsWUFFaEI7QUFBQTtBQUVOLG1CQUFhLEVBQUUsT0FBTztBQUFBO0FBQUEsTUFJMUIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQ2IsbUJBQWE7QUFDYjtBQUNBLHNCQUFnQjtBQUNoQiw0QkFBc0IsQ0FBRSwyQkFBMkI7QUFFbkQsZUFBUyxTQUFTO0FBQUE7QUFBQSxPQUVoQjtBQUFBLEtBRUosb0NBQUMsYUFBRDtBQUFBO0FBTVIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
