import {useEffect, useRef, useState} from "../../snowpack/pkg/react.js";
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, value];
}
export default useHover;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlSG92ZXIudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUtBLG9CQUErQjtBQUM3QixRQUFNLENBQUMsT0FBTyxZQUFZLFNBQVM7QUFFbkMsUUFBTSxNQUFNLE9BQW9CO0FBRWhDLFFBQU0sa0JBQWtCLE1BQU0sU0FBUztBQUN2QyxRQUFNLGlCQUFpQixNQUFNLFNBQVM7QUFFdEMsWUFDRSxNQUFNO0FBQ0osVUFBTSxPQUFPLElBQUk7QUFDakIsUUFBSSxNQUFNO0FBQ1IsV0FBSyxpQkFBaUIsYUFBYTtBQUNuQyxXQUFLLGlCQUFpQixZQUFZO0FBRWxDLGFBQU8sTUFBTTtBQUNYLGFBQUssb0JBQW9CLGFBQWE7QUFDdEMsYUFBSyxvQkFBb0IsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUkzQyxDQUFDLElBQUk7QUFHUCxTQUFPLENBQUMsS0FBSztBQUFBO0FBR2YsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
