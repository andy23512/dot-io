import {useState} from "../../../../snowpack/pkg/react.js";
import {useStoreActions} from "../../../store/store.js";
const [bestKeyTime, setBestKeyTime] = useState([]);
const [letterPressed, setLetterPressed] = useState([]);
const [keyDownTime, setKeyDownTime] = useState(performance.now());
const [currentWord, setCurrentWord] = useState(void 0);
const setChordingEnabled = useStoreActions((store) => store.setIsUsingChordingEnabledDevice);
export const ChordingEnabledAlgorithm = (chordValue) => {
  window.performance = window.performance || {};
  performance.now = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || Date.now * 1;
  const body = document.getElementById("chordsInput");
  let isKeyDown = false;
  if (sessionStorage.getItem("chordingEnabledDevice") == void 0 || sessionStorage.getItem("chordingEnabledDevice") == "false") {
    if (currentWord != chordValue && currentWord != void 0) {
      let numberOfBestTimesUnderTen = 0;
      if (letterPressed.includes("Backspace") && bestKeyTime.length > 2) {
        for (let i = 0; i < bestKeyTime.length - 1; i++) {
          if (bestKeyTime[i] < 10) {
            numberOfBestTimesUnderTen++;
          }
        }
      }
      if (numberOfBestTimesUnderTen >= 2) {
        setChordingEnabled(true);
      }
      setBestKeyTime([]);
      setLetterPressed([]);
    }
    currentWord != chordValue ? setCurrentWord(chordValue) : "";
    body.onkeydown = function(e) {
      if (!e.metaKey) {
        e.stopPropagation();
      }
      if (!isKeyDown) {
        isKeyDown = true;
        console.log(keyDownTime);
        setKeyDownTime(performance.now());
      }
      console.log(keyDownTime);
    };
    body.onkeyup = function(e) {
      if (!e.metaKey) {
        e.stopPropagation();
      }
      isKeyDown = false;
      const upTime = performance.now();
      const heldTime = Math.ceil(upTime - keyDownTime);
      console.log(keyDownTime);
      console.log(keyDownTime);
      console.log("Held time " + heldTime);
      console.log("Uptime " + upTime);
      const tempBestTime = Math.min(1e4, heldTime);
      bestKeyTime.push(tempBestTime);
      letterPressed.push(e.key);
      console.log("Just e " + e.type);
      console.log("Just e 2 " + e.key);
      setBestKeyTime((bestKeyTime2) => [...bestKeyTime2]);
      setLetterPressed((letterPressed2) => [...letterPressed2]);
      console.log("This is the Best Time " + bestKeyTime);
      console.log("This is the associated letter pressed " + letterPressed);
    };
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0Nob3JkaW5nRW5hYmxlZEFsZ29yaXRobS50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUEsTUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVM7QUFDL0MsTUFBTSxDQUFDLGVBQWUsb0JBQW9CLFNBQVM7QUFDbkQsTUFBTSxDQUFDLGFBQWEsa0JBQWtCLFNBQVMsWUFBWTtBQUMzRCxNQUFNLENBQUMsYUFBYSxrQkFBa0IsU0FBUztBQUUvQyxNQUFNLHFCQUFxQixnQkFDekIsQ0FBQyxVQUFlLE1BQU07QUFHakIsYUFBTSwyQkFBMkIsQ0FBQyxlQUFlO0FBQ3RELFNBQU8sY0FBYyxPQUFPLGVBQWU7QUFDM0MsY0FBWSxNQUNWLFlBQVksT0FDWixZQUFZLFVBQ1osWUFBWSxTQUNaLFlBQVksUUFDWixZQUFZLGFBQ1osS0FBSyxNQUFNO0FBRWIsUUFBTSxPQUFPLFNBQVMsZUFBZTtBQUNyQyxNQUFJLFlBQVk7QUFDaEIsTUFDRSxlQUFlLFFBQVEsNEJBQTRCLFVBQ25ELGVBQWUsUUFBUSw0QkFBNEIsU0FDbkQ7QUFDQSxRQUFJLGVBQWUsY0FBYyxlQUFlLFFBQVc7QUFDekQsVUFBSSw0QkFBNEI7QUFDaEMsVUFBSSxjQUFjLFNBQVMsZ0JBQWdCLFlBQVksU0FBUyxHQUFHO0FBQ2pFLGlCQUFTLElBQUksR0FBRyxJQUFJLFlBQVksU0FBUyxHQUFHLEtBQUs7QUFDL0MsY0FBSSxZQUFZLEtBQUssSUFBSTtBQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUlOLFVBQUksNkJBQTZCLEdBQUc7QUFDbEMsMkJBQW1CO0FBQUE7QUFFckIscUJBQWU7QUFDZix1QkFBaUI7QUFBQTtBQUduQixtQkFBZSxhQUFhLGVBQWUsY0FBYztBQUV6RCxTQUFLLFlBQVksU0FBVSxHQUFHO0FBQzVCLFVBQUksQ0FBQyxFQUFFLFNBQVM7QUFDZCxVQUFFO0FBQUE7QUFHSixVQUFJLENBQUMsV0FBVztBQUNkLG9CQUFZO0FBQ1osZ0JBQVEsSUFBSTtBQUNaLHVCQUFlLFlBQVk7QUFBQTtBQUU3QixjQUFRLElBQUk7QUFBQTtBQUdkLFNBQUssVUFBVSxTQUFVLEdBQUc7QUFDMUIsVUFBSSxDQUFDLEVBQUUsU0FBUztBQUNkLFVBQUU7QUFBQTtBQUVKLGtCQUFZO0FBQ1osWUFBTSxTQUFTLFlBQVk7QUFDM0IsWUFBTSxXQUFXLEtBQUssS0FBSyxTQUFTO0FBQ3BDLGNBQVEsSUFBSTtBQUNaLGNBQVEsSUFBSTtBQUNaLGNBQVEsSUFBSSxlQUFlO0FBQzNCLGNBQVEsSUFBSSxZQUFZO0FBQ3hCLFlBQU0sZUFBZSxLQUFLLElBQUksS0FBTztBQUNyQyxrQkFBWSxLQUFLO0FBQ2pCLG9CQUFjLEtBQUssRUFBRTtBQUdyQixjQUFRLElBQUksWUFBWSxFQUFFO0FBQzFCLGNBQVEsSUFBSSxjQUFjLEVBQUU7QUFFNUIscUJBQWUsQ0FBQyxpQkFBZ0IsQ0FBQyxHQUFHO0FBQ3BDLHVCQUFpQixDQUFDLG1CQUFrQixDQUFDLEdBQUc7QUFDeEMsY0FBUSxJQUFJLDJCQUEyQjtBQUN2QyxjQUFRLElBQUksMkNBQTJDO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
