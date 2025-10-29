import {chordLibrary} from "../data/chordLibrary.js";
import {keyPositions} from "../data/keyPositions.js";
import {
  pickerV1,
  pickerLite
} from "../models/keyboardDropDownFolder/keyboardDropDown.js";
const storedLibrary = JSON?.parse(localStorage?.getItem("chordsReadFromDevice"));
const SPACE_KEY_LOCATION = keyPositions?.["194-83"];
export const ConvertStringToKeyHighlightPositions = (scenario, text, highlightMode, characterIndex, trainingLevel) => {
  if (highlightMode === "CHORD") {
    return getHighlightPositionForString(text, scenario, trainingLevel);
  } else if (trainingLevel == "CHM" || trainingLevel == "StM") {
    return getHighlightPositionForString(text, scenario, trainingLevel);
  } else {
    if (characterIndex === -1)
      return [SPACE_KEY_LOCATION];
    return getHighlightPositionForString(text[characterIndex], scenario, trainingLevel);
  }
};
function parseChord(text) {
  const chordStats = storedLibrary?.statistics?.find((c) => c.id === text);
  const chord = [];
  for (let p = 0; p < chordStats?.chord?.length; p++) {
    chord.push(chordLibrary?.all?.[chordStats?.chord[p]]);
  }
  return chord;
}
const getHighlightPositionForString = (text, scenario, trainingLevel) => {
  let chord = chordLibrary?.all?.[text];
  if (trainingLevel == "CHM") {
    if (scenario == "LEXICAL" && pickerV1) {
      chord = chordLibrary.chords[text];
    } else if (scenario == "LEXICAL" && pickerLite) {
      chord = chordLibrary.chordsLite[text];
    } else if (scenario == "LEXICOGRAPHIC" && pickerV1) {
      chord = chordLibrary.chords[text];
    } else if (scenario == "LEXICOGRAPHIC" && pickerLite) {
      chord = chordLibrary.chordsLite[text];
    } else {
      chord = parseChord(text);
    }
  } else if (scenario == "CHORDING" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "CHORDING" && pickerLite) {
    chord = parseChord(text);
  } else if (scenario == "ALLCHORDS") {
    chord = parseChord(text);
  } else if (scenario == "LEXICOGRAPHIC" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICOGRAPHIC" && pickerLite) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCES" && pickerLite) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCES" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESDUOS" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESDUOS" && pickerLite) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESTRIOS" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESTRIOS" && pickerLite) {
    chord = parseChord(text);
  } else {
    chord = chordLibrary?.all?.[text];
  }
  if (chord) {
    const keyHighlightPositionsBeforeTransformation = chord?.map((nonTransformedKeyPosition) => keyPositions?.[nonTransformedKeyPosition]);
    return keyHighlightPositionsBeforeTransformation;
  }
  return [];
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaGVscGVycy9jb252ZXJ0U3RyaW5nVG9LZXlIaWdobGlnaHRQb3NpdGlvbnMudHMiXSwKICAibWFwcGluZ3MiOiAiQUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxNQUFNLGdCQUFnQixNQUFNLE1BQzFCLGNBQWMsUUFBUTtBQUt4QixNQUFNLHFCQUFxQixlQUFlO0FBRW5DLGFBQU0sdUNBQXVDLENBQ2xELFVBQ0EsTUFDQSxlQUNBLGdCQUNBLGtCQUMyQjtBQUMzQixNQUFJLGtCQUFrQixTQUFTO0FBQzdCLFdBQU8sOEJBQThCLE1BQU0sVUFBVTtBQUFBLGFBQzVDLGlCQUFpQixTQUFTLGlCQUFpQixPQUFPO0FBQzNELFdBQU8sOEJBQThCLE1BQU0sVUFBVTtBQUFBLFNBQ2hEO0FBQ0wsUUFBSSxtQkFBbUI7QUFBSSxhQUFPLENBQUM7QUFDbkMsV0FBTyw4QkFDTCxLQUFLLGlCQUNMLFVBQ0E7QUFBQTtBQUFBO0FBS04sb0JBQW9CLE1BQWM7QUFDaEMsUUFBTSxhQUFhLGVBQWUsWUFBWSxLQUM1QyxDQUFDLE1BQWlDLEVBQUUsT0FBTztBQUc3QyxRQUFNLFFBQVE7QUFFZCxXQUFTLElBQUksR0FBRyxJQUFJLFlBQVksT0FBTyxRQUFRLEtBQUs7QUFFbEQsVUFBTSxLQUFLLGNBQWMsTUFBTSxZQUFZLE1BQU07QUFBQTtBQUVuRCxTQUFPO0FBQUE7QUFHVCxNQUFNLGdDQUFnQyxDQUNwQyxNQUNBLFVBQ0Esa0JBQ0c7QUFDSCxNQUFJLFFBQVEsY0FBYyxNQUFNO0FBQ2hDLE1BQUksaUJBQWlCLE9BQU87QUFDMUIsUUFBSSxZQUFZLGFBQWEsVUFBVTtBQUNyQyxjQUFRLGFBQWEsT0FBTztBQUFBLGVBQ25CLFlBQVksYUFBYSxZQUFZO0FBQzlDLGNBQVEsYUFBYSxXQUFXO0FBQUEsZUFDdkIsWUFBWSxtQkFBbUIsVUFBVTtBQUNsRCxjQUFRLGFBQWEsT0FBTztBQUFBLGVBQ25CLFlBQVksbUJBQW1CLFlBQVk7QUFDcEQsY0FBUSxhQUFhLFdBQVc7QUFBQSxXQUMzQjtBQUNMLGNBQVEsV0FBVztBQUFBO0FBQUEsYUFFWixZQUFZLGNBQWMsVUFBVTtBQUM3QyxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksY0FBYyxZQUFZO0FBQy9DLFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSxhQUFhO0FBQ2xDLFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSxtQkFBbUIsVUFBVTtBQUNsRCxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksbUJBQW1CLFlBQVk7QUFDcEQsWUFBUSxXQUFXO0FBQUEsYUFDVixZQUFZLHNCQUFzQixZQUFZO0FBQ3ZELFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSxzQkFBc0IsVUFBVTtBQUNyRCxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksMEJBQTBCLFVBQVU7QUFDekQsWUFBUSxXQUFXO0FBQUEsYUFDVixZQUFZLDBCQUEwQixZQUFZO0FBQzNELFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSwyQkFBMkIsVUFBVTtBQUMxRCxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksMkJBQTJCLFlBQVk7QUFDNUQsWUFBUSxXQUFXO0FBQUEsU0FDZDtBQUNMLFlBQVEsY0FBYyxNQUFNO0FBQUE7QUFHOUIsTUFBSSxPQUFPO0FBQ1QsVUFBTSw0Q0FBNEMsT0FBTyxJQUN2RCxDQUFDLDhCQUE4QixlQUFlO0FBRWhELFdBQU87QUFBQTtBQUVULFNBQU87QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
