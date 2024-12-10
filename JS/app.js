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
  //List with all the weekdays
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //weekdays[currentDate.getDay()] gets the entry on the day number
  const currentDateLayout =
    weekdays[currentDate.getDay()] + ", " + currentDate.toLocaleDateString();

  return currentDateLayout;
}

currentTimeH.textContent = getCurrentTime();
currentDateH.textContent = getCurrentDate();
