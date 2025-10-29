import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
const data = [
  {name: "CMD", desc: "Lists available commands.", example: "CMD"},
  {
    name: "ID",
    desc: "Identifies device, such as 'CHARACHORDER ONE M0",
    example: "ID"
  },
  {
    name: "VERSION",
    desc: "Returns the current firmware version, such as '1.5.16'",
    example: "VERSION"
  },
  {
    name: "CML",
    desc: "Used for getting, setting (adding or overwriting), and deleting chordmaps.",
    example: "CML C1 0"
  },
  {
    name: "VAR",
    desc: "Used for getting and settings parameters. This includes setting custom chordmaps.",
    example: "VAR B1 2E"
  },
  {
    name: "RST",
    desc: "Restarts/reboots the microcontroller hardware. It has additional arguments for Factory and Bootloader.",
    example: "RST"
  }
];
export function SerialCommandTable() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("table", {
    className: "w-3/6 ml-8 overflow-y-auto"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Command"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Example")), data.map((val, key) => {
    return /* @__PURE__ */ React.createElement("tr", {
      className: "border-y-2",
      key
    }, /* @__PURE__ */ React.createElement("td", null, val.name), /* @__PURE__ */ React.createElement("td", null, val.desc), /* @__PURE__ */ React.createElement("td", {
      className: "text-center"
    }, val.example));
  })));
}
const CardColumn = styled.div.attrs({
  className: `flex flex-wrap flex-col items-center center justify-center`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL1NlcmlhbENvbW1hbmRUYWJsZS50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBSUEsTUFBTSxPQUFPO0FBQUEsRUFDWCxDQUFFLE1BQU0sT0FBTyxNQUFNLDZCQUE2QixTQUFTO0FBQUEsRUFDM0Q7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBO0FBTU4scUNBQTRDO0FBQ2pELFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQ2Ysb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSxZQUNKLG9DQUFDLE1BQUQsTUFBSSxnQkFDSixvQ0FBQyxNQUFELE1BQUksYUFFTCxLQUFLLElBQUksQ0FBQyxLQUFLLFFBQVE7QUFDdEIsV0FDRSxvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsTUFBYTtBQUFBLE9BQ3pCLG9DQUFDLE1BQUQsTUFBSyxJQUFJLE9BQ1Qsb0NBQUMsTUFBRCxNQUFLLElBQUksT0FDVCxvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsT0FBZSxJQUFJO0FBQUE7QUFBQTtBQVMvQyxNQUFNLGFBQWEsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUNsQyxXQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
