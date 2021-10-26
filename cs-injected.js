/* Paste this on dev mode console (and press enter) and then make the video load without reloading the page. Maybe you can mark it as favorite and then go to favorites. */
    /* A new window will pop up with several links to try to download the video. Choose wisely. https:&//...etc...m3u8?tag=something looks good for me. */
    
    var videoProcessor = "https://aalku.github.io/downloadVideo.html#"; // Put it here between the quotes
    var classMarker = "c" + (Math.random() + 1).toString(36).substring(7);
    
    var downloadSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" style="padding-left: 5px; fill:white; filter:drop-shadow( 1px 1px 2px rgba(50, 50, 50, .9));"><path d="M 12 4 C 9.6655084 4 7.7006133 5.2494956 6.4296875 7.0136719 C 2.8854572 7.05389 0 9.9465993 0 13.5 C 0 17.078268 2.9217323 20 6.5 20 L 18.5 20 C 21.525577 20 24 17.525577 24 14.5 C 24 11.509638 21.577034 9.0762027 18.599609 9.0195312 C 17.729938 6.1415745 15.152096 4 12 4 z M 12 6 C 14.504527 6 16.55398 7.825491 16.931641 10.214844 L 17.083984 11.175781 L 18.048828 11.050781 C 18.272182 11.021699 18.414903 11 18.5 11 C 20.444423 11 22 12.555577 22 14.5 C 22 16.444423 20.444423 18 18.5 18 L 6.5 18 C 4.0022677 18 2 15.997732 2 13.5 C 2 11.002268 4.0022677 9 6.5 9 C 6.534993 9 6.6164592 9.0069899 6.75 9.0136719 L 7.3613281 9.0449219 L 7.6660156 8.5136719 C 8.5301088 7.0123517 10.137881 6 12 6 z M 11 9 L 11 13 L 8 13 L 12 17 L 16 13 L 13 13 L 13 9 L 11 9 z"></path></svg>';
    /* By icons8.com */
    
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
                a.appendChild(window.__downloadSvgTemplate.content.cloneNode(true));
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
        console.debug("origOpen", origOpen);
        // Download Icon
        window.__downloadSvgTemplate = document.createElement('template');
        window.__downloadSvgTemplate.innerHTML = downloadSvgHTML;
    
        XMLHttpRequest.prototype.open = function(method, url, async=true, username, password) {
            window.__interceptAjax(url);
            return origOpen.call(this, method, url, async, username, password);
        };
        console.debug("XMLHttpRequest.prototype.open", XMLHttpRequest.prototype.open);
    })(XMLHttpRequest.prototype.open);

    console.debug("cs injected");