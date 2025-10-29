import React from "../../../../snowpack/pkg/react.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
export function StatisticsIcon() {
  const setTrainingSettings = useStoreActions((store) => store.setTrainingSettings);
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const onClick = () => setTrainingSettings({
    ...trainingSettings,
    isDisplayingStatisticsModal: !trainingSettings.isDisplayingStatisticsModal
  });
  return /* @__PURE__ */ React.createElement("svg", {
    onClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-bar-chart-2 lg:hidden feather feather-settings hover:text-gray-400 text-white cursor-pointer active:text-gray-700"
  }, /* @__PURE__ */ React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  }));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1N0YXRpc3RpY3NJY29uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFFTyxpQ0FBd0M7QUFDN0MsUUFBTSxzQkFBc0IsZ0JBQzFCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDeEQsUUFBTSxVQUFVLE1BQ2Qsb0JBQW9CO0FBQUEsT0FDZjtBQUFBLElBQ0gsNkJBQ0UsQ0FBQyxpQkFBaUI7QUFBQTtBQUd4QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQSxPQUFNO0FBQUEsSUFDTixPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxhQUFZO0FBQUEsSUFDWixlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQUssSUFBRztBQUFBLElBQUssSUFBRztBQUFBLElBQUssSUFBRztBQUFBLE1BQ2pDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxNQUNqQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSSxJQUFHO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
