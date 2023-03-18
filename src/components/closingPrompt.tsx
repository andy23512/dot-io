import type { Location } from 'history';
import { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import store, { useStoreActions } from '../store/store';
import { PromptBeforeClosing } from './promptBeforeClosing';
import { ROUTER_PATHS } from './router';

export function ClosingPrompt(): ReactElement {
  const history = useHistory();
  const setStoredChordTrainingStats = useStoreActions(
    (store) => store.setTotalSavedTrainingStatistics,
  );
  const clearChordStatistics = useStoreActions(
    (store) => store.clearTemporaryTrainingData,
  );

  const handleLocationChange = (location: Location) => {
    // If the user navigates off of a training page, we want to save their data, but only if they have AutoWrite enabled
    const didLeaveTrainingSession = !location?.pathname?.endsWith(
      ROUTER_PATHS.training,
    );
    const isAutoWriteEnabled = store.getState().trainingSettings.isAutoWrite;
    if (didLeaveTrainingSession && isAutoWriteEnabled)
      handleAutoWriteData(true);
  };

  useEffect(() => {
    const backListener = history.listen(handleLocationChange);

    return () => {
      backListener();
    };
  }, []);

  const handleAutoWriteData = (isAutoWriteEnabled: boolean) => {
    // The other way we save data is if the user exits out of the tab entirely, or refreshes the browser, which is done here, but again only if they have AutoWrite enabled
    if (isAutoWriteEnabled) {
      setStoredChordTrainingStats(store.getState().trainingStatistics);
      clearChordStatistics();
    }
  };

  return <PromptBeforeClosing onClose={handleAutoWriteData} />;
}
