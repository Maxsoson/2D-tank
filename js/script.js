const images = [
    "photo/test1.png",
    "photo/back.png",
    "photo/test1.png",
    // Add more images as needed
];

let currentIndex = 0;

function playSound(soundFile) {
    const audio = document.getElementById('click-sound');
    audio.src = soundFile;
    audio.play();
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    for (let i = 0; i < 3; i++) {
        document.getElementById(`game-image${i + 1}`).src = images[(currentIndex + i) % images.length];
    }
}

function openImage(imageUrl) {
    window.open(imageUrl, '_blank'); // Open image in a new tab
}
