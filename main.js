let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

const newYear = "1 Jan 2024";

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = format(Math.floor(totalSeconds / 3600) % 24);
  const minutes = format(Math.floor(totalSeconds / 60) % 60);
  const seconds = format(Math.floor(totalSeconds) % 60);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

function format(time){
    return time < 10 ? (`0${time}`) : time
}

countDown();

setInterval(countDown, 1000);
