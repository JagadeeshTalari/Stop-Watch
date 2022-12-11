let start = document.getElementById("start");
let stop = document.getElementById("stop");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let millisecondsCount = 00;
let secondsCounter = 00;
let minutesCounter = 00;
let hoursCounter = 00;

start.addEventListener( 'click', () => {
    setInterval( () => {
        
        millisecondsCount = millisecondsCount + 1;
        milliseconds.innerText = millisecondsCount<10? `0${millisecondsCount}`: millisecondsCount;
        if( millisecondsCount == 99){
            millisecondsCount = 0;
            secondsCounter = secondsCounter + 1;
            seconds.innerText = secondsCounter<10? `0${secondsCounter}`: secondsCounter;
        }
        if( secondsCounter == 60){
            secondsCounter = 0;
            minutesCounter = minutesCounter + 1;
            minutes.innerText = minutesCounter<10? `0${minutesCounter}`: minutesCounter;
        }
        if( minutesCounter == 60){
            minutesCounter = 0;
            hoursCounter = hoursCounter + 1;
            hours.innerText = hoursCounter;
        }   
    }, 10)
})