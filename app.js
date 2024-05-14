const OutputSeconds = document.getElementById('second')
const OutputTens = document.getElementById('tens')
const buttonStart = document.getElementById('btn-start')
const buttonStop = document.getElementById('btn-stop')
const buttonReset = document.getElementById('btn-reset')
console.log(OutputSeconds)
console.log(OutputTens)
console.log(buttonStart)
console.log(buttonStop)
console.log(buttonReset)

var seconds = 0
var tens = 0
var Interval 

buttonStart.addEventListener('click', () => {
    clearInterval(Interval)
    Interval = setInterval(startTime, 10)
})
buttonStop.addEventListener('click', () => {
    clearInterval(Interval)
})
buttonReset.addEventListener('click', () => {
    clearInterval(Interval)
    tens = 0
    seconds = 0
    OutputSeconds.innerHTML = "00"
    OutputTens.innerHTML = "00"
})

function startTime() {
    tens++
    if (tens <= 9) {
        OutputTens.innerHTML = "0" + tens
    }

    if (tens > 9) {
        OutputTens.innerHTML = tens
    }

    if (tens > 99) {
        seconds++
        OutputSeconds.innerHTML = "0" + seconds
        tens = 0
        OutputTens.innerHTML = "0" + tens
    }

    if (seconds > 9) {
        OutputSeconds.innerHTML = seconds
    }
}
