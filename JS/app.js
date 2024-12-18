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

// Monday input values
const arrivalMOInput = document.getElementById("input_Monday_Arrival");
const breakMOInput = document.getElementById("input_Monday_Break");
const overtimeMOInput = document.getElementById("input_Monday_Overtime");

// Tuesday input values
const arrivalTUInput = document.getElementById("input_Tuesday_Arrival");
const breakTUInput = document.getElementById("input_Tuesday_Break");
const overtimeTUInput = document.getElementById("input_Tuesday_Overtime");

// Wednesday input values
const arrivalWEInput = document.getElementById("input_Wednesday_Arrival");
const breakWEInput = document.getElementById("input_Wednesday_Break");
const overtimeWEInput = document.getElementById("input_Wednesday_Overtime");

// Thursday input values
const arrivalTHInput = document.getElementById("input_Thursday_Arrival");
const breakTHInput = document.getElementById("input_Thursday_Break");
const overtimeTHInput = document.getElementById("input_Thursday_Overtime");

// Friday input values
const arrivalFRInput = document.getElementById("input_Friday_Arrival");
const breakFRInput = document.getElementById("input_Friday_Break");
const overtimeFRInput = document.getElementById("input_Friday_Overtime");

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
      return "0:00";
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
      return "0:00";
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
      return "0:00";
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

// BUG If first time no input abd
function calcDepartureTime(day) {
  switch (day) {
    case "monday":
      const overtime = timeStringToMinutes(getOverTime("monday"));
      const arrivalTime = timeStringToMinutes(getArrivalTime("monday"));
      const breakTime = timeStringToMinutes(getBreakTime("monday"));

      let calcDepartureTime;

      if (arrivalMOInput.value != null) {
        calcDepartureTime = arrivalTime;
        console.log(calcDepartureTime);
      } else {
        calcDepartureTime = arrivalTime + overtime + breakTime + 450;
      }

      const departureTimeMO = minutesToTimeString(calcDepartureTime);
      return departureTimeMO;

    case "tuesday":
      const overtimeTU = timeStringToMinutes(getOverTime("tuesday"));
      const arrivalTimeTU = timeStringToMinutes(getArrivalTime("tuesday"));
      const breakTimeTU = timeStringToMinutes(getBreakTime("tuesday"));

      const calcDepartureTimeTU =
        arrivalTimeTU + overtimeTU + breakTimeTU + 450;
      const departureTimeTU = minutesToTimeString(calcDepartureTimeTU);

      return departureTimeTU;

      break;
    case "wednesday":
      const overtimeWE = timeStringToMinutes(getOverTime("wednesday"));
      const arrivalTimeWE = timeStringToMinutes(getArrivalTime("wednesday"));
      const breakTimeWE = timeStringToMinutes(getBreakTime("wednesday"));

      const calcDepartureTimeWE =
        arrivalTimeWE + overtimeWE + breakTimeWE + 450;
      const departureTimeWE = minutesToTimeString(calcDepartureTimeWE);

      return departureTimeWE;

      break;
    case "thursday":
      const overtimeTH = timeStringToMinutes(getOverTime("thursday"));
      const arrivalTimeTH = timeStringToMinutes(getArrivalTime("thursday"));
      const breakTimeTH = timeStringToMinutes(getBreakTime("thursday"));

      const calcDepartureTimeTH =
        arrivalTimeTH + overtimeTH + breakTimeTH + 450;
      const departureTimeTH = minutesToTimeString(calcDepartureTimeTH);

      return departureTimeTH;

    case "friday":
      const overtimeFR = timeStringToMinutes(getOverTime("friday"));
      const arrivalTimeFR = timeStringToMinutes(getArrivalTime("friday"));
      const breakTimeFR = timeStringToMinutes(getBreakTime("friday"));

      const calcDepartureTimeFR =
        arrivalTimeFR + overtimeFR + breakTimeFR + 450;
      const departureTimeFR = minutesToTimeString(calcDepartureTimeFR);

      return departureTimeFR;

    default:
  }
}

/////////////////
// Display Times

const mondayOutput = document.getElementById("mondayTimeOutput");
const tuesdayOutput = document.getElementById("tuesdayTimeOutput");
const wednesdayOutput = document.getElementById("wednesdayTimeOutput");
const thursdayOutput = document.getElementById("thursdayTimeOutput");
const fridayOutput = document.getElementById("fridayTimeOutput");

function displayTime() {
  const departureDisplayMO = calcDepartureTime("monday");
  mondayOutput.textContent = departureDisplayMO || "00:00";

  const departureDisplayTU = calcDepartureTime("tuesday");
  tuesdayOutput.textContent = departureDisplayTU || "00:00";

  const departureDisplayWE = calcDepartureTime("wednesday");
  wednesdayOutput.textContent = departureDisplayWE || "00:00";

  const departureDisplayTH = calcDepartureTime("thursday");
  thursdayOutput.textContent = departureDisplayTH || "00:00";

  const departureDisplayFR = calcDepartureTime("friday");
  fridayOutput.textContent = departureDisplayFR || "00:00";
}

const calculateBttn = document.querySelector(".calcButton");

calculateBttn.addEventListener("click", () => {
  displayTime();
});

/////////////////
// Notifications

/* Get all Elements */
const notifManager = document.querySelector(".notifManger");
const notifTitle = document.getElementById("notifTitle");
const notifMessage = document.getElementById("notifMessage");

/**
 * @param {string} type The type of the Notification Message (warning, success, info, error)
 * @param {string} message The message that will be displayed on the Notification Popup
 * @param {int} duration How long the Notification Popup will be displayed
 */

const notificationManager = function (type, message, duration) {
  switch (type) {
    case "success":
      notifDesigner("success", message);
      break;
    case "info":
      notifDesigner("info", message);
      break;
    case "warning":
      notifDesigner("warning", message);
      break;
    case "error":
      notifDesigner("error", message);
      break;
    default:
      console.error("No Notification type selected!");
  }
  /* Add the class which makes the Notification visible */
  notifManager.classList.add("notifShow");

  /* Remove the class after a period of time */
  setTimeout(() => {
    notifManager.classList.remove("notifShow");
  }, duration);
};

const notifDesigner = function (type, message) {
  notifManager.style.backgroundColor =
    type === "success"
      ? "#14532d"
      : type === "info"
      ? "#1e3a8a"
      : type === "warning"
      ? "#713f12"
      : type === "error"
      ? "#7f1d1d"
      : "#fff";

  notifTitle.textContent =
    type === "success"
      ? "Success - "
      : type === "info"
      ? "Info - "
      : type === "warning"
      ? "Warning - "
      : type === "error"
      ? "Error - "
      : "Placeholder";

  notifTitle.style.color =
    type === "success"
      ? "#dcfcdc"
      : type === "info"
      ? "#889ccb"
      : type === "warning"
      ? "#efe6b0"
      : type === "error"
      ? "#ecc7c7"
      : "#fff";

  notifMessage.textContent = message;
  notifMessage.style.color =
    type === "success"
      ? "#dcfcdc"
      : type === "info"
      ? "#889ccb"
      : type === "warning"
      ? "#efe6b0"
      : type === "error"
      ? "#ecc7c7"
      : "#fff";
};
