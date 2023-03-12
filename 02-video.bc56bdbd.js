!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)})).catch((function(e){}))}))}();
//# sourceMappingURL=02-video.bc56bdbd.js.map
