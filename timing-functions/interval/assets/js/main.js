let watchingInterval;

const videoEl = document.getElementById('main-video');

videoEl.addEventListener('play', initAreYouWatching)
videoEl.addEventListener('pause', clearAreYouWatching)

function initAreYouWatching() {
    setInterval(function () {
        videoEl.pause();
        if (confirm('are you still here?')) {
            videoEl.play();
        }
    }, 3 * 1000)
}

function clearAreYouWatching() {
    clearInterval(watchingInterval);
}