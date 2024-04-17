let timer;
let totalTime;
let audio = document.getElementById("alarmSound");

function startTimer() {
    let minutesInput = document.getElementById("minutes").value;
    let secondsInput = document.getElementById("seconds").value;

    if (minutesInput === "" && secondsInput === "") {
        alert("Vui lòng nhập số liệu");
        return;
    }

    let minutes = parseInt(minutesInput) || 0;
    let seconds = parseInt(secondsInput) || 0;

    if (minutes < 0 || seconds < 0 || minutes > 59 || seconds > 59) {
        alert("không thuộc phạm vi");
        return;
    }

    totalTime = minutes * 60 + seconds;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    document.getElementById("timer").innerText = formatTime(minutes) + ":" + formatTime(seconds);

    if (totalTime === 0) {
        audio.play();
        clearInterval(timer);
        alert("hết giờ");
    } else {
        totalTime--;
    }
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timer").innerText = "00:00";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    audio.pause();
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}