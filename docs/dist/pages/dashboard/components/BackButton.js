import React from "../../../../snowpack/pkg/react.js";
import {useHistory} from "../../../../snowpack/pkg/react-router-dom.js";
import {ROUTER_PATHS} from "../../../components/router.js";
import ChevronLeftIcon from "../../test/components/ChevronLeftIcon.js";
function BackButton() {
  const history = useHistory();
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-semibold flex flex-row text-white min-w-[200px] hover:underline cursor-pointer mx-6 my-6 items-center",
    onClick: () => {
      history.push(ROUTER_PATHS.home);
    }
  }, /* @__PURE__ */ React.createElement(ChevronLeftIcon, null), /* @__PURE__ */ React.createElement("span", {
    className: "pb-1"
  }, "Back to Dashboard"));
}
export default BackButton;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvQmFja0J1dHRvbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHNCQUFvQztBQUNsQyxRQUFNLFVBQVU7QUFFaEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLEtBQUssYUFBYTtBQUFBO0FBQUEsS0FHNUIsb0NBQUMsaUJBQUQsT0FDQSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBTztBQUFBO0FBSzdCLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
