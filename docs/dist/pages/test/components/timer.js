import React, {useState, useEffect} from "../../../../snowpack/pkg/react.js";
import {useStoreState, useStoreActions} from "../../../../snowpack/pkg/easy-peasy.js";
function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startAndStop = () => {
    setIsRunning(!startTimer);
  };
  const allTypedText = useStoreState((store) => store.allTypedCharactersStore);
  const startTimer = useStoreState((store) => store.startTimer);
  const trainingIsDone = useStoreState((store) => store.trainingIsDone);
  const textPromptUnFocused = useStoreState((store) => store.textPromptUnFocused);
  const setTimerValue = useStoreActions((store) => store.setTimerValue);
  const currentLineOfTrainingText = useStoreState((store) => store.currentLineOfTrainingText);
  const currentSubindexInTrainingText = useStoreState((store) => store.currentSubindexInTrainingText);
  const userIsTypingFirstChord = currentLineOfTrainingText === 0 && currentSubindexInTrainingText === 1;
  if (startTimer == true && allTypedText.length > 0) {
    () => setIsRunning(true);
  }
  useEffect(() => {
    let intervalId;
    if (startTimer && allTypedText.length >= 1) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    } else if (allTypedText.length == 0) {
      setTime(0);
    } else if (!startTimer && textPromptUnFocused && !userIsTypingFirstChord) {
      setTime(time);
    }
    return () => clearInterval(intervalId);
  }, [startTimer, time, allTypedText, userIsTypingFirstChord]);
  const hours = Math.floor(time / 36e4);
  const minutes = Math.floor(time % 36e4 / 6e3);
  const seconds = Math.floor(time % 6e3 / 100);
  const milliseconds = time % 100;
  setTimerValue(hours + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0"));
  return /* @__PURE__ */ React.createElement("div", {
    className: "rotate-180 text-l text-neutral-400 font-medium"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "stopwatch-time"
  }, hours, ":", minutes.toString().padStart(2, "0"), ":", seconds.toString().padStart(2, "0")), /* @__PURE__ */ React.createElement("div", {
    className: "stopwatch-buttons"
  }));
}
export default Timer;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL3RpbWVyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFFQSxpQkFBaUI7QUFFZixRQUFNLENBQUMsTUFBTSxXQUFXLFNBQVM7QUFDakMsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLFNBQVM7QUFHM0MsUUFBTSxlQUFlLE1BQU07QUFDekIsaUJBQWEsQ0FBQztBQUFBO0FBR2hCLFFBQU0sZUFBZSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3BELFFBQU0sYUFBYSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ2xELFFBQU0saUJBQWlCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFDdEQsUUFBTSxzQkFBc0IsY0FDMUIsQ0FBQyxVQUFVLE1BQU07QUFFbkIsUUFBTSxnQkFBZ0IsZ0JBQWdCLENBQUMsVUFBVSxNQUFNO0FBQ3ZELFFBQU0sNEJBQTRCLGNBQ2hDLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sZ0NBQWdDLGNBQ3BDLENBQUMsVUFBVSxNQUFNO0FBR25CLFFBQU0seUJBQ0osOEJBQThCLEtBQUssa0NBQWtDO0FBRXZFLE1BQUksY0FBYyxRQUFRLGFBQWEsU0FBUyxHQUFHO0FBQ2pELFVBQU0sYUFBYTtBQUFBO0FBR3JCLFlBQVUsTUFBTTtBQUNkLFFBQUk7QUFFSixRQUFJLGNBQWMsYUFBYSxVQUFVLEdBQUc7QUFHMUMsbUJBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxJQUFJO0FBQUEsZUFDekMsYUFBYSxVQUFVLEdBQUc7QUFDbkMsY0FBUTtBQUFBLGVBQ0MsQ0FBQyxjQUFjLHVCQUF1QixDQUFDLHdCQUF3QjtBQUN4RSxjQUFRO0FBQUE7QUFHVixXQUFPLE1BQU0sY0FBYztBQUFBLEtBQzFCLENBQUMsWUFBWSxNQUFNLGNBQWM7QUFHcEMsUUFBTSxRQUFRLEtBQUssTUFBTSxPQUFPO0FBR2hDLFFBQU0sVUFBVSxLQUFLLE1BQU8sT0FBTyxPQUFVO0FBRzdDLFFBQU0sVUFBVSxLQUFLLE1BQU8sT0FBTyxNQUFRO0FBRzNDLFFBQU0sZUFBZSxPQUFPO0FBSTVCLGdCQUNFLFFBQ0UsTUFDQSxRQUFRLFdBQVcsU0FBUyxHQUFHLE9BQy9CLE1BQ0EsUUFBUSxXQUFXLFNBQVMsR0FBRztBQUduQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLE9BQU0sS0FBRSxRQUFRLFdBQVcsU0FBUyxHQUFHLE1BQUssS0FDNUMsUUFBUSxXQUFXLFNBQVMsR0FBRyxPQUVsQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUE7QUFBQTtBQUtyQixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
