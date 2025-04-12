const playPauseElement = document.querySelector('.play-pause');
const videoElement = document.querySelector('.video-play');

playPauseElement.addEventListener("click",() => {
    if(playPauseElement.innerText === "Pause"){
        playPauseElement.innerText = "Play";
        videoElement.pause();
    }else if(playPauseElement.innerText === "Play"){
        playPauseElement.innerText = "Pause";
        videoElement.play();
    }else if(playPauseElement.innerText === "Replay"){
        playPauseElement.innerText = "Pause";
        videoElement.currentTime = 0;
        videoElement.play();
    }
});

videoElement.addEventListener('ended', ()=> {
    playPauseElement.innerText = "Replay";
})