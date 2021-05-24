const starTime = new Date();
const maxTimeSecs = 10;

function updateClock() {
    const clockContainer = document.querySelector('.clock');
    const deltaSecs = Math.round((new Date() - starTime)/1000);
    const secsLeft = maxTimeSecs - deltaSecs;
    clockContainer.innerText = secsLeft;
}

setInterval(updateClock, 1000);
