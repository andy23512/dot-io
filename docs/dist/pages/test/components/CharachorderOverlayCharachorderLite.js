import React, {useLayoutEffect, useRef, useState} from "../../../../snowpack/pkg/react.js";
import SectorGroup from "./SectorGroup.js";
import charachorderBackground from "../../../assets/charachorder_background_feathered_no_center.png";
import styled from "../../../../snowpack/pkg/styled-components.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
import {useStoreState} from "../../../store/store.js";
import {
  pickerV1,
  pickerLite,
  pickerNone
} from "../../../models/keyboardDropDownFolder/keyboardDropDown.js";
const triggerResize = () => {
  window.dispatchEvent(new Event("resize"));
};
function CharachorderOverlayLite({
  overrideBottom
}) {
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
    return JSON.stringify(keysToHighlightLite).includes(JSON.stringify({rowGroup, position}));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(OverlayContainer, {
    ref: overlayRef,
    scaleWidth: overlayScale?.width || 1,
    onLoad: triggerResize,
    scaleHeight: overlayScale?.height || 1,
    scale: overlayScale?.scale || 1,
    ...{overrideBottom}
  }, pickerLite && pickerNone && /* @__PURE__ */ React.createElement("div", {
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
  }, "→")))), " ", pickerV1 && pickerNone && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    onLoad: setHasLoadedToTrue,
    src: charachorderBackground,
    className: "mt-8"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectorGroup, {
    top: 28.95,
    left: 11.13,
    scale: 0.75,
    groupSpecifier: 1
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    top: 21.6,
    left: 20.63,
    scale: 0.74,
    groupSpecifier: 2
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    top: 17.7,
    left: 30.6,
    scale: 0.74,
    groupSpecifier: 3
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    top: 28,
    left: 39,
    scale: 0.74,
    groupSpecifier: 4
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 41.5,
    top: 53.3,
    scale: 0.74,
    groupSpecifier: 5
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 38.1,
    top: 69.2,
    scale: 0.74,
    groupSpecifier: 6
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 34,
    top: 84.2,
    scale: 0.74,
    groupSpecifier: 7
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 10.2,
    top: 68.2,
    scale: 0.55,
    groupSpecifier: 8
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 17.2,
    top: 72.9,
    scale: 0.55,
    groupSpecifier: 10
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 52.9,
    top: 28,
    scale: 0.74,
    groupSpecifier: 9
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 61.3,
    top: 17.7,
    scale: 0.74,
    groupSpecifier: 11
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 71.4,
    top: 21.5,
    scale: 0.74,
    groupSpecifier: 12
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 80.9,
    top: 29,
    scale: 0.74,
    groupSpecifier: 13
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 50.4,
    top: 53.3,
    scale: 0.74,
    groupSpecifier: 14
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 53.9,
    top: 69.1,
    scale: 0.74,
    groupSpecifier: 15
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 57.9,
    top: 84.2,
    scale: 0.74,
    groupSpecifier: 16
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 74.5,
    top: 72.9,
    scale: 0.55,
    groupSpecifier: 10
  }), /* @__PURE__ */ React.createElement(SectorGroup, {
    left: 81.5,
    top: 68.2,
    scale: 0.55,
    groupSpecifier: 8
  })))));
}
const OverlayContainer = styled.div.attrs({})`
  position: absolute;

  ${(props) => `transform: scale(${Math.min(1, props.scale)})`};
  ${(props) => `top: ${-(1 - props.scaleHeight) * 532 / 2}px`};
  ${(props) => `left: ${-(1 - props.scaleWidth) * 1e3 / 2}px`};

  width: 1000px;
  height: 532px;
`;
const keyboardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#999",
  fontFamily: "system-ui, sans-serif",
  marginTop: "80px"
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
  padding: "0.25rem",
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
export default CharachorderOverlayLite;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NoYXJhY2hvcmRlck92ZXJsYXlDaGFyYWNob3JkZXJMaXRlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQSxNQUFNLGdCQUFnQixNQUFNO0FBSTFCLFNBQU8sY0FBYyxJQUFJLE1BQU07QUFBQTtBQUdqQyxpQ0FBaUM7QUFBQSxFQUMvQjtBQUFBLEdBQzZCO0FBQzdCLFFBQU0sQ0FBQywwQkFBMEIsK0JBQy9CLFNBQVM7QUFDWCxRQUFNLHFCQUFxQixNQUFNLDRCQUE0QjtBQUM3RCxRQUFNLGFBQWEsT0FBTztBQUMxQixRQUFNLENBQUMsY0FBYyxtQkFBbUIsU0FBZ0M7QUFFeEUsUUFBTSxhQUFhO0FBRW5CLGtCQUFnQixNQUFNO0FBQ3BCLFVBQU0sY0FBYyxZQUFZLFdBQVc7QUFDM0Msb0JBQWdCO0FBQUEsS0FDZixDQUFDO0FBQ0osUUFBTSxzQkFBc0IsY0FDMUIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxXQUFXLENBQUMsVUFBZSxhQUFnQztBQUMvRCxXQUFPLEtBQUssVUFBVSxxQkFBcUIsU0FDekMsS0FBSyxVQUFVLENBQUUsVUFBVTtBQUFBO0FBSS9CLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFlBQVksY0FBYyxTQUFTO0FBQUEsSUFDbkMsUUFBUTtBQUFBLElBQ1IsYUFBYSxjQUFjLFVBQVU7QUFBQSxJQUNyQyxPQUFPLGNBQWMsU0FBUztBQUFBLE9BQzFCLENBQUU7QUFBQSxLQUVMLGNBQWMsY0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBTyxPQUFPO0FBQUEsS0FDM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElB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LElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFJbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04s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QUNQLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLFdBQ0U7QUFBQSxFQUNGLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULGlCQUFpQjtBQUFBLEVBQ2pCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUNFO0FBQUE7QUFFSixNQUFNLGlCQUFpQjtBQUFBLEVBQ3JCLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLG1CQUFtQjtBQUFBLEVBQ25CLFdBQ0U7QUFBQSxFQUNGLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULGlCQUFpQjtBQUFBLEVBQ2pCLGtCQUFrQjtBQUFBLEVBQ2xCLGlCQUNFO0FBQUE7QUFHSixxQkFBcUIsU0FBNkI7QUFDaEQsUUFBTSxRQUFRLFNBQVMsZUFBZSxlQUFlO0FBQ3JELFFBQU0sU0FBUyxTQUFTLGVBQWUsZ0JBQWdCO0FBQ3ZELFFBQU0sYUFBYTtBQUNuQixRQUFNLGNBQWM7QUFFcEIsU0FBTztBQUFBLElBQ0wsT0FBTyxRQUFRO0FBQUEsSUFDZixRQUFRLFNBQVM7QUFBQSxJQUNqQixPQUFPLEtBQUssSUFBSSxRQUFRLFlBQVksU0FBUztBQUFBO0FBQUE7QUFJakQsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
