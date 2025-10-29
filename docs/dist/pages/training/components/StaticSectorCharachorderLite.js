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
      transformBox: "fill-box",
      transformOrigin: "center"
    }
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "9 9 9 9",
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "100",
    height: "100",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aWNTZWN0b3JDaGFyYWNob3JkZXJMaXRlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBWUEsc0JBQXNCO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ3NCO0FBQ3RCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsS0FBSyxHQUFHO0FBQUEsTUFDUixNQUFNLEdBQUc7QUFBQSxNQUVULGNBQWM7QUFBQSxNQUNkLGlCQUFpQjtBQUFBO0FBQUEsS0FHbkIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsTUFBTSxHQUFHLFNBQVMsWUFBWTtBQUFBLE9BSWxDLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFdBQVcsMEJBQTBCLFdBQVc7QUFBQSxNQUNoRCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUE7QUFBQSxLQUdiLFNBQVM7QUFBQTtBQU1sQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
