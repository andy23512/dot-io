import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState} from "../../../store/store.js";
const r = Math.random;
export function TextPrompt() {
  const indexOfTargetChord = useStoreState((store) => store.currentSubindexInTrainingText);
  const firstLineOfTargetText = useStoreState((store) => store.targetTextLineOne);
  const secondLineOfTargetText = useStoreState((store) => store.targetTextLineTwo);
  const isError = useStoreState((store) => store.errorOccurredWhileAttemptingToTypeTargetChord);
  const targetCharacterIndex = useStoreState((store) => store.targetCharacterIndex);
  const characterEntryMode = useStoreState((store) => store.characterEntryMode);
  return /* @__PURE__ */ React.createElement(TextPromptContainer, null, /* @__PURE__ */ React.createElement(ChordRow, null, (firstLineOfTargetText || [])?.map((chord, i) => {
    if (characterEntryMode === "CHORD" || i !== indexOfTargetChord)
      return /* @__PURE__ */ React.createElement(Chord, {
        key: r(),
        active: i === indexOfTargetChord,
        error: isError && i === indexOfTargetChord
      }, chord);
    else
      return /* @__PURE__ */ React.createElement(CharacterEntryChord, {
        word: chord,
        index: targetCharacterIndex
      });
  })), /* @__PURE__ */ React.createElement(ChordRow, null, (secondLineOfTargetText || [])?.map((chord) => /* @__PURE__ */ React.createElement(Chord, {
    key: r()
  }, chord))));
}
export default function CharacterEntryChord({
  word,
  index
}) {
  if (index === void 0 || index === null)
    return /* @__PURE__ */ React.createElement("span", {
      className: "text-green-500",
      key: Math.random()
    }, word);
  const wordSplit = word.split("");
  return /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", flexDirection: "row", color: "red"}
  }, wordSplit.slice(0, index).map((char) => /* @__PURE__ */ React.createElement("span", {
    className: "text-green-500",
    key: Math.random()
  }, char)), /* @__PURE__ */ React.createElement("span", {
    className: "text-blue-500"
  }, wordSplit[index]), wordSplit.slice(index + 1).map((char) => /* @__PURE__ */ React.createElement("span", {
    className: "text-white",
    key: Math.random()
  }, char)));
}
const Chord = styled.span.attrs((props) => ({
  className: `${props.active ? "text-blue-500 underline" : ""} ${props.error ? "text-red-500" : ""}`
}))``;
const ChordRow = styled.div.attrs({
  className: `flex flex-row gap-[1vw] justify-center w-full`
})``;
const TextPromptContainer = styled.div.attrs({
  className: `
    text-md font-bold mt-12 flex flex-col items-center w-full justify-center text-white
    sm:text-xl md:text-2xl xl:mt-12 
  `
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvY29tcG9uZW50cy9UZXh0UHJvbXB0LnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sSUFBSSxLQUFLO0FBRVIsNkJBQW9DO0FBQ3pDLFFBQU0scUJBQXFCLGNBQ3pCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sd0JBQXdCLGNBQzVCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0seUJBQXlCLGNBQzdCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sVUFBVSxjQUNkLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0sdUJBQXVCLGNBQzNCLENBQUMsVUFBVSxNQUFNO0FBRW5CLFFBQU0scUJBQXFCLGNBQWMsQ0FBQyxVQUFVLE1BQU07QUFFMUQsU0FDRSxvQ0FBQyxxQkFBRCxNQUNFLG9DQUFDLFVBQUQsTUFDSSwwQkFBeUIsS0FBSyxJQUFJLENBQUMsT0FBTyxNQUFNO0FBQ2hELFFBQUksdUJBQXVCLFdBQVcsTUFBTTtBQUMxQyxhQUNFLG9DQUFDLE9BQUQ7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVEsTUFBTTtBQUFBLFFBQ2QsT0FBTyxXQUFXLE1BQU07QUFBQSxTQUV2QjtBQUFBO0FBSUwsYUFDRSxvQ0FBQyxxQkFBRDtBQUFBLFFBQXFCLE1BQU07QUFBQSxRQUFPLE9BQU87QUFBQTtBQUFBLE9BS2pELG9DQUFDLFVBQUQsTUFDSSwyQkFBMEIsS0FBSyxJQUFJLENBQUMsVUFDcEMsb0NBQUMsT0FBRDtBQUFBLElBQU8sS0FBSztBQUFBLEtBQU07QUFBQTtBQU81Qiw0Q0FBNEM7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxHQUllO0FBQ2YsTUFBSSxVQUFVLFVBQWEsVUFBVTtBQUNuQyxXQUNFLG9DQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxNQUFpQixLQUFLLEtBQUs7QUFBQSxPQUN4QztBQUlQLFFBQU0sWUFBWSxLQUFLLE1BQU07QUFDN0IsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLENBQUUsU0FBUyxRQUFRLGVBQWUsT0FBTyxPQUFPO0FBQUEsS0FDekQsVUFBVSxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsU0FDOUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQWlCLEtBQUssS0FBSztBQUFBLEtBQ3hDLFFBR0wsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWlCLFVBQVUsU0FDMUMsVUFBVSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FDL0Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQWEsS0FBSyxLQUFLO0FBQUEsS0FDcEM7QUFBQTtBQVlYLE1BQU0sUUFBUSxPQUFPLEtBQUssTUFBa0IsQ0FBQyxVQUFXO0FBQUEsRUFDdEQsV0FBVyxHQUFHLE1BQU0sU0FBUyw0QkFBNEIsTUFDdkQsTUFBTSxRQUFRLGlCQUFpQjtBQUFBO0FBSW5DLE1BQU0sV0FBVyxPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2hDLFdBQVc7QUFBQTtBQUdiLE1BQU0sc0JBQXNCLE9BQU8sSUFBSSxNQUFNO0FBQUEsRUFDM0MsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
