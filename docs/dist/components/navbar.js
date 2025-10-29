import React from "../../snowpack/pkg/react.js";
import {useHistory} from "../../snowpack/pkg/react-router-dom.js";
import styled from "../../snowpack/pkg/styled-components.js";
import DumbellImage from "../assets/Dumbell.png";
import BooksImage from "../assets/Books.png";
import {ROUTER_PATHS} from "./router.js";
import {useStoreActions, useStoreState} from "../../snowpack/pkg/easy-peasy.js";
import CM_Icon from "../assets/CM_icon.png";
import CPM_Icon from "../assets/CPM_icon.png";
import Crown_Icon from "../assets/Crown_icon.png";
import StM_Icon from "../assets/StM.png";
import tWPM_Icon from "../assets/tWPM.png";
import LockIconWhite from "../pages/test/components/LockIconWhite.js";
import ConstructionIconWhite from "../pages/test/components/ConstructionIconWhite.js";
import {ScoresComponent} from "./scoresComponent.js";
import InfoIcon from "../pages/test/components/InfoIcon.js";
import Circle from "./CircleHighlight.js";
import HamburgerMenu from "./hamburgerMenu.js";
const Navbar = () => {
  const history = useHistory();
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const setIsDisplayingIntroductionModal = useStoreActions((store) => store.setIsDisplayingIntroductionModal);
  const setTrainingLevel = useStoreActions((store) => store.setTrainingLevel);
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  const setModuleNumber = useStoreActions((store) => store.setModuleNumber);
  const setPasswordModuleModalToggle = useStoreActions((store) => store.setPasswordModuleModalToggle);
  const passwordModuleModalToggle = useStoreActions((store) => store.passwordModuleModalToggle);
  const chmTierPasswordBypass = useStoreState((store) => store.chmTierPasswordBypass);
  const maxWPM = useStoreState((store) => parseInt(Math.max.apply(Math, Object.values(store.fastestRecordedWordsPerMinute))?.toFixed()) * 5 > 200);
  const stable = true;
  function TrainingPageFunction(level, allowOnClick) {
    if (allowOnClick || chmTierPasswordBypass) {
      if (level == "CPM") {
        setModuleNumber(1);
        const payload = [];
        payload.push("ALPHABET");
        sessionStorage.removeItem("tempTestDeIncrement");
        setTrainingLevel("CPM");
        beginTraining(payload);
        if (!history.location.pathname.endsWith(ROUTER_PATHS.home)) {
          history.push(ROUTER_PATHS.home);
        }
      } else if (level == "CHM") {
        setModuleNumber(1);
        const payload = [];
        payload.push("LEXICAL");
        sessionStorage.removeItem("tempTestDeIncrement");
        setTrainingLevel("CHM");
        beginTraining(payload);
        if (!history.location.pathname.endsWith(ROUTER_PATHS.home)) {
          history.push(ROUTER_PATHS.home);
        }
      } else if (level == "StM") {
        setModuleNumber(1);
        const payload = [];
        payload.push("LEXICALSENTENCES");
        sessionStorage.removeItem("tempTestDeIncrement");
        setTrainingLevel("StM");
        beginTraining(payload);
        if (!history.location.pathname.endsWith(ROUTER_PATHS.home)) {
          history.push(ROUTER_PATHS.home);
        }
      }
    }
  }
  function triggerPasswordModal() {
    if (maxWPM == false && !chmTierPasswordBypass) {
      setPasswordModuleModalToggle(!passwordModuleModalToggle);
    }
  }
  return /* @__PURE__ */ React.createElement(NavI, null, /* @__PURE__ */ React.createElement(NavbarContainer, null, /* @__PURE__ */ React.createElement(LogoLink, {
    href: "#/",
    "aria-current": "page"
  }, /* @__PURE__ */ React.createElement(NavLogo, {
    onClick: () => TrainingPageFunction("CPM", true)
  }, "dot i/o")), /* @__PURE__ */ React.createElement(MobileIcon, null, /* @__PURE__ */ React.createElement(HamburgerMenu, null)), /* @__PURE__ */ React.createElement(NavMenu, null, /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, trainingLevel == "CPM" ? /* @__PURE__ */ React.createElement(Circle, null) : "", /* @__PURE__ */ React.createElement("div", {
    className: "text-white font-mono"
  }, "CPM"), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: true,
    src: CPM_Icon,
    alt: "",
    onClick: () => TrainingPageFunction("CPM", true)
  })), /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page",
    onClick: () => triggerPasswordModal()
  }, trainingLevel == "CHM" ? /* @__PURE__ */ React.createElement(Circle, null) : "", /* @__PURE__ */ React.createElement("div", {
    className: "text-white font-mono"
  }, maxWPM || chmTierPasswordBypass ? "ChM" : /* @__PURE__ */ React.createElement(LockIconStyle, null, /* @__PURE__ */ React.createElement(LockIconWhite, null))), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: chmTierPasswordBypass || maxWPM,
    src: BooksImage,
    alt: "",
    onClick: () => TrainingPageFunction("CHM", maxWPM)
  })), /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, trainingLevel == "sWPM" ? /* @__PURE__ */ React.createElement(Circle, null) : "", /* @__PURE__ */ React.createElement(ConstructionIconStyle, null, /* @__PURE__ */ React.createElement(ConstructionIconWhite, null)), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: false,
    src: DumbellImage,
    alt: ""
  })), /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, trainingLevel == "StM" ? /* @__PURE__ */ React.createElement(Circle, null) : "", /* @__PURE__ */ React.createElement("div", {
    className: "text-white font-mono"
  }), /* @__PURE__ */ React.createElement(ConstructionIconStyle, null, /* @__PURE__ */ React.createElement(ConstructionIconWhite, null)), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: false,
    src: StM_Icon,
    alt: ""
  })), /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, /* @__PURE__ */ React.createElement(ConstructionIconStyle, null, /* @__PURE__ */ React.createElement(ConstructionIconWhite, null)), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: false,
    src: tWPM_Icon,
    alt: ""
  })), /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, /* @__PURE__ */ React.createElement(ConstructionIconStyle, null, /* @__PURE__ */ React.createElement(ConstructionIconWhite, null)), /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: false,
    src: CM_Icon,
    alt: ""
  }))), /* @__PURE__ */ React.createElement(ScoresComponent, null), /* @__PURE__ */ React.createElement(NavBtn, null, /* @__PURE__ */ React.createElement(NavMenuLink, {
    "aria-current": "page"
  }, /* @__PURE__ */ React.createElement(NavLinksImage, {
    open: false,
    src: Crown_Icon,
    alt: ""
  })), /* @__PURE__ */ React.createElement(NavBtnLink, {
    target: "_blank",
    href: "https://charachorder.io"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, "Manager")), /* @__PURE__ */ React.createElement("button", {
    className: "hover:bg-[#333] rounded",
    onClick: () => setIsDisplayingIntroductionModal(true)
  }, /* @__PURE__ */ React.createElement(InfoIcon, null)))));
};
export default Navbar;
const LockIconStyle = styled.div.attrs({
  className: `items-center justify-center pl-6`
})``;
const ConstructionIconStyle = styled.div.attrs({
  className: `border-2 border-transparent rounded-full items-center justify-center pl-6`
})``;
const LogoLink = styled.a.attrs({
  className: ` py-2 rounded-md`
})``;
const NavMenuLink = styled.a.attrs({
  className: `py-1 rounded-md hover:bg-[#333]`
})``;
const NavI = styled.nav`
  background-color: #222424;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  padding-top: 10px;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;
const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 63px;
z-index: 1;
width: 100%;
padding 0 24px;
max-width: 1100px;
`;
const NavLogo = styled.div`
  color: #fff;
  height: 60px;
  width: 124px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  font-family: monospace;
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 150px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavLinksImage = styled.img`
  color: #fff;
  display: relative;
  align-items: center;
  ${(p) => p.open == false ? [{opacity: 0.5}, {cursor: "none"}] : ""}
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 75px;
  justify-self: flex-start;
  font-size: 1.5rem;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
const NavLinksImageTransparent = styled.img`
  color: #fff;
  display: flex;
  opacity: 0.5;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 75px;
  justify-self: flex-start;
  font-size: 1.5rem;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
const NavBtn = styled.button`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavBtnLink = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #222424;
  font-size: 16px;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ffff;
    background: #01a049;
    transition: 0.3s ease out;
  }
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9uYXZiYXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTSxTQUFTLE1BQW9CO0FBQ2pDLFFBQU0sVUFBVTtBQUVoQixRQUFNLGdCQUFnQixnQkFDcEIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSxtQ0FBbUMsZ0JBQ3ZDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sbUJBQW1CLGdCQUN2QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBQzFELFFBQU0sa0JBQWtCLGdCQUN0QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLCtCQUErQixnQkFDbkMsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSw0QkFBNEIsZ0JBQ2hDLENBQUMsVUFBZSxNQUFNO0FBRXhCLFFBQU0sd0JBQXdCLGNBQzVCLENBQUMsVUFBZSxNQUFNO0FBSXhCLFFBQU0sU0FBUyxjQUNiLENBQUMsVUFDQyxTQUNFLEtBQUssSUFDRixNQUFNLE1BQU0sT0FBTyxPQUFPLE1BQU0saUNBQy9CLGFBRUosSUFDRjtBQUdKLFFBQU0sU0FBUztBQUVmLGdDQUE4QixPQUF1QixjQUF1QjtBQUMxRSxRQUFJLGdCQUFnQix1QkFBdUI7QUFDekMsVUFBSSxTQUFTLE9BQU87QUFDbEIsd0JBQWdCO0FBQ2hCLGNBQU0sVUFBaUI7QUFDdkIsZ0JBQVEsS0FBSztBQUNiLHVCQUFlLFdBQVc7QUFDMUIseUJBQWlCO0FBQ2pCLHNCQUFjO0FBQ2QsWUFBSSxDQUFDLFFBQVEsU0FBUyxTQUFTLFNBQVMsYUFBYSxPQUFPO0FBQzFELGtCQUFRLEtBQUssYUFBYTtBQUFBO0FBQUEsaUJBRW5CLFNB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
