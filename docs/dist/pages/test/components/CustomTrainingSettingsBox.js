import React, {useState} from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import usePopover from "../../../hooks/usePopover.js";
import {useStoreState} from "../../../store/store.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
const DEFAULT_PROPS = {
  type: "text",
  pattern: "[0-9]*"
};
export function CustomTrainingSettingsBox(props) {
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const shouldDisplayCustomSettings = trainingSettings.autoOrCustom === "CUSTOM";
  const recursionDisabled = !useStoreState((store) => store.trainingSettings.isUsingRecursion);
  const [targetChords, setTargetChords] = useState(props.trainingSettings.targetChords);
  const [speedGoal, setSpeedGoal] = useState(props.trainingSettings.speedGoal);
  const [rate, setRate] = useState(props.trainingSettings.recursionRate);
  React.useEffect(() => {
    setTargetChords(trainingSettings.targetChords);
    setSpeedGoal(trainingSettings.speedGoal);
    setRate(trainingSettings.recursionRate);
  }, [trainingSettings]);
  const {parentProps: targetChordsProps, Popper: TargetChordPopover} = usePopover("How many chords do you want to target to get better at through practice?");
  const {parentProps: speedGoalProps, Popper: SpeedGoalPopover} = usePopover("How fast do you want to type each chord? This is measured in hundredths of a second, so a speed goal of 100 would equate to 1 second.");
  const {parentProps: recursionRateProps, Popper: RecursionRatePopover} = usePopover("How often do you want to be prompted for chords you are slow at? 0% means never, while 100% means only prompt me for slow chords.");
  const {parentProps: recursionHelperProps, Popper: RecursionHelperPopover} = usePopover('Target chords is not used unless "Practice Slow Chords" is enabled.');
  const {parentProps: rateHelperProps, Popper: RateHelperPopover} = usePopover('Rate % is not used unless "Practice Slow Chords" is enabled.');
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Label, {
    ...targetChordsProps
  }, "Target Chords", /* @__PURE__ */ React.createElement(HelpCircleIcon, null), TargetChordPopover, recursionDisabled && RecursionHelperPopover), /* @__PURE__ */ React.createElement(Input, {
    onBlur: (e) => {
      const isValid = isInt(e) && (isPositive(e) || isZero(e));
      if (isValid) {
        props.setTrainingSettings({
          ...props.trainingSettings,
          targetChords: parseInt(e.target.value)
        });
      } else {
        setTargetChords(props.trainingSettings.targetChords);
      }
    },
    disabled: recursionDisabled || !shouldDisplayCustomSettings,
    onChange: (e) => setTargetChords(e.target.value),
    value: targetChords,
    ...recursionHelperProps,
    ...DEFAULT_PROPS
  })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Label, {
    ...speedGoalProps
  }, "Speed Goal", /* @__PURE__ */ React.createElement(HelpCircleIcon, null), SpeedGoalPopover), /* @__PURE__ */ React.createElement(Input, {
    onBlur: (e) => {
      const isValid = isInt(e) && isPositive(e);
      if (isValid) {
        props.setTrainingSettings({
          ...props.trainingSettings,
          speedGoal: parseInt(e.target.value)
        });
      } else {
        setSpeedGoal(props.trainingSettings.speedGoal);
      }
    },
    onChange: (e) => setSpeedGoal(e.target.value),
    disabled: !shouldDisplayCustomSettings,
    value: speedGoal,
    ...DEFAULT_PROPS
  })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Label, {
    ...recursionRateProps
  }, "Rate (%)", /* @__PURE__ */ React.createElement(HelpCircleIcon, null), RecursionRatePopover, recursionDisabled && RateHelperPopover), /* @__PURE__ */ React.createElement(Input, {
    onBlur: (e) => {
      const isValid = (isPositive(e) || isZero(e)) && isLessThanOrEqualTo100(e);
      if (isValid) {
        props.setTrainingSettings({
          ...props.trainingSettings,
          recursionRate: parseInt(e.target.value)
        });
      } else {
        setRate(props.trainingSettings.recursionRate);
      }
    },
    onChange: (e) => setRate(e.target.value),
    value: rate,
    disabled: recursionDisabled || !shouldDisplayCustomSettings,
    ...rateHelperProps,
    ...DEFAULT_PROPS
  })));
}
const Label = styled.label.attrs({
  className: `relative block text-sm font-bold mb-2 inline-flex flex-row items-center gap-2`
})``;
const Input = styled.input.attrs({
  className: `mr-2 leading-tight text-black shadow rounded h-8 w-full border-[1px] pl-2 border-solid border-gray-100 disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500`
})``;
const Row = styled.div.attrs({
  className: `w-full mt-4`
})``;
const Container = styled.div.attrs({
  className: ``
})``;
function isLessThanOrEqualTo100(e) {
  return parseFloat(e.target.value) <= 100;
}
function isPositive(e) {
  return parseFloat(e.target.value) > 0;
}
function isZero(e) {
  return parseFloat(e.target.value) == 0;
}
function isInt(e) {
  return !isNaN(parseInt(e.target.value)) && parseFloat(e.target.value) % 1 === 0;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0N1c3RvbVRyYWluaW5nU2V0dGluZ3NCb3gudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLE1BQU0sZ0JBQWdCO0FBQUEsRUFDcEIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBO0FBR0osMENBQW1DLE9BQW1DO0FBQzNFLFFBQU0sbUJBQW1CLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFeEQsUUFBTSw4QkFDSixpQkFBaUIsaUJBQWlCO0FBRXBDLFFBQU0sb0JBQW9CLENBQUMsY0FDekIsQ0FBQyxVQUFVLE1BQU0saUJBQWlCO0FBR3BDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixTQUN0QyxNQUFNLGlCQUFpQjtBQUV6QixRQUFNLENBQUMsV0FBVyxnQkFBZ0IsU0FDaEMsTUFBTSxpQkFBaUI7QUFFekIsUUFBTSxDQUFDLE1BQU0sV0FBVyxTQUN0QixNQUFNLGlCQUFpQjtBQUd6QixRQUFNLFVBQVUsTUFBTTtBQUNwQixvQkFBZ0IsaUJBQWlCO0FBQ2pDLGlCQUFhLGlCQUFpQjtBQUM5QixZQUFRLGlCQUFpQjtBQUFBLEtBQ3hCLENBQUM7QUFFSixRQUFNLENBQUUsYUFBYSxtQkFBbUIsUUFBUSxzQkFDOUMsV0FDRTtBQUdKLFFBQU0sQ0FBRSxhQUFhLGdCQUFnQixRQUFRLG9CQUFxQixXQUNoRTtBQUdGLFFBQU0sQ0FBRSxhQUFhLG9CQUFvQixRQUFRLHdCQUMvQyxXQUNFO0FBR0osUUFBTSxDQUFFLGFBQWEsc0JBQXNCLFFBQVEsMEJBQ2pELFdBQ0U7QUFHSixRQUFNLENBQUUsYUFBYSxpQkFBaUIsUUFBUSxxQkFDNUMsV0FBVztBQUViLFNBQ0Usb0NBQUMsV0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsT0FBVztBQUFBLEtBQW1CLGlCQUU1QixvQ0FBQyxnQkFBRCxP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
