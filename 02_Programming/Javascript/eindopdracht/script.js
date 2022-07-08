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
    let currentMinute = currentDate.getMinutes()
    let rotateHour = ((currentHour + "." + currentMinute) / 12) * 360
    let hourPointer = document.querySelector(".clock__hours");
    hourPointer.style.transform = "rotate(" + rotateHour + "deg)";
}

