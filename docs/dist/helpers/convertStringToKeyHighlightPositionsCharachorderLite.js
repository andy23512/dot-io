import {chordLibrary} from "../data/chordLibrary.js";
import {
  keyPositions
} from "../data/keyPositionsCharachorderLite.js";
import {
  pickerV1,
  pickerLite
} from "../models/keyboardDropDownFolder/keyboardDropDown.js";
const storedLibrary = JSON?.parse(localStorage?.getItem("chordsReadFromDevice"));
const SPACE_KEY_LOCATION = keyPositions?.["194-83"];
export const ConvertStringToKeyHighlightPositionsLite = (scenario, text, highlightMode, characterIndex, trainingLevel) => {
  if (highlightMode === "CHORD") {
    return getHighlightPositionForString(text, scenario, trainingLevel);
  } else if (trainingLevel == "CHM") {
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
  } else if (scenario == "LEXICALSENTENCES" && pickerLite) {
    chord = parseChord(text);
    console.log("this is the chord lexSentence" + chord);
  } else if (scenario == "LEXICALSENTENCES" && pickerV1) {
    chord = parseChord(text);
    console.log("this is the chord " + chord);
  } else if (scenario == "LEXICALSENTENCESDUOS" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESDUOS" && pickerLite) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESTRIOS" && pickerV1) {
    chord = parseChord(text);
  } else if (scenario == "LEXICALSENTENCESTRIOS" && pickerLite) {
    chord = parseChord(text);
  }
  if (chord) {
    const keyHighlightPositionsBeforeTransformation = chord.map((nonTransformedKeyPosition) => keyPositions?.[nonTransformedKeyPosition]);
    return keyHighlightPositionsBeforeTransformation;
  }
  return [];
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaGVscGVycy9jb252ZXJ0U3RyaW5nVG9LZXlIaWdobGlnaHRQb3NpdGlvbnNDaGFyYWNob3JkZXJMaXRlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFTQSxNQUFNLGdCQUFnQixNQUFNLE1BQzFCLGNBQWMsUUFBUTtBQUd4QixNQUFNLHFCQUFxQixlQUFlO0FBRW5DLGFBQU0sMkNBQTJDLENBQ3RELFVBQ0EsTUFDQSxlQUNBLGdCQUNBLGtCQUMrQjtBQUMvQixNQUFJLGtCQUFrQixTQUFTO0FBQzdCLFdBQU8sOEJBQThCLE1BQU0sVUFBVTtBQUFBLGFBQzVDLGlCQUFpQixPQUFPO0FBQ2pDLFdBQU8sOEJBQThCLE1BQU0sVUFBVTtBQUFBLFNBQ2hEO0FBQ0wsUUFBSSxtQkFBbUI7QUFBSSxhQUFPLENBQUM7QUFDbkMsV0FBTyw4QkFDTCxLQUFLLGlCQUNMLFVBQ0E7QUFBQTtBQUFBO0FBS04sb0JBQW9CLE1BQU07QUFDeEIsUUFBTSxhQUFhLGVBQWUsWUFBWSxLQUM1QyxDQUFDLE1BQWlDLEVBQUUsT0FBTztBQUU3QyxRQUFNLFFBQVE7QUFFZCxXQUFTLElBQUksR0FBRyxJQUFJLFlBQVksT0FBTyxRQUFRLEtBQUs7QUFFbEQsVUFBTSxLQUFLLGNBQWMsTUFBTSxZQUFZLE1BQU07QUFBQTtBQUVuRCxTQUFPO0FBQUE7QUFHVCxNQUFNLGdDQUFnQyxDQUNwQyxNQUNBLFVBQ0Esa0JBQ0c7QUFHSCxNQUFJLFFBQVEsY0FBYyxNQUFNO0FBQ2hDLE1BQUksaUJBQWlCLE9BQU87QUFDMUIsUUFBSSxZQUFZLGFBQWEsVUFBVTtBQUNyQyxjQUFRLGFBQWEsT0FBTztBQUFBLGVBQ25CLFlBQVksYUFBYSxZQUFZO0FBQzlDLGNBQVEsYUFBYSxXQUFXO0FBQUEsZUFDdkIsWUFBWSxtQkFBbUIsVUFBVTtBQUNsRCxjQUFRLGFBQWEsT0FBTztBQUFBLGVBQ25CLFlBQVksbUJBQW1CLFlBQVk7QUFDcEQsY0FBUSxhQUFhLFdBQVc7QUFBQSxXQUMzQjtBQUNMLGNBQVEsV0FBVztBQUFBO0FBQUEsYUFFWixZQUFZLGNBQWMsVUFBVTtBQUM3QyxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksY0FBYyxZQUFZO0FBQy9DLFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSxhQUFhO0FBRWxDLFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSxzQkFBc0IsWUFBWTtBQUN2RCxZQUFRLFdBQVc7QUFDbkIsWUFBUSxJQUFJLGtDQUFrQztBQUFBLGFBQ3JDLFlBQVksc0JBQXNCLFVBQVU7QUFDckQsWUFBUSxXQUFXO0FBQ25CLFlBQVEsSUFBSSx1QkFBdUI7QUFBQSxhQUMxQixZQUFZLDBCQUEwQixVQUFVO0FBQ3pELFlBQVEsV0FBVztBQUFBLGFBQ1YsWUFBWSwwQkFBMEIsWUFBWTtBQUMzRCxZQUFRLFdBQVc7QUFBQSxhQUNWLFlBQVksMkJBQTJCLFVBQVU7QUFDMUQsWUFBUSxXQUFXO0FBQUEsYUFDVixZQUFZLDJCQUEyQixZQUFZO0FBQzVELFlBQVEsV0FBVztBQUFBO0FBRXJCLE1BQUksT0FBTztBQUNULFVBQU0sNENBQTRDLE1BQU0sSUFDdEQsQ0FBQyw4QkFBOEIsZUFBZTtBQUVoRCxXQUFPO0FBQUE7QUFFVCxTQUFPO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
