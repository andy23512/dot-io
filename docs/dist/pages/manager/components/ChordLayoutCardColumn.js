import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import {ChordLayoutCard} from "./ChordLayoutCard.js";
export function ChordLayoutColumn() {
  const downloadedChordLayout = useStoreState((store) => store.downloadedChordLayout.chordLayout);
  return /* @__PURE__ */ React.createElement(CardLayoutColumn, null, downloadedChordLayout.map((props, index) => /* @__PURE__ */ React.createElement(ChordLayoutCard, {
    key: Math.random(),
    ...props,
    index
  })));
}
const CardLayoutColumn = styled.div.attrs({
  className: `flex flex-wrap flex-row items-center center justify-center`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTGF5b3V0Q2FyZENvbHVtbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLG9DQUEyQztBQUNoRCxRQUFNLHdCQUF3QixjQUM1QixDQUFDLFVBQVUsTUFBTSxzQkFBc0I7QUFHekMsU0FDRSxvQ0FBQyxrQkFBRCxNQUNHLHNCQUFzQixJQUFJLENBQUMsT0FBTyxVQUNqQyxvQ0FBQyxpQkFBRDtBQUFBLElBQWlCLEtBQUssS0FBSztBQUFBLE9BQWM7QUFBQSxJQUFPO0FBQUE7QUFBQTtBQU14RCxNQUFNLG1CQUFtQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3hDLFdBQVc7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
