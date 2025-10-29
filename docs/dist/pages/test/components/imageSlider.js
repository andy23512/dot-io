import React, {useState} from "../../../../snowpack/pkg/react.js";
import {SliderData, SliderDataForCHMTier} from "./SliderData.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
const ImageSlider = () => {
  let slides = [];
  const trainingLevel = useStoreState((store) => store.trainingLevel);
  if (trainingLevel == "CHM") {
    slides = SliderDataForCHMTier;
  } else if (trainingLevel == "CPM") {
    slides = SliderData;
  } else {
    slides = SliderData;
  }
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (current == length - 1) {
      setIsDisplaying();
      setIsDisplayingIntroductionModal(true);
      setIsDisplayingIntroductionModal(false);
      localStorage.setItem("FirstTimeViewingModal", JSON.stringify(true));
      console.log("jsdns " + isDisplayingIntroductionModal);
    }
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const isDisplayingIntroductionModal = useStoreState((store) => store.isDisplayingIntroductionModal);
  const setIsDisplayingIntroductionModal = useStoreActions((store) => store.setIsDisplayingIntroductionModal);
  function setIsDisplaying() {
    setIsDisplayingIntroductionModal(isDisplayingIntroductionModal);
  }
  return /* @__PURE__ */ React.createElement("section", {
    className: "slider"
  }, slides.map((slide, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: index === current ? "slide active" : "slide",
      key: index
    }, index === current && /* @__PURE__ */ React.createElement("img", {
      src: slide.image,
      alt: "travel image",
      className: "image max-w-full max-h-full center"
    }));
  }), /* @__PURE__ */ React.createElement("button", {
    className: `right-arrow text-white rounded inline-block p-2 ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] ${current === 0 || current == slides.length - 1 ? "hidden" : ""}`,
    onClick: prevSlide
  }, " ", current === 0 ? "" : /* @__PURE__ */ React.createElement(React.Fragment, null, "«"), " "), /* @__PURE__ */ React.createElement("button", {
    className: "right-arrow text-white rounded inline-block p-2 ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
    onClick: nextSlide
  }, " ", current == slides.length - 1 ? [
    "Start Training",
    localStorage.setItem("FirstTimeViewingModal", JSON.stringify(true))
  ] : /* @__PURE__ */ React.createElement(React.Fragment, null, "»"), " "));
};
export default ImageSlider;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL2ltYWdlU2xpZGVyLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sY0FBYyxNQUFNO0FBQ3hCLE1BQUksU0FBYztBQUNsQixRQUFNLGdCQUFnQixjQUFjLENBQUMsVUFBZSxNQUFNO0FBRTFELE1BQUksaUJBQWlCLE9BQU87QUFDMUIsYUFBUztBQUFBLGFBQ0EsaUJBQWlCLE9BQU87QUFDakMsYUFBUztBQUFBLFNBQ0o7QUFDTCxhQUFTO0FBQUE7QUFHWCxRQUFNLENBQUMsU0FBUyxjQUFjLFNBQVM7QUFDdkMsUUFBTSxTQUFTLE9BQU87QUFFdEIsUUFBTSxZQUFZLE1BQU07QUFDdEIsZUFBVyxZQUFZLFNBQVMsSUFBSSxJQUFJLFVBQVU7QUFFbEQsUUFBSSxXQUFXLFNBQVMsR0FBRztBQUN6QjtBQUNBLHVDQUFpQztBQUNqQyx1Q0FBaUM7QUFFakMsbUJBQWEsUUFBUSx5QkFBeUIsS0FBSyxVQUFVO0FBQzdELGNBQVEsSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUkzQixRQUFNLFlBQVksTUFBTTtBQUN0QixlQUFXLFlBQVksSUFBSSxTQUFTLElBQUksVUFBVTtBQUFBO0FBR3BELE1BQUksQ0FBQyxNQUFNLFFBQVEsV0FBVyxPQUFPLFVBQVUsR0FBRztBQUNoRCxXQUFPO0FBQUE7QUFHVCxRQUFNLGdDQUFnQyxjQUNwQyxDQUFDLFVBQWUsTUFBTTtBQUV4QixRQUFNLG1DQUFtQyxnQkFDdkMsQ0FBQyxVQUFlLE1BQU07QUFHeEIsNkJBQTJCO0FBQ3pCLHFDQUFpQztBQUFBO0FBR25DLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sVUFBVTtBQUM1QixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUNFLFdBQVcsVUFBVSxVQUFVLGlCQUFpQjtBQUFBLE1BQ2hELEtBQUs7QUFBQSxPQUVKLFVBQVUsV0FDVCxvQ0FBQyxPQUFEO0FBQUEsTUFDRSxLQUFLLE1BQU07QUFBQSxNQUNYLEtBQUk7QUFBQSxNQUNKLFdBQVU7QUFBQTtBQUFBLE1BTXBCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVcsc0dBQ1QsWUFBWSxLQUFLLFdBQVcsT0FBTyxTQUFTLElBQUksV0FBVztBQUFBLElBRTdELFNBQVM7QUFBQSxLQUVSLEtBQ0EsWUFBWSxJQUFJLEtBQUssMERBQUUsTUFBWSxNQUV0QyxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsS0FFUixLQUNBLFdBQVcsT0FBTyxTQUFTLElBQzFCO0FBQUEsSUFDRTtBQUFBLElBQ0EsYUFBYSxRQUFRLHlCQUF5QixLQUFLLFVBQVU7QUFBQSxNQUcvRCwwREFBRSxNQUNEO0FBQUE7QUFNWCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
