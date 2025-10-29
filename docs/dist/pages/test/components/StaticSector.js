import React from "../../../../snowpack/pkg/react.js";
function StaticSector({
  posX,
  posY,
  active,
  rotation,
  title,
  titleTransformOverride
}) {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "absolute",
      width: `50%`,
      top: `${posY}%`,
      left: `${posX}%`,
      transform: `rotate(${rotation}deg)`,
      transformBox: "fill-box",
      transformOrigin: "center"
    }
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 9",
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M 4 0.5 C 4 2 2 4 0.5 4 L 0.5 9 C 5 9 9 5 9 0.5",
    fill: `${active ? "#43e272" : "#8099E5"}`
  })), /* @__PURE__ */ React.createElement("p", {
    className: "absolute text-black font-bold text-center",
    style: {
      transform: titleTransformOverride || `rotate(-${rotation}deg)`,
      left: 20,
      top: 15,
      lineHeight: 1
    }
  }, title || ""));
}
export default StaticSector;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1N0YXRpY1NlY3Rvci50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQVlBLHNCQUFzQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxHQUNzQjtBQUN0QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLEtBQUssR0FBRztBQUFBLE1BQ1IsTUFBTSxHQUFHO0FBQUEsTUFDVCxXQUFXLFVBQVU7QUFBQSxNQUNyQixjQUFjO0FBQUEsTUFDZCxpQkFBaUI7QUFBQTtBQUFBLEtBR25CLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQU0sR0FBRyxTQUFTLFlBQVk7QUFBQSxPQUlsQyxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxXQUFXLDBCQUEwQixXQUFXO0FBQUEsTUFDaEQsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsWUFBWTtBQUFBO0FBQUEsS0FHYixTQUFTO0FBQUE7QUFNbEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
