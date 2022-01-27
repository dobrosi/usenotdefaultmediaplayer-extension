if (document.body.childElementCount == 1) {
	firstTag = document.body.firstElementChild;
	if (firstTag.tagName.toLowerCase() == 'video') {
		sourceTag = document.body.firstElementChild.firstElementChild;
		document.head.innerHTML = "<link href=\"https://vjs.zencdn.net/7.17.0/video-js.css\" rel=\"stylesheet\" />";
		document.body.innerHTML = "<video id=\"my-video\" class=\"video-js\"" +
			"controls autoplay preload=\"auto\" width=\"100%\" height=\"100%\" data-setup=\"{}\">" + 
			"<source src=\"" + sourceTag.src +  "\" type=\"" + sourceTag.type + "\" />" +
			"</video><script src=\"https://vjs.zencdn.net/7.17.0/video.min.js\"></script>";
	}
}