self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const action = event.action;

  if (action === "cancel") {
    event.waitUntil(
      clients.matchAll({ type: "window" }).then((clientsArr) => {
        const url = "http://localhost:5001/#/";
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientsArr.some(async (windowClient) =>
          windowClient.url === url
            ? (await windowClient.navigate(url), true)
            : false
        );
        console.log("hadWindowToFocus", hadWindowToFocus);
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus)
          clients
            .openWindow(url)
            .then((windowClient) =>
              windowClient ? windowClient.focus() : null
            );
        notification.close();
      })
    );
  }
});
