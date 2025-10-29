import React from "../../../snowpack/pkg/react.js";
import PianoKeyBoard from "./component/keyboard.js";
import {PianoHeader} from "./component/PianoHeader.js";
import {ManagerPageContainer, TopSectionContainer} from "./Piano.styled.js";
const Piano = () => {
  React.useEffect(() => {
    document.title = "dot i/o";
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ManagerPageContainer, null, /* @__PURE__ */ React.createElement(TopSectionContainer, null, /* @__PURE__ */ React.createElement(PianoHeader, null), /* @__PURE__ */ React.createElement(PianoKeyBoard, null))));
};
export default Piano;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvcGlhbm8vcGlhbm8udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFFBQVEsTUFBb0I7QUFDaEMsUUFBTSxVQUFVLE1BQU07QUFDcEIsYUFBUyxRQUFRO0FBQUEsS0FDaEI7QUFFSCxTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMscUJBQUQsTUFDRSxvQ0FBQyxhQUFELE9BQ0Esb0NBQUMsZUFBRDtBQUFBO0FBTVYsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
