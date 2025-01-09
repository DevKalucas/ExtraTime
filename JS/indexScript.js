function getCurrentDate() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDateLayout =
    weekdays[currentDate.getDay()] + ", " + currentDate.toLocaleDateString();

  return currentDateLayout;
}

function getCurrentTime() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
}

function updateCurrentTime() {
  const currentTimeH = document.querySelector(".currentTime");
  currentTimeH.textContent = getCurrentTime();
}

document.addEventListener("DOMContentLoaded", () => {
  const currentDateH = document.querySelector(".currentDate");
  currentDateH.textContent = getCurrentDate();
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});
