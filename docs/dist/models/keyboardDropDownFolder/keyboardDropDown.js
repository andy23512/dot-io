import styled from "../../../snowpack/pkg/styled-components.js";
import React, {useState} from "../../../snowpack/pkg/react.js";
import {useStoreState, useStoreActions} from "../../store/store.js";
import usePopover from "../../hooks/usePopover.js";
export let pickerLite = false;
export let pickerV1 = false;
export let pickerNone = false;
const options = ["No Device Preview", "CharaChorder Lite", "CharaChorder One"];
const triggerResize = () => {
  window.dispatchEvent(new Event("resize"));
};
function DropDown() {
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const {parentProps: selector, Popper: selectorProper} = usePopover("This allows you to switch your training device.");
  const ref = React.useRef();
  const payload = [];
  payload.push(currentTrainingScenario);
  payload.push(wordTestNumber);
  function startTrainingOver(val) {
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }
  function returnElement(val) {
    if (val == "CharaChorder Lite") {
      pickerLite = true;
      pickerV1 = false;
      pickerNone = true;
    } else if (val == "CharaChorder One" || val == null) {
      pickerV1 = true;
      pickerLite = false;
      pickerNone = true;
    } else if (val == "No Device Preview") {
      pickerNone = false;
      pickerV1 = false;
      pickerLite = false;
    }
    currentTrainingScenario != null ? startTrainingOver(payload) : "";
    triggerResize();
  }
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    returnElement(value);
    setIsOpen(false);
    currentTrainingScenario != null ? startTrainingOver(payload) : "";
    triggerResize();
  };
  React.useEffect(() => {
    pickerLite = false;
    pickerV1 = true;
    currentTrainingScenario != null ? startTrainingOver(payload) : "";
    triggerResize();
    const checkIfClickedOutside = (e) => {
      if (!isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, selectorProper, /* @__PURE__ */ React.createElement(Main, {
    className: "flex text-sm font-bold mb-1 flex-row gap-2 items-center",
    ref
  }, /* @__PURE__ */ React.createElement(DropDownContainer, null, /* @__PURE__ */ React.createElement(DropDownHeader, {
    className: "cursor-pointer hover:text-black hover:bg-white",
    onClick: toggling
  }, selectedOption || "Show Device", " ▼"), isOpen && /* @__PURE__ */ React.createElement(DropDownListContainer, null, /* @__PURE__ */ React.createElement(DropDownList, null, options.map((option) => /* @__PURE__ */ React.createElement(ListItem, {
    className: "cursor-pointer",
    onClick: onOptionClicked(option),
    key: Math.random()
  }, option)))))));
}
export default DropDown;
const Main = styled("div")`
  font-family: sans-serif;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  top: 90%;
  left: 100%;
  animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
  color: white;
`;
const DropDownContainer = styled("a")`
  width: 15.5em;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  color: white;
  position: absolute;
`;
const Arrow = styled("div")`
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  position: relative;
  top: -11px;
  right: -160px;
  width: 10px;
  height: 10px;
  transform: rotate(225deg) translateY(25%);
  transform-origin: right;
`;
const DropDownHeader = styled("div")`
  padding: 0.6em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #FFFFF;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  padding: 0.8em 0;
  margin: 0;
  position: relative;
  background: white;
  width: 100%;
  float: left;
  border: #333 solid;
  color: #00000;
  font-size: 1rem;
  font-weight: 500;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const ListItem = styled("li")`
  list-style: none;
  padding-left: 15px;
  width: 100%;
  padding-right: 62px;
  text-align: left;
  line-height: 2em;
  white-space: nowrap;
  color: black;
  &:hover {
    background: grey;
    font-size: 1rem;
  }
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvbW9kZWxzL2tleWJvYXJkRHJvcERvd25Gb2xkZXIva2V5Ym9hcmREcm9wRG93bi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLFdBQUksYUFBYTtBQUNqQixXQUFJLFdBQVc7QUFDZixXQUFJLGFBQWE7QUFFeEIsTUFBTSxVQUFVLENBQUMscUJBQXFCLHFCQUFxQjtBQUUzRCxNQUFNLGdCQUFnQixNQUFNO0FBSTFCLFNBQU8sY0FBYyxJQUFJLE1BQU07QUFBQTtBQUdqQyxvQkFBa0M7QUFDaEMsUUFBTSxnQkFBZ0IsZ0JBQWdCLENBQUMsVUFBVSxNQUFNO0FBRXZELFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFdEQsUUFBTSxDQUFDLFFBQVEsYUFBYSxTQUFTO0FBQ3JDLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLFNBQVM7QUFDckQsUUFBTSxXQUFXLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLFFBQU0sQ0FBRSxhQUFhLFVBQVUsUUFBUSxrQkFBbUIsV0FDeEQ7QUFFRixRQUFNLE1BQU0sTUFBTTtBQUVsQixRQUFNLFVBQVU7QUFDaEIsVUFBUSxLQUFLO0FBQ2IsVUFBUSxLQUFLO0FBRWIsNkJBQTJCLEtBQUs7QUFDOUIsbUJBQWUsV0FBVztBQUMxQixrQkFBYztBQUFBO0FBRWhCLHlCQUF1QixLQUFVO0FBQy9CLFFBQUksT0FBTyxxQkFBcUI7QUFDOUIsbUJBQWE7QUFDYixpQkFBVztBQUNYLG1CQUFhO0FBQUEsZUFDSixPQUFPLHNCQUFzQixPQUFPLE1BQU07QUFDbkQsaUJBQVc7QUFDWCxtQkFBYTtBQUNiLG1CQUFhO0FBQUEsZUFDSixPQUFPLHFCQUFxQjtBQUNyQyxtQkFBYTtBQUNiLGlCQUFXO0FBQ1gsbUJBQWE7QUFBQTtBQUVmLCtCQUEyQixPQUFPLGtCQUFrQixXQUFXO0FBQy9EO0FBQUE7QUFHRixRQUFNLGtCQUFrQixDQUFDLFVBQWUsTUFBTTtBQUM1QyxzQkFBa0I7QUFDbEIsa0JBQWM7QUFDZCxjQUFVO0FBQ1YsK0JBQTJCLE9BQU8sa0JBQWtCLFdBQVc7QUFDL0Q7QUFBQTtBQUdGLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLGlCQUFhO0FBQ2IsZUFBVztBQUNYLCtCQUEyQixPQUFPLGtCQUFrQixXQUFXO0FBQy9EO0FBQ0EsVUFBTSx3QkFBd0IsQ0FBQyxNQUFXO0FBR3hDLFVBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLElBQUksUUFBUSxTQUFTLEVBQUUsU0FBUztBQUM3RCxrQkFBVTtBQUFBO0FBQUE7QUFJZCxhQUFTLGlCQUFpQixhQUFhO0FBRXZDLFdBQU8sTUFBTTtBQUVYLGVBQVMsb0JBQW9CLGFBQWE7QUFBQTtBQUFBLEtBRTNDO0FBRUgsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRyxnQkFHRCxvQ0FBQyxNQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVjtBQUFBLEtBRUEsb0NBQUMsbUJBQUQsTUFDRSxvQ0FBQyxnQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUztBQUFBLEtBRVIsa0JBQWtCLGVBQWMsT0FHbEMsVUFDQyxvQ0FBQyx1QkFBRCxNQUNFLG9DQUFDLGNBQUQsTUFDRyxRQUFRLElBQUksQ0FBQyxXQUNaLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsZ0JBQWdCO0FBQUEsSUFDekIsS0FBSyxLQUFLO0FBQUEsS0FFVDtBQUFBO0FBV3JCLGVBQWU7QUFFZixNQUFNLE9BQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWXBCLE1BQU0sb0JBQW9CLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFqQyxNQUFNLFFBQVEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWXJCLE1BQU0saUJBQWlCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTlCLE1BQU0sd0JBQXdCLE9BQU87QUFFckMsTUFBTSxlQUFlLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQjVCLE1BQU0sV0FBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
