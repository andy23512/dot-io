import {useLayoutEffect, useState} from "../../snowpack/pkg/react.js";
import useWindowSize from "./useWindowSize.js";
export default function useScreenSizeBoundary({
  boundary,
  callback
}) {
  const screenSize = useWindowSize();
  const [oldScreenSize, setOldScreenSize] = useState({
    width: 0,
    height: 0
  });
  useLayoutEffect(() => {
    if (oldScreenSize.width >= boundary && screenSize.width < boundary)
      callback("BELOW");
    if (oldScreenSize.width < boundary && screenSize.width >= boundary)
      callback("ABOVE");
    setOldScreenSize(screenSize);
  }, [screenSize]);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlU2NyZWVuU2l6ZUJvdW5kYXJ5LnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQVlBLDhDQUE4QztBQUFBLEVBQzVDO0FBQUEsRUFDQTtBQUFBLEdBQ2M7QUFDZCxRQUFNLGFBQWE7QUFDbkIsUUFBTSxDQUFDLGVBQWUsb0JBQW9CLFNBQXFCO0FBQUEsSUFDN0QsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBO0FBR1Ysa0JBQWdCLE1BQU07QUFDcEIsUUFBSSxjQUFjLFNBQVMsWUFBWSxXQUFXLFFBQVE7QUFDeEQsZUFBUztBQUVYLFFBQUksY0FBYyxRQUFRLFlBQVksV0FBVyxTQUFTO0FBQ3hELGVBQVM7QUFFWCxxQkFBaUI7QUFBQSxLQUNoQixDQUFDO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
