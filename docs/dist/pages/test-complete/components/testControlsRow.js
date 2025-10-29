import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import NextTestButton from "./NextTestButton.js";
export function TestControlRow() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RowContainer, null, /* @__PURE__ */ React.createElement(ItemsContainer, null, /* @__PURE__ */ React.createElement(NextTestButton, null))), /* @__PURE__ */ React.createElement(TierSelector, null));
}
const TierSelector = styled.div`
  background-color: #222424;
  height: 60px;
  min-width: 100%;
`;
const ItemsContainer = styled.div`
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row;
  padding: '1rem';
  justify-content: center;
  align-items: center;
`;
const RowContainer = styled.div`
  background-color: #222424;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC1jb21wbGV0ZS9jb21wb25lbnRzL3Rlc3RDb250cm9sc1Jvdy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFHTyxpQ0FBd0M7QUFDN0MsU0FDRSxvQ0FBQyxNQUFNLFVBQVAsTUFDRSxvQ0FBQyxjQUFELE1BQ0Usb0NBQUMsZ0JBQUQsTUFDRSxvQ0FBQyxnQkFBRCxTQUdKLG9DQUFDLGNBQUQ7QUFBQTtBQUtOLE1BQU0sZUFBZSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLNUIsTUFBTSxpQkFBaUIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTOUIsTUFBTSxlQUFlLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
