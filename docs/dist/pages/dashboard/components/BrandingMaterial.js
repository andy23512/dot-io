import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import CLLogoImage from "../../../assets/cl.png";
export function BrandingMaterial() {
  return /* @__PURE__ */ React.createElement(BrandingContainer, null, /* @__PURE__ */ React.createElement(Link, {
    href: "https://codelaunch.com/"
  }, /* @__PURE__ */ React.createElement(CLLogo, {
    src: CLLogoImage,
    alt: "CA Logo"
  })));
}
const Link = styled.a.attrs({
  className: "opacity-50 hover:opacity-75 active:opacity-100",
  target: "_blank",
  rel: "noopener noreferrer"
})``;
const CLLogo = styled.img.attrs({
  className: `w-64 h-full cursor-pointer`
})``;
const BrandingContainer = styled.div.attrs({
  className: `flex flex-col gap-y-8 lg:flex-row justify-around w-full items-center py-12 px-8 bg-[#222424]`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvQnJhbmRpbmdNYXRlcmlhbC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBRUE7QUFFTyxtQ0FBMEM7QUFDL0MsU0FDRSxvQ0FBQyxtQkFBRCxNQWdCRSxvQ0FBQyxNQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFEO0FBQUEsSUFBUSxLQUFLO0FBQUEsSUFBYSxLQUFJO0FBQUE7QUFBQTtBQU10QyxNQUFNLE9BQU8sT0FBTyxFQUFFLE1BQU07QUFBQSxFQUMxQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUE7QUFlUCxNQUFNLFNBQVMsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUM5QixXQUFXO0FBQUE7QUFHYixNQUFNLG9CQUFvQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ3pDLFdBQVc7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
