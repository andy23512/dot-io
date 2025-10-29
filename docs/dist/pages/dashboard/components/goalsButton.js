import React, {Component} from "../../../../snowpack/pkg/react.js";
import {
  getAverageWPM,
  getHighestWPM,
  getChordsMastered,
  getChordsPerMinute
} from "../../manager/components/chordGraphs.js";
import PropTypes from "../../../../snowpack/pkg/prop-types.js";
const triggerResize = () => {
  window.dispatchEvent(new Event("resize"));
};
export class PopUp extends Component {
  constructor() {
    super(...arguments);
    this.handleClick = () => {
      this.props.toggle();
    };
    this.handleGoalClick = () => {
      const goalWPMArray = [];
      const goalAWPMArray = [];
      const goalChMArray = [];
      const goalACPMArray = [];
      const goaltWPM = document.getElementById("goalWPM");
      const goalaWPM = document.getElementById("goalAWPM");
      const goalChM = document.getElementById("goalCHM");
      const goalaCPM = document.getElementById("goalACPM");
      const currenttWPM = goaltWPM.value - getHighestWPM();
      const currentaWPM = goalaWPM.value - getAverageWPM();
      const currentChM = goalChM.value - getChordsMastered();
      const currentACPM = goalaCPM.value - getChordsPerMinute();
      localStorage.setItem("storedGoalWPM", JSON.stringify(goalWPMArray));
      localStorage.setItem("storedGoalAWPM", JSON.stringify(goalAWPMArray));
      localStorage.setItem("storedGoalChM", JSON.stringify(goalChMArray));
      localStorage.setItem("storedGoalCPM", JSON.stringify(goalACPMArray));
      goalWPMSet(currenttWPM / 12);
      goalAWPMSet(currentaWPM / 12);
      goalACPMSet(currentACPM / 12);
      goalChMSet(currentChM / 12);
      dates(new Date());
      this.props.toggle();
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      style: modal
    }, /* @__PURE__ */ React.createElement("div", {
      style: modal_content
    }, /* @__PURE__ */ React.createElement("span", {
      className: "close",
      onClick: this.handleClick
    }, "×"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
      style: {color: "rgb(75 85 99)", fontWeight: "bold"}
    }, "Set Your Typing Goals"), /* @__PURE__ */ React.createElement("div", null, "Enter your goal number for each given category", " ", /* @__PURE__ */ React.createElement("div", null, "(ex. current: 35, Goal: 50)")), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null), /* @__PURE__ */ React.createElement("th", null, "Current"), /* @__PURE__ */ React.createElement("th", null, "Goal"), /* @__PURE__ */ React.createElement("th", null, " ")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "tWPM"), /* @__PURE__ */ React.createElement("td", null, getHighestWPM()), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      style: goalIndex,
      id: "goalWPM",
      required: true
    })), /* @__PURE__ */ React.createElement("td", {
      id: "realTimeWeeklyValWPM"
    })), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "aWPM"), /* @__PURE__ */ React.createElement("td", null, getAverageWPM()), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      style: goalIndex,
      id: "goalAWPM",
      required: true
    })), /* @__PURE__ */ React.createElement("td", null)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "ChM"), /* @__PURE__ */ React.createElement("td", null, getChordsMastered()), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      style: goalIndex,
      id: "goalCHM",
      required: true
    })), /* @__PURE__ */ React.createElement("td", null)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "aCPM"), /* @__PURE__ */ React.createElement("td", null, getChordsPerMinute()), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      style: goalIndex,
      id: "goalACPM",
      required: true
    })), /* @__PURE__ */ React.createElement("td", null))), /* @__PURE__ */ React.createElement("button", {
      type: "submit",
      className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
      onClick: this.handleGoalClick
    }, "Calibrate Goals")))));
  }
}
PopUp.propTypes = {
  toggle: PropTypes.any
};
export default class GoalsButton extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      seen: false
    };
    this.togglePop = () => {
      this.setState({
        seen: !this.state.seen
      });
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "btn",
      onClick: this.togglePop
    }, /* @__PURE__ */ React.createElement("button", {
      className: "text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]"
    }, JSON.parse(localStorage.getItem("storedGoalAWPM")) == null ? "Set Goals" : "Reset Goals")), this.state.seen ? /* @__PURE__ */ React.createElement(PopUp, {
      toggle: this.togglePop
    }) : null);
  }
}
function dates(current) {
  const week = [];
  current.setDate(current.getDate());
  for (let i = 0; i < 12; i++) {
    week.push(convertDate(current));
    current.setDate(current.getDate() + 7);
  }
  localStorage.setItem("storedGoalDate", JSON.stringify(week));
  return week;
}
function convertDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const newdate = month + "/" + day + "/" + year;
  return newdate;
}
function goalWPMSet(goalV) {
  const tempStoredGoalWPM = JSON.parse(localStorage.getItem("storedGoalWPM"));
  let number = 0;
  for (let i = 1; i < 13; i++) {
    number = getHighestWPM() + i * goalV;
    number = Math.round(number * 10) / 10;
    tempStoredGoalWPM.push(number);
  }
  localStorage.setItem("storedGoalWPM", JSON.stringify(tempStoredGoalWPM));
}
function goalAWPMSet(goalV) {
  const tempStoredGoalAWPM = JSON.parse(localStorage.getItem("storedGoalAWPM"));
  let number = 0;
  for (let i = 1; i < 13; i++) {
    number = getAverageWPM() + i * goalV;
    number = Math.round(number * 10) / 10;
    tempStoredGoalAWPM.push(number);
  }
  localStorage.setItem("storedGoalAWPM", JSON.stringify(tempStoredGoalAWPM));
}
function goalChMSet(goalV) {
  const tempStoredGoalChM = JSON.parse(localStorage.getItem("storedGoalChM"));
  let number = 0;
  for (let i = 1; i < 13; i++) {
    number = getChordsMastered() + i * goalV;
    number = Math.round(number * 10) / 10;
    tempStoredGoalChM.push(number);
  }
  localStorage.setItem("storedGoalChM", JSON.stringify(tempStoredGoalChM));
}
function goalACPMSet(goalV) {
  const tempStoredGoalACPM = JSON.parse(localStorage.getItem("storedGoalCPM"));
  let number = 0;
  for (let i = 1; i < 13; i++) {
    number = getChordsPerMinute() + i * goalV;
    number = Math.round(number * 10) / 10;
    tempStoredGoalACPM.push(number);
  }
  localStorage.setItem("storedGoalCPM", JSON.stringify(tempStoredGoalACPM));
}
const modal = {
  position: "absolute",
  zIndex: "1",
  top: "45%",
  left: "22.5%",
  width: "50%",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.25)"
};
const modal_content = {
  backgroundColor: "white",
  position: "absolute",
  top: "20%",
  left: "30%",
  padding: "20px",
  borderRadius: "5px",
  border: "2px solid black"
};
const goalIndex = {
  borderRadius: "5px",
  border: "1.5px solid black"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZ29hbHNCdXR0b24udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBLE1BQU0sZ0JBQWdCLE1BQU07QUFJMUIsU0FBTyxjQUFjLElBQUksTUFBTTtBQUFBO0FBRzFCLDJCQUFvQixVQUFVO0FBQUEsRUFBOUIsY0FoQlA7QUFnQk87QUFLTCx1QkFBYyxNQUFNO0FBQ2xCLFdBQUssTUFBTTtBQUFBO0FBR2IsMkJBQWtCLE1BQU07QUFDdEIsWUFBTSxlQUFlO0FBQ3JCLFlBQU0sZ0JBQWdCO0FBQ3RCLFlBQU0sZUFBZTtBQUNyQixZQUFNLGdCQUFnQjtBQUV0QixZQUFNLFdBQVcsU0FBUyxlQUFlO0FBQ3pDLFlBQU0sV0FBVyxTQUFTLGVBQWU7QUFDekMsWUFBTSxVQUFVLFNBQVMsZUFBZTtBQUN4QyxZQUFNLFdBQVcsU0FBUyxlQUFlO0FBRXpDLFlBQU0sY0FBYyxTQUFTLFFBQVE7QUFDckMsWUFBTSxjQUFjLFNBQVMsUUFBUTtBQUNyQyxZQUFNLGFBQWEsUUFBUSxRQUFRO0FBQ25DLFlBQU0sY0FBYyxTQUFTLFFBQVE7QUFFckMsbUJBQWEsUUFBUSxpQkFBaUIsS0FBSyxVQUFVO0FBQ3JELG1CQUFhLFFBQVEsa0JBQWtCLEtBQUssVUFBVTtBQUN0RCxtQkFBYSxRQUFRLGlCQUFpQixLQUFLLFVBQVU7QUFDckQsbUJBQWEsUUFBUSxpQkFBaUIsS0FBSyxVQUFVO0FBRXJELGlCQUFXLGNBQWM7QUFDekIsa0JBQVksY0FBYztBQUMxQixrQkFBWSxjQUFjO0FBQzFCLGlCQUFXLGFBQWE7QUFFeEIsWUFBTSxJQUFJO0FBQ1YsV0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR2IsU0FBUztBQUNQLFdBQ0Usb0NBQUMsTUFBTSxVQUFQLE1BQ0Usb0NBQUMsT0FBRDtBQUFB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
