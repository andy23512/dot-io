import React from "../../../../snowpack/pkg/react.js";
import usePopover from "../../../hooks/usePopover.js";
import HelpCircleIcon from "./HelpCircleIcon.js";
export function CheckboxSetting({
  title,
  onChange,
  checked,
  helpText
}) {
  const {parentProps, Popper} = usePopover(helpText || "");
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute"
  }, Popper), /* @__PURE__ */ React.createElement("label", {
    className: "inline-flex text-sm font-bold mb-1 flex-row gap-1 items-center",
    ...parentProps
  }, title, /* @__PURE__ */ React.createElement(HelpCircleIcon, null)), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    className: "form-checkbox",
    checked,
    onChange
  }), /* @__PURE__ */ React.createElement("span", {
    onClick: onChange,
    className: "ml-2 select-none"
  }, "Enabled")));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL0NoZWNrYm94U2V0dGluZy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFTTyxnQ0FBeUI7QUFBQSxFQUM5QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQzhCO0FBQzlCLFFBQU0sQ0FBRSxhQUFhLFVBQVcsV0FBVyxZQUFZO0FBRXZELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQVksU0FDM0Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLE9BQ047QUFBQSxLQUVILE9BRUQsb0NBQUMsZ0JBQUQsUUFFRixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUVGLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVM7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUFtQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
