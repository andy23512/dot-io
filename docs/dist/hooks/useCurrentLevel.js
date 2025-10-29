import {useStoreState} from "../store/store.js";
export default function useCurrentLevel() {
  const currentLevel = useStoreState((store) => store.currentLevel);
  const maxLevel = 200;
  return [currentLevel, maxLevel];
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlQ3VycmVudExldmVsLnRzeCJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBRUEsMENBQTREO0FBQzFELFFBQU0sZUFBZSxjQUFjLENBQUMsVUFBVSxNQUFNO0FBQ3BELFFBQU0sV0FBVztBQUVqQixTQUFPLENBQUMsY0FBYztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
