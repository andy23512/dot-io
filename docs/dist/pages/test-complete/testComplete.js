import React, {useState} from "../../../snowpack/pkg/react.js";
import {TestControlRow} from "./components/testControlsRow.js";
import {TestStatsCard} from "./components/testStatsCard.js";
import {TestCompleteGraph} from "./components/testCompleteGraph.js";
import {TrainingModeSelector} from "../test/components/TrainingModeSelector.js";
import {
  ManagerPageContainer,
  HorizontalRule
} from "./testComplete.styled.js";
import ImageSlider from "../test/components/imageSlider.js";
import {useStoreState, useStoreActions} from "../../store/store.js";
function TestCompletePage() {
  const isDisplayingIntroductionModal = useStoreState((store) => store.isDisplayingIntroductionModal);
  const setIsDisplayingIntroductionModal = useStoreActions((store) => store.setIsDisplayingIntroductionModal);
  const [toggleValue, setToggleValue] = useState(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ManagerPageContainer, null, isDisplayingIntroductionModal || localStorage.getItem("FirstTimeViewingModal") == void 0 ? /* @__PURE__ */ React.createElement("div", {
    style: modal
  }, /* @__PURE__ */ React.createElement("div", {
    style: modal_content
  }, /* @__PURE__ */ React.createElement("button", {
    className: "close absolute ml-96 text-5xl text-white",
    onClick: () => [
      setToggleValue(!toggleValue),
      localStorage.setItem("FirstTimeViewingModal", JSON.stringify(true)),
      setIsDisplayingIntroductionModal(false)
    ]
  }, "×"), /* @__PURE__ */ React.createElement(ImageSlider, null))) : null, /* @__PURE__ */ React.createElement(TestStatsCard, null), /* @__PURE__ */ React.createElement(HorizontalRule, null), /* @__PURE__ */ React.createElement(TestCompleteGraph, null), /* @__PURE__ */ React.createElement(TestControlRow, null), /* @__PURE__ */ React.createElement(TrainingModeSelector, null)));
}
export default TestCompletePage;
const modal = {
  position: "absolute",
  zIndex: "1",
  left: "5%",
  width: "75%",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.25)"
};
const modal_content = {
  backgroundColor: "#222424",
  position: "absolute",
  top: "20%",
  left: "20%",
  borderRadius: "5px",
  border: "2px solid black"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC1jb21wbGV0ZS90ZXN0Q29tcGxldGUudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQVNBLDRCQUEwQztBQUN4QyxRQUFNLGdDQUFnQyxjQUNwQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLG1DQUFtQyxnQkFDdkMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVM7QUFFL0MsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxzQkFBRCxNQUNHLGlDQUNELGFBQWEsUUFBUSw0QkFBNEIsU0FDL0Msb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTztBQUFBLEtBQ1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTztBQUFBLEtBQ1Ysb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQUEsTUFDYixlQUFlLENBQUM7QUFBQSxNQUNoQixhQUFhLFFBQ1gseUJBQ0EsS0FBSyxVQUFVO0FBQUEsTUFFakIsaUNBQWlDO0FBQUE7QUFBQSxLQUVwQyxNQUdELG9DQUFDLGFBQUQsVUFHRixNQUNKLG9DQUFDLGVBQUQsT0FDQSxvQ0FBQyxnQkFBRCxPQUNBLG9DQUFDLG1CQUFELE9BQ0Esb0NBQUMsZ0JBQUQsT0FDQSxvQ0FBQyxzQkFBRDtBQUFBO0FBTVIsZUFBZTtBQUVmLE1BQU0sUUFBUTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsaUJBQWlCO0FBQUE7QUFHbkIsTUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixpQkFBaUI7QUFBQSxFQUNqQixVQUFVO0FBQUEsRUFDVixLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixjQUFjO0FBQUEsRUFDZCxRQUFRO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
