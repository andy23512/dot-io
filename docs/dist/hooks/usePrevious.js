import React from "../../snowpack/pkg/react.js";
export default function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlUHJldmlvdXMudHMiXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUVBLG9DQUF1QyxPQUF5QjtBQUc5RCxRQUFNLE1BQU0sTUFBTTtBQUdsQixRQUFNLFVBQVUsTUFBTTtBQUNwQixRQUFJLFVBQVU7QUFBQSxLQUNiLENBQUM7QUFHSixTQUFPLElBQUk7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
