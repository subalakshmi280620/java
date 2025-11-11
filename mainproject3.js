const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");
const timeDisplay = document.getElementById("timeDisplay");
const volumeSlider = document.getElementById("volumeSlider");

// Playlist
const songs = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

let currentSongIndex = 0;

// Load default song
loadSong(currentSongIndex);

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    songTitle.textContent = songs[index].title;
}

function playSong() {
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Volume control
volumeSlider.addEventListener("input", function () {
    audioPlayer.volume = volumeSlider.value;
});

// Update time display
audioPlayer.addEventListener("timeupdate", function () {
    let current = formatTime(audioPlayer.currentTime);
    let total = formatTime(audioPlayer.duration);
    timeDisplay.textContent = `${current} / ${total}`;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";

    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    return `${mins}:${secs}`;
}