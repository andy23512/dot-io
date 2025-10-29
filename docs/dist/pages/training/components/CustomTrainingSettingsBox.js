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
    console.log("SPeed oal int he recur " + trainingSettings.speedGoal);
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
  className: `block text-sm font-bold mb-2 inline-flex flex-row items-center gap-2`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9DdXN0b21UcmFpbmluZ1NldHRpbmdzQm94LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQSxNQUFNLGdCQUFnQjtBQUFBLEVBQ3BCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUdKLDBDQUFtQyxPQUFtQztBQUMzRSxRQUFNLG1CQUFtQixjQUFjLENBQUMsVUFBVSxNQUFNO0FBRXhELFFBQU0sOEJBQ0osaUJBQWlCLGlCQUFpQjtBQUVwQyxRQUFNLG9CQUFvQixDQUFDLGNBQ3pCLENBQUMsVUFBVSxNQUFNLGlCQUFpQjtBQUdwQyxRQUFNLENBQUMsY0FBYyxtQkFBbUIsU0FDdEMsTUFBTSxpQkFBaUI7QUFFekIsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLFNBQ2hDLE1BQU0saUJBQWlCO0FBRXpCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsU0FDdEIsTUFBTSxpQkFBaUI7QUFHekIsUUFBTSxVQUFVLE1BQU07QUFDcEIsb0JBQWdCLGlCQUFpQjtBQUNqQyxZQUFRLElBQUksNEJBQTRCLGlCQUFpQjtBQUN6RCxpQkFBYSxpQkFBaUI7QUFDOUIsWUFBUSxpQkFBaUI7QUFBQSxLQUN4QixDQUFDO0FBRUosUUFBTSxDQUFFLGFBQWEsbUJBQW1CLFFBQVEsc0JBQzlDLFdBQ0U7QUFHSixRQUFNLENBQUUsYUFBYSxnQkFBZ0IsUUFBUSxvQkFBcUIsV0FDaEU7QUFHRixRQUFNLENBQUUsYUFBYSxvQkFBb0IsUUFBUSx3QkFDL0MsV0FDRTtBQUdKLFFBQU0sQ0FBRSxhQUFhLHNCQUFzQixRQUFRLDBCQUNqRCxXQUNFO0FBR0osUUFBTSxDQUFFLGFBQWEsaUJBQWlCLFFBQVEscUJBQzVDLFdBQVc7QUFFYixTQUNFLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLE9B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
