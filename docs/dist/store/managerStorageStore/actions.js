import {action, thunk} from "../../../snowpack/pkg/easy-peasy.js";
import {
  sendCommandString,
  readGetOneAndReturnOne
} from "../../pages/manager/controls/mainControls.js";
import {
  convertHumanChordToHexadecimalChord,
  convertHumanStringToHexadecimalPhrase
} from "../../pages/manager/controls/mainControls.js";
const managerStorageStoreActions = {
  setDownloadedChords: action((state, payload) => {
    state.downloadedChords.chords = payload;
  }),
  setSingleDownloadedChord: action((state, payload) => {
    state.downloadedChords.chords.unshift(payload);
  }),
  deleteDownloadedChordsData: action((state, payload) => {
    const tempV = deleteChordInManager(state, payload);
    state.downloadedChords.chords = tempV;
  }),
  saveDownloadedChordsData: action((state, payload) => {
    saveEditedChordInManager(state, payload);
  }),
  setDownloadedChordLayout: action((state, payload) => {
    state.downloadedChordLayout.chordLayout = payload;
  }),
  setImportedChords: action((state, payload) => {
    state.downloadedChords.chords = payload;
  }),
  setImportedChordsLayout: action((state, payload) => {
    state.downloadedChordLayout.chordLayout = payload;
  }),
  clearDownloadedChords: action((state) => {
    state.downloadedChords.chords = [];
  }),
  clearDownloadedChordLayout: action((state) => {
    state.downloadedChordLayout.chordLayout = [];
  }),
  setSerialApiRequests: action((state, payload) => {
    state.serialApiRequests.push(payload);
  }),
  setSerialApiResponses: action((state, payload) => {
    state.serialApiResponses.push(payload);
  }),
  setDeviceId: action((state, payload) => {
    state.deviceId = payload;
  }),
  updateSerialAPiDataThunk: thunk(async (state, payload) => {
    sendCommandString(payload);
    state.setSerialApiRequests(payload);
    const returnedResponse = await readGetOneAndReturnOne();
    state.setSerialApiRequests(returnedResponse);
  })
};
function deleteChordInManager(store, payload) {
  const currentChord = payload[0];
  const currentPhrase = payload[1];
  const deleteChordHex = payload[2];
  store.downloadedChords.chords.splice(store.downloadedChords.chords.findIndex((v) => v.currentChord === currentChord && v.currentPhrase === currentPhrase), 1);
  sendCommandString("CML C4 " + deleteChordHex);
  return store.downloadedChords.chords;
}
function saveEditedChordInManager(store, payload) {
  const currentChord = payload[0];
  const currentPhrase = payload[1];
  let newPhrase = payload[2];
  let newChord = payload[3];
  let newHexPhrase;
  let newHexChord;
  const ChordStruct = store.downloadedChords.chords.find((c) => c.currentChord === currentChord && c.currentPhrase === currentPhrase);
  if (newPhrase == "" || newPhrase.length == 0) {
    newPhrase = currentPhrase;
    newHexPhrase = convertHumanStringToHexadecimalPhrase(currentPhrase);
  } else {
    newHexPhrase = convertHumanStringToHexadecimalPhrase(newPhrase);
  }
  if (newChord == "" || newChord.length == 0) {
    newChord = currentChord;
    newHexChord = convertHumanChordToHexadecimalChord(currentChord);
  } else {
    newHexChord = convertHumanChordToHexadecimalChord(newChord);
  }
  ChordStruct.currentPhrase = newPhrase;
  ChordStruct.currentChord = newChord;
  ChordStruct.previousChord = ChordStruct.currentChord;
  ChordStruct.previousPhrase = ChordStruct.currentPhrase;
  sendCommandString("CML C3 " + newHexChord + " " + newHexPhrase);
  store.downloadedChords = {
    chords: store.downloadedChords.chords.map((e) => e.currentChord === currentChord && e.currentPhrase === currentPhrase ? ChordStruct : e)
  };
}
export default managerStorageStoreActions;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc3RvcmUvbWFuYWdlclN0b3JhZ2VTdG9yZS9hY3Rpb25zLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBVUEsTUFBTSw2QkFBa0Q7QUFBQSxFQUN0RCxxQkFBcUIsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUM5QyxVQUFNLGlCQUFpQixTQUFTO0FBQUE7QUFBQSxFQUVsQywwQkFBMEIsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUNuRCxVQUFNLGlCQUFpQixPQUFPLFFBQVE7QUFBQTtBQUFBLEVBRXhDLDRCQUE0QixPQUFPLENBQUMsT0FBTyxZQUFZO0FBQ3JELFVBQU0sUUFBUSxxQkFBcUIsT0FBTztBQUMxQyxVQUFNLGlCQUFpQixTQUFTO0FBQUE7QUFBQSxFQUVsQywwQkFBMEIsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUNuRCw2QkFBeUIsT0FBTztBQUFBO0FBQUEsRUFFbEMsMEJBQTBCLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDbkQsVUFBTSxzQkFBc0IsY0FBYztBQUFBO0FBQUEsRUFFNUMsbUJBQW1CLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDNUMsVUFBTSxpQkFBaUIsU0FBUztBQUFBO0FBQUEsRUFFbEMseUJBQXlCLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDbEQsVUFBTSxzQkFBc0IsY0FBYztBQUFBO0FBQUEsRUFFNUMsdUJBQXVCLE9BQU8sQ0FBQyxVQUFVO0FBQ3ZDLFVBQU0saUJBQWlCLFNBQVM7QUFBQTtBQUFBLEVBRWxDLDRCQUE0QixPQUFPLENBQUMsVUFBVTtBQUM1QyxVQUFNLHNCQUFzQixjQUFjO0FBQUE7QUFBQSxFQUU1QyxzQkFBc0IsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUMvQyxVQUFNLGtCQUFrQixLQUFLO0FBQUE7QUFBQSxFQUUvQix1QkFBdUIsT0FBTyxDQUFDLE9BQU8sWUFBWTtBQUNoRCxVQUFNLG1CQUFtQixLQUFLO0FBQUE7QUFBQSxFQUVoQyxhQUFhLE9BQU8sQ0FBQyxPQUFPLFlBQVk7QUFDdEMsVUFBTSxXQUFXO0FBQUE7QUFBQSxFQUVuQiwwQkFBMEIsTUFBTSxPQUFPLE9BQU8sWUFBWTtBQUN4RCxzQkFBa0I7QUFDbEIsVUFBTSxxQkFBcUI7QUFDM0IsVUFBTSxtQkFBbUIsTUFBTTtBQUMvQixVQUFNLHFCQUFxQjtBQUFBO0FBQUE7QUFpQi9CLDhCQUE4QixPQUFPLFNBQVM7QUFDNUMsUUFBTSxlQUFlLFFBQVE7QUFDN0IsUUFBTSxnQkFBZ0IsUUFBUTtBQUM5QixRQUFNLGlCQUFpQixRQUFRO0FBRS9CLFFBQU0saUJBQWlCLE9BQU8sT0FDNUIsTUFBTSxpQkFBaUIsT0FBTyxVQUM1QixDQUFDLE1BQ0MsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsa0JBQWtCLGdCQUUzRDtBQUlGLG9CQUFrQixZQUFZO0FBQzlCLFNBQU8sTUFBTSxpQkFBaUI7QUFBQTtBQUdoQyxrQ0FBa0MsT0FBTyxTQUFTO0FBQ2hELFFBQU0sZUFBZSxRQUFRO0FBQzdCLFFBQU0sZ0JBQWdCLFFBQVE7QUFDOUIsTUFBSSxZQUFZLFFBQVE7QUFDeEIsTUFBSSxXQUFXLFFBQVE7QUFDdkIsTUFBSTtBQUNKLE1BQUk7QUFFSixRQUFNLGNBQWMsTUFBTSxpQkFBaUIsT0FBTyxLQUNoRCxDQUFDLE1BQ0MsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsa0JBQWtCO0FBRzNELE1BQUksYUFBYSxNQUFNLFVBQVUsVUFBVSxHQUFHO0FBQzVDLGdCQUFZO0FBQ1osbUJBQWUsc0NBQXNDO0FBQUEsU0FDaEQ7QUFDTCxtQkFBZSxzQ0FBc0M7QUFBQTtBQUd2RCxNQUFJLFlBQVksTUFBTSxTQUFTLFVBQVUsR0FBRztBQUMxQyxlQUFXO0FBQ1gsa0JBQWMsb0NBQW9DO0FBQUEsU0FDN0M7QUFDTCxrQkFBYyxvQ0FBb0M7QUFBQTtBQUdwRCxjQUFZLGdCQUFnQjtBQUM1QixjQUFZLGVBQWU7QUFDM0IsY0FBWSxnQkFBZ0IsWUFBWTtBQUN4QyxjQUFZLGlCQUFpQixZQUFZO0FBRXpDLG9CQUFrQixZQUFZLGNBQWMsTUFBTTtBQUNsRCxRQUFNLG1CQUFtQjtBQUFBLElBQ3ZCLFFBQVEsTUFBTSxpQkFBaUIsT0FBTyxJQUFJLENBQUMsTUFDekMsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsa0JBQWtCLGdCQUNuRCxjQUNBO0FBQUE7QUFBQTtBQUtWLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
