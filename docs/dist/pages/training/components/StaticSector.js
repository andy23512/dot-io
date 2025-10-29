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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aWNTZWN0b3IudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFZQSxzQkFBc0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDc0I7QUFDdEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxLQUFLLEdBQUc7QUFBQSxNQUNSLE1BQU0sR0FBRztBQUFBLE1BQ1QsV0FBVyxVQUFVO0FBQUEsTUFDckIsY0FBYztBQUFBLE1BQ2QsaUJBQWlCO0FBQUE7QUFBQSxLQUduQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFNLEdBQUcsU0FBUyxZQUFZO0FBQUEsT0FJbEMsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsV0FBVywwQkFBMEIsV0FBVztBQUFBLE1BQ2hELE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFlBQVk7QUFBQTtBQUFBLEtBR2IsU0FBUztBQUFBO0FBTWxCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
