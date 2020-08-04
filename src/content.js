chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: chrome.extension.getURL("player.html")};
  },
  {
    urls: [
      "*://*/*.m3u"
    ]
  },
  ["blocking"]);
