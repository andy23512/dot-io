import React from "../../snowpack/pkg/react.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../snowpack/pkg/easy-peasy.js";
import {wpmMethodCalculatorForStoredChords} from "../helpers/aggregation.js";
export function ScoresComponent() {
  const maxWPM = useStoreState((store) => store.fastestRecordedWordsPerMinute);
  const storedChordsFromDevice = useStoreState((store) => store.storedChordsFromDevice);
  let sumOfChordsMastered = 0;
  storedChordsFromDevice?.statistics?.forEach((d) => {
    sumOfChordsMastered += d.chordsMastered[d?.chordsMastered.length - 1] == null || d?.chordsMastered.length == 0 || d.chordsMastered.length == 1 && d.chordsMastered[0] == 0 ? 0 : wpmMethodCalculatorForStoredChords(d?.chordsMastered, d.id.length);
  });
  const HideWhenScreenGetSmallEnough = styled.div`
    @media screen and (max-width: 1000px) {
      display: none;
    }
  `;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HideWhenScreenGetSmallEnough, null, /* @__PURE__ */ React.createElement("div", {
    className: "h-2 text-white font-mono",
    style: {fontSize: "11px"}
  }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "-"), /* @__PURE__ */ React.createElement("td", null, "tWPM"), /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, "-"), /* @__PURE__ */ React.createElement("td", null, "sWPM")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, (sumOfChordsMastered / 100)?.toFixed(2)), /* @__PURE__ */ React.createElement("td", null, "ChM"), /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, "-"), /* @__PURE__ */ React.createElement("td", null, "StM")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, parseInt(Math.max.apply(Math, Object.values(maxWPM))?.toFixed())), /* @__PURE__ */ React.createElement("td", null, "CPM"), /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, "-"), /* @__PURE__ */ React.createElement("td", null, "CM"))))));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9zY29yZXNDb21wb25lbnQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxrQ0FBeUM7QUFDOUMsUUFBTSxTQUFTLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFOUMsUUFBTSx5QkFBeUIsY0FDN0IsQ0FBQyxVQUFVLE1BQU07QUFHbkIsTUFBSSxzQkFBc0I7QUFDMUIsMEJBQXdCLFlBQVksUUFBUSxDQUFDLE1BQU07QUFDakQsMkJBQ0UsRUFBRSxlQUFlLEdBQUcsZUFBZSxTQUFTLE1BQU0sUUFDbEQsR0FBRyxlQUFlLFVBQVUsS0FDM0IsRUFBRSxlQUFlLFVBQVUsS0FBSyxFQUFFLGVBQWUsTUFBTSxJQUNwRCxJQUNBLG1DQUFtQyxHQUFHLGdCQUFnQixFQUFFLEdBQUc7QUFBQTtBQUduRSxRQUFNLCtCQUErQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNNUMsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyw4QkFBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUEyQixPQUFPLENBQUUsVUFBVTtBQUFBLEtBSTNELG9DQUFDLFNBQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUFJLE1BQ0osb0NBQUMsTUFBRCxNQUFJLFNBQ0osb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE1BQUQsTUFBSSxNQUNKLG9DQUFDLE1BQUQsTUFBSSxVQUVOLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQU0sdUJBQXNCLE1BQU0sUUFBUSxLQUMxQyxvQ0FBQyxNQUFELE1BQUksUUFDSixvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsTUFBRCxNQUFJLE1BQ0osb0NBQUMsTUFBRCxNQUFJLFNBRU4sb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRyxTQUNDLEtBQUssSUFBSSxNQUFNLE1BQU0sT0FBTyxPQUFPLFVBQVUsYUFHakQsb0NBQUMsTUFBRCxNQUFJLFFBQ0osb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE1BQUQsTUFBSSxNQUNKLG9DQUFDLE1BQUQsTUFBSTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
