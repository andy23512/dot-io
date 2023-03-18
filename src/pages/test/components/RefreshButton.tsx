import { useStoreActions, useStoreState } from "easy-peasy";
import { ReactElement } from "react";
import RefreshIcon from "./RefreshIcon";


function RefreshButton(): ReactElement {

    const wordTestNumber = useStoreState((store : any) => store.wordTestNumber,);
  const beginTraining = useStoreActions((store: any) => store.beginTrainingMode);
  const trainingScenario = useStoreState((store) => store.currentTrainingScenario);
  const currentWordTestNumber = useStoreState((store) => store.wordTestNumber);
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode,);
  const mode = useStoreState((store) => store.restartTestMode);


  const payload = [];
  payload.push(trainingScenario);
  payload.push(currentWordTestNumber);
  function letsGoAgain() {
    sessionStorage.setItem("Refresh", JSON.stringify(1))
    sessionStorage.removeItem("CustomTierTestValue");
    sessionStorage.removeItem("tempTestDeIncrement");
    setRestartTestMode(true);
    beginTraining(payload);

  }


return(
<button
className="p-2 bg-[#333] flex  w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]"
onClick={() => {
    letsGoAgain()

  }}>
<RefreshIcon />
</button>
)
}


export default RefreshButton;