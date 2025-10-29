import {clientsClaim} from "../snowpack/pkg/workbox-core.js";
import {ExpirationPlugin} from "../snowpack/pkg/workbox-expiration.js";
import {precacheAndRoute, createHandlerBoundToURL} from "../snowpack/pkg/workbox-precaching.js";
import {registerRoute} from "../snowpack/pkg/workbox-routing.js";
import {StaleWhileRevalidate} from "../snowpack/pkg/workbox-strategies.js";
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(({request, url}) => {
  if (request.mode !== "navigate") {
    return false;
  }
  if (url.pathname.startsWith("/_")) {
    return false;
  }
  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }
  return true;
}, createHandlerBoundToURL(window.location.href + "/#/index.html"));
registerRoute(({url}) => url.origin === self.location.origin && url.pathname.endsWith(".png"), new StaleWhileRevalidate({
  cacheName: "images",
  plugins: [
    new ExpirationPlugin({maxEntries: 50})
  ]
}));
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc2VydmljZS13b3JrZXIudHMiXSwKICAibWFwcGluZ3MiOiAiQUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQSxpQkFBaUIsS0FBSztBQUt0QixNQUFNLHNCQUFzQixJQUFJLE9BQU87QUFDdkMsY0FFRSxDQUFDLENBQUUsU0FBUyxTQUEwQztBQUVwRCxNQUFJLFFBQVEsU0FBUyxZQUFZO0FBQy9CLFdBQU87QUFBQTtBQUlULE1BQUksSUFBSSxTQUFTLFdBQVcsT0FBTztBQUNqQyxXQUFPO0FBQUE7QUFLVCxNQUFJLElBQUksU0FBUyxNQUFNLHNCQUFzQjtBQUMzQyxXQUFPO0FBQUE7QUFJVCxTQUFPO0FBQUEsR0FFVCx3QkFBd0IsT0FBTyxTQUFTLE9BQU87QUFLakQsY0FFRSxDQUFDLENBQUUsU0FDRCxJQUFJLFdBQVcsS0FBSyxTQUFTLFVBQVUsSUFBSSxTQUFTLFNBQVMsU0FFL0QsSUFBSSxxQkFBcUI7QUFBQSxFQUN2QixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFHUCxJQUFJLGlCQUFpQixDQUFFLFlBQVk7QUFBQTtBQUFBO0FBT3pDLEtBQUssaUJBQWlCLFdBQVcsQ0FBQyxVQUFVO0FBQzFDLE1BQUksTUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFTLGdCQUFnQjtBQUNwRCxTQUFLO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
