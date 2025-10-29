import React from "../../../snowpack/pkg/react.js";
import {useStoreState} from "../../store/store.js";
export function Light() {
  const styleValue = false;
  const keysToHighlight = useStoreState((store) => store.currentlyHighlightedKeys);
  const keysToHighlightLite = useStoreState((store) => store.currentlyHighlightedKeysLite);
  const compare2 = (rowGroup, position) => {
    return JSON.stringify(keysToHighlightLite).includes(JSON.stringify({rowGroup, position}));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "body",
    style: keyboardBodyStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: "keyboard",
    style: keyboardStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row",
    style: rowStyle
  }, /* @__PURE__ */ React.createElement("div", {
    style: styleValue ? enterButtonStyle : buttonStyle
  }, "esc"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "1"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "2"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "3"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "3"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "4"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "5"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "6"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "7"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "8"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "9"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "0"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "-"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "="), /* @__PURE__ */ React.createElement("div", {
    style: shiftButtonStyle
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
  }, "["), /* @__PURE__ */ React.createElement("div", {
    style: compare2(2, 13) ? highlightedButtonStyle : buttonStyle
  }, "]"), /* @__PURE__ */ React.createElement("div", {
    id: "backslash",
    style: buttonStyle
  }, "\\")), /* @__PURE__ */ React.createElement("div", {
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
  }, ";"), /* @__PURE__ */ React.createElement("div", {
    style: compare2(3, 12) ? highlightedButtonStyle : buttonStyle
  }, "'"), /* @__PURE__ */ React.createElement("div", {
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
  }, "M"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, ","), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "."), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "/"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "↑"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
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
    style: enterButtonStyle
  }, "Space"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "Fn"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "alt"), /* @__PURE__ */ React.createElement("div", {
    style: enterButtonStyle
  }, "Space"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "⊞"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "Fn"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "←"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "↓"), /* @__PURE__ */ React.createElement("div", {
    style: buttonStyle
  }, "→")))));
}
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvbW9kZWxzL2tleWJvYXJkRHJvcERvd25Gb2xkZXIva2V5Ym9hcmRMaXRlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFNTyx3QkFBK0I7QUFDcEMsUUFBTSxhQUFhO0FBQ25CLFFBQU0sa0JBQWtCLGNBQ3RCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sc0JBQXNCLGNBQzFCLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sV0FBVyxDQUFDLFVBQWUsYUFBZ0M7QUFDL0QsV0FBTyxLQUFLLFVBQVUscUJBQXFCLFNBQ3pDLEtBQUssVUFBVSxDQUFFLFVBQVU7QUFBQTtBQUkvQixTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFPLE9BQU87QUFBQSxLQUMzQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBVyxPQUFPO0FBQUEsS0FDL0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQU0sT0FBTztBQUFBLEtBQzFCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sYUFBYSxtQkFBbUI7QUFBQSxLQUFhLFFBQ3pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU87QUFBQSxLQUFhLE1BQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9B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TztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQSxFQUNGLFdBQVc7QUFBQTtBQUdiLE1BQU0sbUJBQW1CO0FBQUEsRUFDdkIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQTtBQUdKLE1BQU0sbUJBQW1CO0FBQUEsRUFDdkIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQTtBQUVKLE1BQU0sOEJBQThCO0FBQUEsRUFDbEMsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQSxFQUNGLFdBQVc7QUFBQTtBQUdiLE1BQU0scUJBQXFCO0FBQUEsRUFDekIsY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQTtBQUVKLE1BQU0saUJBQWlCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsV0FDRTtBQUFBLEVBQ0YsWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsaUJBQ0U7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
