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
  className: `relative text-sm font-bold mb-2 inline-flex flex-row gap-2 items-center`
})``;
const ContrastInput = styled.input.attrs({
  className: `mr-2 leading-tight text-black shadow rounded h-8 w-full border-[1px] pl-2 border-solid border-gray-100`
})``;
const Container = styled.div.attrs({
  className: `w-full mt-4`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NvbnRyYXN0SW5wdXRTZXR0aW5nLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRU8scUNBQThCLE9BQW9DO0FBQ3ZFLFFBQU0sQ0FBQyxPQUFPLFlBQVksU0FDeEIsTUFBTSxpQkFBaUI7QUFHekIsUUFBTSxTQUFTLENBQUMsTUFBZ0Q7QUFDOUQsVUFBTSxTQUFRLFNBQVMsRUFBRSxPQUFPO0FBQ2hDLFVBQU0sVUFBVSxDQUFDLE1BQU0sV0FBVSxVQUFTLE1BQU0sVUFBUztBQUV6RCxRQUFJLFNBQVM7QUFDWCxZQUFNLG9CQUFvQjtBQUFBLFdBQ3JCLE1BQU07QUFBQSxRQUNULG9CQUFvQjtBQUFBO0FBQUEsV0FFakI7QUFDTCxlQUFTLE1BQU0saUJBQWlCO0FBQUE7QUFBQTtBQUlwQyxRQUFNLENBQUUsYUFBYSxVQUFXLFdBQzlCO0FBR0YsU0FDRSxvQ0FBQyxXQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLE9BQVc7QUFBQSxLQUFhLFlBRXRCLG9DQUFDLGdCQUFELE9BQ0MsU0FHSCxvQ0FBQyxlQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU87QUFBQSxJQUNuQztBQUFBLElBQ0EsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBO0FBQUE7QUFNaEIsTUFBTSxRQUFRLE9BQU8sTUFBTSxNQUFNO0FBQUEsRUFDL0IsV0FBVztBQUFBO0FBR2IsTUFBTSxnQkFBZ0IsT0FBTyxNQUFNLE1BQU07QUFBQSxFQUN2QyxXQUFXO0FBQUE7QUFHYixNQUFNLFlBQVksT0FBTyxJQUFJLE1BQU07QUFBQSxFQUNqQyxXQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
