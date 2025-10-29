import React from "../../../snowpack/pkg/react.js";
import {ChordManagerHeader} from "./components/ChordManagerHeader.js";
import {ConnectButton} from "./components/connect.js";
import {DisconnectButton} from "./components/disconnect.js";
import {ImportChords} from "./components/importChords.js";
import {BootLoaderButton} from "./components/bootLoader.js";
import {RebootButton} from "./components/reboot.js";
import {AddHeaders} from "./components/addHeaders.js";
import {Download} from "./components/download.js";
import {Export} from "./components/exportLibrary.js";
import {AddChordMap} from "./components/addChordMap.js";
import {PressCommit} from "./components/saveAll.js";
import {ImportChordLayout} from "./components/importLayout.js";
import {ExportChordLayout} from "./components/exportLayout.js";
import {CommitAllLayoutChanges} from "./components/commitAllLayouts.js";
import {ChordMapColumn} from "./components/ChordMapCardColumn.js";
import {ChordLayoutColumn} from "./components/ChordLayoutCardColumn.js";
import {Terminal} from "./components/Terminal.js";
import {
  ManagerPageContainer,
  Table,
  ChordContainer,
  PageContainer,
  TopSectionContainer,
  Column
} from "./manager.styled.js";
const Manager = () => {
  React.useEffect(() => {
    document.title = "dot i/o Device Manager";
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ManagerPageContainer, null, /* @__PURE__ */ React.createElement(TopSectionContainer, null, /* @__PURE__ */ React.createElement(ChordManagerHeader, null), /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-mono text-xl ml-2"
  }, "Connect"), /* @__PURE__ */ React.createElement(ConnectButton, null), /* @__PURE__ */ React.createElement(DisconnectButton, null), /* @__PURE__ */ React.createElement(BootLoaderButton, null), /* @__PURE__ */ React.createElement(RebootButton, null), /* @__PURE__ */ React.createElement("div", {
    className: "h-1 w-6/12 bg-[#3A5A42] rounded mb-10 mt-10"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "font-mono text-xl ml-2"
  }, "Layout", " ", /* @__PURE__ */ React.createElement("a", {
    rel: "noreferrer",
    className: "hover:text-[#40508d] active:text-[#40508d] animate-pulse",
    target: "_blank",
    href: "https://charachorder-config.com/"
  }, " ", "External GUI for Chord Mapping")), /* @__PURE__ */ React.createElement(ImportChordLayout, null), /* @__PURE__ */ React.createElement(ExportChordLayout, null), /* @__PURE__ */ React.createElement(CommitAllLayoutChanges, null), /* @__PURE__ */ React.createElement(ChordLayoutColumn, null), /* @__PURE__ */ React.createElement("div", {
    className: "h-1 w-6/12 mt-6 bg-[#3A5A42] rounded mb-10"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "font-mono text-xl ml-2"
  }, "Library"), /* @__PURE__ */ React.createElement("div", {
    id: "downloadCompletionPercentage",
    className: "text-white mb-4 inline-block ml-2"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "commitAllProgress"
  }), /* @__PURE__ */ React.createElement(ImportChords, null), /* @__PURE__ */ React.createElement(Export, null), /* @__PURE__ */ React.createElement(Download, null), /* @__PURE__ */ React.createElement(PressCommit, null)), /* @__PURE__ */ React.createElement(PageContainer, null, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(ChordContainer, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement(AddHeaders, null), /* @__PURE__ */ React.createElement(AddChordMap, null)), /* @__PURE__ */ React.createElement(ChordMapColumn, null)), /* @__PURE__ */ React.createElement("div", {
    className: "h-1 w-6/12 mt-16 bg-[#3A5A42] rounded mb-10"
  }), /* @__PURE__ */ React.createElement(Terminal, null)))));
};
export default Manager;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9tYW5hZ2VyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQSxNQUFNLFVBQVUsTUFBb0I7QUFDbEMsUUFBTSxVQUFVLE1BQU07QUFDcEIsYUFBUyxRQUFRO0FBQUEsS0FDaEI7QUFFSCxTQUNFLG9DQUFDLE1BQU0sVUFBUCxNQUNFLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMscUJBQUQsTUFDRSxvQ0FBQyxvQkFBRCxPQUVBLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBeUIsWUFDeEMsb0NBQUMsZUFBRCxPQUNBLG9DQUFDLGtCQUFELE9BQ0Esb0NBQUMsa0JBQUQsT0FDQSxvQ0FBQyxjQUFELE9BQ0Esb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLE1BQ2Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXlCLFVBQy9CLEtBQ1Asb0NBQUMsS0FBRDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osV0FBVTtBQUFBLElBQ1YsUUFBTztBQUFBLElBQ1AsTUFBSztBQUFBLEtBRUosS0FBSSxvQ0FJVCxvQ0FBQyxtQkFBRCxPQUNBLG9DQUFDLG1CQUFELE9BQ0Esb0NBQUMsd0JBQUQsT0FDQSxvQ0FBQyxtQkFBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxNQUNmLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF5QixZQUN4QyxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsTUFFWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxJQUFHO0FBQUEsTUFDUixvQ0FBQyxjQUFELE9BQ0Esb0NBQUMsUUFBRCxPQUNBLG9DQUFDLFVBQUQsT0FDQSxvQ0FBQyxhQUFELFFBRUYsb0NBQUMsZUFBRCxNQUNFLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxnQkFBRCxNQUNFLG9DQUFDLE9BQUQsT0FDQSxvQ0FBQyxPQUFELE9BQ0Esb0NBQUMsWUFBRCxPQUNBLG9DQUFDLGFBQUQsUUFFRixvQ0FBQyxnQkFBRCxRQUVGLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxNQUNmLG9DQUFDLFVBQUQ7QUFBQTtBQVFaLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
