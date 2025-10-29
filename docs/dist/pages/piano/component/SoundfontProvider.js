import React from "../../../../snowpack/pkg/react.js";
import PropTypes from "../../../../snowpack/pkg/prop-types.js";
import Soundfont from "../../../../snowpack/pkg/soundfont-player.js";
class SoundfontProvider extends React.Component {
  constructor(props) {
    super(props);
    this.loadInstrument = (instrumentName) => {
      this.setState({
        instrument: null
      });
      Soundfont.instrument(this.props.audioContext, instrumentName, {
        format: this.props.format,
        soundfont: this.props.soundfont,
        nameToUrl: (name, soundfont, format) => {
          return `${this.props.hostname}/${soundfont}/${name}-${format}.js`;
        }
      }).then((instrument) => {
        this.setState({
          instrument
        });
      });
    };
    this.playNote = (midiNumber) => {
      this.props.audioContext.resume().then(() => {
        const audioNode = this.state.instrument.play(midiNumber);
        this.setState({
          activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
            [midiNumber]: audioNode
          })
        });
      });
    };
    this.stopNote = (midiNumber) => {
      this.props.audioContext.resume().then(() => {
        if (!this.state.activeAudioNodes[midiNumber]) {
          return;
        }
        const audioNode = this.state.activeAudioNodes[midiNumber];
        audioNode.stop();
        this.setState({
          activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
            [midiNumber]: null
          })
        });
      });
    };
    this.stopAllNotes = () => {
      this.props.audioContext.resume().then(() => {
        const activeAudioNodes = Object.values(this.state.activeAudioNodes);
        activeAudioNodes.forEach((node) => {
          if (node) {
            node.stop();
          }
        });
        this.setState({
          activeAudioNodes: {}
        });
      });
    };
    this.state = {
      activeAudioNodes: {},
      instrument: null
    };
  }
  componentDidMount() {
    this.loadInstrument(this.props.instrumentName);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.instrumentName !== this.props.instrumentName) {
      this.loadInstrument(this.props.instrumentName);
    }
  }
  render() {
    return this.props.render({
      isLoading: !this.state.instrument,
      playNote: this.playNote,
      stopNote: this.stopNote,
      stopAllNotes: this.stopAllNotes
    });
  }
}
SoundfontProvider.propTypes = {
  instrumentName: PropTypes.string.isRequired,
  hostname: PropTypes.string.isRequired,
  format: PropTypes.oneOf(["mp3", "ogg"]),
  soundfont: PropTypes.oneOf(["MusyngKite", "FluidR3_GM"]),
  audioContext: PropTypes.instanceOf(window.AudioContext),
  render: PropTypes.func
};
SoundfontProvider.defaultProps = {
  format: "mp3",
  soundfont: "MusyngKite",
  instrumentName: "acoustic_grand_piano"
};
export default SoundfontProvider;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvcGlhbm8vY29tcG9uZW50L1NvdW5kZm9udFByb3ZpZGVyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFDQTtBQUVBLGdDQUFnQyxNQUFNLFVBQW9CO0FBQUEsRUFnQnhELFlBQVksT0FBWTtBQUN0QixVQUFNO0FBaUJSLDBCQUFpQixDQUFDLG1CQUF3QjtBQUV4QyxXQUFLLFNBQVM7QUFBQSxRQUNaLFlBQVk7QUFBQTtBQUVkLGdCQUFVLFdBQVcsS0FBSyxNQUFNLGNBQWMsZ0JBQWdCO0FBQUEsUUFDNUQsUUFBUSxLQUFLLE1BQU07QUFBQSxRQUNuQixXQUFXLEtBQUssTUFBTTtBQUFBLFFBQ3RCLFdBQVcsQ0FBQyxNQUFXLFdBQWdCLFdBQWdCO0FBQ3JELGlCQUFPLEdBQUcsS0FBSyxNQUFNLFlBQVksYUFBYSxRQUFRO0FBQUE7QUFBQSxTQUV2RCxLQUFLLENBQUMsZUFBZTtBQUN0QixhQUFLLFNBQVM7QUFBQSxVQUNaO0FBQUE7QUFBQTtBQUFBO0FBS04sb0JBQVcsQ0FBQyxlQUFvQjtBQUM5QixXQUFLLE1BQU0sYUFBYSxTQUFTLEtBQUssTUFBTTtBQUMxQyxjQUFNLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSztBQUM3QyxhQUFLLFNBQVM7QUFBQSxVQUNaLGtCQUFrQixPQUFPLE9BQU8sSUFBSSxLQUFLLE1BQU0sa0JBQWtCO0FBQUEsYUFDOUQsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXRCLG9CQUFXLENBQUMsZUFBZ0M7QUFDMUMsV0FBSyxNQUFNLGFBQWEsU0FBUyxLQUFLLE1BQU07QUFDMUMsWUFBSSxDQUFDLEtBQUssTUFBTSxpQkFBaUIsYUFBYTtBQUM1QztBQUFBO0FBRUYsY0FBTSxZQUFZLEtBQUssTUFBTSxpQkFBaUI7QUFDOUMsa0JBQVU7QUFDVixhQUFLLFNBQVM7QUFBQSxVQUNaLGtCQUFrQixPQUFPLE9BQU8sSUFBSSxLQUFLLE1BQU0sa0JBQWtCO0FBQUEsYUFDOUQsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3RCLHdCQUFlLE1BQU07QUFDbkIsV0FBSyxNQUFNLGFBQWEsU0FBUyxLQUFLLE1BQU07QUFDMUMsY0FBTSxtQkFBbUIsT0FBTyxPQUFPLEtBQUssTUFBTTtBQUNsRCx5QkFBaUIsUUFBUSxDQUFDLFNBQWM7QUFDdEMsY0FBSSxNQUFNO0FBQ1IsaUJBQUs7QUFBQTtBQUFBO0FBR1QsYUFBSyxTQUFTO0FBQUEsVUFDWixrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUF0RXRCLFNBQUssUUFBUTtBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsTUFDbEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxFQUloQixvQkFBb0I7QUFDbEIsU0FBSyxlQUFlLEtBQUssTUFBTTtBQUFBO0FBQUEsRUFHakMsbUJBQW1CLFdBQW9DLFdBQWdCO0FBQ3JFLFFBQUksVUFBVSxtQkFBbUIsS0FBSyxNQUFNLGdCQUFnQjtBQUMxRCxXQUFLLGVBQWUsS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBLEVBK0RuQyxTQUFTO0FBQ1AsV0FBTyxLQUFLLE1BQU0sT0FBTztBQUFBLE1BQ3ZCLFdBQVcsQ0FBQyxLQUFLLE1BQU07QUFBQSxNQUN2QixVQUFVLEtBQUs7QUFBQSxNQUNmLFVBQVUsS0FBSztBQUFBLE1BQ2YsY0FBYyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBakdoQixBQURULGtCQUNTLFlBQVk7QUFBQSxFQUNqQixnQkFBZ0IsVUFBVSxPQUFPO0FBQUEsRUFDakMsVUFBVSxVQUFVLE9BQU87QUFBQSxFQUMzQixRQUFRLFVBQVUsTUFBTSxDQUFDLE9BQU87QUFBQSxFQUNoQyxXQUFXLFVBQVUsTUFBTSxDQUFDLGNBQWM7QUFBQSxFQUMxQyxjQUFjLFVBQVUsV0FBVyxPQUFPO0FBQUEsRUFDMUMsUUFBUSxVQUFVO0FBQUE7QUFHYixBQVZULGtCQVVTLGVBQWU7QUFBQSxFQUNwQixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFBQTtBQTBGcEIsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
