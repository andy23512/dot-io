import React from "../../../snowpack/pkg/react.js";
import {
  DashboardPageContainer,
  TopSectionContainer,
  Column
} from "./dashboard.styled.js";
import {CardDataRowDisplay} from "./components/CardDataRowDisplay.js";
import {Graph} from "../manager/components/chordGraphs.js";
const SHOULD_DISPLAY_BRANDING_MATERIAL = true;
const Dashboard = () => {
  React.useEffect(() => {
    document.title = "dot i/o Profile";
  }, []);
  return /* @__PURE__ */ React.createElement(DashboardPageContainer, null, /* @__PURE__ */ React.createElement(TopSectionContainer, null, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Graph, null), /* @__PURE__ */ React.createElement(CardDataRowDisplay, null))));
};
export default Dashboard;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUdBO0FBSUEsTUFBTSxtQ0FBbUM7QUFNekMsTUFBTSxZQUFZLE1BQW9CO0FBQ3BDLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLGFBQVMsUUFBUTtBQUFBLEtBQ2hCO0FBRUgsU0FDRSxvQ0FBQyx3QkFBRCxNQUNFLG9DQUFDLHFCQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUNFLG9DQUFDLE9BQUQsT0FFQSxvQ0FBQyxvQkFBRDtBQUFBO0FBUVYsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
