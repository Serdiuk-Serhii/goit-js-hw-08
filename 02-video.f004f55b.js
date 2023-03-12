const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(()=>{t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)})).catch((function(e){}))}));
//# sourceMappingURL=02-video.f004f55b.js.map
