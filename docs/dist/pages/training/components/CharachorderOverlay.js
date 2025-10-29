import React, {useLayoutEffect, useRef, useState} from "../../../../snowpack/pkg/react.js";
import SectorGroup from "./SectorGroup.js";
import charachorderBackground from "../../../assets/charachorder_background_feathered_no_center.png";
import styled from "../../../../snowpack/pkg/styled-components.js";
import useWindowSize from "../../../hooks/useWindowSize.js";
function CharachorderOverlay({overrideBottom}) {
  const [hasLoadedBackgroundImage, setHasLoadedBackgroundImage] = useState(false);
  const setHasLoadedToTrue = () => setHasLoadedBackgroundImage(true);
  const overlayRef = useRef(null);
  const [overlayScale, setOverlayScale] = useState({});
  const screenSize = useWindowSize();
  useLayoutEffect(() => {
    const scaleObject = fitToParent(overlayRef.current);
    setOverlayScale(scaleObject);
  }, [screenSize]);
  return /* @__PURE__ */ React.createElement(OverlayContainer, {
    ref: overlayRef,
    scaleWidth: overlayScale?.width || 1,
    scaleHeight: overlayScale?.height || 1,
    scale: overlayScale?.scale || 1,
    ...{overrideBottom}
  }, /* @__PURE__ */ React.createElement("img", {
    onLoad: setHasLoadedToTrue,
    src: charachorderBackground,
    className: "mt-8"
  }), hasLoadedBackgroundImage && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectorGroup, {
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
  })));
}
const OverlayContainer = styled.div.attrs({})`
  position: absolute;

  ${(props) => `transform: scale(${Math.min(1, props.scale)})`};
  ${(props) => `top: ${-(1 - props.scaleHeight) * 532 / 2}px`};
  ${(props) => `left: ${-(1 - props.scaleWidth) * 1e3 / 2}px`};

  width: 1000px;
  height: 532px;
`;
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
export default CharachorderOverlay;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9DaGFyYWNob3JkZXJPdmVybGF5LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFhQSw2QkFBNkIsQ0FBRSxpQkFBOEM7QUFDM0UsUUFBTSxDQUFDLDBCQUEwQiwrQkFDL0IsU0FBUztBQUNYLFFBQU0scUJBQXFCLE1BQU0sNEJBQTRCO0FBQzdELFFBQU0sYUFBYSxPQUFPO0FBQzFCLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixTQUFnQztBQUV4RSxRQUFNLGFBQWE7QUFFbkIsa0JBQWdCLE1BQU07QUFDcEIsVUFBTSxjQUFjLFlBQVksV0FBVztBQUMzQyxvQkFBZ0I7QUFBQSxLQUNmLENBQUM7QUFFSixTQUNFLG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxZQUFZLGNBQWMsU0FBUztBQUFBLElBQ25DLGFBQWEsY0FBYyxVQUFVO0FBQUEsSUFDckMsT0FBTyxjQUFjLFNBQVM7QUFBQSxPQUMxQixDQUFFO0FBQUEsS0FFTixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsTUFHWCw0QkFDQyxvQ0FBQyxPQUFELE1BRUUsb0NBQUMsYUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQWEsS0FBSztBQUFBLElBQU0sTUFBTTtBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDakUsb0NBQUMsYUFBRDtBQUFBLElBQWEsS0FBSztBQUFBLElBQUksTUFBTTtBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDL0Qsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDakUsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDakUsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDakUsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDakUsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFJbEIsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQUksT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUEsTUFDL0Qsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsTUFFbEIsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLElBQU0sS0FBSztBQUFBLElBQU0sT0FBTztBQUFBLElBQU0sZ0JBQWdCO0FBQUE7QUFBQTtBQWEzRSxNQUFNLG1CQUFtQixPQUFPLElBQUksTUFBYTtBQUFBO0FBQUE7QUFBQSxJQUc3QyxDQUFDLFVBQVUsb0JBQW9CLEtBQUssSUFBSSxHQUFHLE1BQU07QUFBQSxJQUNqRCxDQUFDLFVBQVUsUUFBUyxDQUFFLEtBQUksTUFBTSxlQUFlLE1BQU87QUFBQSxJQUN0RCxDQUFDLFVBQVUsU0FBVSxDQUFFLEtBQUksTUFBTSxjQUFjLE1BQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU0zRCxxQkFBcUIsU0FBNkI7QUFDaEQsUUFBTSxRQUFRLFNBQVMsZUFBZSxlQUFlO0FBQ3JELFFBQU0sU0FBUyxTQUFTLGVBQWUsZ0JBQWdCO0FBQ3ZELFFBQU0sYUFBYTtBQUNuQixRQUFNLGNBQWM7QUFFcEIsU0FBTztBQUFBLElBQ0wsT0FBTyxRQUFRO0FBQUEsSUFDZixRQUFRLFNBQVM7QUFBQSxJQUNqQixPQUFPLEtBQUssSUFBSSxRQUFRLFlBQVksU0FBUztBQUFBO0FBQUE7QUFJakQsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
