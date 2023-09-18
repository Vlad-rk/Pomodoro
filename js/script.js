const timerText = document.getElementById("timerText")
const startResetButton = document.getElementById("startResetButton")
const activityLabel = document.getElementById("activityLabel")
let chosenWorkTime = 1500
let chosenBreakTime = 5
let time = 1500
let start = false
let work = true

setInterval(changeTime, 1000)

startResetButton.addEventListener('click',()=>{
    if(start){
        start = false
        resetTimer()
        startResetButton.textContent = "Commencer"
    }else{
        start = true
        startResetButton.textContent = "Réinitialiser"
    }
});

function changeTime(){
    if(time == 0){
        if(work){
            work = false
            time = chosenBreakTime
            activityLabel.textContent = "Pause"
        }else{
            work = true
            time = chosenWorkTime
            activityLabel.textContent = "Travail"
        }
    }

    if(start){
        time--
        setTimerText()
    }
}

function resetTimer(){
    time = chosenWorkTime
    setTimerText()
    activityLabel.textContent = "Travail"
}

function setTimerText(){
    let minutes = Math.trunc(time/60)
    let secondes = time%60

    let minutesString = "" + minutes

    let secondesString = "" + secondes

    if(minutesString.length == 1){
        minutesString = "0" + minutesString
    }

    if(secondesString.length == 1){
        secondesString = "0" + secondesString
    }

    timerText.textContent = (minutesString + ":" + secondesString)
}