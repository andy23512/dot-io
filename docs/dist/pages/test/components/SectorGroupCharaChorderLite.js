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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1NlY3Rvckdyb3VwQ2hhcmFDaG9yZGVyTGl0ZS50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBZUEseUJBQXlCO0FBQUEsRUFDdkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxHQUNzQjtBQUN0QixRQUFNLHFCQUNKLGtCQUFrQixrQkFBa0IsT0FBTztBQUU3QyxRQUFNLGtCQUFrQixjQUN0QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLFVBQVU7QUFFaEIsUUFBTSxVQUFVLENBQUMsY0FBa0M7QUFDakQsV0FBTyxLQUFLLFVBQVUsaUJBQWlCLFNBQ3JDLEtBQUssVUFBVSxDQUFFLGFBQWEsZ0JBQWdCO0FBQUE7QUFJbEQsUUFBTSxXQUFXLENBQUMsYUFBZ0M7QUFDaEQsV0FBTyxLQUFLLFVBQVUsaUJBQWlCLFNBQ3JDLEtBQUssVUFBVSxDQUFFLGFBQWEsZ0JBQWdCO0FBQUE7QUFJbEQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixNQUFNLEdBQUc7QUFBQSxNQUNULEtBQUssR0FBRztBQUFBLE1BQ1IsV0FBVyxTQUFTO0FBQUE7QUFBQSxLQUdyQixXQUNDLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU8sQ0FBRSxLQUFLLEdBQUcsTUFBTTtBQUFBLEtBRXRCLGlCQUlMLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxPQUFPLG1CQUFtQixTQUFTO0FBQUEsSUFDbkMsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxTQUFTO0FBQUEsTUFFbkIsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLE9BQU8sbUJBQW1CLFVBQVU7QUFBQSxJQUNwQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFNBQVM7QUFBQSxNQUVuQixvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTyxtQkFBbUIsU0FBUztBQUFBLElBQ25DLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsU0FBUztBQUFBLE1BRW5CLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxPQUFPLG1CQUFtQixVQUFVO0FBQUEsSUFDcEMsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxTQUFTO0FBQUEsTUFFbkIsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLE9BQU8sbUJBQW1CLFNBQVM7QUFBQSxJQUNuQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFNBQVM7QUFBQSxNQUVuQixvQ0FBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTyxtQkFBbUIsU0FBUztBQUFBLElBQ25DLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsU0FBUztBQUFBLE1BRW5CLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxPQUFPLG1CQUFtQixXQUFXO0FBQUEsSUFDckMsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxTQUFTO0FBQUE7QUFBQTtBQU16QixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
