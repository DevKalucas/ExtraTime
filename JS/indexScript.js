const currentTimeH = document.querySelector(".currentTime");
const currentDateH = document.querySelector(".currentDate");

const currentDate = new Date();

function getCurrentTime() {
  const currentTimeLayout = currentDate.toLocaleTimeString("de-DE", {
    timeZone: "CET",
  });
  return currentTimeLayout;
}

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
  const currentDateLayout =
    weekdays[currentDate.getDay()] + ", " + currentDate.toLocaleDateString();

  return currentDateLayout;
}

currentTimeH.textContent = getCurrentTime();
currentDateH.textContent = getCurrentDate();
