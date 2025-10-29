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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9TdGF0aXN0aWNzSWNvbi50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRU8saUNBQXdDO0FBQzdDLFFBQU0sc0JBQXNCLGdCQUMxQixDQUFDLFVBQVUsTUFBTTtBQUVuQixRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3hELFFBQU0sVUFBVSxNQUNkLG9CQUFvQjtBQUFBLE9BQ2Y7QUFBQSxJQUNILDZCQUNFLENBQUMsaUJBQWlCO0FBQUE7QUFHeEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLElBQ1osZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxNQUNqQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDakMsb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQUksSUFBRztBQUFBLElBQUssSUFBRztBQUFBLElBQUksSUFBRztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
