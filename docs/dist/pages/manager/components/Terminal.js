import React, {useState} from "../../../../snowpack/pkg/react.js";
import {
  TerminalItem,
  TerminalInput,
  TerminalContainer,
  TerminalHistoryContainer,
  SendButton,
  TerminalHeader
} from "./Terminal.styled.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
export function Terminal() {
  const [requestInput, setRequestInput] = useState("");
  const serialApiRequests = useStoreState((store) => store.serialApiRequests);
  const serialApiResponses = useStoreState((store) => store.serialApiResponses);
  const updateSerialAPiDataThunk = useStoreActions((store) => store.updateSerialAPiDataThunk);
  const handleSendClick = () => {
    updateSerialAPiDataThunk(requestInput);
    setRequestInput("");
  };
  return /* @__PURE__ */ React.createElement(CardColumn, null, /* @__PURE__ */ React.createElement(TerminalContainer, null, /* @__PURE__ */ React.createElement(TerminalHeader, null, "Serial Terminal"), /* @__PURE__ */ React.createElement(TerminalHistoryContainer, {
    key: Math.random()
  }, serialApiRequests.map((allProps) => /* @__PURE__ */ React.createElement(TerminalItem, {
    key: Math.random()
  }, "> ", allProps, " ")), serialApiResponses.map((props) => /* @__PURE__ */ React.createElement(TerminalItem, {
    key: Math.random()
  }, "> ", props, " "))), /* @__PURE__ */ React.createElement(InputAndButtonRow, null, /* @__PURE__ */ React.createElement(TerminalInput, {
    onChange: (e) => setRequestInput(e.target.value),
    value: requestInput,
    onKeyUp: (e) => e.key === "Enter" ? handleSendClick() : ""
  }), /* @__PURE__ */ React.createElement(SendButton, {
    onClick: handleSendClick
  }, "Send"))));
}
const CardColumn = styled.div.attrs({
  className: `flex flex-row w-full`
})``;
const InputAndButtonRow = styled.div.attrs({
  className: `flex flex-row `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL1Rlcm1pbmFsLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFFTywyQkFBa0M7QUFDdkMsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLFNBQWlCO0FBRXpELFFBQU0sb0JBQW9CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDekQsUUFBTSxxQkFBcUIsY0FBYyxDQUFDLFVBQVUsTUFBTTtBQUMxRCxRQUFNLDJCQUEyQixnQkFDL0IsQ0FBQyxVQUFVLE1BQU07QUFHbkIsUUFBTSxrQkFBa0IsTUFBTTtBQUM1Qiw2QkFBeUI7QUFDekIsb0JBQWdCO0FBQUE7QUFHbEIsU0FDRSxvQ0FBQyxZQUFELE1BQ0Usb0NBQUMsbUJBQUQsTUFDRSxvQ0FBQyxnQkFBRCxNQUFnQixvQkFDaEIsb0NBQUMsMEJBQUQ7QUFBQSxJQUEwQixLQUFLLEtBQUs7QUFBQSxLQUNqQyxrQkFBa0IsSUFBSSxDQUFDLGFBQ3RCLG9DQUFDLGNBQUQ7QUFBQSxJQUFjLEtBQUssS0FBSztBQUFBLEtBQ3JCLE1BQ0csVUFBVSxPQUdqQixtQkFBbUIsSUFBSSxDQUFDLFVBQ3ZCLG9DQUFDLGNBQUQ7QUFBQSxJQUFjLEtBQUssS0FBSztBQUFBLEtBQ3JCLE1BQ0csT0FBTyxRQUlqQixvQ0FBQyxtQkFBRCxNQUNFLG9DQUFDLGVBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxNQUFNLGdCQUFnQixFQUFFLE9BQU87QUFBQSxJQUMxQyxPQUFPO0FBQUEsSUFDUCxTQUFTLENBQUMsTUFBTyxFQUFFLFFBQVEsVUFBVSxvQkFBb0I7QUFBQSxNQUUzRCxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxTQUFTO0FBQUEsS0FBaUI7QUFBQTtBQU9oRCxNQUFNLGFBQWEsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUNsQyxXQUFXO0FBQUE7QUFFYixNQUFNLG9CQUFvQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3pDLFdBQVc7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
