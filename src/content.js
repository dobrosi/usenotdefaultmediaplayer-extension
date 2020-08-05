

chrome.webRequest.onHeadersReceived.addListener(
  function(details){
	if (!details.url.endsWith("nofilter")) {
		for(a in details.responseHeaders) {
			var v = evalHeader(details.responseHeaders[a]);
			if (v) {
				return {redirectUrl: chrome.extension.getURL("player.html") + "?" + decodeURIComponent(details.url)};
			}
		}
	}
  },
  {
    urls: [
      "*://*/*"
    ]
  },
  ["blocking", "responseHeaders"]);

function evalHeader(h) {
	if (h.name.toUpperCase()=="CONTENT-TYPE") {
		var v = h.value.toUpperCase();
		if (v.startsWith("AUDIO")) {
			return true;
		}
	}
	return false;
}
