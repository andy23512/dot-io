import React from "../../../../snowpack/pkg/react.js";
export function StatRow({
  i,
  stat
}) {
  return /* @__PURE__ */ React.createElement("tr", {
    key: stat.id,
    className: `${i % 2 === 0 ? "bg-gray-100" : ""}`
  }, /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm ml-4 font-medium text-gray-900"
  }, stat.displayTitle))), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, stat.averageSpeed?.toFixed())), /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm text-gray-900"
  }, stat.numberOfErrors)), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-4 whitespace-nowrap"
  }, stat.numberOfOccurrences));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvU3RhdFJvdy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUdPLHdCQUFpQjtBQUFBLEVBQ3RCO0FBQUEsRUFDQTtBQUFBLEdBSWU7QUFDZixTQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUssS0FBSztBQUFBLElBQUksV0FBVyxHQUFHLElBQUksTUFBTSxJQUFJLGdCQUFnQjtBQUFBLEtBQzVELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLEtBQUssaUJBSVosb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osS0FBSyxjQUFjLGFBR3hCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF5QixLQUFLLGtCQUUvQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixLQUFLO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
