import styled from "../../../../snowpack/pkg/styled-components.js";
export const InputIdentifiers = styled.div.attrs({
  className: `text-white pl-6 mb-2  `
})``;
export const InputIdentifiersForPhrase = styled.div.attrs({
  className: `lg:h-auto pl-6 text-white pb-4 lg:w-54 flex-none bg-cover bg-[#3A5A42] rounded-tr rounded-tl overflow-hidden`
})``;
export const CardContainer = styled.div.attrs({
  className: `m-1 flex flex-row bg-[#333] rounded-md mb-2 border-2 border-white border-opacity-5 shadow-lg shadow-white'

    `
})``;
export const CardCancelButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-neutral-400 text-black hover:bg-purple hover:text-white  ${props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardSaveButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#22c55e] text-black hover:bg-purple hover:text-white ${props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardEditButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-blue-500 text-white hover:bg-purple hover:text-white ${!props.cancelled || props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardConfirmDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#22c55e] text-white hover:bg-white hover:text-black ${!props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardCancelDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-neutral-400 text-white hover:bg-purple hover:text-black ${!props.shouldDelete ? "hidden" : ""}`
}))``;
export const CardDeleteButton = styled.button.attrs((props) => ({
  className: `text-xs m-1 h-6 mt-6 float-right font-semibold rounded-full px-4 py-1 shadow-sm shadow-black leading-normal bg-[#FF0000] text-white hover:bg-purple hover:text-black ${props.shouldDelete ? "hidden" : ""}`
}))``;
export const ChordTextBox = styled.input.attrs((props) => ({
  className: `${props.disabled ? "placeholder:text-white" : ""} block h-4 sm:h-6 rounded-xs mx-auto shadow-sm overflow-x-scroll shadow-black mb-4 sm:mb-0 sm:mr-4 sm:ml-0 text-black text-center overflow-y-auto rounded ${props.disabled ? "disabled" : ""}`,
  type: "text",
  placeholder: `${props.placeholder}`,
  value: `${props.value}`
}))``;
export const PhraseTextBox = styled.input.attrs((props) => ({
  className: `${props.disabled ? "placeholder:text-white" : ""} block h-4 sm:h-6 rounded-xs mx-auto overflow-x-scroll shadow-sm shadow-black sm:mb-0 sm:mr-4 sm:ml-0 text-black text-center rounded ${props.disabled ? "disabled" : ""} `,
  type: "text",
  placeholder: `${props.placeholder}`
}))``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL0Nob3JkTWFwQ2FyZENvbHVtbi5zdHlsZWQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFFTyxhQUFNLG1CQUFtQixPQUFPLElBQUksTUFBTTtBQUFBLEVBQy9DLFdBQVc7QUFBQTtBQUdOLGFBQU0sNEJBQTRCLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDeEQsV0FBVztBQUFBO0FBRU4sYUFBTSxnQkFBZ0IsT0FBTyxJQUFJLE1BQU07QUFBQSxFQUM1QyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBS04sYUFBTSxtQkFBbUIsT0FBTyxPQUFPLE1BQzVDLENBQUMsVUFBMEQ7QUFBQSxFQUN6RCxXQUFXLDJLQUNULE1BQU0sYUFBYSxNQUFNLGVBQWUsV0FBVztBQUFBO0FBS2xELGFBQU0saUJBQWlCLE9BQU8sT0FBTyxNQUMxQyxDQUFDLFVBQTBEO0FBQUEsRUFDekQsV0FBVyx3S0FDVCxNQUFNLGFBQWEsTUFBTSxlQUFlLFdBQVc7QUFBQTtBQUtsRCxhQUFNLGlCQUFpQixPQUFPLE9BQU8sTUFDMUMsQ0FBQyxVQUEwRDtBQUFBLEVBQ3pELFdBQVcsdUtBQ1QsQ0FBQyxNQUFNLGFBQWEsTUFBTSxlQUFlLFdBQVc7QUFBQTtBQUluRCxhQUFNLDBCQUEwQixPQUFPLE9BQU8sTUFDbkQsQ0FBQyxVQUFzQztBQUFBLEVBQ3JDLFdBQVcsdUtBQ1QsQ0FBQyxNQUFNLGVBQWUsV0FBVztBQUFBO0FBS2hDLGFBQU0seUJBQXlCLE9BQU8sT0FBTyxNQUNsRCxDQUFDLFVBQXNDO0FBQUEsRUFDckMsV0FBVywwS0FDVCxDQUFDLE1BQU0sZUFBZSxXQUFXO0FBQUE7QUFLaEMsYUFBTSxtQkFBbUIsT0FBTyxPQUFPLE1BQzVDLENBQUMsVUFBc0M7QUFBQSxFQUNyQyxXQUFXLHdLQUNULE1BQU0sZUFBZSxXQUFXO0FBQUE7QUFJL0IsYUFBTSxlQUFlLE9BQU8sTUFBTSxNQUN2QyxDQUFDLFVBQXNFO0FBQUEsRUFDckUsV0FBVyxHQUNULE1BQU0sV0FBVywyQkFBMkIsK0pBRTVDLE1BQU0sV0FBVyxhQUFhO0FBQUEsRUFFaEMsTUFBTTtBQUFBLEVBQ04sYUFBYSxHQUFHLE1BQU07QUFBQSxFQUN0QixPQUFPLEdBQUcsTUFBTTtBQUFBO0FBR2IsYUFBTSxnQkFBZ0IsT0FBTyxNQUFNLE1BQ3hDLENBQUMsVUFBdUQ7QUFBQSxFQUN0RCxXQUFXLEdBQ1QsTUFBTSxXQUFXLDJCQUEyQiwwSUFFNUMsTUFBTSxXQUFXLGFBQWE7QUFBQSxFQUVoQyxNQUFNO0FBQUEsRUFDTixhQUFhLEdBQUcsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
