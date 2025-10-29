import React, {useLayoutEffect, useRef, useState} from "../../../../snowpack/pkg/react.js";
import "../../training/components/SectorGroup.js";
import "../../../assets/charachorder_background_feathered_no_center.png";
import styled from "../../../../snowpack/pkg/styled-components.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreState} from "../../../store/store.js";
import {
  pickerV1
} from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
const triggerResize = () => {
  window.dispatchEvent(new Event("resize"));
};
function ManagersDeviceOverlay({overrideBottom}, lettersToHighlight) {
  const [hasLoadedBackgroundImage, setHasLoadedBackgroundImage] = useState(pickerV1);
  const setHasLoadedToTrue = () => setHasLoadedBackgroundImage(pickerV1);
  const overlayRef = useRef(null);
  const [overlayScale, setOverlayScale] = useState({});
  const screenSize = useWindowSize();
  useLayoutEffect(() => {
    const scaleObject = fitToParent(overlayRef.current);
    setOverlayScale(scaleObject);
  }, [screenSize]);
  const keysToHighlightLite = useStoreState((store) => store.currentlyHighlightedKeysLite);
  const compare2 = (rowGroup, position) => {
    console.log("keys to highlight " + JSON.stringify(keysToHighlightLite));
    return JSON.stringify(keysToHighlightLite).includes(JSON.stringify({rowGroup, position}));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(OverlayContainer, {
    ref: overlayRef,
    scaleWidth: 1,
    onLoad: triggerResize,
    scaleHeight: 1,
    scale: 1,
    ...{overrideBottom}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "body",
    style: keyboardBodyStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: "keyboard",
    style: keyboardStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 1) ? highlightedButtonStyle : buttonStyle
  }, "esc"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 2) ? highlightedButtonStyle : buttonStyle
  }, "1 !"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 3) ? highlightedButtonStyle : buttonStyle
  }, "2 @"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 4) ? highlightedButtonStyle : buttonStyle
  }, "3 #"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 5) ? highlightedButtonStyle : buttonStyle
  }, "4 $"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 6) ? highlightedButtonStyle : buttonStyle
  }, "5 %"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 7) ? highlightedButtonStyle : buttonStyle
  }, "6 ^"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 8) ? highlightedButtonStyle : buttonStyle
  }, "7 &"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 9) ? highlightedButtonStyle : buttonStyle
  }, "8 *"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 10) ? highlightedButtonStyle : buttonStyle
  }, "9 ("), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 11) ? highlightedButtonStyle : buttonStyle
  }, "0 )"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 12) ? highlightedButtonStyle : buttonStyle
  }, "- _"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 13) ? highlightedButtonStyle : buttonStyle
  }, "= +"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(1, 14) ? highlightedButtonStyle : shiftButtonStyle
  }, "Backspace")), /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: tabButtonStyle
  }, "Tab"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 2) ? highlightedButtonStyle : buttonStyle
  }, "Q"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 3) ? highlightedButtonStyle : buttonStyle
  }, "W"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 4) ? highlightedButtonStyle : buttonStyle
  }, "E"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 5) ? highlightedButtonStyle : buttonStyle
  }, "R"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 6) ? highlightedButtonStyle : buttonStyle
  }, "T"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 7) ? highlightedButtonStyle : buttonStyle
  }, "Y"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 8) ? highlightedButtonStyle : buttonStyle
  }, "U"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 9) ? highlightedButtonStyle : buttonStyle
  }, "I"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 10) ? highlightedButtonStyle : buttonStyle
  }, "O"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 11) ? highlightedButtonStyle : buttonStyle
  }, "P"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 12) ? highlightedButtonStyle : buttonStyle
  }, " ", "{", " ["), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 13) ? highlightedButtonStyle : buttonStyle
  }, " ", "}", " ]"), /* @__PURE__ */ React.createElement("div", {
    id: "backslash",
    style: buttonStyle
  }, "\\ |")), /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: capitalButtonStyle
  }, "Caps"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 2) ? highlightedButtonStyle : buttonStyle
  }, "A"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 3) ? highlightedButtonStyle : buttonStyle
  }, "S"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 4) ? highlightedButtonStyle : buttonStyle
  }, "D"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 5) ? highlightedButtonStyle : buttonStyle
  }, "F"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 6) ? highlightedButtonStyle : buttonStyle
  }, "G"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 7) ? highlightedButtonStyle : buttonStyle
  }, "H"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 8) ? highlightedButtonStyle : buttonStyle
  }, "J"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 9) ? highlightedButtonStyle : buttonStyle
  }, "K"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 10) ? highlightedButtonStyle : buttonStyle
  }, "L"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 11) ? highlightedButtonStyle : buttonStyle
  }, "; :"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 12) ? highlightedButtonStyle : buttonStyle
  }, `" '`), /* @__PURE__ */ React.createElement("div", {
    style: enterButtonStyle
  }, "Enter")), /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: shiftButtonStyle
  }, "Shift"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 2) ? highlightedButtonStyle : buttonStyle
  }, "Z"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 3) ? highlightedButtonStyle : buttonStyle
  }, "X"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 4) ? highlightedButtonStyle : buttonStyle
  }, "C"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 5) ? highlightedButtonStyle : buttonStyle
  }, "V"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 6) ? highlightedButtonStyle : buttonStyle
  }, "B"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 7) ? highlightedButtonStyle : buttonStyle
  }, "N"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 8) ? highlightedButtonStyle : buttonStyle
  }, "M", " "), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 9) ? highlightedButtonStyle : buttonStyle
  }, ", <"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 10) ? highlightedButtonStyle : buttonStyle
  }, ". >"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 11) ? highlightedButtonStyle : buttonStyle
  }, "/ ?"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 12) ? highlightedButtonStyle : buttonStyle
  }, "⇧"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 13) ? highlightedButtonStyle : buttonStyle
  }, "↑"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(4, 14) ? highlightedButtonStyle : buttonStyle
  }, "Del")), /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "⊞"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "Ctrl"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "alt"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(5, 4) ? highlightedEnterButtonStyle : enterButtonStyle
  }, "Space", /* @__PURE__ */ React.createElement("p", null, "Past")), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "Fn"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(5, 6) ? highlightedButtonStyle : buttonStyle
  }, "DUP"), /* @__PURE__ */ React.createElement("div", {
    style: enterButtonStyle
  }, "Space", /* @__PURE__ */ React.createElement("p", null, "Plural")), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "⊞"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "Fn"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "←"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "↓"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "→")))), " ", false));
}
const OverlayContainer = styled.div.attrs({})`
  position: relative;

  ${(props) => `transform: scale(${0.2})`};

  width: 100px;
  height: 150px;
  margin-left: 60px;
`;
const keyboardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#999",
  fontFamily: "system-ui, sans-serif"
};
const keyboardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0",
  borderRadius: "4px",
  border: "13px solid #777",
  borderTopColor: "#666",
  borderBottomColor: "#888",
  outline: "3px solid rgba(0, 0, 0, 0.2)",
  outlineOffset: "-1px",
  boxShadow: "inset 0 1rem 1rem rgb(0 0 0 / 50%), 0 2rem 3rem -0.5rem rgb(0 0 0 / 55%)",
  font: "inherit",
  margin: "0"
};
const rowStyle = {
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  width: "900.2px",
  paddingTop: "1px",
  marginBottom: "2px"
};
const buttonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "60px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "black",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, #e9e8e6, #c9c9c9 5%, transparent 5%, transparent 95%, #c9c9c9 95%, #e9e8e6)"
};
const highlightedButtonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "60px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "#43e272",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, green, #c9c9c9 5%, transparent 5%, transparent 95%, #c9c9c9 95%, green)",
  transform: "scale(0.96,0.96)     translate(0, 3px)"
};
const shiftButtonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "140px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "black",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, #e9e8e6, #c9c9c9 2%, transparent 2%, transparent 98%, #c9c9c9 98%, #e9e8e6)"
};
const enterButtonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "125px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "black",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, #e9e8e6, #c9c9c9 3%, transparent 5%, transparent 95%, #c9c9c9 97%, #e9e8e6)"
};
const highlightedEnterButtonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "125px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "#43e272",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, green, #c9c9c9 5%, transparent 5%, transparent 95%, #c9c9c9 95%, green)",
  transform: "scale(0.96,0.96)     translate(0, 3px)"
};
const capitalButtonStyle = {
  borderRadius: "3px",
  fill: "#43e272",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "120px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "black",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, #e9e8e6, #c9c9c9 3%, transparent 5%, transparent 95%, #c9c9c9 97%, #e9e8e6)"
};
const tabButtonStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  color: "white",
  display: "inline-block",
  fontFamily: "system-ui, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.125",
  padding: "0.33em 0.66em",
  position: "relative",
  textAlign: "center",
  verticalAlign: "middle",
  width: "110px",
  height: "60px",
  border: "3px solid transparent",
  borderTop: "2px solid transparent",
  borderBottom: "6px solid transparent",
  backgroundColor: "black",
  borderColor: "#c3c0bb",
  borderTopColor: "#eeedeb",
  borderBottomColor: "#a6a29a",
  boxShadow: "0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgb(0 0 0 / 50%)",
  transition: "transform 100ms",
  outline: "0",
  borderLeftColor: "#b2afa8",
  borderRightColor: "#b2afa8",
  backgroundImage: "linear-gradient(to right, #e9e8e6, #c9c9c9 3%, transparent 1%, transparent 99%, #c9c9c9 97%, #e9e8e6)"
};
function fitToParent(element) {
  const width = element?.parentElement?.clientWidth || 0;
  const height = element?.parentElement?.clientHeight || 0;
  const idealWidth = 1e3;
  const idealHeight = 532;
  return {
    width: width / idealWidth,
    height: height / idealHeight,
    scale: Math.min(width / idealWidth, height / idealHeight)
  };
}
export default ManagersDeviceOverlay;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL01hbmFnZXJzRGV2aWNlT3ZlcmxheS50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFlQSxNQUFNLGdCQUFnQixNQUFNO0FBSTFCLFNBQU8sY0FBYyxJQUFJLE1BQU07QUFBQTtBQUdqQywrQkFDRSxDQUFFLGlCQUNGLG9CQUNjO0FBQ2QsUUFBTSxDQUFDLDBCQUEwQiwrQkFDL0IsU0FBUztBQUNYLFFBQU0scUJBQXFCLE1BQU0sNEJBQTRCO0FBQzdELFFBQU0sYUFBYSxPQUFPO0FBQzFCLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixTQUFnQztBQUV4RSxRQUFNLGFBQWE7QUFFbkIsa0JBQWdCLE1BQU07QUFDcEIsVUFBTSxjQUFjLFlBQVksV0FBVztBQUMzQyxvQkFBZ0I7QUFBQSxLQUNmLENBQUM7QUFDSixRQUFNLHNCQUFzQixjQUMxQixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLFdBQVcsQ0FBQyxVQUFlLGFBQWdDO0FBQy9ELFlBQVEsSUFBSSx1QkFBdUIsS0FBSyxVQUFVO0FBQ2xELFdBQU8sS0FBSyxVQUFVLHFCQUFxQixTQUN6QyxLQUFLLFVBQVUsQ0FBRSxVQUFVO0FBQUE7QUFJL0IsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLE9BQ0gsQ0FBRTtBQUFBLEtBR0osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQU8sT0FBTztBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFXLE9BQU87QUFBQSxLQUMvQixvQ0FBQyxPQUFEO0FBQUEsSUFB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QUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQixXQUNFO0FBQUEsRUFDRixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxpQkFBaUI7QUFBQSxFQUNqQixrQkFBa0I7QUFBQSxFQUNsQixpQkFDRTtBQUFBO0FBRUosTUFBTSxpQkFBaUI7QUFBQSxFQUNyQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQixXQUNFO0FBQUEsRUFDRixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxpQkFBaUI7QUFBQSxFQUNqQixrQkFBa0I7QUFBQSxFQUNsQixpQkFDRTtBQUFBO0FBR0oscUJBQXFCLFNBQTZCO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGVBQWUsZUFBZTtBQUNyRCxRQUFNLFNBQVMsU0FBUyxlQUFlLGdCQUFnQjtBQUN2RCxRQUFNLGFBQWE7QUFDbkIsUUFBTSxjQUFjO0FBRXBCLFNBQU87QUFBQSxJQUNMLE9BQU8sUUFBUTtBQUFBLElBQ2YsUUFBUSxTQUFTO0FBQUEsSUFDakIsT0FBTyxLQUFLLElBQUksUUFBUSxZQUFZLFNBQVM7QUFBQTtBQUFBO0FBSWpELGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
