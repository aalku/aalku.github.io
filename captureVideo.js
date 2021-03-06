/* Paste this on dev mode console (and press enter) and then make the video load without reloading the page. Maybe you can mark it as favorite and then go to favorites. */
/* A new window will pop up with several links to try to download the video. Choose wisely. https:&//...etc...m3u8?tag=something looks good for me. */

var videoProcessor = "https://aalku.github.io/downloadVideo.html#"; // Put it here between the quotes
window.__getUrlsWindow = ()=>{
	if (!window.__UrlsWindow || window.__UrlsWindow.closed) {
		// new
		var w = window.open("about:blank", "Video URLs", "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no");
		var s = w.document.createElement("style");
		s.innerHTML="body { background-color: rgb(0, 0, 0); }\r\n li, a{ color: white }";
		w.document.head.appendChild(s);
		w.document.body.innerHTML = "<ul id='list'><ul>";
		w.document.title="Video URLs";
		var videos = new Set();
		var list = w.document.getElementById("list");
		w.__appendUrl = (url, idVideo, video)=>{
			if (!videos.has(idVideo)) {
				videos.add(idVideo);
				var a = document.createElement("a");
				a.innerText=url;
				a.href=videoProcessor+url;
				a.target="_blank";
				var li = document.createElement("li");
				li.appendChild(a);
				if (video) {
					var img = document.createElement("img");
					img.src = video.poster;
					img.style.height="100px";
					img.style.width="150px";
					img.style.display="block";
					li.appendChild(img);
				}
				list.appendChild(li);
			}
		}
		// OK
		window.__UrlsWindow=w;
	}
	return window.__UrlsWindow;
};

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
				window.__getUrlsWindow().__appendUrl(url, (idVideo ? idVideo : url), video);
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
