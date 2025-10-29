import React from "../../../../snowpack/pkg/react.js";
import {Piano} from "../../../../snowpack/pkg/react-piano.js";
const DURATION_UNIT = 0.2;
const DEFAULT_NOTE_DURATION = DURATION_UNIT;
class PianoWithRecording extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      keysDown: {},
      noteDuration: DEFAULT_NOTE_DURATION,
      notesRecorded: false
    };
    this.onPlayNoteInput = (midiNumber) => {
      this.setState({
        notesRecorded: false
      });
    };
    this.onStopNoteInput = (midiNumber, {prevActiveNotes}) => {
      if (this.state.notesRecorded === false) {
        this.recordNotes(prevActiveNotes, this.state.noteDuration);
        this.setState({
          notesRecorded: true,
          noteDuration: DEFAULT_NOTE_DURATION
        });
      }
    };
    this.recordNotes = (midiNumbers, duration) => {
      if (this.props.recording.mode !== "RECORDING") {
        return;
      }
      const newEvents = midiNumbers.map((midiNumber) => {
        return {
          midiNumber,
          time: this.props.recording.currentTime,
          duration
        };
      });
      this.props.setRecording({
        events: this.props.recording.events.concat(newEvents),
        currentTime: this.props.recording.currentTime + duration
      });
    };
  }
  render() {
    const {playNote, stopNote, recording, setRecording, ...pianoProps} = this.props;
    const {mode, currentEvents} = this.props.recording;
    const activeNotes = mode === "PLAYING" ? currentEvents.map((event) => event.midiNumber) : null;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Piano, {
      playNote: this.props.playNote,
      stopNote: this.props.stopNote,
      onPlayNoteInput: this.onPlayNoteInput,
      onStopNoteInput: this.onStopNoteInput,
      activeNotes,
      ...pianoProps
    }));
  }
}
PianoWithRecording.defaultProps = {
  notesRecorded: false
};
export default PianoWithRecording;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvcGlhbm8vY29tcG9uZW50L1BpYW5vV2l0aFJlY29yZGluZy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUEsTUFBTSxnQkFBZ0I7QUFDdEIsTUFBTSx3QkFBd0I7QUFFOUIsaUNBQWlDLE1BQU0sVUFBb0I7QUFBQSxFQUEzRCxjQU5BO0FBTUE7QUFLRSxpQkFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBO0FBR2pCLDJCQUFrQixDQUFDLGVBQW9CO0FBQ3JDLFdBQUssU0FBUztBQUFBLFFBQ1osZUFBZTtBQUFBO0FBQUE7QUFJbkIsMkJBQWtCLENBQUMsWUFBaUIsQ0FBRSxxQkFBMkI7QUFDL0QsVUFBSSxLQUFLLE1BQU0sa0JBQWtCLE9BQU87QUFDdEMsYUFBSyxZQUFZLGlCQUFpQixLQUFLLE1BQU07QUFDN0MsYUFBSyxTQUFTO0FBQUEsVUFDWixlQUFlO0FBQUEsVUFDZixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBS3BCLHVCQUFjLENBQUMsYUFBb0IsYUFBcUI7QUFDdEQsVUFBSSxLQUFLLE1BQU0sVUFBVSxTQUFTLGFBQWE7QUFDN0M7QUFBQTtBQUVGLFlBQU0sWUFBWSxZQUFZLElBQUksQ0FBQyxlQUFvQjtBQUNyRCxlQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0EsTUFBTSxLQUFLLE1BQU0sVUFBVTtBQUFBLFVBQzNCO0FBQUE7QUFBQTtBQUdKLFdBQUssTUFBTSxhQUFhO0FBQUEsUUFDdEIsUUFBUSxLQUFLLE1BQU0sVUFBVSxPQUFPLE9BQU87QUFBQSxRQUMzQyxhQUFhLEtBQUssTUFBTSxVQUFVLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlwRCxTQUFTO0FBQ1AsVUFBTSxDQUFFLFVBQVUsVUFBVSxXQUFXLGlCQUFpQixjQUN0RCxLQUFLO0FBRVAsVUFBTSxDQUFFLE1BQU0saUJBQWtCLEtBQUssTUFBTTtBQUMzQyxVQUFNLGNBQ0osU0FBUyxZQUNMLGNBQWMsSUFBSSxDQUFDLFVBQStCLE1BQU0sY0FDeEQ7QUFDTixXQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsTUFDRSxVQUFVLEtBQUssTUFBTTtBQUFBLE1BQ3JCLFVBQVUsS0FBSyxNQUFNO0FBQUEsTUFDckIsaUJBQWlCLEtBQUs7QUFBQSxNQUN0QixpQkFBaUIsS0FBSztBQUFBLE1BQ3RCO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQTVETCxBQURULG1CQUNTLGVBQWU7QUFBQSxFQUNwQixlQUFlO0FBQUE7QUFrRW5CLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
