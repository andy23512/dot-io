import {useEffect, useRef, useState} from "../../snowpack/pkg/react.js";
import useWindowSize from "./useWindowSize.js";
export default function useContainerDimensions() {
  const parentRef = useRef(null);
  const windowSize = useWindowSize();
  const [dimensions, setDimensions] = useState({height: 0, width: 0});
  useEffect(() => {
    const clientRect = parentRef.current?.getBoundingClientRect();
    setDimensions({
      height: clientRect?.height,
      width: clientRect?.width
    });
  }, [windowSize]);
  return [parentRef, dimensions];
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlQ29udGFpbmVyRGltZW5zaW9ucy50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBT0EsaURBR0U7QUFDQSxRQUFNLFlBQVksT0FBVTtBQUM1QixRQUFNLGFBQWE7QUFFbkIsUUFBTSxDQUFDLFlBQVksaUJBQWlCLFNBQWUsQ0FBRSxRQUFRLEdBQUcsT0FBTztBQUV2RSxZQUFVLE1BQU07QUFDZCxVQUFNLGFBQWEsVUFBVSxTQUFTO0FBQ3RDLGtCQUFjO0FBQUEsTUFDWixRQUFRLFlBQVk7QUFBQSxNQUNwQixPQUFPLFlBQVk7QUFBQTtBQUFBLEtBRXBCLENBQUM7QUFFSixTQUFPLENBQUMsV0FBVztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
