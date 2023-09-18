const timerText = document.getElementById("timerText")
const startResetButton = document.getElementById("startResetButton")
const activityLabel = document.getElementById("activityLabel")
const buttonPicture = document.getElementById("buttonPicture")
const workTimeInput = document.getElementById("workInput")
const breakTimeInput = document.getElementById("breakInput")

let chosenWorkTime = 1500
let chosenBreakTime = 300
let time = 10
let start = false
let work = true

setInterval(changeTime, 1000)

startResetButton.addEventListener('click',()=>{
    if(start){
        start = false
        resetTimer()
        buttonPicture.setAttribute("src", "pictures/play.svg")
    }else{
        start = true
        buttonPicture.setAttribute("src", "pictures/reset.svg")
    }
});

workTimeInput.addEventListener('change',()=>{
    console.log(workTimeInput.value)
    chosenWorkTime = workTimeInput.value
});



function changeTime(){
    if(time == 0){
        if(work){
            work = false
            time = chosenBreakTime
            activityLabel.textContent = "Pause"
            document.body.style.backgroundColor = "green"
        }else{
            work = true
            time = chosenWorkTime
            activityLabel.textContent = "Travail"
            document.body.style.backgroundColor = "brown"
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