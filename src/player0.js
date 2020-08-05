var l = "", player;

function addFile(f) {
	console.log("add file: " + f);
	if (f.startsWith("#")) {
		l = f.split(", ")[1];
		return null;
	} else {
		var btn = document.createElement("DIV");
		btn.innerHTML = l;
		btn.onclick = function(){playFile(f)}
		document.body.appendChild(btn);
		return f;
	}
}

function playFile(f) {
	if (f.indexOf("?") >= 0) {
		f += "&";
	} else {
		f += "?";
	}
	f += "nofilter";
	console.log("play file: " + f);
	player.source = {
	    type: 'video',
	    title: 'Example title',
	    sources: [
		{
		    src: f,
		    type: 'audio/mp3'
		} 
	    ]
	};
}

