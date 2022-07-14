setInterval(rotateSeconds, 1000);

function rotateSeconds() {
    let currentDate = new Date();
    let currentSecond = currentDate.getSeconds();
    let rotateSeconds = (currentSecond / 60) * 360;
    let secondsPointer = document.querySelector("#clock__seconds");
    secondsPointer.style.transform = "rotate(" + rotateSeconds + "deg)";
}

setInterval(rotateMinutes, 1000);

function rotateMinutes() {
    let currentDate = new Date();
    let currentMinute = currentDate.getMinutes();
    let rotateMinutes = (currentMinute / 60) * 360;
    let minutesPointer = document.querySelector("#clock__minutes");
    minutesPointer.style.transform = "rotate(" + rotateMinutes + "deg)";
}

setInterval(rotateHours, 1000);

function rotateHours() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let rotateHour = ((currentHour + "." + currentMinute) / 12) * 360;
    let hoursPointer = document.querySelector("#clock__hours");
    hoursPointer.style.transform = "rotate(" + rotateHour + "deg)";
}

setInterval(Timer, 1000);

function Timer() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    let currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
    let timerDiv = document.querySelector("#clock__digital");
    timerDiv.innerText = currentTime;
}
