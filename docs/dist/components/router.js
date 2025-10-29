import React from "../../snowpack/pkg/react.js";
import {HashRouter, Switch, Route} from "../../snowpack/pkg/react-router-dom.js";
import Dashboard from "../pages/dashboard/dashboard.js";
import Manager from "../pages/manager/manager.js";
import Navbar from "./navbar.js";
import TrainingTestPage from "../pages/test/trainingTest.js";
import TrainingPage from "../pages/training/training.js";
import {ClosingPrompt} from "./closingPrompt.js";
import Piano from "../pages/piano/piano.js";
import Footer from "./footer.js";
import TestCompletePage from "../pages/test-complete/testComplete.js";
export const ROUTER_PATHS = {
  home: "/",
  training: "/training",
  manager: "/manager",
  piano: "/piano",
  dashboard: "/dashboard",
  results: "/results"
};
const Router = () => {
  return /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(ClosingPrompt, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.home,
    exact: true
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(TrainingTestPage, null)), /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.training
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(TrainingPage, null), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.dashboard
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Dashboard, null), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.manager
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Manager, null)), /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.piano
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Piano, null)), /* @__PURE__ */ React.createElement(Route, {
    path: ROUTER_PATHS.results
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(TestCompletePage, null), /* @__PURE__ */ React.createElement(Footer, null))));
};
export default Router;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvY29tcG9uZW50cy9yb3V0ZXIudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLGFBQU0sZUFBZTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQTtBQVFYLE1BQU0sU0FBUyxNQUFvQjtBQUNqQyxTQUNFLG9DQUFDLFlBQUQsTUFLRSxvQ0FBQyxlQUFELE9BRUEsb0NBQUMsUUFBRCxNQUVFLG9DQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQU0sYUFBYTtBQUFBLElBQU0sT0FBSztBQUFBLEtBQ25DLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxrQkFBRCxRQUtGLG9DQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQU0sYUFBYTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxjQUFELE9BQ0Esb0NBQUMsUUFBRCxRQUtGLG9DQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQU0sYUFBYTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxXQUFELE9BQ0Esb0NBQUMsUUFBRCxRQUlGLG9DQUFDLE9BQUQ7QUFBQSxJQUFPLE1BQU0sYUFBYTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxTQUFELFFBSUYsb0NBQUMsT0FBRDtBQUFBLElBQU8sTUFBTSxhQUFhO0FBQUEsS0FDeEIsb0NBQUMsUUFBRCxPQUNBLG9DQUFDLE9BQUQsUUFHRixvQ0FBQyxPQUFEO0FBQUEsSUFBTyxNQUFNLGFBQWE7QUFBQSxLQUN4QixvQ0FBQyxRQUFELE9BQ0Esb0NBQUMsa0JBQUQsT0FDQSxvQ0FBQyxRQUFEO0FBQUE7QUFPVixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
