const soundHeaders = document.querySelectorAll('.play-sound');

soundHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const soundFile = this.getAttribute('data-sound'); // Get the sound file from the data attribute
        playSound(soundFile); // Pass the sound file to the playSound function
    });
});

function playSound(file) {
    const audio = document.getElementById('sound');
    audio.src = file; // Set the audio source to the passed file
    audio.play() // Play the sound
        .then(() => {
            console.log("Sound is playing:", file);
        })
        .catch(error => {
            console.error("Error playing sound:", error);
        });
}