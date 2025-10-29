import React from "../../../../snowpack/pkg/react.js";
import {MidiNumbers} from "../../../../snowpack/pkg/react-piano.js";
import "../../../../snowpack/pkg/react-piano/dist/styles.css";
import midiNumberToNote from "../../../../snowpack/pkg/midi-note.js";
import SoundfontProvider from "./SoundfontProvider.js";
import KeyboardShortcuts from "./KeyboardShortcuts.js";
import _ from "../../../../snowpack/pkg/lodash.js";
import PianoWithRecording from "./PianoWithRecording.js";
import PropTypes from "../../../../snowpack/pkg/prop-types.js";
const audioContext = new window.AudioContext();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
//!SECTION
export default class PianoKeyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.getRecordingEndTime = () => {
      if (this.state.recording.events.length === 0) {
        return 0;
      }
      return Math.max(...this.state.recording.events.map((event) => event.time + event.duration));
    };
    this.setRecording = (value) => {
      this.setState({
        recording: Object.assign({}, this.state.recording, value)
      });
    };
    this.onClickPlay = () => {
      this.setRecording({
        mode: "PLAYING"
      });
      const startAndEndTimes = _.uniq(_.flatMap(this.state.recording.events, (event) => [
        event.time,
        event.time + event.duration
      ]));
      startAndEndTimes.forEach((time) => {
        this.state.recording.scheduledEvents.push(setTimeout(() => {
          const currentEvents = this.state.recording.events.filter((event) => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents
          });
        }, time * 1e3));
      });
      setTimeout(() => {
        this.onClickStop();
      }, this.getRecordingEndTime() * 1e3);
    };
    this.onClickStop = () => {
      this.state.recording.scheduledEvents.forEach((scheduledEvent) => {
        clearTimeout(scheduledEvent);
      });
      this.setRecording({
        mode: "RECORDING",
        currentEvents: []
      });
    };
    this.onClickClear = () => {
      this.onClickStop();
      this.setRecording({
        events: [],
        mode: "RECORDING",
        currentEvents: [],
        currentTime: 0
      });
    };
    this.state = {
      recording: {
        mode: "RECORDING",
        events: [],
        currentTime: 0,
        currentEvents: [],
        firstNote: "C3",
        lastNote: "B5",
        instrument: "acoustic_grand_piano",
        scheduledEvents: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      recording: Object.assign({}, this.state.recording, {[name]: value})
    });
  }
  render() {
    const firstNote = MidiNumbers.fromNote(this.state.recording.firstNote);
    const lastNote = MidiNumbers.fromNote(this.state.recording.lastNote);
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote,
      lastNote,
      keyboardConfig: KeyboardShortcuts.EXTENDED_ROW
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(KeyboardConfig, {
      firstNote: this.state.recording.firstNote,
      lastNote: this.state.recording.lastNote,
      handleChange: this.handleChange,
      instrument: this.state.recording.instrument
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      style: yerr
    }, /* @__PURE__ */ React.createElement(SoundfontProvider, {
      instrumentName: this.state.recording.instrument,
      audioContext,
      hostname: soundfontHostname,
      render: ({isLoading, playNote, stopNote}) => /* @__PURE__ */ React.createElement(PianoWithRecording, {
        recording: this.state.recording,
        setRecording: this.setRecording,
        noteRange: {first: firstNote, last: lastNote},
        width: 1e3,
        playNote,
        stopNote,
        disabled: isLoading,
        keyboardShortcuts
      })
    })), /* @__PURE__ */ React.createElement("div", {
      className: "mt-5"
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: this.onClickPlay,
      className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]"
    }, "Play"), /* @__PURE__ */ React.createElement("button", {
      onClick: this.onClickStop,
      className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]"
    }, "Stop"), /* @__PURE__ */ React.createElement("button", {
      onClick: this.onClickClear,
      className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]"
    }, "Clear")), /* @__PURE__ */ React.createElement("div", {
      className: "mt-5"
    }, /* @__PURE__ */ React.createElement("strong", {
      className: "text-white"
    }, "Recorded notes"), /* @__PURE__ */ React.createElement("div", {
      className: "text-white"
    }, JSON.stringify(this.state.recording.events))));
  }
}
KeyboardConfig.propTypes = {
  name: PropTypes.any,
  instrument: PropTypes.any,
  handleChange: PropTypes.func,
  firstNote: PropTypes.any,
  lastNote: PropTypes.any,
  defaultValue: PropTypes.any
};
function KeyboardConfig(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, "Instrument: "), /* @__PURE__ */ React.createElement(InstrumentSelector, {
    name: "instrument",
    handleChange: props.handleChange,
    defaultValue: props.instrument
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "First Note: "), /* @__PURE__ */ React.createElement(NoteSelector, {
    name: "firstNote",
    handleChange: props.handleChange,
    defaultValue: props.firstNote
  }), /* @__PURE__ */ React.createElement("label", null, " Last Note: "), /* @__PURE__ */ React.createElement(NoteSelector, {
    name: "lastNote",
    handleChange: props.handleChange,
    defaultValue: props.lastNote
  }));
  function NoteSelector(props2) {
    return /* @__PURE__ */ React.createElement("select", {
      className: "text-black",
      name: props2.name,
      value: props2.value,
      defaultValue: props2.defaultValue,
      onChange: props2.handleChange
    }, /* @__PURE__ */ React.createElement(ConvertNumbersToKeys, null));
  }
  function InstrumentSelector(props2) {
    return /* @__PURE__ */ React.createElement("select", {
      className: "text-black",
      name: props2.name,
      value: props2.value,
      defaultValue: props2.defaultValue,
      onChange: props2.handleChange
    }, /* @__PURE__ */ React.createElement(GetInstruments, null));
  }
  function ConvertNumbersToKeys() {
    const noteRange = {
      first: 21,
      last: 108
    };
    const Notes = [];
    for (let i = noteRange.first; i < noteRange.last + 1; i++) {
      Notes.push(midiNumberToNote(i));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, Notes.map((x) => /* @__PURE__ */ React.createElement("option", {
      key: x
    }, x)));
  }
}
function GetInstruments() {
  const list = [];
  for (let i = 0; i < instruments.length; i++) {
    list.push(instruments[i]);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, list.map((x) => /* @__PURE__ */ React.createElement("option", {
    key: x
  }, x)));
}
const yerr = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1000px",
  maxHeight: "1000px",
  margin: "50px auto",
  color: "#FFFFFF",
  borderRadius: "100px",
  background: "#FFFFFF",
  height: "100% auto",
  boxShadow: "10px 2px 10px #090909, 2px 10px 10px #090909",
  width: "100% aut0",
  position: "relative"
};
const instruments = [
  "accordion",
  "acoustic_bass",
  "acoustic_grand_piano",
  "acoustic_guitar_nylon",
  "acoustic_guitar_steel",
  "agogo",
  "alto_sax",
  "applause",
  "bagpipe",
  "banjo",
  "baritone_sax",
  "bassoon",
  "bird_tweet",
  "blown_bottle",
  "brass_section",
  "breath_noise",
  "bright_acoustic_piano",
  "celesta",
  "cello",
  "choir_aahs",
  "church_organ",
  "clarinet",
  "clavinet",
  "contrabass",
  "distortion_guitar",
  "drawbar_organ",
  "dulcimer",
  "electric_bass_finger",
  "electric_bass_pick",
  "electric_grand_piano",
  "electric_guitar_clean",
  "electric_guitar_jazz",
  "electric_guitar_muted",
  "electric_piano_1",
  "electric_piano_2",
  "english_horn",
  "fiddle",
  "flute",
  "french_horn",
  "fretless_bass",
  "fx_1_rain",
  "fx_2_soundtrack",
  "fx_3_crystal",
  "fx_4_atmosphere",
  "fx_5_brightness",
  "fx_6_goblins",
  "fx_7_echoes",
  "fx_8_scifi",
  "glockenspiel",
  "guitar_fret_noise",
  "guitar_harmonics",
  "gunshot",
  "harmonica",
  "harpsichord",
  "helicopter",
  "honkytonk_piano",
  "kalimba",
  "koto",
  "lead_1_square",
  "lead_2_sawtooth",
  "lead_3_calliope",
  "lead_4_chiff",
  "lead_5_charang",
  "lead_6_voice",
  "lead_7_fifths",
  "lead_8_bass__lead",
  "marimba",
  "melodic_tom",
  "music_box",
  "muted_trumpet",
  "oboe",
  "ocarina",
  "orchestra_hit",
  "orchestral_harp",
  "overdriven_guitar",
  "pad_1_new_age",
  "pad_2_warm",
  "pad_3_polysynth",
  "pad_4_choir",
  "pad_5_bowed",
  "pad_6_metallic",
  "pad_7_halo",
  "pad_8_sweep",
  "pan_flute",
  "percussive_organ",
  "percussion",
  "piccolo",
  "pizzicato_strings",
  "recorder",
  "reed_organ",
  "reverse_cymbal",
  "rock_organ",
  "seashore",
  "shakuhachi",
  "shamisen",
  "shanai",
  "sitar",
  "slap_bass_1",
  "slap_bass_2",
  "soprano_sax",
  "steel_drums",
  "string_ensemble_1",
  "string_ensemble_2",
  "synth_bass_1",
  "synth_bass_2",
  "synth_brass_1",
  "synth_brass_2",
  "synth_choir",
  "synth_drum",
  "synth_strings_1",
  "synth_strings_2",
  "taiko_drum",
  "tango_accordion",
  "telephone_ring",
  "tenor_sax",
  "timpani",
  "tinkle_bell",
  "tremolo_strings",
  "trombone",
  "trumpet",
  "tuba",
  "tubular_bells",
  "vibraphone",
  "viola",
  "violin",
  "voice_oohs",
  "whistle",
  "woodblock",
  "xylophone"
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvcGlhbm8vY29tcG9uZW50L2tleWJvYXJkLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU0sZUFBZSxJQUFJLE9BQU87QUFDaEMsTUFBTSxvQkFBb0I7QUFFMUI7QUFFQSwyQ0FBMkMsTUFBTSxVQUFvQjtBQUFBLEVBQ25FLFlBQVksT0FBZ0I7QUFDMUIsVUFBTTtBQXdCUiwrQkFBc0IsTUFBTTtBQUMxQixVQUFJLEtBQUssTUFBTSxVQUFVLE9BQU8sV0FBVyxHQUFHO0FBQzVDLGVBQU87QUFBQTtBQUVULGFBQU8sS0FBSyxJQUNWLEdBQUcsS0FBSyxNQUFNLFVBQVUsT0FBTyxJQUM3QixDQUFDLFVBQXdDLE1BQU0sT0FBTyxNQUFNO0FBQUE7QUFLbEUsd0JBQWUsQ0FBQyxVQUtWO0FBQ0osV0FBSyxTQUFTO0FBQUEsUUFDWixXQUFXLE9BQU8sT0FBTyxJQUFJLEtBQUssTUFBTSxXQUFXO0FBQUE7QUFBQTtBQUl2RCx1QkFBYyxNQUFNO0FBQ2xCLFdBQUssYUFBYTtBQUFBLFFBQ2hCLE1BQU07QUFBQTtBQUVSLFlBQU0sbUJBQW1CLEVBQUUsS0FDekIsRUFBRSxRQUNBLEtBQUssTUFBTSxVQUFVLFFBQ3JCLENBQUMsVUFBd0M7QUFBQSxRQUN2QyxNQUFNO0FBQUEsUUFDTixNQUFNLE9BQU8sTUFBTTtBQUFBO0FBSXpCLHVCQUFpQixRQUFRLENBQUMsU0FBaUI7QUFDekMsYUFBSyxNQUFNLFVBQVUsZ0JBQWdCLEtBQ25DLFdBQVcsTUFBTTtBQUNmLGdCQUFNLGdCQUFnQixLQUFLLE1BQU0sVUFBVSxPQUFPLE9BQ2hELENBQUMsVUFBMkM7QUFDMUMsbUJBQU8sTUFBTSxRQUFRLFFBQVEsTUFBTSxPQUFPLE1BQU0sV0FBVztBQUFBO0FBRy9ELGVBQUssYUFBYTtBQUFBLFlBQ2hCO0FB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QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
