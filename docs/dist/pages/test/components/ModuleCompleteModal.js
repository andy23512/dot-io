import React, {useState, useRef} from "../../../../snowpack/pkg/react.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
import {downloadChordsForAllChordsModule} from "../../manager/components/download.js";
import IQEQLogoImage from "./assets/iqeq.png";
import {generateNewChordRecordForAllChordsModule} from "./EditChordModal.js";
function ModuleCompleteModal() {
  const moduleNumber = useStoreState((store) => store.moduleNumber);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const passwordModuleModalToggle = useStoreState((store) => store.passwordModuleModalToggle);
  const chmTierPasswordBypass = useStoreState((store) => store.chmTierPasswordBypass);
  const setPasswordModuleModalToggle = useStoreActions((store) => store.setPasswordModuleModalToggle);
  const setChmTierPasswordBypass = useStoreActions((store) => store.setChmTierPasswordBypass);
  const downloadModuleModalToggle = useStoreState((store) => store.downloadModuleModalToggle);
  const moduleCompleteModalToggle = useStoreState((store) => store.moduleCompleteModalToggle);
  const setModuleCompleteModalToggle = useStoreActions((store) => store.setModuleCompleteModalToggle);
  const setDownloadModuleModalToggle = useStoreActions((store) => store.setDownloadModuleModalToggle);
  const setStoredChordsRepresentation = useStoreActions((store) => store.setStoredChordsRepresentation);
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const setModuleNumber = useStoreActions((store) => store.setModuleNumber);
  const trainingLevelIsCPM = trainingLevel == "CPM";
  const inputRef = useRef(null);
  const [value, setValue] = useState(false);
  const [passwordErrorFlag, setPasswordErrorFlag] = useState(false);
  function LearnPageFunction(value2) {
    const payload = [];
    payload.push(value2);
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  function TestPageFunction(value2, testLength) {
    const payload = [];
    payload.push(value2);
    payload.push(testLength);
    sessionStorage.removeItem("tempTestDeIncrement");
    sessionStorage.removeItem("Refresh");
    sessionStorage.setItem("CustomNonRefresh", JSON.stringify(1));
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  function selectTheTrainingMode() {
    if (trainingLevel == "CPM") {
      if (moduleNumber < 4) {
        if (moduleNumber + 1 == 2) {
          LearnPageFunction("TRIGRAM");
        } else if (moduleNumber + 1 == 3) {
          LearnPageFunction("LEXICAL");
        } else if (moduleNumber + 1 == 4) {
          TestPageFunction("LEXICAL", 26);
        }
      }
      setModuleNumber(moduleNumber + 1);
    } else if (trainingLevel == "CHM") {
      if (moduleNumber < 4) {
        if (moduleNumber + 1 == 2) {
          LearnPageFunction("LEXICAL");
        } else if (moduleNumber + 1 == 3) {
          LearnPageFunction("LEXICAL");
        }
        setModuleNumber(moduleNumber + 1);
      }
    }
  }
  async function downloadChords() {
    const done = await downloadChordsForAllChordsModule();
    setStoredChordsRepresentation(generateNewChordRecordForAllChordsModule(JSON?.parse(localStorage.getItem("chordsReadFromDevice"))));
    done == true ? [LearnPageFunction("ALLCHORDS"), setDownloadModuleModalToggle(false)] : "";
  }
  function passwordUnlock(input) {
    if (input.current.value == "chorderclubbing0!") {
      setChmTierPasswordBypass(true);
      setPasswordModuleModalToggle(!passwordModuleModalToggle);
    } else {
      setPasswordErrorFlag(true);
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, moduleCompleteModalToggle && trainingLevelIsCPM ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-row border-zinc-400 border-4 rounded-xl left-[50%] top-[40%] mt-[-250px] ml-[-250px] absolute m-auto justify-center h-2/5 bg-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "close ml-96 text-5xl pt-4 text-[#222424]",
    onClick: () => [
      setModuleCompleteModalToggle(!moduleCompleteModalToggle)
    ]
  }, "×"), /* @__PURE__ */ React.createElement("p", {
    className: " font-bold "
  }, "Congratulations!"), /* @__PURE__ */ React.createElement("p", {
    className: " ml-10 mr-10"
  }, "You have completed the current tier!"), /* @__PURE__ */ React.createElement("p", {
    className: " ml-10 mr-10 mb-10"
  }, "If you want to stay and keep practicing this tier, press ‘X‘."), /* @__PURE__ */ React.createElement("button", {
    className: "drop-shadow-2xl right-arrow text-white rounded inline-block p-2 mr-auto ml-auto focus bg-[#333] hover:bg-[#01a049] active:bg-[#222]",
    onClick: () => [
      selectTheTrainingMode(),
      setModuleCompleteModalToggle(!moduleCompleteModalToggle)
    ]
  }, " ", "Move To Next Tier")) : null, downloadModuleModalToggle ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-row border-zinc-400 border-4 rounded-xl left-[50%] top-[40%] mt-[-250px] ml-[-250px] absolute m-auto justify-center h-2/5 bg-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `close  ml-96 text-5xl pl-8 pt-4 text-[#222424] ${value == true ? `hidden` : ``}`,
    onClick: () => [
      setDownloadModuleModalToggle(!downloadModuleModalToggle)
    ]
  }, "×"), /* @__PURE__ */ React.createElement("p", {
    className: " font-bold mr-64"
  }, "Download Your Chords!"), /* @__PURE__ */ React.createElement("p", {
    className: " ml-10 mr-10",
    id: "statusDiv"
  }), /* @__PURE__ */ React.createElement("p", {
    className: " ml-10 mr-10 text-white"
  }, "Or press ‘X’ to continue practicing."), /* @__PURE__ */ React.createElement("img", {
    src: IQEQLogoImage,
    className: `h-28 w-28 animate-bounce  ml-48 ${value == false ? `hidden` : ``}`
  }), /* @__PURE__ */ React.createElement("p", {
    className: " ml-10 mr-10 ml-36",
    id: "downloadCompletionPercentage"
  }), /* @__PURE__ */ React.createElement("button", {
    className: `drop-shadow-2xl right-arrow text-white rounded inline-block p-2 ml-auto mr-auto mt-4 focus bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] ${value == true ? `hidden` : ``}`,
    onClick: () => [setValue(true), downloadChords()]
  }, "Download")) : null, passwordModuleModalToggle ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-row border-zinc-400 border-4 rounded-xl left-[50%] top-[40%] mt-[-250px] ml-[-250px] absolute m-auto justify-center h-2/5 bg-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `close ml-96 relative text-5xl pl-8 pt-4 text-[#222424]`,
    onClick: () => [
      setPasswordModuleModalToggle(!passwordModuleModalToggle),
      console.log("x out out out")
    ]
  }, "×"), /* @__PURE__ */ React.createElement("p", {
    className: "pt-2 m-4 font-bold mr-64"
  }, "Enter the secret phrase!"), /* @__PURE__ */ React.createElement("p", {
    className: `pt-2 font-bold mr-64 text-red-500 ${passwordErrorFlag == false ? `invisible` : ``}`
  }, "Wrong phrase!"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    ref: inputRef,
    className: "border-black border-2 ml-16 w-3/4"
  }), /* @__PURE__ */ React.createElement("button", {
    className: `drop-shadow-2xl right-arrow text-white static rounded  inline-block p-2 ml-auto mr-auto mt-4 focus bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]`,
    onClick: () => [passwordUnlock(inputRef)]
  }, "Unlock")) : null);
}
export default ModuleCompleteModal;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL01vZHVsZUNvbXBsZXRlTW9kYWwudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBLCtCQUE2QztBQUMzQyxRQUFNLGVBQWUsY0FBYyxDQUFDLFVBQWUsTUFBTTtBQUN6RCxRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzFELFFBQU0sNEJBQTRCLGNBQ2hDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sd0JBQXdCLGNBQzVCLENBQUMsVUFBZSxNQUFNO0FBR3hCLFFBQU0sK0JBQStCLGdCQUNuQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLDJCQUEyQixnQkFDL0IsQ0FBQyxVQUFlLE1BQU07QUFHeEIsUUFBTSw0QkFBNEIsY0FDaEMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSw0QkFBNEIsY0FDaEMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSwrQkFBK0IsZ0JBQ25DLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sK0JBQStCLGdCQUNuQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGdDQUFnQyxnQkFDcEMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQWUsTUFBTTtBQUd4QixRQUFNLHFCQUFxQixpQkFBaUI7QUFDNUMsUUFBTSxXQUFXLE9BQU87QUFFeEIsUUFBTSxDQUFDLE9BQU8sWUFBWSxTQUFTO0FBQ25DLFFBQU0sQ0FBQyxtQkFBbUIsd0JBQXdCLFNBQVM7QUFFM0QsNkJBQTJCLFFBQWU7QUFDeEMsVUFBTSxVQUFpQjtBQUN2QixZQUFRLEtBQUs7QUFDYixtQkFBZSxXQUFXO0FBQzFCLGtCQUFjO0FBQUE7QUFHaEIsNEJBQTBCLFFBQWUsWUFBaUI7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
