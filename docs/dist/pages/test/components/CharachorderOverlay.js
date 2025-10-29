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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NoYXJhY2hvcmRlck92ZXJsYXkudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWFBLDZCQUE2QixDQUFFLGlCQUE4QztBQUMzRSxRQUFNLENBQUMsMEJBQTBCLCtCQUMvQixTQUFTO0FBQ1gsUUFBTSxxQkFBcUIsTUFBTSw0QkFBNEI7QUFDN0QsUUFBTSxhQUFhLE9BQU87QUFDMUIsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLFNBQWdDO0FBRXhFLFFBQU0sYUFBYTtBQUVuQixrQkFBZ0IsTUFBTTtBQUNwQixVQUFNLGNBQWMsWUFBWSxXQUFXO0FBQzNDLG9CQUFnQjtBQUFBLEtBQ2YsQ0FBQztBQUVKLFNBQ0Usb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFlBQVksY0FBYyxTQUFTO0FBQUEsSUFDbkMsYUFBYSxjQUFjLFVBQVU7QUFBQSxJQUNyQyxPQUFPLGNBQWMsU0FBUztBQUFBLE9BQzFCLENBQUU7QUFBQSxLQUVOLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxNQUdYLDRCQUNDLG9DQUFDLE9BQUQsTUFFRSxvQ0FBQyxhQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFBYSxLQUFLO0FBQUEsSUFBTSxNQUFNO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNqRSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxLQUFLO0FBQUEsSUFBSSxNQUFNO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUMvRCxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNqRSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNqRSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNqRSxvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUNqRSxvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUlsQixvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBSSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQSxNQUMvRCxvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxhQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBTSxnQkFBZ0I7QUFBQTtBQUFBO0FBYTNFLE1BQU0sbUJBQW1CLE9BQU8sSUFBSSxNQUFhO0FBQUE7QUFBQTtBQUFBLElBRzdDLENBQUMsVUFBVSxvQkFBb0IsS0FBSyxJQUFJLEdBQUcsTUFBTTtBQUFBLElBQ2pELENBQUMsVUFBVSxRQUFTLENBQUUsS0FBSSxNQUFNLGVBQWUsTUFBTztBQUFBLElBQ3RELENBQUMsVUFBVSxTQUFVLENBQUUsS0FBSSxNQUFNLGNBQWMsTUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTNELHFCQUFxQixTQUE2QjtBQUNoRCxRQUFNLFFBQVEsU0FBUyxlQUFlLGVBQWU7QUFDckQsUUFBTSxTQUFTLFNBQVMsZUFBZSxnQkFBZ0I7QUFDdkQsUUFBTSxhQUFhO0FBQ25CLFFBQU0sY0FBYztBQUVwQixTQUFPO0FBQUEsSUFDTCxPQUFPLFFBQVE7QUFBQSxJQUNmLFFBQVEsU0FBUztBQUFBLElBQ2pCLE9BQU8sS0FBSyxJQUFJLFFBQVEsWUFBWSxTQUFTO0FBQUE7QUFBQTtBQUlqRCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
