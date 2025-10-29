import styled from "../../../../snowpack/pkg/styled-components.js";
export const KeyMapInputIdentifiers = styled.div.attrs({
  className: `text-white  pl-6 mb-2  `
})``;
export const FirstKeyMapInputIdentifiers = styled.div.attrs({
  className: `lg:h-auto pl-4 text-white  lg:w-54 flex-none bg-cover bg-[#778D83] rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden`
})``;
export const CardLayoutContainer = styled.div.attrs({
  className: `m-1 flex flex-row bg-[#333] rounded-md mb-2 border-2 border-white border-opacity-5 shadow-lg shadow-white'

    `
})``;
export const CardCancelButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-neutral-400 text-black hover:bg-purple hover:text-white  ${props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardSaveButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#22c55e] text-black hover:bg-purple hover:text-white ${props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardEditButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-blue-500 text-white hover:bg-purple hover:text-white ${!props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardConfirmDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#22c55e] text-white hover:bg-white hover:text-black ${!props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardCancelDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-neutral-400 text-white hover:bg-purple hover:text-black ${!props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-2 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#FF0000] text-white hover:bg-purple hover:text-black ${props.shouldDelete ? "hidden" : ""}`
}))``;
export const KeyMapPositionTextBox = styled.input.attrs((props) => ({
  className: `${props.disabled ? "disabled" : ""}
      ${props.disabled ? "placeholder:text-white" : ""}
      block h-4 sm:h-6 rounded-xs mx-auto shadow-sm shadow-black mb-4 sm:mb-0 sm:mr-4 sm:ml-0 text-black text-center overflow-y-auto rounded }`,
  type: "text",
  placeholder: `${props.placeholder}`
}))``;
export const KeyMapValueTextBox = styled.input.attrs((props) => ({
  className: `${props.disabled ? "placeholder:text-white" : ""} block h-4 sm:h-6 rounded-xs mx-auto mb-4 shadow-sm shadow-black sm:mb-0 sm:mr-4 sm:ml-0 text-black text-center  rounded ${props.disabled ? "disabled" : ""} `,
  type: "text",
  placeholder: `${props.placeholder}`
}))``;
export const KeyMapTextBox = styled.input.attrs((props) => ({
  className: `${props.disabled ? "placeholder:text-white" : ""} block h-4 sm:h-6 rounded-xs mx-auto mb-4 shadow-sm shadow-black sm:mb-0 sm:mr-4 sm:ml-0 text-black text-center  rounded ${props.disabled ? "disabled" : ""} `,
  type: "text",
  placeholder: `${props.placeholder}`
}))``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTGF5b3V0Q29sdW1uLnN0eWxlZC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVPLGFBQU0seUJBQXlCLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDckQsV0FBVztBQUFBO0FBR04sYUFBTSw4QkFBOEIsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUMxRCxXQUFXO0FBQUE7QUFFTixhQUFNLHNCQUFzQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2xELFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFLTixhQUFNLG1CQUFtQixPQUFPLE9BQU8sTUFDNUMsQ0FBQyxVQUEwRDtBQUFBLEVBQ3pELFdBQVcsdUtBQ1QsTUFBTSxhQUFhLE1BQU0sZUFBZSxXQUFXO0FBQUE7QUFLbEQsYUFBTSxpQkFBaUIsT0FBTyxPQUFPLE1BQzFDLENBQUMsVUFBMEQ7QUFBQSxFQUN6RCxXQUFXLG9LQUNULE1BQU0sYUFBYSxNQUFNLGVBQWUsV0FBVztBQUFBO0FBS2xELGFBQU0saUJBQWlCLE9BQU8sT0FBTyxNQUMxQyxDQUFDLFVBQTBEO0FBQUEsRUFDekQsV0FBVyxtS0FDVCxDQUFDLE1BQU0sYUFBYSxNQUFNLGVBQWUsV0FBVztBQUFBO0FBSW5ELGFBQU0sMEJBQTBCLE9BQU8sT0FBTyxNQUNuRCxDQUFDLFVBQXNDO0FBQUEsRUFDckMsV0FBVyxtS0FDVCxDQUFDLE1BQU0sZUFBZSxXQUFXO0FBQUE7QUFLaEMsYUFBTSx5QkFBeUIsT0FBTyxPQUFPLE1BQ2xELENBQUMsVUFBc0M7QUFBQSxFQUNyQyxXQUFXLHNLQUNULENBQUMsTUFBTSxlQUFlLFdBQVc7QUFBQTtBQUtoQyxhQUFNLG1CQUFtQixPQUFPLE9BQU8sTUFDNUMsQ0FBQyxVQUFzQztBQUFBLEVBQ3JDLFdBQVcsb0tBQ1QsTUFBTSxlQUFlLFdBQVc7QUFBQTtBQUkvQixhQUFNLHdCQUF3QixPQUFPLE1BQU0sTUFDaEQsQ0FBQyxVQUF1RDtBQUFBLEVBQ3RELFdBQVcsR0FBRyxNQUFNLFdBQVcsYUFBYTtBQUFBLFFBQ3hDLE1BQU0sV0FBVywyQkFBMkI7QUFBQTtBQUFBLEVBRWhELE1BQU07QUFBQSxFQUNOLGFBQWEsR0FBRyxNQUFNO0FBQUE7QUFHbkIsYUFBTSxxQkFBcUIsT0FBTyxNQUFNLE1BQzdDLENBQUMsVUFBdUQ7QUFBQSxFQUN0RCxXQUFXLEdBQ1QsTUFBTSxXQUFXLDJCQUEyQiw4SEFFNUMsTUFBTSxXQUFXLGFBQWE7QUFBQSxFQUVoQyxNQUFNO0FBQUEsRUFDTixhQUFhLEdBQUcsTUFBTTtBQUFBO0FBR25CLGFBQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUN4QyxDQUFDLFVBQXVEO0FBQUEsRUFDdEQsV0FBVyxHQUNULE1BQU0sV0FBVywyQkFBMkIsOEhBRTVDLE1BQU0sV0FBVyxhQUFhO0FBQUEsRUFFaEMsTUFBTTtBQUFBLEVBQ04sYUFBYSxHQUFHLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
