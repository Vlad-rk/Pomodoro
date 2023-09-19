//Author : Vladimir Rekaï

//Elements from the html pages
const timerText = document.getElementById("timerText")
const startResetButton = document.getElementById("startResetButton")
const activityLabel = document.getElementById("activityLabel")
const buttonPicture = document.getElementById("buttonPicture")
const workTimeInput = document.getElementById("workInput")
const breakTimeInput = document.getElementById("breakInput")

//Global variables
let chosenWorkTime = 1500
let chosenBreakTime = 300
let time = chosenWorkTime 
let start = false
let work = true

//Call the function "changeTime" every second.
setInterval(changeTime, 1000)


//Listener for the central button, used both as the start and reset button
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


//Listeners for the inputs used to change the time
workTimeInput.addEventListener('change',()=>{
    if(!start){
        if(workTimeInput.value >= 1 && Number.isInteger(Number(workTimeInput.value))){
            chosenWorkTime = workTimeInput.value * 60
            resetTimer()
        }else{
            alert("Veuillez mettre une valeur entière entre 1 et 100")
        }
    }
    
});

breakTimeInput.addEventListener('change',()=>{
    if(!start){
        if(breakTimeInput.value >= 1 && Number.isInteger(Number(breakTimeInput.value))){
            chosenBreakTime = breakTimeInput.value * 60
        }else{
            alert("Veuillez mettre une valeur entière entre 1 et 100")
        }
    }
    
});


//Called every seconds, check if the timer is at zero and change to break or work if it is the case
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

//Function to reste the timer, using the chosen time and changing back the activity to work
function resetTimer(){
    time = chosenWorkTime
    setTimerText()
    activityLabel.textContent = "Travail"
}

//Function to update the timer display. Used every seconds when the timer is running and used when the user changes the time
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