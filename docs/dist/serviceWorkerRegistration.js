const isLocalhost = Boolean(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
export function register(config) {
  if (window.location.href === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(window.location.href, window.location.href);
    console.log("yeyeyyeyeeey " + window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }
    window.addEventListener("load", () => {
      const swUrl = `${window.location.href}/#/service-worker.ts`;
      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA");
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.");
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            console.log("Content is cached for offline use.");
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch((error) => {
    console.error("Error during service worker registration:", error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: {"Service-Worker": "script"}
  }).then((response) => {
    const contentType = response.headers.get("content-type");
    if (response.status === 404 || contentType != null && contentType.indexOf("javascript") === -1) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log("No internet connection found. App is running in offline mode.");
  });
}
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    }).catch((error) => {
      console.error(error.message);
    });
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi50cyJdLAogICJtYXBwaW5ncyI6ICJBQWNBLE1BQU0sY0FBYyxRQUNsQixPQUFPLFNBQVMsYUFBYSxlQUUzQixPQUFPLFNBQVMsYUFBYSxXQUU3QixPQUFPLFNBQVMsU0FBUyxNQUN2QjtBQVNDLHlCQUFrQixRQUFpQjtBQUN4QyxNQUFJLE9BQU8sU0FBUyxTQUFTLGdCQUFnQixtQkFBbUIsV0FBVztBQUV6RSxVQUFNLFlBQVksSUFBSSxJQUFJLE9BQU8sU0FBUyxNQUFNLE9BQU8sU0FBUztBQUNoRSxZQUFRLElBQUksa0JBQWtCLE9BQU8sU0FBUztBQUM5QyxRQUFJLFVBQVUsV0FBVyxPQUFPLFNBQVMsUUFBUTtBQUkvQztBQUFBO0FBR0YsV0FBTyxpQkFBaUIsUUFBUSxNQUFNO0FBQ3BDLFlBQU0sUUFBUSxHQUFHLE9BQU8sU0FBUztBQUVqQyxVQUFJLGFBQWE7QUFFZixnQ0FBd0IsT0FBTztBQUkvQixrQkFBVSxjQUFjLE1BQU0sS0FBSyxNQUFNO0FBQ3ZDLGtCQUFRLElBQ047QUFBQTtBQUFBLGFBSUM7QUFFTCx3QkFBZ0IsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTS9CLHlCQUF5QixPQUFlLFFBQWlCO0FBQ3ZELFlBQVUsY0FDUCxTQUFTLE9BQ1QsS0FBSyxDQUFDLGlCQUFpQjtBQUN0QixpQkFBYSxnQkFBZ0IsTUFBTTtBQUNqQyxZQUFNLG1CQUFtQixhQUFhO0FBQ3RDLFVBQUksb0JBQW9CLE1BQU07QUFDNUI7QUFBQTtBQUVGLHVCQUFpQixnQkFBZ0IsTUFBTTtBQUNyQyxZQUFJLGlCQUFpQixVQUFVLGFBQWE7QUFDMUMsY0FBSSxVQUFVLGNBQWMsWUFBWTtBQUl0QyxvQkFBUSxJQUNOO0FBS0YsZ0JBQUksVUFBVSxPQUFPLFVBQVU7QUFDN0IscUJBQU8sU0FBUztBQUFBO0FBQUEsaUJBRWI7QUFJTCxvQkFBUSxJQUFJO0FBR1osZ0JBQUksVUFBVSxPQUFPLFdBQVc7QUFDOUIscUJBQU8sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU81QixNQUFNLENBQUMsVUFBVTtBQUNoQixZQUFRLE1BQU0sNkNBQTZDO0FBQUE7QUFBQTtBQUlqRSxpQ0FBaUMsT0FBZSxRQUFpQjtBQUUvRCxRQUFNLE9BQU87QUFBQSxJQUNYLFNBQVMsQ0FBRSxrQkFBa0I7QUFBQSxLQUU1QixLQUFLLENBQUMsYUFBYTtBQUVsQixVQUFNLGNBQWMsU0FBUyxRQUFRLElBQUk7QUFDekMsUUFDRSxTQUFTLFdBQVcsT0FDbkIsZUFBZSxRQUFRLFlBQVksUUFBUSxrQkFBa0IsSUFDOUQ7QUFFQSxnQkFBVSxjQUFjLE1BQU0sS0FBSyxDQUFDLGlCQUFpQjtBQUNuRCxxQkFBYSxhQUFhLEtBQUssTUFBTTtBQUNuQyxpQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBLFdBR2Y7QUFFTCxzQkFBZ0IsT0FBTztBQUFBO0FBQUEsS0FHMUIsTUFBTSxNQUFNO0FBQ1gsWUFBUSxJQUNOO0FBQUE7QUFBQTtBQUtELDZCQUFzQjtBQUMzQixNQUFJLG1CQUFtQixXQUFXO0FBQ2hDLGNBQVUsY0FBYyxNQUNyQixLQUFLLENBQUMsaUJBQWlCO0FBQ3RCLG1CQUFhO0FBQUEsT0FFZCxNQUFNLENBQUMsVUFBVTtBQUNoQixjQUFRLE1BQU0sTUFBTTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
