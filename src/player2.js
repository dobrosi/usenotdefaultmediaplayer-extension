var downloadUrl = window.location.href.split('?')[1] + "?nofilter";
console.log('downloadUrl:' + downloadUrl);

playFile(downloadUrl);

var req = new XMLHttpRequest();
req.open("GET", downloadUrl, true);

req.onload = function (event) {
	var blob = req.response;
	var fileName = null;
	var contentType = req.getResponseHeader("content-type");
	var files = blob.split("\n");
	var first = null;
	for (a in files) {
		var f = addFile(files[a]);
		if (first == null && f != null) {
			first = f;
			playFile(first);
		}
	}
};
req.send();
