const playPauseElement = document.querySelector('.play-pause');
const videoElement = document.querySelector('.video-play');
const mobileMenuElement = document.querySelector('.mobile-only-options');
const mobileMenuOptions = document.querySelector('.options-bar');
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

let isActive = false
mobileMenuElement.addEventListener("click", ()=> {
   if(isActive == false){
    mobileMenuOptions.classList.add('open');
    isActive = true;
   } else {
    mobileMenuOptions.classList.remove('open');
    isActive = false;
   }
});


const buttonEl = document.querySelector('.close');
const promoEl = document.querySelector('.hero-promotion');

buttonEl.addEventListener("click" , (e)=> {
    buttonEl.parentNode.parentNode.removeChild(promoEl);
})