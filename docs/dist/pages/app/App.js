import {StoreProvider, useStoreRehydrated} from "../../../snowpack/pkg/easy-peasy.js";
import React from "../../../snowpack/pkg/react.js";
import Router from "../../components/router.js";
import store from "../../store/store.js";
function WaitForStateRehydration({children}) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}
const App = () => {
  return /* @__PURE__ */ React.createElement(StoreProvider, {
    store
  }, /* @__PURE__ */ React.createElement(WaitForStateRehydration, null, /* @__PURE__ */ React.createElement(Router, null)));
};
export default App;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvcGFnZXMvYXBwL0FwcC50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLGlDQUFpQyxDQUFFLFdBQW1CO0FBQ3BELFFBQU0sZUFBZTtBQUNyQixTQUFPLGVBQWUsV0FBVztBQUFBO0FBSW5DLE1BQU0sTUFBTSxNQUFvQjtBQUM5QixTQUVFLG9DQUFDLGVBQUQ7QUFBQSxJQUFlO0FBQUEsS0FFYixvQ0FBQyx5QkFBRCxNQUVFLG9DQUFDLFFBQUQ7QUFBQTtBQU1SLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
