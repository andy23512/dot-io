import React from "../../../../snowpack/pkg/react.js";
import StaticSector from "./StaticSector.js";
import {
  SectorGroupMap,
  BlankSectorGroupData
} from "../../../models/sectorGroupSpecifier.js";
import {useStoreState} from "../../../store/store.js";
import {useIsDebug} from "../../../hooks/useDebug.js";
function SectorGroup({
  top,
  left,
  scale,
  groupSpecifier
}) {
  const sectorGroupData = SectorGroupMap[groupSpecifier || -1] || BlankSectorGroupData;
  const keysToHighlight = useStoreState((store) => store.currentlyHighlightedKeys);
  const isDebug = useIsDebug();
  const compare = (direction) => {
    return JSON.stringify(keysToHighlight).includes(JSON.stringify({sectorGroup: groupSpecifier, direction}));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "absolute",
    style: {
      width: "100px",
      height: "100px",
      left: `${left}%`,
      top: `${top}%`,
      transform: `scale(${scale})`
    }
  }, isDebug && /* @__PURE__ */ React.createElement("h1", {
    className: "text-white absolute text-xl",
    style: {top: 0, left: -20}
  }, groupSpecifier), /* @__PURE__ */ React.createElement(StaticSector, {
    title: sectorGroupData.bottomKey.title,
    titleTransformOverride: sectorGroupData.bottomKey.titleTransformOverride,
    posX: 35,
    posY: 0,
    rotation: 45,
    active: compare("SOUTH")
  }), /* @__PURE__ */ React.createElement(StaticSector, {
    title: sectorGroupData.leftKey.title,
    titleTransformOverride: sectorGroupData.leftKey.titleTransformOverride,
    posX: 0,
    posY: 0,
    rotation: 135,
    active: compare("WEST")
  }), /* @__PURE__ */ React.createElement(StaticSector, {
    title: sectorGroupData.topKey.title,
    titleTransformOverride: sectorGroupData.topKey.titleTransformOverride,
    posX: 0,
    posY: -35,
    rotation: 225,
    active: compare("NORTH")
  }), /* @__PURE__ */ React.createElement(StaticSector, {
    title: sectorGroupData.rightKey.title,
    titleTransformOverride: sectorGroupData.rightKey.titleTransformOverride,
    posX: 35,
    posY: -35,
    rotation: 315,
    active: compare("EAST")
  }));
}
export default SectorGroup;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TZWN0b3JHcm91cC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBY0EscUJBQXFCO0FBQUEsRUFDbkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxHQUNzQjtBQUN0QixRQUFNLGtCQUNKLGVBQWUsa0JBQWtCLE9BQU87QUFFMUMsUUFBTSxrQkFBa0IsY0FDdEIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxVQUFVO0FBRWhCLFFBQU0sVUFBVSxDQUFDLGNBQWtDO0FBQ2pELFdBQU8sS0FBSyxVQUFVLGlCQUFpQixTQUNyQyxLQUFLLFVBQVUsQ0FBRSxhQUFhLGdCQUFnQjtBQUFBO0FBSWxELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsTUFBTSxHQUFHO0FBQUEsTUFDVCxLQUFLLEdBQUc7QUFBQSxNQUNSLFdBQVcsU0FBUztBQUFBO0FBQUEsS0FHckIsV0FDQyxvQ0FBQyxNQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPLENBQUUsS0FBSyxHQUFHLE1BQU07QUFBQSxLQUV0QixpQkFJTCxvQ0FBQyxjQUFEO0FBQUEsSUFDRSxPQUFPLGdCQUFnQixVQUFVO0FBQUEsSUFDakMsd0JBQ0UsZ0JBQWdCLFVBQVU7QUFBQSxJQUU1QixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFFBQVE7QUFBQSxNQUVsQixvQ0FBQyxjQUFEO0FBQUEsSUFDRSxPQUFPLGdCQUFnQixRQUFRO0FBQUEsSUFDL0Isd0JBQXdCLGdCQUFnQixRQUFRO0FBQUEsSUFDaEQsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxRQUFRO0FBQUEsTUFFbEIsb0NBQUMsY0FBRDtBQUFBLElBQ0UsT0FBTyxnQkFBZ0IsT0FBTztBQUFBLElBQzlCLHdCQUF3QixnQkFBZ0IsT0FBTztBQUFBLElBQy9DLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsUUFBUTtBQUFBLE1BRWxCLG9DQUFDLGNBQUQ7QUFBQSxJQUNFLE9BQU8sZ0JBQWdCLFNBQVM7QUFBQSxJQUNoQyx3QkFBd0IsZ0JBQWdCLFNBQVM7QUFBQSxJQUNqRCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFFBQVE7QUFBQTtBQUFBO0FBTXhCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
