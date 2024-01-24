const audioFiles = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3', 'audio5.mp3', 'audio6.mp3'];
let currentAudioIndex = 0;

function playNextAudio(index) {
    const audio = document.getElementById(`audio${index + 1}`);

    if (audio.paused) {
        // If audio is paused, play it
        audio.play();
    } else {
        // If audio is playing, pause it and move to the next one
        audio.pause();
        currentAudioIndex = (index + 1) % audioFiles.length; // Cycle to the next audio file
        const nextAudio = document.getElementById(`audio${currentAudioIndex + 1}`);
        nextAudio.play();
    }
}

// Add event listeners for each audio item
for (let i = 0; i < audioFiles.length; i++) {
    const audioItem = document.getElementById(`audio${i + 1}`);
    audioItem.addEventListener('ended', () => playNextAudio(i));
}
