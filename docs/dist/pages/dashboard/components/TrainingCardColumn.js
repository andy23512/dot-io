import React from "../../../../snowpack/pkg/react.js";
import {useHistory} from "../../../../snowpack/pkg/react-router-dom.js";
import styled from "../../../../snowpack/pkg/styled-components.js";
import {useStoreActions, useStoreState} from "../../../store/store.js";
import trainingCardProps from "./TrainingCardProps.js";
import {TrainingTierCard} from "./TrainingTierCard.js";
export function TrainingCardColumn() {
  const history = useHistory();
  const beginTraining = useStoreActions((store) => store.beginTrainingMode);
  const stats = useStoreState((store) => store.totalSavedTrainingStatistics);
  const getStatsFromIndex = (index) => {
    if (index > 3)
      return void 0;
    const indexMap = {
      0: "ALPHABET",
      1: "TRIGRAM",
      2: "LEXICAL",
      3: "CHORDING",
      4: "CUSTOMTIER",
      5: "LEXICOGRAPHIC",
      6: "SUPERSONIC"
    };
    return stats.statistics.filter((stat) => stat.scenario === indexMap[index]);
  };
  return /* @__PURE__ */ React.createElement(CardColumn, null, trainingCardProps.map((allProps, i) => /* @__PURE__ */ React.createElement(TrainingTierCard, {
    key: Math.random(),
    statistics: getStatsFromIndex(i),
    onPressTraining: onPressTierCard(allProps),
    ...allProps
  })));
  function onPressTierCard(allProps) {
    return () => {
      const payload = [allProps.scenario];
      beginTraining(payload);
      history.push("/training");
    };
  }
}
const CardColumn = styled.div.attrs({
  className: `flex flex-wrap flex-col items-center`
})``;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvVHJhaW5pbmdDYXJkQ29sdW1uLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVPLHFDQUE0QztBQUNqRCxRQUFNLFVBQVU7QUFDaEIsUUFBTSxnQkFBZ0IsZ0JBQWdCLENBQUMsVUFBVSxNQUFNO0FBRXZELFFBQU0sUUFBUSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBRTdDLFFBQU0sb0JBQW9CLENBQUMsVUFBaUQ7QUFFMUUsUUFBSSxRQUFRO0FBQUcsYUFBTztBQUV0QixVQUFNLFdBQTZDO0FBQUEsTUFDakQsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBO0FBR0wsV0FBTyxNQUFNLFdBQVcsT0FBTyxDQUFDLFNBQVMsS0FBSyxhQUFhLFNBQVM7QUFBQTtBQUd0RSxTQUNFLG9DQUFDLFlBQUQsTUFDRyxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsTUFDaEMsb0NBQUMsa0JBQUQ7QUFBQSxJQUNFLEtBQUssS0FBSztBQUFBLElBQ1YsWUFBWSxrQkFBa0I7QUFBQSxJQUM5QixpQkFBaUIsZ0JBQWdCO0FBQUEsT0FDN0I7QUFBQTtBQU1aLDJCQUF5QixVQUFxQztBQUM1RCxXQUFPLE1BQU07QUFDWCxZQUFNLFVBQVUsQ0FBQyxTQUFTO0FBQzFCLG9CQUFjO0FBQ2QsY0FBUSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBS25CLE1BQU0sYUFBYSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQ2xDLFdBQVc7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
