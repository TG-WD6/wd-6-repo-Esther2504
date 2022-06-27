

/*
let smallPointer = document.getElementsByClassName("clock__smallpointer");

function animateBigPointer() {


}

let bigPointer = document.getElementsByClassName("clock__bigpointer");

// let currentDate = new Date();
// let currentHour = currentDate.getHours()
// let currentMinute = currentDate.getMinutes()
// let currentSecond = currentDate.getSeconds()

// let time = currentHour + ":" + currentMinute + ":" + currentSecond
// console.log(time)

let degrees = 0;

setInterval(move, 1000)

function move() {
    degrees+= 3;
   bigPointer.style.animation.rotate(degrees + "deg");
}


// let rotatePointer = bigPointer.rotate()

// setInterval(functie, miliseconds) <-calls functions every ... miliseconds


// De big pointer gaat in 60 minuten 1x rond, de kleine gaat in 12 uur 1x rond. De secondewijzer gaat 1x rond in 60 sec
// Clock bestaat uit 60 stappen, hoe snel de wijzer stap maakt verschilt. secondewijzer stapt per seconde
// grote wijzer stapt per minuut, kleine wijzer maakt per uur 5 stappen. om de 12 minuten een stap.

// Loop die elke seconde de wijzer laat verplaatsen?
*/
setInterval(Timer, 1000);

function Timer() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours()
    let currentMinute = currentDate.getMinutes()
    let currentSecond = currentDate.getSeconds()

    let time = currentHour + ":" + currentMinute + ":" + currentSecond
    let myDiv = document.getElementById("clock__digital")
    myDiv.innerText = time
}


setInterval(moveSeconds, 1000)

function moveSeconds() {
    let currentDate = new Date();
    let currentSecond = currentDate.getSeconds()
    let rotateSeconds = (currentSecond / 60) * 360
    let secondsPointer = document.querySelector(".clock__seconds");
    secondsPointer.style.transform = "rotate(" + rotateSeconds + "deg)";
}
setInterval(moveMinute, 1000)

function moveMinute() {
    let currentDate = new Date();
    let currentMinute = currentDate.getMinutes()
    let rotateMinutes = (currentMinute / 60) * 360
    let minutesPointer = document.querySelector(".clock__minutes");
    minutesPointer.style.transform = "rotate(" + rotateMinutes + "deg)";
}
setInterval(moveHour, 1000)

function moveHour() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours()
    let rotateHour = (currentHour / 60) * 360
    let hourPointer = document.querySelector(".clock__hours");
    hourPointer.style.transform = "rotate(" + rotateHour + "deg)";
}

// Als het 1 sec is, moet hij 3 graden draaien. als het 2 sec is, 6 graden, etc.

// let currentDate = new Date();
// let currentHour = currentDate.getHours()
// let currentMinute = currentDate.getMinutes()
// let currentSecond = currentDate.getSeconds()

// let rotateSeconds = (currentSecond/60) * 360
// let rotateMinute = (currentMinute/60) * 360
// let rotateHour = (currentHour/60) * 360