console.log('🚀Privatisator Background script loaded 🚀');

/* Listen for our command */
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'open-in-private') return;

  // Try to get the active tab (fails on my machine for some reason),
  // or the last focused tab.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = null;

    if (tabs.length > 0 && tabs[0].url) {
      console.log("Found a URL via active&&currentWindow")
      url = tabs[0].url;
    } else {

      // Fallback: Get all normal (non-incognito) tabs and pick the most recent
      chrome.tabs.query({ windowType: "normal" }, function (allTabs) {
        if (allTabs.length === 0) return;

        // Sort by last accessed
        allTabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
        const fallbackTab = allTabs[0];
        if (fallbackTab && fallbackTab.url) {
          console.log("Found a URL via lastAccessed");
          openInPrivateWindow(fallbackTab.url);
        }
      });

      return;
    }

    openInPrivateWindow(url);
  });
});

function openInPrivateWindow(url) {
  chrome.windows.create({
    url: url,
    incognito: true
  });
}
