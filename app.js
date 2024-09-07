var msec = 0
var sec = 0
var min = 0
var msecHeading = document.getElementById('msec')
var secHeading = document.getElementById('sec')
var minHeading = document.getElementById('min')

var interval;

function timer() {
    msec = parseInt(msec)
    min = parseInt(min)
    sec = parseInt(sec)
    msec++

    if (msec == 100) {
        sec++
        msec = 0
    }
    if (sec == 60) {

        min++
        minHeading.innerHTML = min
        sec = 0
    }
    var msecString = msec < 10 ? '0' + msec : msec;
    var secString = sec < 10 ? '0' + sec : sec;
    var minString = min < 10 ? '0' + min : min;

    msecHeading.innerHTML = msecString;
    secHeading.innerHTML = secString + ' : ';
    minHeading.innerHTML = minString + ' : '


}

function start() {
    startButton.disabled = true
    interval = setInterval(timer, 10)
}


function stop() {
    clearInterval(interval)

}


function reset() {

    msec = '00'
    sec = '00 :'
    min = '00 :'
    msecHeading.innerHTML = msec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    stop()
}

