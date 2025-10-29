import React, {forwardRef, useEffect, useRef, useState} from "../../../../snowpack/pkg/react.js";
import "./multirangeslider.css";
import "./multirangesliderblack.css";
import {useStoreState} from "../../../../snowpack/pkg/easy-peasy.js";
let thumbLeftColor = "red";
let thumbRightColor = "blue";
let _wheelTimeout = null;
let _triggerTimeout = null;
export const MultiRangeSlider = (props, ref) => {
  let ruler = props.ruler === void 0 || props.ruler === null ? true : props.ruler;
  let label = props.label === void 0 || props.label === null ? true : props.label;
  let subSteps = props.subSteps === void 0 || props.subSteps === null ? false : props.subSteps;
  let stepOnly = props.stepOnly === void 0 || props.stepOnly === null ? false : props.stepOnly;
  let preventWheel = props.preventWheel === void 0 || props.preventWheel === null ? false : props.preventWheel;
  let refBar = useRef(null);
  let min = +(props.min || 0);
  let max = +(props.max || 350);
  let step = +(props.step || 10);
  let fixed = 0;
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  if (props.minValue != "Infinity" && (props.minValue > max || props.maxValue > max) && trainingSettings.isProgressBarDynamic == true) {
    if (props.maxValue > props.minValue) {
      if (100 > props.maxValue) {
        max = 100;
      } else if (200 > props.maxValue) {
        max = 200;
      } else if (300 > props.maxValue) {
        max = 300;
      } else if (400 > props.maxValue) {
        max = 400;
      } else if (500 > props.maxValue) {
        max = 500;
      } else if (600 > props.maxValue) {
        max = 600;
      } else if (700 > props.maxValue) {
        max = 700;
      }
    } else if (trainingSettings.isProgressBarDynamic == true) {
      if (100 > props.minValue) {
        max = 100;
      } else if (200 > props.minValue) {
        max = 200;
      } else if (300 > props.minValue) {
        max = 300;
      } else if (400 > props.minValue) {
        max = 400;
      } else if (500 > props.minValue) {
        max = 500;
      } else if (600 > props.minValue) {
        max = 600;
      } else if (700 > props.minValue) {
        max = 700;
      }
    }
  }
  let stepCount = Math.floor((+max - +min) / +step);
  let labels = props.labels || [];
  if (labels.length === 0) {
    labels = [];
    labels.push(min.toString());
    labels.push(max.toString());
  } else {
    stepCount = labels.length - 1;
  }
  if (typeof label === "string") {
    label = label === "true";
  }
  if (typeof ruler === "string") {
    ruler = ruler === "true";
  }
  if (typeof preventWheel === "string") {
    preventWheel = preventWheel === "true";
  }
  if (step.toString().includes(".")) {
    fixed = 2;
  }
  let _minValue = props.minValue;
  if (_minValue === null || _minValue === void 0) {
    _minValue = 25;
  }
  _minValue = +_minValue;
  let _maxValue = props.maxValue;
  if (_maxValue === null || _maxValue === void 0) {
    _maxValue = 75;
  }
  const [minValue, set_minValue] = useState(+props.minValue);
  const [maxValue, set_maxValue] = useState(+props.maxValue);
  if (minValue > maxValue) {
    set_maxValue(+props.minValue);
    console.log("Props min " + props.minValue + " " + minValue + " " + max);
    set_minValue(+props.maxValue);
    console.log("Props min " + props.maxValue + " " + maxValue + " " + max);
  }
  const [barMin, set_barMin] = useState((minValue - min) / (max - min) * 100);
  const [barMax, set_barMax] = useState((max - maxValue) / (max - min) * 100);
  const [minCaption, setMinCaption] = useState("");
  const [maxCaption, setMaxCaption] = useState("");
  const [isChange, setIsChange] = useState(true);
  useEffect(() => {
    const triggerChange = () => {
      let result = {min, max, minValue, maxValue};
      isChange && props.onChange && props.onChange(result);
      props.onInput && props.onInput(result);
    };
    let _barMin = (minValue - min) / (max - min) * 100;
    set_barMin(_barMin);
    let _barMax = (max - maxValue) / (max - min) * 100;
    set_barMax(_barMax);
    _triggerTimeout && window.clearTimeout(_triggerTimeout);
    _triggerTimeout = window.setTimeout(triggerChange, 20);
  }, [minValue, maxValue, min, max, fixed, props, isChange]);
  useEffect(() => {
    let _minValue2 = props.minValue;
    setIsChange(false);
    set_minValue(+_minValue2);
  }, [props.minValue, min, max]);
  useEffect(() => {
    let _maxValue2 = props.maxValue;
    setIsChange(false);
    set_maxValue(+_maxValue2);
  }, [props.maxValue, min, max, step]);
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    id: props.id,
    className: (props.baseClassName || "multi-range-slider") + " " + (props.className || ""),
    style: props.style
  }, ruler && /* @__PURE__ */ React.createElement("div", {
    className: "ruler"
  }, [...Array(stepCount)].map((e, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: "ruler-rule flex-col"
  }, subSteps && [...Array(10)].map((e2, n) => /* @__PURE__ */ React.createElement("div", {
    key: n,
    className: "ruler-sub-rule absolute"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-[10px] absolute font-bold -ml-2 text-center text-neutral-300 flex-col w-4"
  }, i * step)))), /* @__PURE__ */ React.createElement("div", {
    className: "bar flex",
    ref: refBar
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bar-left",
    style: {width: barMin + "%", backgroundColor: props.barLeftColor}
  }), /* @__PURE__ */ React.createElement("input", {
    placeholder: "min-value",
    className: "input-type-range input-type-range-min absolute",
    type: "range",
    min,
    max,
    step,
    value: minValue
  }), /* @__PURE__ */ React.createElement("div", {
    className: "thumb thumb-left absolute",
    style: {
      backgroundColor: props.minValue > props.maxValue ? "#ef4444" : "#38bdf8"
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bar-inner",
    style: {backgroundColor: props.barInnerColor}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bar-inner-left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bar-inner-right"
  })), /* @__PURE__ */ React.createElement("input", {
    placeholder: "max-value",
    className: "input-type-range input-type-range-max	absolute",
    type: "range",
    min,
    max,
    step,
    value: maxValue
  }), /* @__PURE__ */ React.createElement("div", {
    className: "thumb thumb-right absolute",
    style: {
      backgroundColor: props.minValue > props.maxValue ? "#38bdf8" : "#ef4444"
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bar-right",
    style: {width: barMax + "%", backgroundColor: props.barRightColor}
  })));
};
export default React.memo(forwardRef(MultiRangeSlider));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC9jb21wb25lbnRzL1JhbmdlLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUE7QUFDQTtBQUVBO0FBK0JBLElBQUksaUJBQWlCO0FBQ3JCLElBQUksa0JBQWtCO0FBUXRCLElBQUksZ0JBQStCO0FBQ25DLElBQUksa0JBQWlDO0FBQzlCLGFBQU0sbUJBQW1CLENBQzlCLE9BQ0EsUUFDZ0I7QUFDaEIsTUFBSSxRQUNGLE1BQU0sVUFBVSxVQUFhLE1BQU0sVUFBVSxPQUFPLE9BQU8sTUFBTTtBQUNuRSxNQUFJLFFBQ0YsTUFBTSxVQUFVLFVBQWEsTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNO0FBQ25FLE1BQUksV0FDRixNQUFNLGFBQWEsVUFBYSxNQUFNLGFBQWEsT0FDL0MsUUFDQSxNQUFNO0FBQ1osTUFBSSxXQUNGLE1BQU0sYUFBYSxVQUFhLE1BQU0sYUFBYSxPQUMvQyxRQUNBLE1BQU07QUFDWixNQUFJLGVBQ0YsTUFBTSxpQkFBaUIsVUFBYSxNQUFNLGlCQUFpQixPQUN2RCxRQUNBLE1BQU07QUFFWixNQUFJLFNBQVMsT0FBdUI7QUFDcEMsTUFBSSxNQUFNLENBQUUsT0FBTSxPQUFPO0FBQ3pCLE1BQUksTUFBTSxDQUFFLE9BQU0sT0FBTztBQUN6QixNQUFJLE9BQU8sQ0FBRSxPQUFNLFFBQVE7QUFDM0IsTUFBSSxRQUFRO0FBRVosUUFBTSxtQkFBbUIsY0FDdkIsQ0FBQyxVQUFlLE1BQU07QUFHeEIsTUFDRSxNQUFNLFlBQVksY0FDakIsT0FBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQzFDLGlCQUFpQix3QkFBd0IsTUFDekM7QUFFQSxRQUFJLE1BQU0sV0FBVyxNQUFNLFVBQVU7QUFDbkMsVUFBSSxNQUFNLE1BQU0sVUFBVTtBQUN4QixjQUFNO0FBQUEsaUJBQ0csTUFBTSxNQUFNLFVBQVU7QUFDL0IsY0FBTTtBQUFBLGlCQUNHLE1BQU0sTUFB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
