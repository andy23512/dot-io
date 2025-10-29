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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1NlY3Rvckdyb3VwLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFjQSxxQkFBcUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ3NCO0FBQ3RCLFFBQU0sa0JBQ0osZUFBZSxrQkFBa0IsT0FBTztBQUUxQyxRQUFNLGtCQUFrQixjQUN0QixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLFVBQVU7QUFFaEIsUUFBTSxVQUFVLENBQUMsY0FBa0M7QUFDakQsV0FBTyxLQUFLLFVBQVUsaUJBQWlCLFNBQ3JDLEtBQUssVUFBVSxDQUFFLGFBQWEsZ0JBQWdCO0FBQUE7QUFJbEQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixNQUFNLEdBQUc7QUFBQSxNQUNULEtBQUssR0FBRztBQUFBLE1BQ1IsV0FBVyxTQUFTO0FBQUE7QUFBQSxLQUdyQixXQUNDLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU8sQ0FBRSxLQUFLLEdBQUcsTUFBTTtBQUFBLEtBRXRCLGlCQUlMLG9DQUFDLGNBQUQ7QUFBQSxJQUNFLE9BQU8sZ0JBQWdCLFVBQVU7QUFBQSxJQUNqQyx3QkFDRSxnQkFBZ0IsVUFBVTtBQUFBLElBRTVCLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsUUFBUTtBQUFBLE1BRWxCLG9DQUFDLGNBQUQ7QUFBQSxJQUNFLE9BQU8sZ0JBQWdCLFFBQVE7QUFBQSxJQUMvQix3QkFBd0IsZ0JBQWdCLFFBQVE7QUFBQSxJQUNoRCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRLFFBQVE7QUFBQSxNQUVsQixvQ0FBQyxjQUFEO0FBQUEsSUFDRSxPQUFPLGdCQUFnQixPQUFPO0FBQUEsSUFDOUIsd0JBQXdCLGdCQUFnQixPQUFPO0FBQUEsSUFDL0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUSxRQUFRO0FBQUEsTUFFbEIsb0NBQUMsY0FBRDtBQUFBLElBQ0UsT0FBTyxnQkFBZ0IsU0FBUztBQUFBLElBQ2hDLHdCQUF3QixnQkFBZ0IsU0FBUztBQUFBLElBQ2pELE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVEsUUFBUTtBQUFBO0FBQUE7QUFNeEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
