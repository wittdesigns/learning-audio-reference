console.log ('JS is Runing...');

//select all placeholder images

let albumCover = document.querySelectorAll('.audio img'),
audioEl = document.querySelector('audio'),
playButton = document.querySelector("#playButton"),
pauseButton = document.querySelector("#pauseButton"),
rewindButton = document.querySelector("#rewindTrack");


//play the Audio

function playTrack() {
    audioEl.play();
}
//function that uses () stands for action

function loadAudio(){
    audioEl.src = `audio/${this.dataset.trackref}.mp3`;
    audioEl.load();

    playTrack();
}




function pauseTrack() {audioEl.pause();}


function rewindTrack() {audioEl.currentTime = 0}
//function that does not uses () stands for characteristic


//add the reactions (event we want to listen for)

albumCover.forEach(album => album.addEventListener('click', loadAudio));



playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
rewindButton.addEventListener('click', rewindTrack);