chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: chrome.extension.getURL("player.html") + "?" + decodeURIComponent(info.url)};
  },
  {
    urls: [
      "*://*/*.m3u"
    ]
  },
  ["blocking"]);
