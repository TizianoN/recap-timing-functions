let countdownTimeout;

const bigRedEl = document.getElementById('big-red');
const bigGreenEl = document.getElementById('big-green');
const timeoutTextEl = document.getElementById('timeout-text');
const mainContainerEl = document.getElementById('main-container');

bigRedEl.addEventListener('click', startSelfDestruct);
bigGreenEl.addEventListener('click', defuseSelfDestruct);

function startSelfDestruct() {
    timeoutTextEl.style.display = "block";
    countdownTimeout = setTimeout(boom, 4 * 1000);
}

function defuseSelfDestruct() {
    timeoutTextEl.style.display = "none";
    clearTimeout(countdownTimeout);
}

function boom() {
    mainContainerEl.style.background = "red";
    mainContainerEl.style.color = "white";
    mainContainerEl.style.fontSize = "10rem";
    mainContainerEl.innerHTML = "BOOM";
}