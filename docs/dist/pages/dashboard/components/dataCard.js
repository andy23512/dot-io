import React from "../../../../snowpack/pkg/react.js";
import {
  getAverageWPM,
  getHighestWPM,
  getChordsMastered,
  getChordsPerMinute
} from "../../manager/components/chordGraphs.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
const triggerResize = () => {
  window.dispatchEvent(new Event("resize"));
};
function getCurrentDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = month + "/" + day + "/" + year;
  return newdate;
}
function convertDate(date) {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = month + "/" + day + "/" + year;
  return newdate;
}
function convertDateForMonth(date) {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  return month;
}
function convertDateForDay(date) {
  const dateObj = new Date(date);
  const day = dateObj.getUTCDate();
  return day;
}
function dateRangeCheck(from, to, check) {
  const fDate = Date.parse(from);
  const lDate = Date.parse(to);
  const cDate = Date.parse(check);
  if (cDate <= lDate && cDate >= fDate) {
    return true;
  }
  return false;
}
export default class CardData extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      seenGoalTable: false
    };
    this.togglePop = () => {
      this.setState({
        seenGoalTable: !this.state.seenGoalTable
      });
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("table", {
      style: {
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        backgroundColor: "#333",
        color: "white",
        height: "60px"
      }
    }, /* @__PURE__ */ React.createElement("colgroup", {
      span: 2
    }), /* @__PURE__ */ React.createElement("colgroup", {
      span: 2
    }), /* @__PURE__ */ React.createElement("tr", {
      style: sd
    }, /* @__PURE__ */ React.createElement("td", {
      rowSpan: 2
    }), /* @__PURE__ */ React.createElement("th", {
      colSpan: 2,
      scope: "colgroup"
    }, "tWPM", /* @__PURE__ */ React.createElement("div", null, getHighestWPM())), /* @__PURE__ */ React.createElement("th", {
      colSpan: 2,
      scope: "colgroup"
    }, "aWPM", /* @__PURE__ */ React.createElement("div", null, getAverageWPM())), /* @__PURE__ */ React.createElement("th", {
      colSpan: 2,
      scope: "colgroup"
    }, "ChM", /* @__PURE__ */ React.createElement("div", null, getChordsMastered())), /* @__PURE__ */ React.createElement("th", {
      colSpan: 2,
      scope: "colgroup"
    }, "aCPM", /* @__PURE__ */ React.createElement("div", null, getChordsPerMinute()))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Goal"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Actual"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Goal"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Actual"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Goal"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Actual"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Goal"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Actual")), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[11]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[11]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(83, 11, 12)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[11]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(83, 11, 12)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[11]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(83, 11, 12)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[11]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(83, 11, 12))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[10]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[10]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(76, 10, 11)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[10]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(76, 10, 11)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[10]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(76, 10, 11)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[10]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(76, 10, 11))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[9]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[9]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(69, 9, 10)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[9]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(69, 9, 10)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[9]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(69, 9, 10)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[9]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(69, 9, 10))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[8]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[8]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(62, 8, 9)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[8]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(62, 8, 9)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[8]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(62, 8, 9)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[8]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(62, 8, 9))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[7]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[7]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(55, 7, 8)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[7]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(55, 7, 8)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[7]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(55, 7, 8)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[7]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(55, 7, 8))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[6]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[6]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(48, 6, 7)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[6]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(48, 6, 7)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[6]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(48, 6, 7)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[6]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(48, 6, 7))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[5]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[5]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(41, 5, 6)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[5]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(41, 5, 6)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[5]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(41, 5, 6)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[5]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(41, 5, 6))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[4]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[4]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(34, 4, 5)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[4]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(34, 4, 5)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[4]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(34, 4, 5)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[4]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(34, 4, 5))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[3]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[3]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(27, 3, 4)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[3]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(27, 3, 4)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[3]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(27, 3, 4)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[3]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(27, 3, 4))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[2]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[2]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(20, 2, 3)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[2]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(20, 2, 3)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[2]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(20, 2, 3)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[2]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(20, 2, 3))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? "TBD" : JSON.parse(localStorage.getItem("storedGoalDate"))[1]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[1]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(13, 1, 2)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[1]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(13, 1, 2)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[1]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(13, 1, 2)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[1]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(13, 1, 2))), /* @__PURE__ */ React.createElement("tr", {
      style: this.state.seenGoalTable ? {display: ""} : {display: "none"}
    }, /* @__PURE__ */ React.createElement("th", {
      scope: "row"
    }, localStorage.getItem("storedGoalDate") == null ? getCurrentDate() : JSON.parse(localStorage.getItem("storedGoalDate"))[0]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalWPM"))[0]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValue(6, 0, 1)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalAWPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalAWPM"))[0]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueAWPM(6, 0, 1)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalChM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalChM"))[0]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueChM(6, 0, 1)), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, localStorage.getItem("storedGoalCPM") == null ? "-" : JSON.parse(localStorage.getItem("storedGoalCPM"))[0]), /* @__PURE__ */ React.createElement("td", {
      style: tableText
    }, calculateActualValueCPM(6, 0, 1)))), /* @__PURE__ */ React.createElement("button", {
      onClick: this.togglePop,
      className: "text-white inline-block bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]",
      style: {
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        marginBottom: "15px"
      }
    }, "View your goals"));
  }
}
function calculateActualValue(inDaysNumber, firstArrayNum, secondArrayNum) {
  let firstVal = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstVal != null) {
    firstVal = firstVal[0];
  }
  let firstNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstNum != null) {
    firstNum = firstNum[firstArrayNum];
  }
  let secondNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (secondNum != null) {
    secondNum = secondNum[secondArrayNum];
  }
  let ifStatementGoalValue = JSON.parse(localStorage.getItem("storedGoalWPM"));
  if (ifStatementGoalValue != null) {
    ifStatementGoalValue = ifStatementGoalValue[11];
  }
  let ifStatementSecondGoalValue = JSON.parse(localStorage.getItem("storedGoalWPM"));
  if (ifStatementSecondGoalValue != null) {
    ifStatementSecondGoalValue = ifStatementSecondGoalValue[firstArrayNum];
  }
  const currentDate = new Date();
  const date1 = new Date(firstVal);
  const date2 = new Date(currentDate);
  let tempHighestReturnVal = 0;
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Math.round(Difference_In_Time / (1e3 * 3600 * 24));
  if (Difference_In_Days >= inDaysNumber) {
    if (ifStatementGoalValue >= ifStatementSecondGoalValue) {
      const inV = parseInt(JSON.parse(localStorage.getItem("wpmGraphDate"))?.length - 1);
      for (let i = 0; i < inV; i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("wpmGraphDate"))[i]);
        if (dateRangeCheck(firstNum, secondNum, tempConvertedDate)) {
          const tempInHighestVal = JSON.parse(localStorage.getItem("wpmGraphWPM"))[i];
          tempHighestReturnVal = tempHighestReturnVal == null || tempInHighestVal > tempHighestReturnVal ? tempInHighestVal : tempHighestReturnVal;
        }
      }
      return tempHighestReturnVal == "undefined" ? "-" : tempHighestReturnVal;
    } else if (getHighestWPM() < JSON.parse(localStorage.getItem("storedGoalWPM"))[secondArrayNum]) {
      for (let i = 0; i < parseInt(JSON.parse(localStorage.getItem("wpmGraphDate"))[JSON.parse(localStorage.getItem("wpmGraphDate")).length - 1]); i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("wpmGraphDate"))[i]);
        if (tempConvertedDate == secondNum) {
          return JSON.parse(localStorage.getItem("wpmGraphWPM"))[i];
        }
      }
    }
  } else {
    return "-";
  }
}
function calculateActualValueChM(inDaysNumber, firstArrayNum, secondArrayNum) {
  let firstVal = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstVal != null) {
    firstVal = firstVal[0];
  }
  let firstNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstNum != null) {
    firstNum = firstNum[firstArrayNum];
  }
  let secondNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (secondNum != null) {
    secondNum = secondNum[secondArrayNum];
  }
  let ifStatementGoalValue = JSON.parse(localStorage.getItem("storedGoalChM"));
  if (ifStatementGoalValue != null) {
    ifStatementGoalValue = ifStatementGoalValue[11];
  }
  let ifStatementSecondGoalValue = JSON.parse(localStorage.getItem("storedGoalChM"));
  if (ifStatementSecondGoalValue != null) {
    ifStatementSecondGoalValue = ifStatementSecondGoalValue[firstArrayNum];
  }
  const currentDate = new Date();
  const date1 = new Date(firstVal);
  const date2 = new Date(currentDate);
  let tempHighestReturnVal = 0;
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Math.round(Difference_In_Time / (1e3 * 3600 * 24));
  if (Difference_In_Days >= inDaysNumber) {
    if (ifStatementGoalValue >= ifStatementSecondGoalValue) {
      const inV = parseInt(JSON.parse(localStorage.getItem("storedMasterDate"))?.length - 1);
      for (let i = 0; i < inV; i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("storedMasterDate"))[i]);
        if (dateRangeCheck(firstNum, secondNum, tempConvertedDate)) {
          const tempInHighestVal = JSON.parse(localStorage.getItem("storedMasterData"))[i];
          tempHighestReturnVal = tempHighestReturnVal == null || tempInHighestVal > tempHighestReturnVal ? tempInHighestVal : tempHighestReturnVal;
        }
      }
      return tempHighestReturnVal == "undefined" ? "-" : tempHighestReturnVal;
    } else if (getHighestWPM() < JSON.parse(localStorage.getItem("storedGoalChM"))[secondArrayNum]) {
      for (let i = 0; i < parseInt(JSON.parse(localStorage.getItem("storedMasterDate"))[JSON.parse(localStorage.getItem("storedMasterDate")).length - 1]); i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("storedMasterDate"))[i]);
        if (tempConvertedDate == secondNum) {
          return JSON.parse(localStorage.getItem("storedMasterData"))[i];
        }
      }
    }
  } else {
    return "-";
  }
}
function calculateActualValueCPM(inDaysNumber, firstArrayNum, secondArrayNum) {
  let firstVal = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstVal != null) {
    firstVal = firstVal[0];
  }
  let firstNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstNum != null) {
    firstNum = firstNum[firstArrayNum];
  }
  let secondNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (secondNum != null) {
    secondNum = secondNum[secondArrayNum];
  }
  let ifStatementGoalValue = JSON.parse(localStorage.getItem("storedGoalCPM"));
  if (ifStatementGoalValue != null) {
    ifStatementGoalValue = ifStatementGoalValue[11];
  }
  let ifStatementSecondGoalValue = JSON.parse(localStorage.getItem("storedGoalCPM"));
  if (ifStatementSecondGoalValue != null) {
    ifStatementSecondGoalValue = ifStatementSecondGoalValue[firstArrayNum];
  }
  const currentDate = new Date();
  const date1 = new Date(firstVal);
  const date2 = new Date(currentDate);
  let tempHighestReturnVal = 0;
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Math.round(Difference_In_Time / (1e3 * 3600 * 24));
  if (Difference_In_Days >= inDaysNumber) {
    if (ifStatementGoalValue >= ifStatementSecondGoalValue) {
      const inV = parseInt(JSON.parse(localStorage.getItem("storedCharactersPerMinuteDate"))?.length - 1);
      for (let i = 0; i < inV; i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("storedCharactersPerMinuteDate"))[i]);
        if (dateRangeCheck(firstNum, secondNum, tempConvertedDate)) {
          const tempInHighestVal = JSON.parse(localStorage.getItem("storedCharactersPerMinuteData"))[i];
          tempHighestReturnVal = tempHighestReturnVal == null || tempInHighestVal > tempHighestReturnVal ? tempInHighestVal : tempHighestReturnVal;
        }
      }
      return tempHighestReturnVal == "undefined" ? "-" : tempHighestReturnVal;
    } else if (getHighestWPM() < JSON.parse(localStorage.getItem("storedGoalWPM"))[secondArrayNum]) {
      for (let i = 0; i < parseInt(JSON.parse(localStorage.getItem("wpmGraphDate"))[JSON.parse(localStorage.getItem("wpmGraphDate")).length - 1]); i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("wpmGraphDate"))[i]);
        if (tempConvertedDate == secondNum) {
          return JSON.parse(localStorage.getItem("wpmGraphWPM"))[i];
        }
      }
    }
  } else {
    return "-";
  }
}
function calculateActualValueAWPM(inDaysNumber, firstArrayNum, secondArrayNum) {
  let firstVal = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstVal != null) {
    firstVal = firstVal[0];
  }
  let firstNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (firstNum != null) {
    firstNum = firstNum[firstArrayNum];
  }
  let secondNum = JSON?.parse(localStorage?.getItem("storedGoalDate"));
  if (secondNum != null) {
    secondNum = secondNum[secondArrayNum];
  }
  let ifStatementGoalValue = JSON.parse(localStorage.getItem("storedGoalAWPM"));
  if (ifStatementGoalValue != null) {
    ifStatementGoalValue = ifStatementGoalValue[11];
  }
  let ifStatementSecondGoalValue = JSON.parse(localStorage.getItem("storedGoalAWPM"));
  if (ifStatementSecondGoalValue != null) {
    ifStatementSecondGoalValue = ifStatementSecondGoalValue[firstArrayNum];
  }
  const currentDate = new Date();
  const date1 = new Date(firstVal);
  const date2 = new Date(currentDate);
  let tempHighestReturnVal = 0;
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Math.round(Difference_In_Time / (1e3 * 3600 * 24));
  if (Difference_In_Days >= inDaysNumber) {
    if (ifStatementGoalValue >= ifStatementSecondGoalValue) {
      const inV = parseInt(JSON.parse(localStorage.getItem("avgGraphDate"))?.length - 1);
      for (let i = 0; i < inV; i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("avgGraphDate"))[i]);
        if (dateRangeCheck(firstNum, secondNum, tempConvertedDate)) {
          const tempInHighestVal = JSON.parse(localStorage.getItem("avgGraphWPM"))[i];
          tempHighestReturnVal = tempHighestReturnVal == null || tempInHighestVal > tempHighestReturnVal ? tempInHighestVal : tempHighestReturnVal;
        }
      }
      return tempHighestReturnVal == "undefined" ? "-" : tempHighestReturnVal;
    } else if (getHighestWPM() < JSON.parse(localStorage.getItem("storedGoalAWPM"))[secondArrayNum]) {
      for (let i = 0; i < parseInt(JSON.parse(localStorage.getItem("avgGraphDate"))[JSON.parse(localStorage.getItem("avgGraphDate")).length - 1]); i++) {
        const tempConvertedDate = convertDate(JSON.parse(localStorage.getItem("avgGraphDate"))[i]);
        if (tempConvertedDate == secondNum) {
          return JSON.parse(localStorage.getItem("avgGraphWPM"))[i];
        }
      }
    }
  } else {
    return "-";
  }
}
function testFunc(inDaysNumber, firstArrayNum, secondArrayNum) {
  const firstNum = JSON.parse(localStorage.getItem("storedGoalDate"))[firstArrayNum];
  const secondNum = JSON.parse(localStorage.getItem("storedGoalDate"))[secondArrayNum];
  const date1 = new Date(firstNum);
  const date2 = new Date(secondNum);
  const currentDate = new Date();
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Difference_In_Time / (1e3 * 3600 * 24);
  const g = localStorage.getItem("wpmGraphDate");
}
export const PracticeStreak = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-green-500`
})``;
const tableText = {
  textAlign: "center"
};
const sd = {
  fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont"
};
const resetGoalButtonStyleActive = {
  position: "absolute",
  marginLeft: "50px",
  marginTop: "15px",
  display: ""
};
const resetGoalButtonStyleInactive = {
  position: "absolute",
  marginLeft: "50px",
  marginTop: "15px",
  display: "none"
};
const here = {
  position: "absolute",
  zIndex: "1",
  top: "45%",
  left: "22.5%",
  width: "50%",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.25)"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGF0YUNhcmQudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBLE1BQU0sZ0JBQWdCLE1BQU07QUFJMUIsU0FBTyxjQUFjLElBQUksTUFBTTtBQUFBO0FBR2pDLDBCQUEwQjtBQUN4QixRQUFNLFVBQVUsSUFBSTtBQUNwQixRQUFNLFFBQVEsUUFBUSxnQkFBZ0I7QUFDdEMsUUFBTSxNQUFNLFFBQVE7QUFDcEIsUUFBTSxPQUFPLFFBQVE7QUFFckIsUUFBTSxVQUFVLFFBQVEsTUFBTSxNQUFNLE1BQU07QUFDMUMsU0FBTztBQUFBO0FBR1QscUJBQXFCLE1BQVk7QUFDL0IsUUFBTSxVQUFVLElBQUksS0FBSztBQUN6QixRQUFNLFFBQVEsUUFBUSxhQUFhO0FBQ25DLFFBQU0sTUFBTSxRQUFRO0FBQ3BCLFFBQU0sT0FBTyxRQUFRO0FBRXJCLFFBQU0sVUFBVSxRQUFRLE1BQU0sTUFBTSxNQUFNO0FBQzFDLFNBQU87QUFBQTtBQUdULDZCQUE2QixNQUFZO0FBQ3ZDLFFBQU0sVUFBVSxJQUFJLEtBQUs7QUFDekIsUUFBTSxRQUFRLFFBQVEsYUFBYTtBQUVuQyxTQUFPO0FBQUE7QUFHVCwyQkFBMkIsTUFBWTtBQUNyQyxRQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLFFBQU0sTUFBTSxRQUFRO0FBRXBCLFNBQU87QUFBQTtBQUdULHdCQUF3QixNQUFjLElBQVksT0FBZTtBQUMvRCxRQUFNLFFBQVEsS0FBSyxNQUFNO0FBQ3pCLFFBQU0sUUFBUSxLQUFLLE1BQU07QUFDekIsUUFBTSxRQUFRLEtBQUssTUFBTTtBQUV6QixNQUFJLFNBQVMsU0FBUyxTQUFTLE9BQU87QUFDcEMsV0FBTztBQUFBO0FBRVQsU0FBTztBQUFBO0FBR1Qsc0NBQXNDLE1BQU0sVUFBVTtBQUFBLEVB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
