/* Paste this on dev mode console (and press enter) and then make the video load without reloading the page. Maybe you can mark it as favorite and then go to favorites. */
/* A new window will pop up with several links to try to download the video. Choose wisely. https:&//...etc...m3u8?tag=something looks good for me. */

var videoProcessor = "https://aalku.github.io/downloadVideo.html#"; // Put it here between the quotes
var classMarker = "c" + (Math.random() + 1).toString(36).substring(7);

window.__capturedVideo = (url, key, video)=>{
	var parent = video?.parentElement;
	if (video && parent) {
		var div = parent.querySelector("div." + classMarker);
		var exists = div ? true : false;
		var a;
		if (!exists) {
			div = document.createElement("div");
			div.classList.add(classMarker);
			div.style.position="absolute";
			div.style.zIndex=1;
			a = document.createElement("a");
			a.href = videoProcessor + url;
			a.innerText="Download";
			a.target="_blank";
			div.appendChild(a);
			parent.insertBefore(div, video);
		// } else {
			// a = div.firstElementChild; // Assume it's the link
			// We could compare which url is better but we can assume the first one is multiresolution or the only one that exists
		}
	}
}

window.__interceptAjax = url=>{
	if (/[.]m3u8?([?].*|$)/.test(url)) {
		console.log('Detected m3u8', url);
		window.setTimeout(()=>{
			try {
				var video;
				var idVideo;
				window.document.querySelectorAll("video").forEach(v=>{
					v.poster.split("/").forEach(vpart=>{
						if (/^\d+$/.test(vpart)) {
							if (new RegExp(".*/" + vpart + "/.*").test(url)) {
								console.debug("video", idVideo, v, v.poster);
								video = v;
								idVideo = vpart;
							}
						}
					});
				});
				window.__capturedVideo(url, (idVideo ? idVideo : url), video);
			} catch (e) {
				console.error(e);
			}
		}, 1000);
	}
}

(function(origOpen){
    XMLHttpRequest.prototype.open = function(method, url, async=true, username, password) {
	window.__interceptAjax(url);
    return origOpen.call(this, method, url, async, username, password);
};
})(XMLHttpRequest.prototype.open);
