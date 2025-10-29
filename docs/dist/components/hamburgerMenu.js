import {useState} from "../../snowpack/pkg/react.js";
import React from "../../snowpack/pkg/react.js";
import LockIcon from "../pages/dashboard/components/LockIcon.js";
import {useStoreActions, useStoreState} from "../../snowpack/pkg/easy-peasy.js";
import {useHistory} from "../../snowpack/pkg/react-router-dom.js";
import {ROUTER_PATHS} from "./router.js";
export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const history = useHistory();
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const setTrainingLevel = useStoreActions((store) => store.setTrainingLevel);
  const setModuleNumber = useStoreActions((store) => store.setModuleNumber);
  const chmTierPasswordBypass = useStoreState((store) => store.chmTierPasswordBypass);
  const maxWPM = useStoreState((store) => parseInt(Math.max.apply(Math, Object.values(store.fastestRecordedWordsPerMinute))?.toFixed()) * 5 > 200);
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between py-1"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("section", {
    className: "MOBILE-MENU flex rounded-md lg:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "HAMBURGER-ICON  space-y-2",
    onClick: () => setIsNavOpen((prev) => !prev)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block h-0.5 w-8 animate-pulse bg-white"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "block h-0.5 w-8 animate-pulse bg-white"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "block h-0.5 w-8 animate-pulse bg-white"
  })), /* @__PURE__ */ React.createElement("div", {
    className: isNavOpen ? "showMenuNav" : "hideMenuNav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "CROSS-ICON absolute top-0 right-0 px-8 py-8",
    onClick: () => setIsNavOpen(false)
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-8 w-8 text-white",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), /* @__PURE__ */ React.createElement("ul", {
    className: "MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]"
  }, /* @__PURE__ */ React.createElement("li", {
    className: " my-4 uppercase text-[#808080] hover:text-white flex",
    onClick: () => [
      TrainingPageFunction("CPM", true),
      setIsNavOpen(false)
    ]
  }, /* @__PURE__ */ React.createElement("a", null, "CPM")), /* @__PURE__ */ React.createElement("li", {
    className: "my-4 uppercase text-[#808080] hover:text-white flex",
    onClick: () => [
      TrainingPageFunction("CHM", maxWPM),
      setIsNavOpen(false)
    ]
  }, /* @__PURE__ */ React.createElement("a", null, "CHM"), !(maxWPM || chmTierPasswordBypass) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement(LockIcon, null))) : ""), /* @__PURE__ */ React.createElement("li", {
    className: "my-4 uppercase text-[#808080] hover:text-white flex"
  }, /* @__PURE__ */ React.createElement("a", null, "sWPM"), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement(LockIcon, null))), /* @__PURE__ */ React.createElement("li", {
    className: " my-4 uppercase text-[#808080] hover:text-white flex"
  }, /* @__PURE__ */ React.createElement("a", null, "StM"), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement(LockIcon, null))), /* @__PURE__ */ React.createElement("li", {
    className: " my-4 uppercase text-[#808080] hover:text-white flex"
  }, /* @__PURE__ */ React.createElement("a", null, "tWPM"), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement(LockIcon, null))), /* @__PURE__ */ React.createElement("li", {
    className: " my-4 uppercase text-[#808080] hover:text-white flex"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#/manager",
    onClick: () => setIsNavOpen(false)
  }, "Manager")), /* @__PURE__ */ React.createElement("li", {
    className: "my-4 uppercase text-[#808080] hover:text-white"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#/dashboard",
    onClick: () => setIsNavOpen(false)
  }, "Profile")))))), /* @__PURE__ */ React.createElement("style", null, `
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        border-radius: 25px;
        border-color: white;
        border-style: solid;
        border-width: 2px;
        width: 50vh;
        height: 95vh;
        right: -20px;
        top: 0;
        background: #222424;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9oYW1idXJnZXJNZW51LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLHdDQUF3QztBQUN0QyxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsU0FBUztBQUMzQyxRQUFNLFVBQVU7QUFFaEIsUUFBTSxnQkFBZ0IsZ0JBQ3BCLENBQUMsVUFBZSxNQUFNO0FBSXhCLFFBQU0sbUJBQW1CLGdCQUN2QixDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLGtCQUFrQixnQkFDdEIsQ0FBQyxVQUFlLE1BQU07QUFFeEIsUUFBTSx3QkFBd0IsY0FDNUIsQ0FBQyxVQUFlLE1BQU07QUFLeEIsUUFBTSxTQUFTLGNBQ2IsQ0FBQyxVQUNDLFNBQ0UsS0FBSyxJQUNGLE1BQU0sTUFBTSxPQUFPLE9BQU8sTUFBTSxpQ0FDL0IsYUFFSixJQUNGO0FBSUosZ0NBQThCLE9BQXVCLGNBQXVCO0FBQzFFLFFBQUksZ0JBQWdCLHVCQUF1QjtBQUN6QyxVQUFJLFNBQVMsT0FBTztBQUNsQix3QkFBZ0I7QUFDaEIsY0FBTSxVQUFpQjtBQUN2QixnQkFBUSxLQUFLO0FBQ2IsdUJBQWUsV0FBVztBQUMxQix5QkFBaUI7QUFDakIsc0JBQWM7QUFDZCxZQUFJLENBQUMsUUFBUSxTQUFTLFNBQVMsU0FBUyxhQUFhLE9BQU87QUFDMUQsa0JBQVEsS0FBSyxhQUFhO0FBQUE7QUFBQSxpQkFFbkIsU0FBUyxPQUFPO0FBQ3pCLHdCQUFnQjtBQUNoQixjQUFNLFVBQWlCO0FBQ3ZCLGdCQUFRLEtBQUs7QUFDYix1QkFBZSxXQUFXO0FBQzFCLHlCQUFpQjtBQUNqQixzQkFBYztBQUNkLFlBQUksQ0FBQyxRQUFRLFNBQVMsU0FBUyxTQUFTLGFBQWEsT0FBTztBQUMxRCxrQkFBUSxLQUFLLGFBQWE7QUFBQTtBQUFBLGlCQUVuQixTQUFTLE9BQU87QUFDekIsd0JBQWdC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
