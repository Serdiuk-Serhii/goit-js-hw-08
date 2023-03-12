// import player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
player.on('timeupdate', () => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds)
}).catch(function(error) {
    // an error occurred
});
    
});