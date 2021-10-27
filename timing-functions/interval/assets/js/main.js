let watchingInterval;
const videoEl = document.getElementById('main-video');

videoEl.addEventListener('play', initWatchingInterval);
videoEl.addEventListener('pause', clearWatchingInterval);

function isUserWatching() {
    videoEl.pause();
    if (confirm('are you still here?')) {
        videoEl.play();
    }
}

function initWatchingInterval() {
    watchingInterval = setInterval(isUserWatching, 3 * 1000);
}

function clearWatchingInterval() {
    clearInterval(watchingInterval);
}
