import {useEffect, useState} from "../../snowpack/pkg/react.js";
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
export default useWindowSize;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlV2luZG93U2l6ZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBUUEseUJBQXFDO0FBR25DLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQixTQUFTO0FBQUEsSUFDM0MsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBO0FBR1YsWUFBVSxNQUFNO0FBRWQsNEJBQXdCO0FBRXRCLG9CQUFjO0FBQUEsUUFDWixPQUFPLE9BQU87QUFBQSxRQUNkLFFBQVEsT0FBTztBQUFBO0FBQUE7QUFLbkIsV0FBTyxpQkFBaUIsVUFBVTtBQUdsQztBQUdBLFdBQU8sTUFBTSxPQUFPLG9CQUFvQixVQUFVO0FBQUEsS0FDakQ7QUFFSCxTQUFPO0FBQUE7QUFHVCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
