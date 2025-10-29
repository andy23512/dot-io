import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
import {ChordMapCard} from "./ChordMapCard.js";
export function ChordMapColumn() {
  const downloadedChords = useStoreState((store) => store.downloadedChords.chords);
  return /* @__PURE__ */ React.createElement(CardColumn, null, downloadedChords.map((allProps, index) => /* @__PURE__ */ React.createElement(ChordMapCard, {
    key: Math.random(),
    ...allProps,
    index
  })));
}
const CardColumn = styled.div.attrs({
  className: `flex flex-wrap flex-row items-center center justify-center`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTWFwQ2FyZENvbHVtbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLGlDQUF3QztBQUM3QyxRQUFNLG1CQUFtQixjQUN2QixDQUFDLFVBQVUsTUFBTSxpQkFBaUI7QUFHcEMsU0FDRSxvQ0FBQyxZQUFELE1BQ0csaUJBQWlCLElBQUksQ0FBQyxVQUFVLFVBQy9CLG9DQUFDLGNBQUQ7QUFBQSxJQUFjLEtBQUssS0FBSztBQUFBLE9BQWM7QUFBQSxJQUFVO0FBQUE7QUFBQTtBQU14RCxNQUFNLGFBQWEsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUNsQyxXQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
