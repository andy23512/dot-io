import React from "../../snowpack/pkg/react.js";
import {useHistory} from "../../snowpack/pkg/react-router-dom.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {ROUTER_PATHS} from "./router.js";
import IQEQLogoImage from "../assets/iq-eq_logo_copy.png";
const Footer = () => {
  const history = useHistory();
  const needsBackButton = history.location.pathname.endsWith(ROUTER_PATHS.training);
  const needsBackButton2 = history.location.pathname.endsWith(ROUTER_PATHS.manager);
  const needsBackButton3 = history.location.pathname.endsWith(ROUTER_PATHS.piano);
  return /* @__PURE__ */ React.createElement(FooterContainer, null, /* @__PURE__ */ React.createElement(FooterWrap, null, /* @__PURE__ */ React.createElement(FooterLinksContainer, null, /* @__PURE__ */ React.createElement(FooterLinksWrapper, null, /* @__PURE__ */ React.createElement(FooterLinkItems, null, /* @__PURE__ */ React.createElement(FooterLinkTitle, null, /* @__PURE__ */ React.createElement(FooterLinkLogo, {
    src: IQEQLogoImage
  }), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement(FooterLink, null, "Brought to you by iq-eq"), /* @__PURE__ */ React.createElement("div", null)))))));
};
export default Footer;
const FooterContainer = styled.footer`
  background-color: #222424;
`;
const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 300px;
box-sizing: border-box;
color #fff

@media screen and (max-width: 420px){
    margin 0;
    padding: 10px;
    width: 100%;
}
`;
const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 8px;
`;
const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 10px;
`;
const FooterLinkLogo = styled.img`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  height: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease out;
  }
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBLE1BQU0sU0FBUyxNQUFvQjtBQUNqQyxRQUFNLFVBQVU7QUFDaEIsUUFBTSxrQkFBa0IsUUFBUSxTQUFTLFNBQVMsU0FDaEQsYUFBYTtBQUVmLFFBQU0sbUJBQW1CLFFBQVEsU0FBUyxTQUFTLFNBQ2pELGFBQWE7QUFFZixRQUFNLG1CQUFtQixRQUFRLFNBQVMsU0FBUyxTQUNqRCxhQUFhO0FBRWYsU0FDRSxvQ0FBQyxpQkFBRCxNQUNFLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLG9CQUFELE1BQ0Usb0NBQUMsaUJBQUQsTUFDRSxvQ0FBQyxpQkFBRCxNQUNFLG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0IsS0FBSztBQUFBLE1BQ3JCLG9DQUFDLE9BQUQsT0FDQSxvQ0FBQyxZQUFELE1BQVksNEJBQ1osb0NBQUMsT0FBRDtBQUFBO0FBVWhCLGVBQWU7QUFFZixNQUFNLGtCQUFrQixPQUFPO0FBQUE7QUFBQTtBQUkvQixNQUFNLGFBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUzFCLE1BQU0sdUJBQXVCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFLcEMsTUFBTSxxQkFBcUIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFsQyxNQUFNLGtCQUFrQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUIvQixNQUFNLGtCQUFrQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBSy9CLE1BQU0sYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNMUIsTUFBTSxpQkFBaUIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
