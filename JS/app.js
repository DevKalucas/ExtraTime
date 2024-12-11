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

/////////////////
// Time Calculation
/////////////////

// Monday input values
const arrivalMOInput = document.getElementById("input_Monday_Arrival");
const breakMOInput = document.getElementById("input_Monday_Break");
const overtimeMOInput = document.getElementById("input_Monday_Overtime");
const totalMOInput = document.getElementById("input_Monday_Total");

// Tuesday input values
const arrivalTUInput = document.getElementById("input_Tuesday_Arrival");
const breakTUInput = document.getElementById("input_Tuesday_Break");
const overtimeTUInput = document.getElementById("input_Tuesday_Overtime");
const totalTUInput = document.getElementById("input_Tuesday_Total");

// Wednesday input values
const arrivalWEInput = document.getElementById("input_Wednesday_Arrival");
const breakWEInput = document.getElementById("input_Wednesday_Break");
const overtimeWEInput = document.getElementById("input_Wednesday_Overtime");
const totalWEInput = document.getElementById("input_Wednesday_Total");

// Thursday input values
const arrivalTHInput = document.getElementById("input_Thursday_Arrival");
const breakTHInput = document.getElementById("input_Thursday_Break");
const overtimeTHInput = document.getElementById("input_Thursday_Overtime");
const totalTHInput = document.getElementById("input_Thursday_Total");

// Friday input values
const arrivalFRInput = document.getElementById("input_Friday_Arrival");
const breakFRInput = document.getElementById("input_Friday_Break");
const overtimeFRInput = document.getElementById("input_Friday_Overtime");
const totalFRInput = document.getElementById("input_Friday_Total");

function getArrivalTime(day) {
  switch (day) {
    case "monday":
      return arrivalMOInput.value || "00:00";
    case "tuesday":
      return arrivalTUInput.value || "00:00";
    case "wednesday":
      return arrivalWEInput.value || "00:00";
    case "thursday":
      return arrivalTHInput.value || "00:00";
    case "friday":
      return arrivalFRInput.value || "00:00";
    default:
      console.log("Not a valid day!");
      return "00:00";
  }
}

function getBreakTime(day) {
  switch (day) {
    case "monday":
      return breakMOInput.value || "00:00";
    case "tuesday":
      return breakTUInput.value || "00:00";
    case "wednesday":
      return breakWEInput.value || "00:00";
    case "thursday":
      return breakTHInput.value || "00:00";
    case "friday":
      return breakFRInput.value || "00:00";
    default:
      console.log("Not a valid day!");
      return "00:00";
  }
}

function getOverTime(day) {
  switch (day) {
    case "monday":
      return overtimeMOInput.value || "00:00";
    case "tuesday":
      return overtimeTUInput.value || "00:00";
    case "wednesday":
      return overtimeWEInput.value || "00:00";
    case "thursday":
      return overtimeTHInput.value || "00:00";
    case "friday":
      return overtimeFRInput.value || "00:00";
    default:
      console.log("Not a valid day!");
      return "00:00";
  }
}

function timeStringToMinutes(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTimeString(minutes) {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
}

function calcTotalTime(day) {
  const arrivalTime = timeStringToMinutes(getArrivalTime(day));
  const breakTime = timeStringToMinutes(getBreakTime(day));
  const overtimeTime = timeStringToMinutes(getOverTime(day));
  const totalTime = arrivalTime + breakTime + overtimeTime;
  return minutesToTimeString(totalTime);
}

function updateTotalTime(day) {
  const totalTime = calcTotalTime(day);
  switch (day) {
    case "monday":
      totalMOInput.value = totalTime;
      break;
    case "tuesday":
      totalTUInput.value = totalTime;
      break;
    case "wednesday":
      totalWEInput.value = totalTime;
      break;
    case "thursday":
      totalTHInput.value = totalTime;
      break;
    case "friday":
      totalFRInput.value = totalTime;
      break;
    default:
      console.log("Not a valid day!");
  }
}

arrivalMOInput.addEventListener("input", () => updateTotalTime("monday"));
breakMOInput.addEventListener("input", () => updateTotalTime("monday"));
overtimeMOInput.addEventListener("input", () => updateTotalTime("monday"));

arrivalTUInput.addEventListener("input", () => updateTotalTime("tuesday"));
breakTUInput.addEventListener("input", () => updateTotalTime("tuesday"));
overtimeTUInput.addEventListener("input", () => updateTotalTime("tuesday"));

arrivalWEInput.addEventListener("input", () => updateTotalTime("wednesday"));
breakWEInput.addEventListener("input", () => updateTotalTime("wednesday"));
overtimeWEInput.addEventListener("input", () => updateTotalTime("wednesday"));

arrivalTHInput.addEventListener("input", () => updateTotalTime("thursday"));
breakTHInput.addEventListener("input", () => updateTotalTime("thursday"));
overtimeTHInput.addEventListener("input", () => updateTotalTime("thursday"));

arrivalFRInput.addEventListener("input", () => updateTotalTime("friday"));
breakFRInput.addEventListener("input", () => updateTotalTime("friday"));
overtimeFRInput.addEventListener("input", () => updateTotalTime("friday"));
