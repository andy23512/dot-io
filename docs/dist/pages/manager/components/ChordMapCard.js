import React, {useState} from "../../../../snowpack/pkg/react.js";
import {useStoreActions} from "../../../store/store.js";
import {
  CardEditButton,
  CardSaveButton,
  CardCancelButton,
  CardContainer,
  ChordTextBox,
  PhraseTextBox,
  CardDeleteButton,
  InputIdentifiers,
  InputIdentifiersForPhrase,
  CardConfirmDeleteButton,
  CardCancelDeleteButton
} from "./ChordMapCardColumn.styled.js";
export function ChordMapCard(props, index) {
  const [lockInputs, setInputs] = useState(true);
  const [phraseTextInput, setPhraseTextInput] = useState("");
  const [chordTextInput, setChordTextInput] = useState("");
  const [deleteButtonProps, setDeleteButtonProps] = useState(false);
  const deleteDownloadedChordsData = useStoreActions((store) => store.deleteDownloadedChordsData);
  const saveDownloadedChordsData = useStoreActions((store) => store.saveDownloadedChordsData);
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
  function change(event) {
    if ((chordTextInput != "" || event.code == "ShiftRight" || event.code == "ShiftLeft") && event.key != "Delete" && event.key != "Backspace") {
      let chord2 = "";
      const splitChord = chordTextInput.split(" + ").join("");
      for (let i = 0; i < splitChord.length; i++) {
        if (splitChord.substring(i, i + 11) == "RIGHT_SHIFT") {
          chord2 += "RIGHT_SHIFT + ";
          i += 10;
        } else if (splitChord.substring(i, i + 10) == "LEFT_SHIFT") {
          chord2 += "LEFT_SHIFT + ";
          i += 9;
        } else {
          chord2 += splitChord[i] + " + ";
        }
      }
      if (event.code == "ShiftRight") {
        chord2 += "RIGHT_SHIFT";
      } else if (event.code == "ShiftLeft") {
        chord2 += "LEFT_SHIFT";
      }
      return chord2;
    } else if (event.key == "Delete" || event.key == "Backspace") {
      return chordTextInput.slice(0, -3);
    } else
      return "";
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CardContainer, null, /* @__PURE__ */ React.createElement(InputIdentifiersForPhrase, null, "Output", /* @__PURE__ */ React.createElement(PhraseTextBox, {
    placeholder: phrase.toString(),
    disabled: lockInputs,
    onChange: (e) => setPhraseTextInput(e.target.value)
  })), /* @__PURE__ */ React.createElement(InputIdentifiers, null, "Input", /* @__PURE__ */ React.createElement(ChordTextBox, {
    placeholder: chord.toString(),
    disabled: lockInputs,
    onKeyDown: (e) => setChordTextInput(change(e)),
    onChange: (e) => setChordTextInput(e.target.value),
    value: chordTextInput
  })), /* @__PURE__ */ React.createElement(CardEditButton, {
    onClick,
    cancelled: lockInputs,
    shouldDelete: deleteButtonProps
  }, "Edit Chord"), /* @__PURE__ */ React.createElement(CardCancelButton, {
    onClick,
    cancelled: lockInputs,
    shouldDelete: deleteButtonProps
  }, "Cancel"), /* @__PURE__ */ React.createElement(CardSaveButton, {
    onClick: onClickSaveButton,
    cancelled: lockInputs,
    shouldDelete: deleteButtonProps
  }, "Save"), /* @__PURE__ */ React.createElement(CardDeleteButton, {
    onClick: onClickDeleteButton,
    shouldDelete: deleteButtonProps
  }, "Delete"), /* @__PURE__ */ React.createElement(CardCancelDeleteButton, {
    onClick: onClickCancelDeleteButton,
    shouldDelete: deleteButtonProps
  }, "Cancel"), /* @__PURE__ */ React.createElement(CardConfirmDeleteButton, {
    onClick: onClickConfirmDeleteButton,
    shouldDelete: deleteButtonProps
  }, "Confirm")));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTWFwQ2FyZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQk8sNkJBQXNCLE9BQVksT0FBNkI7QUFDcEUsUUFBTSxDQUFDLFlBQVksYUFBYSxTQUFrQjtBQUNsRCxRQUFNLENBQUMsaUJBQWlCLHNCQUFzQixTQUFpQjtBQUMvRCxRQUFNLENBQUMsZ0JBQWdCLHFCQUFxQixTQUFpQjtBQUM3RCxRQUFNLENBQUMsbUJBQW1CLHdCQUF3QixTQUFrQjtBQUVwRSxRQUFNLDZCQUE2QixnQkFDakMsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSwyQkFBMkIsZ0JBQy9CLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0sUUFBZ0IsTUFBTTtBQUM1QixRQUFNLFNBQWlCLE1BQU07QUFDN0IsUUFBTSxtQkFBbUIsTUFBTTtBQUMvQixRQUFNLG9CQUFvQixNQUFNO0FBRWhDLFFBQU0sZUFBZTtBQUNyQixlQUFhLEtBQUs7QUFDbEIsZUFBYSxLQUFLO0FBQ2xCLGVBQWEsS0FBSztBQUVsQixRQUFNLFVBQVUsTUFBTTtBQUNwQixjQUFVLENBQUM7QUFDWCxzQkFBa0I7QUFBQTtBQUdwQixRQUFNLDRCQUE0QixNQUFNO0FBQ3RDLHlCQUFxQixDQUFDO0FBQUE7QUFHeEIsUUFBTSxzQkFBc0IsTUFBTTtBQUNoQyx5QkFBcUIsQ0FBQztBQUFBO0FBR3hCLFFBQU0sb0JBQW9CLE1BQU07QUFDOUIsVUFBTSxVQUFVO0FBQ2hCLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUNiLFlBQVEsS0FBSztBQUViLDZCQUF5QjtBQUN6QixjQUFVLENBQUM7QUFBQTtBQUdiLFFBQU0sNkJBQTZCLE1BQU07QUFDdkMsK0JBQTJCO0FBQUE7QUFHN0Isa0JBQWdCLE9BQU87QUFDckIsUUFDRyxtQkFBa0IsTUFDakIsTUFBTSxRQUFRLGdCQUNkLE1BQU0sUUFBUSxnQkFDaEIsTUFBTSxPQUFPLFlBQ2IsTUFBTSxPQUFPLGFBQ2I7QUFDQSxVQUFJLFNBQVE7QUFDWixZQUFNLGFBQWEsZUFBZSxNQUFNLE9BQU8sS0FBSztBQUVwRCxlQUFTLElBQUksR0FBRyxJQUFJLFdBQVcsUUFBUSxLQUFLO0FBQzFDLFlBQUksV0FBVyxVQUFVLEdBQUcsSUFBSSxPQUFPLGVBQWU7QUFDcEQsb0JBQVM7QUFDVCxlQUFLO0FBQUEsbUJBQ0ksV0FBVyxVQUFVLEdBQUcsSUFBSSxPQUFPLGNBQWM7QUFDMUQsb0JBQVM7QUFDVCxlQUFLO0FBQUEsZUFDQTtBQUNMLG9CQUFTLFdBQVcsS0FBSztBQUFBO0FBQUE7QUFHN0IsVUFBSSxNQUFNLFFBQVEsY0FBYztBQUM5QixrQkFBUztBQUFBLGlCQUNBLE1BQU0sUUFBUSxhQUFhO0FBQ3BDLGtCQUFTO0FBQUE7QUFHWCxhQUFPO0FBQUEsZUFDRSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sYUFBYTtBQUM1RCxhQUFPLGVBQWUsTUFBTSxHQUFHO0FBQUE7QUFDMUIsYUFBTztBQUFBO0FBR2hCLFNBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsZUFBRCxNQUNFLG9DQUFDLDJCQUFELE1BQTJCLFVBRXpCLG9DQUFDLGVBQUQ7QUFBQSxJQUNFLGFBQWEsT0FBTztBQUFBLElBQ3BCLFVBQVU7QUFBQSxJQUNWLFVBQVUsQ0FBQyxNQUFNLG1CQUFtQixFQUFFLE9BQU87QUFBQSxPQUdqRCxvQ0FBQyxrQkFBRCxNQUFrQixTQUVoQixvQ0FBQyxjQUFEO0FBQUEsSUFDRSxhQUFhLE1BQU07QUFBQSxJQUNuQixVQUFVO0FBQUEsSUFDVixXQUFXLENBQUMsTUFBTSxrQkFBa0IsT0FBTztBQUFBLElBQzNDLFVBQVUsQ0FBQyxNQUFNLGtCQUFrQixFQUFFLE9BQU87QUFBQSxJQUM1QyxPQUFPO0FBQUEsT0FHWCxvQ0FBQyxnQkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxLQUNmLGVBR0Qsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsS0FDZixXQUdELG9DQUFDLGdCQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsS0FDZixTQUdELG9DQUFDLGtCQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsS0FDZixXQUdELG9DQUFDLHdCQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsS0FDZixXQUdELG9DQUFDLHlCQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsS0FDZjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
