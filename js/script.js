const timerText = document.getElementById("timerText")
const startResetButton = document.getElementById("startResetButton")
let chosenTime = 1500
let time = 1500
let start = false

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
    if(start){
        time--
        setTimerText()
    }
}

function resetTimer(){
    time = chosenTime
    setTimerText()
}

function setTimerText(){
    timerText.textContent = time
}