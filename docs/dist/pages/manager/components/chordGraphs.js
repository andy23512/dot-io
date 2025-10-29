import ApexCharts from "../../../../snowpack/pkg/apexcharts.js";
import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import usePopover from "../../../hooks/usePopover.js";
import {HorizontalRule} from "../manager.styled.js";
export function storeData(data, dateData) {
  const wpmGraphWPM = [];
  const wpmGraphDate = [];
  const checkExistWPMD = localStorage.getItem("wpmGraphDate");
  const checkExistWPM = localStorage.getItem("wpmGraphWPM");
  const checkExistWPMDc = JSON.parse(checkExistWPMD);
  const checkExistWPMc = JSON.parse(checkExistWPM);
  const currentDate = new Date();
  const date = currentDate.getDate();
  if (localStorage.getItem("topWPMDate") == null) {
    localStorage.setItem("topWPMDate", JSON.stringify(date));
    wpmGraphWPM.push(Math.round(data));
    wpmGraphDate.push(dateData);
    localStorage.setItem("wpmGraphWPM", JSON.stringify(wpmGraphWPM));
    localStorage.setItem("wpmGraphDate", JSON.stringify(wpmGraphDate));
  } else if (data > parseInt(checkExistWPMc[checkExistWPMc.length - 1])) {
    if (parseInt(localStorage.getItem("topWPMDate")) - date == 0) {
      const ge2 = localStorage.getItem("wpmGraphDate");
      const ge = localStorage.getItem("wpmGraphWPM");
      const wpmData = JSON.parse(ge);
      const dateD = JSON.parse(ge2);
      wpmData.splice(wpmData.length - 1, 1, Math.round(data));
      dateD.splice(dateD.length - 1, 1, dateData);
      localStorage.setItem("wpmGraphWPM", JSON.stringify(wpmData));
      localStorage.setItem("wpmGraphDate", JSON.stringify(dateD));
    } else {
      localStorage.setItem("topWPMDate", JSON.stringify(date));
      const ge2 = localStorage.getItem("wpmGraphDate");
      const ge = localStorage.getItem("wpmGraphWPM");
      const wpmData = JSON.parse(ge);
      const dateD = JSON.parse(ge2);
      wpmData.push(Math.round(data));
      dateD.push(dateData);
      localStorage.setItem("wpmGraphWPM", JSON.stringify(wpmData));
      localStorage.setItem("wpmGraphDate", JSON.stringify(dateD));
    }
  }
  if (JSON.parse(localStorage.getItem("topWPMDate") != null) && parseInt(JSON.parse(localStorage.getItem("theDate"))) != parseInt(JSON.parse(localStorage.getItem("topWPMDate")))) {
    const ge2 = localStorage.getItem("wpmGraphDate");
    const ge = localStorage.getItem("wpmGraphWPM");
    localStorage.setItem("topWPMDate", JSON.stringify(date));
    const wpmData = JSON.parse(ge);
    const dateD = JSON.parse(ge2);
    wpmData.push(parseInt(wpmData[wpmData.length - 1]));
    dateD.push(dateData);
    localStorage.setItem("wpmGraphWPM", JSON.stringify(wpmData));
    localStorage.setItem("wpmGraphDate", JSON.stringify(dateD));
  }
}
export function storeAverageData(avgData, dateD, inChordMasteredValue, inAvgChordCount) {
  const avgGraphWPM = [];
  const avgGraphDate = [];
  const masteredCounterArray = [];
  const currentDate = new Date();
  const date = currentDate.getDate();
  const checkInDate = localStorage.getItem("theDate");
  const ifCheckInDate = JSON.parse(checkInDate);
  if (localStorage.getItem("theDate") == null) {
    if (localStorage.getItem("averageChordCounter") == null) {
      localStorage.setItem("averageChordCounter", JSON.stringify(masteredCounterArray));
      localStorage.setItem("prevAverageChordCounter", JSON.stringify(0));
    }
    if (inAvgChordCount != localStorage.getItem("prevAverageChordCounter")) {
      let avgCount = JSON.parse(localStorage.getItem("averageChordCounter"));
      avgCount = +inAvgChordCount;
      let prevAvgCount = JSON.parse(localStorage.getItem("prevAverageChordCounter"));
      prevAvgCount = inAvgChordCount;
      localStorage.setItem("averageChordCounter", JSON.stringify(avgCount));
      localStorage.setItem("prevAverageChordCounter", JSON.stringify(prevAvgCount));
    }
    localStorage.setItem("count", JSON.stringify(0));
    localStorage.setItem("dailyWPMAVG", JSON.stringify(0));
    const getCounterFromLocal = localStorage.getItem("count");
    const getDailyWPM = localStorage.getItem("dailyWPMAVG");
    let parsedCounterFromLocal = JSON.parse(getCounterFromLocal);
    let dailyWPM = JSON.parse(getDailyWPM);
    parsedCounterFromLocal++;
    localStorage.setItem("count", JSON.stringify(parsedCounterFromLocal));
    const streak = 0;
    storeData(avgData, dateD);
    localStorage.setItem("streak", JSON.stringify(streak));
    dailyWPM = +avgData;
    avgGraphWPM.push(avgData);
    avgGraphDate.push(dateD);
    localStorage.setItem("theDate", JSON.stringify(date));
    localStorage.setItem("avgGraphWPM", JSON.stringify(avgGraphWPM));
    localStorage.setItem("avgGraphDate", JSON.stringify(avgGraphDate));
    localStorage.setItem("dailyWPMAVG", JSON.stringify(dailyWPM));
  } else {
    if (date - ifCheckInDate >= 2 || date - ifCheckInDate <= -2) {
      if (localStorage.getItem("averageCount") == null) {
        localStorage.setItem("averageCount", JSON.stringify(0));
      } else {
        localStorage.setItem("averageCount", JSON.stringify(0));
      }
      localStorage.setItem("averageChordCounter", JSON.stringify(0));
      localStorage.setItem("prevAverageChordCounter", JSON.stringify(6));
      localStorage.setItem("count", JSON.stringify(0));
      localStorage.setItem("dailyWPMAVG", JSON.stringify(0));
      const getCounterFromLocal = localStorage.getItem("count");
      const getDailyWPM = localStorage.getItem("dailyWPMAVG");
      const avgGetGD = localStorage.getItem("avgGraphDate");
      const avgGetGW = localStorage.getItem("avgGraphWPM");
      const avgDData = JSON.parse(avgGetGD);
      const avgWData = JSON.parse(avgGetGW);
      let parsedCounterFromLocal = JSON.parse(getCounterFromLocal);
      let dailyWPM = JSON.parse(getDailyWPM);
      parsedCounterFromLocal++;
      localStorage.setItem("count", JSON.stringify(parsedCounterFromLocal));
      const streak = 0;
      storeData(avgData, dateD);
      localStorage.setItem("streak", JSON.stringify(streak));
      dailyWPM = +avgData;
      avgWData.push(avgData);
      avgDData.push(dateD);
      localStorage.setItem("theDate", JSON.stringify(date));
      localStorage.setItem("avgGraphWPM", JSON.stringify(avgWData));
      localStorage.setItem("avgGraphDate", JSON.stringify(avgDData));
      localStorage.setItem("dailyWPMAVG", JSON.stringify(dailyWPM));
    } else if (date - parseInt(localStorage.getItem("theDate")) == 1) {
      if (inAvgChordCount != localStorage.getItem("prevAverageChordCounter")) {
        let avgCount = JSON.parse(localStorage.getItem("averageChordCounter"));
        let prevAvgCount = JSON.parse(localStorage.getItem("prevAverageChordCounter"));
        const inValtoAdd = inAvgChordCount == 6 ? 6 : 1;
        avgCount = avgCount + inValtoAdd;
        prevAvgCount = inAvgChordCount;
        localStorage.setItem("averageChordCounter", JSON.stringify(avgCount));
        localStorage.setItem("prevAverageChordCounter", JSON.stringify(prevAvgCount));
      }
      localStorage.setItem("averageChordCounter", JSON.stringify(0));
      localStorage.setItem("prevAverageChordCounter", JSON.stringify(6));
      localStorage.setItem("count", JSON.stringify(0));
      localStorage.setItem("dailyWPMAVG", JSON.stringify(0));
      const getCounterFromLocal = localStorage.getItem("count");
      const getDailyWPM = localStorage.getItem("dailyWPMAVG");
      let parsedCounterFromLocal = JSON.parse(getCounterFromLocal);
      parsedCounterFromLocal++;
      localStorage.setItem("count", JSON.stringify(parsedCounterFromLocal));
      storeData(avgData, dateD);
      const avgGetGD = localStorage.getItem("avgGraphDate");
      const avgGetGW = localStorage.getItem("avgGraphWPM");
      const avgDData = JSON.parse(avgGetGD);
      const avgWData = JSON.parse(avgGetGW);
      localStorage.setItem("theDate", JSON.stringify(date));
      const val = (avgData + parseInt(avgWData[avgWData.length - 1])) / 2;
      avgWData.push(Math.round(val));
      avgDData.push(dateD);
      localStorage.setItem("avgGraphWPM", JSON.stringify(avgWData));
      localStorage.setItem("avgGraphDate", JSON.stringify(avgDData));
      const streak = localStorage.getItem("streak");
      const streakVal = JSON.parse(streak);
      localStorage.setItem("streak", JSON.stringify(parseInt(streakVal) + 1));
    } else if (parseInt(localStorage.getItem("theDate")) - date == 0) {
      if (localStorage.getItem("averageChordCounter") == null) {
        localStorage.setItem("averageChordCounter", JSON.stringify(0));
        localStorage.setItem("prevAverageChordCounter", JSON.stringify(0));
      }
      if (inAvgChordCount != localStorage.getItem("prevAverageChordCounter")) {
        let avgCount2 = JSON.parse(localStorage.getItem("averageChordCounter"));
        let prevAvgCount = JSON.parse(localStorage.getItem("prevAverageChordCounter"));
        const inValtoAdd = inAvgChordCount == 6 ? 6 : 1;
        avgCount2 = avgCount2 + inValtoAdd;
        prevAvgCount = inAvgChordCount;
        localStorage.setItem("averageChordCounter", JSON.stringify(avgCount2));
        localStorage.setItem("prevAverageChordCounter", JSON.stringify(prevAvgCount));
      }
      const avgCount = JSON.parse(localStorage.getItem("averageChordCounter"));
      const avgGetGD = localStorage.getItem("avgGraphDate");
      const avgGetGW = localStorage.getItem("avgGraphWPM");
      const avgWData = JSON.parse(avgGetGW);
      const avgDData = JSON.parse(avgGetGD);
      let countCalc = 0;
      Number(parseInt(avgWData[avgWData.length - 1])) >= 1 ? countCalc = 1 : "";
      const val = (Number(avgData) + Number(avgWData[avgWData.length - 1])) / (1 + countCalc);
      console.log("THis is the stats " + avgCount + " " + avgWData[avgWData.length - 1] + " " + avgData + " " + val);
      avgWData.pop();
      avgWData.push(val.toFixed(0));
      avgDData.splice(avgDData.length - 1, 1, dateD);
      localStorage.setItem("avgGraphWPM", JSON.stringify(avgWData));
      localStorage.setItem("avgGraphDate", JSON.stringify(avgDData));
    } else {
    }
  }
}
export function storeMasteredData(dateD, inChordMasteredValue) {
  const storeMasteredData2 = [];
  const storeMasteredDate = [];
  const masteredCounterArray = [];
  const currentDate = new Date();
  const date = currentDate.getDate();
  const checkInDate = localStorage.getItem("MasteredTheDate");
  const ifCheckInDate = JSON.parse(checkInDate);
  const storedMasterData = JSON.parse(localStorage.getItem("storedMasterData"));
  const storedMasterDate = JSON.parse(localStorage.getItem("storedMasterDate"));
  const prevStoredAVGWPM2 = JSON.parse(localStorage.getItem("avgGraphWPM"));
  const prevStoredAVGDate = JSON.parse(localStorage.getItem("avgGraphDate"));
  const prevStoredWPMWPM = JSON.parse(localStorage.getItem("wpmGraphWPM"));
  if (inChordMasteredValue >= 100 && inChordMasteredValue != JSON.parse(localStorage.getItem("prevMasteredChordVal")) && inChordMasteredValue != 6276) {
    if ((prevStoredWPMWPM != null || prevStoredAVGWPM2 != null) && storedMasterData == null) {
      storeMasteredData2.push(0);
      storeMasteredDate.push(prevStoredAVGDate[0]);
      localStorage.setItem("storedMasterData", JSON.stringify(storeMasteredData2));
      localStorage.setItem("storedMasterDate", JSON.stringify(storeMasteredDate));
      localStorage.setItem("prevMasteredChordVal", JSON.stringify(0));
      localStorage.setItem("masteredCount", JSON.stringify(0));
      localStorage.setItem("MasteredTheDate", JSON.stringify(date));
    } else if (storedMasterData == null) {
      storeMasteredData2.push(0);
      storeMasteredDate.push(dateD);
      localStorage.setItem("storedMasterData", JSON.stringify(storeMasteredData2));
      localStorage.setItem("storedMasterDate", JSON.stringify(storeMasteredDate));
      localStorage.setItem("prevMasteredChordVal", JSON.stringify(0));
      localStorage.setItem("masteredCount", JSON.stringify(0));
      localStorage.setItem("MasteredTheDate", JSON.stringify(date));
    }
    if (parseInt(localStorage.getItem("MasteredTheDate")) - date == 0) {
      const storedMD = localStorage.getItem("storedMasterData");
      const storedMDa = localStorage.getItem("storedMasterDate");
      const storedPVal = localStorage.getItem("prevMasteredChordVal");
      const storedMC = localStorage.getItem("masteredCount");
      const storedMData2 = JSON.parse(storedMD);
      const storedMDate2 = JSON.parse(storedMDa);
      let storedPValue = JSON.parse(storedPVal);
      let storedMCount = JSON.parse(storedMC);
      storedPValue = inChordMasteredValue;
      storedMCount = storedMCount + 1;
      storedMData2.splice(storedMData2.length - 1, 1, storedMCount);
      storedMDate2.splice(storedMDate2.length - 1, 1, dateD);
      localStorage.setItem("storedMasterData", JSON.stringify(storedMData2));
      localStorage.setItem("storedMasterDate", JSON.stringify(storedMDate2));
      localStorage.setItem("prevMasteredChordVal", JSON.stringify(storedPValue));
      localStorage.setItem("masteredCount", JSON.stringify(storedMCount));
      localStorage.setItem("MasteredTheDate", JSON.stringify(date));
    } else {
      const storedMD = localStorage.getItem("storedMasterData");
      const storedMDa = localStorage.getItem("storedMasterDate");
      const storedPVal = localStorage.getItem("prevMasteredChordVal");
      const storedMC = localStorage.getItem("masteredCount");
      const storedMData2 = JSON.parse(storedMD);
      const storedMDate2 = JSON.parse(storedMDa);
      let storedPValue = JSON.parse(storedPVal);
      let storedMCount = JSON.parse(storedMC);
      storedMCount = storedMCount + 1;
      storedMData2.push(storedMCount);
      storedMDate2.push(dateD);
      storedPValue = inChordMasteredValue;
      storedMCount = storedMCount + 1;
      localStorage.setItem("storedMasterData", JSON.stringify(storedMData2));
      localStorage.setItem("storedMasterDate", JSON.stringify(storedMDate2));
      localStorage.setItem("prevMasteredChordVal", JSON.stringify(storedPValue));
      localStorage.setItem("masteredCount", JSON.stringify(storedMCount));
      localStorage.setItem("MasteredTheDate", JSON.stringify(date));
    }
  }
}
export function storeCharactersPerMinute(dateD, inCharPerMinute, inAvgChordCount) {
  const storeCharactersPerMinuteData = [];
  const storeCharactersPerMinuteDate = [];
  const cpmCounterArray = [];
  console.log("In value for CharPerMin " + inCharPerMinute);
  const currentDate = new Date();
  const date = currentDate.getDate();
  const checkInDate = localStorage.getItem("CPMTheDate");
  const ifCheckInDate = JSON.parse(checkInDate);
  const storedCharactersPerMinuteData = JSON.parse(localStorage.getItem("storedCharactersPerMinuteData"));
  const storedCharactersPerMinuteDate = JSON.parse(localStorage.getItem("storedCharactersPerMinuteDate"));
  const prevStoredW = JSON.parse(localStorage.getItem("wpmGraphDate"));
  const prevStoredAVGDate = JSON.parse(localStorage.getItem("avgGraphDate"));
  const prevStoredWPMWPM = JSON.parse(localStorage.getItem("wpmGraphWPM"));
  if ((prevStoredWPMWPM != null || prevStoredAVGWPM != null) && storedCharactersPerMinuteData == null) {
    storeCharactersPerMinuteData.push(0);
    storeCharactersPerMinuteDate.push(prevStoredW[0]);
    localStorage.setItem("storedCharactersPerMinuteData", JSON.stringify(storeCharactersPerMinuteData));
    localStorage.setItem("storedCharactersPerMinuteDate", JSON.stringify(storeCharactersPerMinuteDate));
    localStorage.setItem("prevCPMVal", JSON.stringify(0));
    localStorage.setItem("CPMCount", JSON.stringify(0));
    localStorage.setItem("CPMTheDate", JSON.stringify(date));
  }
  if (storedCharactersPerMinuteData == null) {
    storeCharactersPerMinuteData.push(0);
    storeCharactersPerMinuteDate.push(dateD);
    localStorage.setItem("storedCharactersPerMinuteData", JSON.stringify(storeCharactersPerMinuteData));
    localStorage.setItem("storedCharactersPerMinuteDate", JSON.stringify(storeCharactersPerMinuteDate));
    localStorage.setItem("prevCPMVal", JSON.stringify(0));
    localStorage.setItem("CPMCount", JSON.stringify(0));
    localStorage.setItem("CPMTheDate", JSON.stringify(date));
  }
  if (parseInt(localStorage.getItem("CPMTheDate")) - date == 0) {
    const storedMD = localStorage.getItem("storedCharactersPerMinuteData");
    const storedMDa = localStorage.getItem("storedCharactersPerMinuteDate");
    const storedPVal = localStorage.getItem("prevCPMVal");
    const storedMC = localStorage.getItem("CPMCount");
    const storedCData = JSON.parse(storedMD);
    const storedCDate = JSON.parse(storedMDa);
    let storedPCValue = JSON.parse(storedPVal);
    const storedCCount = JSON.parse(storedMC);
    if (inAvgChordCount != localStorage.getItem("prevCPMVal")) {
      let avgCount2 = JSON.parse(localStorage.getItem("CPMCount"));
      let prevCPerMinCount = JSON.parse(localStorage.getItem("prevCPMVal"));
      const inValtoAdd = inAvgChordCount == 6 ? 6 : 1;
      avgCount2 = avgCount2 + inValtoAdd;
      prevCPerMinCount = inAvgChordCount;
      localStorage.setItem("CPMCount", JSON.stringify(avgCount2));
      localStorage.setItem("prevCPMVal", JSON.stringify(prevCPerMinCount));
    }
    const avgCount = JSON.parse(localStorage.getItem("CPMCount"));
    storedPCValue = inCharPerMinute;
    const val = (inCharPerMinute + parseInt(storedCData[storedCData.length - 1]) * (avgCount - 1)) / avgCount;
    storedCData.splice(storedCData.length - 1, 1, val);
    storedCDate.splice(storedCDate.length - 1, 1, dateD);
    localStorage.setItem("storedCharactersPerMinuteData", JSON.stringify(storedCData));
    localStorage.setItem("storedCharactersPerMinuteDate", JSON.stringify(storedCDate));
    localStorage.setItem("CPMTheDate", JSON.stringify(date));
    localStorage.setItem("CPMCount", JSON.stringify(avgCount));
    console.log(storedCData);
    console.log(storedCDate);
    console.log(date);
    console.log(avgCount);
  } else {
    const storedMD = localStorage.getItem("storedCharactersPerMinuteData");
    const storedMDa = localStorage.getItem("storedCharactersPerMinuteDate");
    const storedPVal = localStorage.getItem("prevCPMVal");
    const storedMC = localStorage.getItem("CPMCount");
    const storedCData = JSON.parse(storedMD);
    const storedCDate = JSON.parse(storedMDa);
    let storedPValue = JSON.parse(storedPVal);
    let storedMCount = JSON.parse(storedMC);
    storedMCount = 1;
    storedCData.push(storedMCount);
    storedCDate.push(dateD);
    storedPValue = inCharPerMinute;
    storedMCount = storedMCount + 1;
    const avgCount = JSON.parse(localStorage.getItem("CPMCount"));
    const val = (inCharPerMinute + parseInt(storedCData[storedCData.length - 1]) * (avgCount - 1)) / avgCount;
    storedCData.splice(storedCData.length - 1, 1, val);
    storedCDate.splice(storedCDate.length - 1, 1, dateD);
    localStorage.setItem("storedCharactersPerMinuteData", JSON.stringify(storedMData));
    localStorage.setItem("storedCharactersPerMinuteDate", JSON.stringify(storedMDate));
    localStorage.setItem("prevCPMVal", JSON.stringify(storedPValue));
    localStorage.setItem("CPMCount", JSON.stringify(storedMCount));
    localStorage.setItem("CPMTheDate", JSON.stringify(date));
  }
}
export function getHighestWPM() {
  const checkWPMArray = localStorage.getItem("wpmGraphWPM");
  const checkIt = JSON.parse(checkWPMArray);
  if (checkIt == null) {
    return 0;
  } else {
    return parseInt(JSON.parse(localStorage.getItem("wpmGraphWPM"))[JSON.parse(localStorage.getItem("wpmGraphWPM")).length - 1]);
  }
}
export function getAverageWPM() {
  const checkWPMArray = localStorage.getItem("avgGraphWPM");
  const checkIt = JSON.parse(checkWPMArray);
  if (checkIt == null) {
    return 0;
  } else {
    return parseInt(JSON.parse(localStorage.getItem("avgGraphWPM"))[JSON.parse(localStorage.getItem("avgGraphWPM")).length - 1]);
  }
}
export function getChordsMastered() {
  const masteredArray = localStorage.getItem("storedMasterData");
  const checkIt = JSON.parse(masteredArray);
  if (checkIt == null) {
    return 0;
  } else {
    return parseInt(JSON.parse(localStorage.getItem("storedMasterData"))[JSON.parse(localStorage.getItem("storedMasterData")).length - 1]);
  }
}
export function getChordsPerMinute() {
  const chordsPerMinArray = localStorage.getItem("storedCharactersPerMinuteData");
  const checkIt = JSON.parse(chordsPerMinArray);
  if (checkIt == null) {
    return 0;
  } else {
    return parseInt(JSON.parse(localStorage.getItem("storedCharactersPerMinuteData"))[JSON.parse(localStorage.getItem("storedCharactersPerMinuteData")).length - 1]);
  }
}
export function myGraph() {
  const optionsEmpty = {
    chart: {
      type: "area",
      height: 350,
      foreColor: "#FFFFFF",
      stacked: false,
      dropShadow: {
        enabled: false,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 1
      }
    },
    colors: ["#22C55E", "#0090FF", "pink", "yellow"],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        colors: void 0
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45
        }
      },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45
      }
    },
    series: [
      {
        name: "",
        data: ""
      },
      {
        name: "",
        data: ""
      }
    ],
    markers: {
      size: 0,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      onClick: void 0,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: -5
      },
      tooltip: {
        theme: "dark"
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MM yyyy"
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false
      }
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };
  const options = {
    chart: {
      type: "area",
      height: 350,
      foreColor: "#FFFFFF",
      stacked: false,
      dropShadow: {
        enabled: false,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 1
      }
    },
    colors: ["#22C55E", "#0090FF", "pink", "yellow"],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        colors: void 0
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45
        }
      },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45
      }
    },
    series: [
      {
        name: "Best WPM",
        data: generateDayWiseTimeSeries1()
      },
      {
        name: "Average Speed",
        data: generateDayWiseTimeSeries2()
      }
    ],
    markers: {
      size: 0,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      onClick: void 0,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: -5
      },
      tooltip: {
        theme: "dark"
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MM yyyy"
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false
      }
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };
  const chart = new ApexCharts(document.getElementById("timeline-chart"), options);
  const chart2 = new ApexCharts(document.getElementById("timeline-chart2"), optionsEmpty);
  const chart3 = new ApexCharts(document.getElementById("timeline-chart3"), optionsEmpty);
  const chart4 = new ApexCharts(document.getElementById("timeline-chart4"), optionsEmpty);
  const chart5 = new ApexCharts(document.getElementById("timeline-chart5"), optionsEmpty);
  const chart6 = new ApexCharts(document.getElementById("timeline-chart6"), optionsEmpty);
  chart.render();
  chart2.render();
  chart3.render();
  chart4.render();
  chart5.render();
  chart6.render();
}
function generateDayWiseTimeSeries1() {
  const ge2 = localStorage.getItem("wpmGraphDate");
  const ge = localStorage.getItem("wpmGraphWPM");
  const wpmData = JSON.parse(ge);
  const dateD = JSON.parse(ge2);
  const currentDate = new Date();
  if (parseInt(localStorage.getItem("theDate")) == null) {
    storeData(0, currentDate);
  }
  let i = 0;
  const series = [];
  if (wpmData != null) {
    while (i < wpmData.length) {
      series.push([dateD[i], wpmData[i]]);
      i++;
    }
  } else {
    const todaysDate = new Date();
    series.push([todaysDate, 0]);
  }
  return series;
}
function generateDayWiseTimeSeries2() {
  const ge3 = localStorage.getItem("avgGraphWPM");
  const ge4 = localStorage.getItem("avgGraphDate");
  const avgWpmData = JSON.parse(ge3);
  const avgDateD = JSON.parse(ge4);
  let i = 0;
  const series = [];
  const currentDate = new Date();
  if (parseInt(localStorage.getItem("theDate")) == null) {
    storeAverageData(0, currentDate, 0, 0);
  }
  if (avgWpmData != null) {
    while (i < avgWpmData.length) {
      series.push([avgDateD[i], avgWpmData[i]]);
      i++;
    }
  } else {
    const todaysDate = new Date();
    series.push([todaysDate, 0]);
  }
  return series;
}
function generateDayWiseTimeSeries3() {
  const ge2 = localStorage.getItem("storedMasterDate");
  const ge = localStorage.getItem("storedMasterData");
  const wpmData = JSON.parse(ge);
  const dateD = JSON.parse(ge2);
  const currentDate = new Date();
  if (parseInt(localStorage.getItem("theDate")) == null) {
    storeMasteredData(currentDate, 0);
  }
  let i = 0;
  const series = [];
  if (wpmData != null) {
    while (i < wpmData.length) {
      series.push([dateD[i], wpmData[i]]);
      i++;
    }
  } else {
    const todaysDate = new Date();
    series.push([todaysDate, 0]);
  }
  return series;
}
function generateDayWiseTimeSeries4() {
  const ge2 = localStorage.getItem("storedCharactersPerMinuteDate");
  const ge = localStorage.getItem("storedCharactersPerMinuteData");
  const wpmData = JSON.parse(ge);
  const dateD = JSON.parse(ge2);
  const currentDate = new Date();
  if (parseInt(localStorage.getItem("theDate")) == null) {
    storeMasteredData(currentDate, 0);
  }
  let i = 0;
  const series = [];
  if (wpmData != null) {
    while (i < wpmData.length) {
      series.push([dateD[i], wpmData[i]]);
      i++;
    }
  } else {
    const todaysDate = new Date();
    series.push([todaysDate, 0]);
  }
  return series;
}
export function Graph() {
  const {parentProps: topSpeed, Popper: SpeedPopper} = usePopover("This shows the fastest you have typed in any training module. Get a faster top speed to progress through the training modules");
  const {parentProps: avgSpeed, Popper: avgPopper} = usePopover("This shows the average speed you have typed for the most recent day you have practiced.");
  const {parentProps: chordsMastered, Popper: chordsPopper} = usePopover("This shows the number of words you have Mastered by completing a word at a speed of 100 WPM or higher.");
  const {parentProps: practiceStreak, Popper: practicePopper} = usePopover("This shows how many days in a row you have practiced in any training module.");
  React.useEffect(() => {
    myGraph();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, practicePopper, chordsPopper, avgPopper, SpeedPopper, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl font-bold text-white text-center"
  }, "Your Progress"), /* @__PURE__ */ React.createElement(HorizontalRule, null), /* @__PURE__ */ React.createElement("div", {
    className: "flow-root ml-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "float-left w-5/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-white font-mono"
  }, "CPM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-right w-5/12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-white font-mono"
  }, "ChM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-left w-5/12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-white font-mono"
  }, "CM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-right w-5/12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-white font-mono"
  }, "StM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart4"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-left w-5/12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-white font-mono"
  }, "aWPM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-right w-5/12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-white font-mono"
  }, "tWPM"), /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart6"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "float-left w-5/12"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px"
    },
    id: "timeline-chart"
  }))));
}
export const AverageSpeed = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-green-500`
})``;
export const ChordsMastered = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-green-500`
})``;
export const TopSpeed = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-green-500`
})``;
export const PracticeStreak = styled.button.attrs({
  className: `text-white rounded p-2 mb-4 inline-block ml-2 bg-green-500`
})``;
const gridContainer = {
  display: "flex",
  padding: "9.6px",
  marginTop: "20px",
  textAlign: "center"
};
const gridItem = {
  flexGrow: "0",
  color: "white"
};
const tableText = {
  textAlign: "center"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvbWFuYWdlci9jb21wb25lbnRzL2Nob3JkR3JhcGhzLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTywwQkFBbUIsTUFBVyxVQUFlO0FBRWxELFFBQU0sY0FBYztBQUNwQixRQUFNLGVBQWU7QUFFckIsUUFBTSxpQkFBaUIsYUFBYSxRQUFRO0FBQzVDLFFBQU0sZ0JBQWdCLGFBQWEsUUFBUTtBQUMzQyxRQUFNLGtCQUFrQixLQUFLLE1BQU07QUFDbkMsUUFBTSxpQkFBaUIsS0FBSyxNQUFNO0FBR2xDLFFBQU0sY0FBYyxJQUFJO0FBQ3hCLFFBQU0sT0FBTyxZQUFZO0FBRXpCLE1BQUksYUFBYSxRQUFRLGlCQUFpQixNQUFNO0FBQzlDLGlCQUFhLFFBQVEsY0FBYyxLQUFLLFVBQVU7QUFFbEQsZ0JBQVksS0FBSyxLQUFLLE1BQU07QUFDNUIsaUJBQWEsS0FBSztBQUNsQixpQkFBYSxRQUFRLGVBQWUsS0FBSyxVQUFVO0FBQ25ELGlCQUFhLFFBQVEsZ0JBQWdCLEtBQUssVUFBVTtBQUFBLGFBQzNDLE9BQU8sU0FBUyxlQUFlLGVBQWUsU0FBUyxLQUFLO0FBQ3JFLFFBQUksU0FBUyxhQUFhLFFBQVEsaUJBQWlCLFFBQVEsR0FBRztBQUM1RCxZQUFNLE1BQU0sYUFBYSxRQUFRO0FBQ2pDLFlBQU0sS0FBSyxhQUFhLFFBQVE7QUFFaEMsWUFBTSxVQUFVLEtBQUssTUFBTTtBQUMzQixZQUFNLFFBQVEsS0FBSyxNQUFNO0FBRXpCLGNBQVEsT0FBTyxRQUFRLFNBQVMsR0FBRyxHQUFHLEtBQUssTUFBTTtBQUNqRCxZQUFNLE9BQU8sTUFBTSxTQUFTLEdBQUcsR0FBRztBQUVsQyxtQkFBYSxRQUFRLGVBQWUsS0FBSyxVQUFVO0FBQ25ELG1CQUFhLFFBQVEsZ0JBQWdCLEtBQUssVUFBVTtBQUFBLFdBQy9DO0FBQ0wsbUJBQWEsUUFBUSxj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
