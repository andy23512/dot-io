import ApexCharts from "../../../../snowpack/pkg/apexcharts.js";
import React from "../../../../snowpack/pkg/react.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreState, useStoreActions} from "../../../store/store.js";
import {
  getCumulativeAverageChordTypeTime,
  wpmMethodCalculator,
  avgCalculatorForTheSpeedOfLastTen
} from "../../../helpers/aggregation.js";
export function myGraph(wordNames, wordOccurrences, wordPerMinute, rawSpeedOfCurrentWord) {
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
    colors: ["#0090FF", "#22C55E", "#FF0000"],
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
        name: "Average CPM",
        data: wordPerMinute
      },
      {
        name: "Individual CPM",
        data: rawSpeedOfCurrentWord
      },
      {
        name: "Errors",
        data: wordOccurrences
      }
    ],
    xaxis: {
      categories: wordNames
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#0090FF"
        },
        labels: {
          style: {
            colors: ["#0090FF", "#0090FF"]
          }
        },
        title: {
          text: "Raw CPM",
          style: {
            color: "#0090FF"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#22C55E"
          }
        },
        title: {
          text: "Raw CPM",
          style: {
            color: "#22C55E"
          }
        }
      },
      {
        floating: true,
        axisTicks: {
          show: false,
          color: "#22C55E"
        },
        axisBorder: {
          show: false,
          color: "#22C55E"
        },
        labels: {
          show: false,
          color: "#22C55E"
        }
      }
    ],
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd MM yyyy"
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: true
      }
    }
  };
  const chart = new ApexCharts(document.getElementById("timeline-chart"), options);
  chart.render();
}
export function TestCompleteGraph() {
  const trainingStatistics = useStoreState((store) => store.trainingStatistics);
  const localTrainingStatistics = useStoreState((store) => store.localTrainingStatistics);
  const timeTakenToTypeEachWordInOrder = useStoreState((store) => store.timeTakenToTypeEachWordInOrder);
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const wordsPracticedInOrder = useStoreState((store) => store.wordsPracticedInOrder);
  const numberOfErrorsArrayForTestMode = useStoreState((store) => store.numberOfErrorsArrayForTestMode);
  const allTypedCharactersStore = useStoreState((store) => store.allTypedCharactersStore);
  const wordTestNumber = useStoreState((store) => store.wordTestNumber);
  const testTierHighestWPM = useStoreActions((store) => store.setTestTierHighestWPM);
  const averageOfLocalStats = wpmMethodCalculator(getCumulativeAverageChordTypeTime(localTrainingStatistics.statistics));
  const tier = useStoreState((store) => store.trainingLevel);
  let wordNames = [];
  let wordOccurrences = [];
  let wordPerMinute = [];
  let rawSpeedOfCurrentWord = [];
  const chordsToChooseFrom = JSON.parse(localStorage.getItem("chordsToChooseFrom"));
  const finalErrorsArray = [];
  const finalWPMArray = [];
  const finalRawWPM = [];
  let aggregate = 0;
  const timeTakenArray = [];
  if (tier == "CPM") {
    for (let i = 0; i < timeTakenToTypeEachWordInOrder.length; i++) {
      const tempWPM = wpmMethodCalculator(timeTakenToTypeEachWordInOrder[i], wordsPracticedInOrder[i].length);
      finalRawWPM.push((tempWPM * 5).toFixed(0));
      timeTakenArray.push(tempWPM * 5);
      aggregate = avgCalculatorForTheSpeedOfLastTen(timeTakenArray);
      finalWPMArray.push(aggregate.toFixed(0));
    }
    testTierHighestWPM(wordPerMinute[wordPerMinute.length - 1] * 5);
  } else {
    for (let i = 0; i < timeTakenToTypeEachWordInOrder.length; i++) {
      const tempWPM = wpmMethodCalculator(timeTakenToTypeEachWordInOrder[i], wordsPracticedInOrder[i].length);
      finalRawWPM.push(tempWPM.toFixed(0));
      timeTakenArray.push(tempWPM);
      aggregate = avgCalculatorForTheSpeedOfLastTen(timeTakenArray);
      finalWPMArray.push(aggregate.toFixed(0));
    }
    testTierHighestWPM(wordPerMinute[wordPerMinute.length - 1]);
  }
  wordPerMinute = finalWPMArray;
  rawSpeedOfCurrentWord = finalRawWPM;
  wordOccurrences = numberOfErrorsArrayForTestMode;
  wordNames = wordsPracticedInOrder;
  if (wordTestNumber == void 0 && averageOfLocalStats != void 0) {
    if (tier == "CPM") {
      wordPerMinute.pop();
      wordPerMinute.push(averageOfLocalStats?.toFixed(0) * 5);
    } else {
    }
  }
  const handleEvent = () => {
    testTierHighestWPM(wordPerMinute[wordPerMinute.length - 1]);
    myGraph(wordNames, wordOccurrences, wordPerMinute, rawSpeedOfCurrentWord);
  };
  React.useEffect(() => {
    handleEvent();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "#333",
      border: "1px solid #000",
      borderRadius: "5px",
      borderWidth: "80%"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    id: "chart"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "timeline-chart"
  }, handleEvent))));
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
export const HorizontalRule = styled.hr.attrs({
  className: `mx-16 border-gray-600 mb-16`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdGVzdC1jb21wbGV0ZS9jb21wb25lbnRzL3Rlc3RDb21wbGV0ZUdyYXBoLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFPLHdCQUNMLFdBQ0EsaUJBQ0EsZUFDQSx1QkFDQTtBQUNBLFFBQU0sVUFBVTtBQUFBLElBQ2QsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsZUFBZSxDQUFDO0FBQUEsUUFDaEIsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUE7QUFBQSxJQUdiLFFBQVEsQ0FBQyxXQUFXLFdBQVc7QUFBQSxJQUMvQixRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUE7QUFBQSxJQUVULFlBQVk7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxRQUNMLFVBQVU7QUFBQSxRQUNWLFlBQVk7QUFBQSxRQUNaLFlBQVk7QUFBQSxRQUNaLFFBQVE7QUFBQTtBQUFBLE1BRVYsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdiLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQTtBQUFBO0FBQUEsSUFHYixRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUEsTUFFUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUEsTUFHUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdWLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQTtBQUFBLElBRWQsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLFdBQVc7QUFBQSxVQUNULE1BQU07QUFBQTtBQUFBLFFBRVIsWUFBWTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBO0FBQUEsUUFFVCxRQUFRO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxRQUFRLENBQUMsV0FBVztBQUFBO0FBQUE7QUFBQSxRQUd4QixPQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJYjtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFVBQ1QsTUFBTTtBQUFBO0FBQUEsUUFFUixZQUFZO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUE7QUFBQSxRQUVULFFBQVE7QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMLFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHWixPQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJYjtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBO0FBQUEsUUFFVCxZQUFZO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUE7QUFBQSxRQUVULFFBQVE7QUFBQSxVQUNO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
