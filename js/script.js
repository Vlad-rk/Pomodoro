const timerText = document.getElementById("timerText")
let time = 1500
let start = false

setInterval(changeTime, 1000)

function changeTime(){
    time--
    timerText.textContent = time
}