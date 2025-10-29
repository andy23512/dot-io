import React, {useState} from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import usePopover from "../../../hooks/usePopover.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
export function ContrastInputSetting(props) {
  const [value, setValue] = useState(props.trainingSettings.contrastPercentage);
  const onBlur = (e) => {
    const value2 = parseInt(e.target.value);
    const isValid = !isNaN(value2) && value2 >= 50 && value2 <= 100;
    if (isValid) {
      props.setTrainingSettings({
        ...props.trainingSettings,
        contrastPercentage: value2
      });
    } else {
      setValue(props.trainingSettings.contrastPercentage);
    }
  };
  const {parentProps, Popper} = usePopover("Adjust the contrast of the colors on the page. Can be between 50-100%.");
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Label, {
    ...parentProps
  }, "Contrast", /* @__PURE__ */ React.createElement(HelpCircleIcon, null), Popper), /* @__PURE__ */ React.createElement(ContrastInput, {
    onBlur,
    onChange: (e) => setValue(e.target.value),
    value,
    type: "text",
    pattern: "[0-9]*"
  }));
}
const Label = styled.label.attrs({
  className: `text-sm font-bold mb-2 inline-flex flex-row gap-2 items-center`
})``;
const ContrastInput = styled.input.attrs({
  className: `mr-2 leading-tight text-black shadow rounded h-8 w-full border-[1px] pl-2 border-solid border-gray-100`
})``;
const Container = styled.div.attrs({
  className: `w-full mt-4`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9Db250cmFzdElucHV0U2V0dGluZy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLHFDQUE4QixPQUFvQztBQUN2RSxRQUFNLENBQUMsT0FBTyxZQUFZLFNBQ3hCLE1BQU0saUJBQWlCO0FBR3pCLFFBQU0sU0FBUyxDQUFDLE1BQWdEO0FBQzlELFVBQU0sU0FBUSxTQUFTLEVBQUUsT0FBTztBQUNoQyxVQUFNLFVBQVUsQ0FBQyxNQUFNLFdBQVUsVUFBUyxNQUFNLFVBQVM7QUFFekQsUUFBSSxTQUFTO0FBQ1gsWUFBTSxvQkFBb0I7QUFBQSxXQUNyQixNQUFNO0FBQUEsUUFDVCxvQkFBb0I7QUFBQTtBQUFBLFdBRWpCO0FBQ0wsZUFBUyxNQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFJcEMsUUFBTSxDQUFFLGFBQWEsVUFBVyxXQUM5QjtBQUdGLFNBQ0Usb0NBQUMsV0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxPQUFXO0FBQUEsS0FBYSxZQUV0QixvQ0FBQyxnQkFBRCxPQUNDLFNBR0gsb0NBQUMsZUFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPO0FBQUEsSUFDbkM7QUFBQSxJQUNBLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQTtBQUFBO0FBTWhCLE1BQU0sUUFBUSxPQUFPLE1BQU0sTUFBTTtBQUFBLEVBQy9CLFdBQVc7QUFBQTtBQUdiLE1BQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUFNO0FBQUEsRUFDdkMsV0FBVztBQUFBO0FBR2IsTUFBTSxZQUFZLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDakMsV0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
