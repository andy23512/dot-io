import React, {useState} from "../../../../snowpack/pkg/react.js";
import {
  CardLayoutContainer,
  KeyMapTextBox,
  KeyMapPositionTextBox,
  KeyMapInputIdentifiers,
  FirstKeyMapInputIdentifiers,
  KeyMapValueTextBox
} from "./ChordLayoutColumn.styled.js";
export function ChordLayoutCard(props) {
  const keyMap = props.keyMap;
  const keyMapPosition = props.keyMapPosition;
  const keyMapValue = props.keyMapValue;
  const [lockInputs, setInputs] = useState(true);
  const [phraseTextInput, setPhraseTextInput] = useState("");
  const [chordTextInput, setChordTextInput] = useState("");
  const [deleteButtonProps, setDeleteButtonProps] = useState(false);
  const chord = props.currentChord;
  const phrase = props.currentPhrase;
  const originalHexChord = props.originalHexChord;
  const originalHexPhrase = props.originalHexPhrase;
  const payloadArray = [];
  payloadArray.push(chord);
  payloadArray.push(phrase);
  payloadArray.push(originalHexChord);
  const onClick = () => {
    setInputs(!lockInputs);
    setChordTextInput("");
  };
  const onClickCancelDeleteButton = () => {
    setDeleteButtonProps(!deleteButtonProps);
  };
  const onClickDeleteButton = () => {
    setDeleteButtonProps(!deleteButtonProps);
  };
  const onClickSaveButton = () => {
    const inArray = [];
    inArray.push(chord);
    inArray.push(phrase);
    inArray.push(phraseTextInput);
    inArray.push(chordTextInput);
    inArray.push(originalHexChord);
    inArray.push(originalHexPhrase);
    saveDownloadedChordsData(inArray);
    setInputs(!lockInputs);
  };
  const onClickConfirmDeleteButton = () => {
    deleteDownloadedChordsData(payloadArray);
  };
  return /* @__PURE__ */ React.createElement(CardLayoutContainer, null, /* @__PURE__ */ React.createElement(FirstKeyMapInputIdentifiers, null, "Key Map", /* @__PURE__ */ React.createElement(KeyMapTextBox, {
    placeholder: keyMap,
    disabled: lockInputs
  })), /* @__PURE__ */ React.createElement(KeyMapInputIdentifiers, null, "Key Map Position", /* @__PURE__ */ React.createElement(KeyMapPositionTextBox, {
    placeholder: keyMapPosition,
    disabled: lockInputs
  })), /* @__PURE__ */ React.createElement(KeyMapInputIdentifiers, null, "Key Map Value", /* @__PURE__ */ React.createElement(KeyMapValueTextBox, {
    placeholder: keyMapValue,
    disabled: lockInputs
  })));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTGF5b3V0Q2FyZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQk8sZ0NBQXlCLE9BQTBCO0FBQ3hELFFBQU0sU0FBaUIsTUFBTTtBQUM3QixRQUFNLGlCQUF5QixNQUFNO0FBQ3JDLFFBQU0sY0FBc0IsTUFBTTtBQUVsQyxRQUFNLENBQUMsWUFBWSxhQUFhLFNBQWtCO0FBQ2xELFFBQU0sQ0FBQyxpQkFBaUIsc0JBQXNCLFNBQWlCO0FBQy9ELFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLFNBQWlCO0FBQzdELFFBQU0sQ0FBQyxtQkFBbUIsd0JBQXdCLFNBQWtCO0FBRXBFLFFBQU0sUUFBZ0IsTUFBTTtBQUM1QixRQUFNLFNBQWlCLE1BQU07QUFDN0IsUUFBTSxtQkFBbUIsTUFBTTtBQUMvQixRQUFNLG9CQUFvQixNQUFNO0FBRWhDLFFBQU0sZUFBZTtBQUNyQixlQUFhLEtBQUs7QUFDbEIsZUFBYSxLQUFLO0FBQ2xCLGVBQWEsS0FBSztBQUVsQixRQUFNLFVBQVUsTUFBTTtBQUNwQixjQUFVLENBQUM7QUFDWCxzQkFBa0I7QUFBQTtBQUVwQixRQUFNLDRCQUE0QixNQUFNO0FBQ3RDLHlCQUFxQixDQUFDO0FBQUE7QUFHeEIsUUFBTSxzQkFBc0IsTUFBTTtBQUNoQyx5QkFBcUIsQ0FBQztBQUFBO0FBR3hCLFFBQU0sb0JBQW9CLE1BQU07QUFDOUIsVUFBTSxVQUFVO0FBQ2hCLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUViLDZCQUF5QjtBQUN6QixjQUFVLENBQUM7QUFBQTtBQUdiLFFBQU0sNkJBQTZCLE1BQU07QUFDdkMsK0JBQTJCO0FBQUE7QUFHN0IsU0FDRSxvQ0FBQyxxQkFBRCxNQUNFLG9DQUFDLDZCQUFELE1BQTZCLFdBRTNCLG9DQUFDLGVBQUQ7QUFBQSxJQUFlLGFBQWE7QUFBQSxJQUFRLFVBQVU7QUFBQSxPQUdoRCxvQ0FBQyx3QkFBRCxNQUF3QixvQkFFdEIsb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxPQUdkLG9DQUFDLHdCQUFELE1BQXdCLGlCQUV0QixvQ0FBQyxvQkFBRDtBQUFBLElBQW9CLGFBQWE7QUFBQSxJQUFhLFVBQVU7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
