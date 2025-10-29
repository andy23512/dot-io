import styled from "../../../../snowpack/pkg/styled-components.js";
export const TerminalItem = styled.div.attrs((props) => ({
  className: `text-sm leading-tight text-grey-dark disabled`,
  value: `${props.value}`
}))``;
export const TerminalContainer = styled.h1.attrs({
  className: `md:flex  flex-col m-2 px-6 py-4 bg-[#333] h-96 w-7/12 rounded-md shadow-sm shadow-neutral-700
    `
})``;
export const TerminalHeader = styled.h1.attrs({
  className: `text-white text-md text-bold font-medium
    `
})``;
export const TerminalHistoryContainer = styled.div.attrs({
  className: `md:flex pt-4 pl-2 flex-col font-normal text-black bg-[#C5C5C5] h-full w-full rounded-md shadow-sm shadow-neutral-700 overflow-y-auto
    `
})``;
export const TerminalInput = styled.input.attrs((props) => ({
  className: ` m-2 block h-4 relative sm:h-6 w-full rounded-xs mx-auto shadow-sm shadow-black mb-4 sm:mb-0 sm:mr-4 sm:ml-0 text-black rounded `,
  type: "text",
  value: `${props.value}`
}))``;
export const SendButton = styled.button.attrs(() => ({
  className: `m-1 font-semibold relative rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#FFFFF] text-purple hover:bg-purple hover:text-black `
}))``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL1Rlcm1pbmFsLnN0eWxlZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVPLGFBQU0sZUFBZSxPQUFPLElBQUksTUFBTSxDQUFDLFVBQThCO0FBQUEsRUFDMUUsV0FBVztBQUFBLEVBQ1gsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUVYLGFBQU0sb0JBQW9CLE9BQU8sR0FBRyxNQUFNO0FBQUEsRUFDL0MsV0FBVztBQUFBO0FBQUE7QUFJTixhQUFNLGlCQUFpQixPQUFPLEdBQUcsTUFBTTtBQUFBLEVBQzVDLFdBQVc7QUFBQTtBQUFBO0FBSU4sYUFBTSwyQkFBMkIsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUN2RCxXQUFXO0FBQUE7QUFBQTtBQUlOLGFBQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLENBQUMsVUFBOEI7QUFBQSxFQUM3RSxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPLEdBQUcsTUFBTTtBQUFBO0FBR1gsYUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU87QUFBQSxFQUNuRCxXQUFXO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
