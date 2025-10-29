import React from "../../../../snowpack/pkg/react.js";
import StaticSectorLite from "./StaticSectorCharachorderLite.js";
import {
  SectorGroupMapRow,
  BlankSectorGroupData
} from "../../../models/sectorGroupSpecifierCharachorderLite.js";
import {useStoreState} from "../../../store/store.js";
import {useIsDebug} from "../../../hooks/useDebug.js";
function SectorGroupLite({
  top,
  left,
  scale,
  groupSpecifier
}) {
  const sectorGroupDataRow = SectorGroupMapRow[groupSpecifier || -1] || BlankSectorGroupData;
  const keysToHighlight = useStoreState((store) => store.currentlyHighlightedKeys);
  const isDebug = useIsDebug();
  const compare = (direction) => {
    return JSON.stringify(keysToHighlight).includes(JSON.stringify({sectorGroup: groupSpecifier, direction}));
  };
  const compare2 = (position) => {
    return JSON.stringify(keysToHighlight).includes(JSON.stringify({sectorGroup: groupSpecifier, position}));
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
  }, groupSpecifier), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.firstKey.title,
    posX: 105,
    posY: -35,
    rotation: 0,
    active: compare2(1)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.secondKey.title,
    posX: 85,
    posY: -65,
    rotation: 0,
    active: compare2(2)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.thirdKey.title,
    posX: 45,
    posY: -85,
    rotation: 3,
    active: compare2(1)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.fourthKey.title,
    posX: 35,
    posY: -85,
    rotation: 3,
    active: compare2(1)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.fifthKey.title,
    posX: 135,
    posY: -85,
    rotation: 3,
    active: compare2(1)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.sixthKey.title,
    posX: 135,
    posY: -85,
    rotation: 1,
    active: compare2(14)
  }), /* @__PURE__ */ React.createElement(StaticSectorLite, {
    title: sectorGroupDataRow.seventhKey.title,
    posX: 135,
    posY: -85,
    rotation: 3,
    active: compare2(1)
  }));
}
export default SectorGroupLite;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TZWN0b3JHcm91cENoYXJhQ2hvcmRlckxpdGUudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQWVBLHlCQUF5QjtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDc0I7QUFDdEIsUUFBTSxxQkFDSixrQkFBa0Isa0JBQWtCLE9BQU87QUFFN0MsUUFBTSxrQkFBa0IsY0FDdEIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxVQUFVO0FBRWhCLFFBQU0sVUFBVSxDQUFDLGNBQWtDO0FBQ2pELFdBQU8sS0FBSyxVQUFVLGlCQUFpQixTQUNyQyxLQUFLLFVBQVUsQ0FBRSxhQUFhLGdCQUFnQjtBQUFBO0FBSWxELFFBQU0sV0FBVyxDQUFDLGFBQWdDO0FBQ2hELFdBQU8sS0FBSyxVQUFVLGlCQUFpQixTQUNyQyxLQUFLLFVBQVUsQ0FBRSxhQUFhLGdCQUFnQjtBQUFBO0FBSWxELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsTUFBTSxHQUFHO0FBQUEsTUFDVCxLQUFLLEdBQUc7QUFBQSxNQUNSLFdBQVcsU0FBUztBQUFBO0FBQUEsS0FHckIsV0FDQyxvQ0FBQyxNQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPLENBQUUsS0FBSyxHQUFHLE1BQU07QUFBQSxLQUV0QixpQkFJTCxvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTyxtQkFBbUIsU0FBUztBQUFBLElBQ25DLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsU0FBUztBQUFBLE1BRW5CLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxPQUFPLG1CQUFtQixVQUFVO0FBQUEsSUFDcEMsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxTQUFTO0FBQUEsTUFFbkIsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLE9BQU8sbUJBQW1CLFNBQVM7QUFBQSxJQUNuQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFNBQVM7QUFBQSxNQUVuQixvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTyxtQkFBbUIsVUFBVTtBQUFBLElBQ3BDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsU0FBUztBQUFBLE1BRW5CLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxPQUFPLG1CQUFtQixTQUFTO0FBQUEsSUFDbkMsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxTQUFTO0FBQUEsTUFFbkIsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLE9BQU8sbUJBQW1CLFNBQVM7QUFBQSxJQUNuQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFNBQVM7QUFBQSxNQUVuQixvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTyxtQkFBbUIsV0FBVztBQUFBLElBQ3JDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsU0FBUztBQUFBO0FBQUE7QUFNekIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
