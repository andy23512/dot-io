import React from "../../../snowpack/pkg/react.js";
import SettingsColumn from "./components/SettingsColumn.js";
import CenterTrainingColumn from "./components/CenterTrainingColumn.js";
import {StatisticsColumn} from "./components/StatisticsColumn.js";
import {useContrast} from "../../hooks/useContrast.js";
import EditChordsModal from "./components/EditChordModal.js";
import {PageContainer} from "./training.styled.js";
import useTrainingScenarioAsDocumentTitle from "../../hooks/useTrainingScenarioAsDocumentTitle.js";
import {useStoreState} from "../../store/store.js";
import {Redirect} from "../../../snowpack/pkg/react-router-dom.js";
function TrainingPage() {
  const contrast = useContrast();
  const currentTrainingScenario = useStoreState((store) => store.currentTrainingScenario);
  useTrainingScenarioAsDocumentTitle();
  return /* @__PURE__ */ React.createElement(PageContainer, {
    contrast
  }, !currentTrainingScenario && /* @__PURE__ */ React.createElement(Redirect, {
    to: ""
  }), /* @__PURE__ */ React.createElement(EditChordsModal, null), /* @__PURE__ */ React.createElement(SettingsColumn, null), /* @__PURE__ */ React.createElement(CenterTrainingColumn, null), /* @__PURE__ */ React.createElement(StatisticsColumn, null));
}
export default TrainingPage;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvdHJhaW5pbmcvdHJhaW5pbmcudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSx3QkFBc0M7QUFDcEMsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sMEJBQTBCLGNBQzlCLENBQUMsVUFBVSxNQUFNO0FBRW5CO0FBRUEsU0FDRSxvQ0FBQyxlQUFEO0FBQUEsSUFBZTtBQUFBLEtBQ1osQ0FBQywyQkFBMkIsb0NBQUMsVUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLE1BQzFDLG9DQUFDLGlCQUFELE9BQ0Esb0NBQUMsZ0JBQUQsT0FDQSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
