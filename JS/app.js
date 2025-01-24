/////////////////
// Time Calculation

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

      if (!hasInput("monday")) {
        return;
      } else {
        calcDepartureTime = arrivalTime + overtime + breakTime + 450;
      }
      const departureTimeMO = minutesToTimeString(calcDepartureTime);
      return departureTimeMO;

    case "tuesday":
      const overtimeTU = timeStringToMinutes(getOverTime("tuesday"));
      const arrivalTimeTU = timeStringToMinutes(getArrivalTime("tuesday"));
      const breakTimeTU = timeStringToMinutes(getBreakTime("tuesday"));

      let calcDepartureTimeTU;

      if (!hasInput("tuesday")) {
        return;
      } else {
        calcDepartureTimeTU = arrivalTimeTU + overtimeTU + breakTimeTU + 450;
      }
      const departureTimeTU = minutesToTimeString(calcDepartureTimeTU);
      return departureTimeTU;

      break;
    case "wednesday":
      const overtimeWE = timeStringToMinutes(getOverTime("wednesday"));
      const arrivalTimeWE = timeStringToMinutes(getArrivalTime("wednesday"));
      const breakTimeWE = timeStringToMinutes(getBreakTime("wednesday"));

      let calcDepartureTimeWE;

      if (!hasInput("wednesday")) {
        return;
      } else {
        calcDepartureTimeWE = arrivalTimeWE + overtimeWE + breakTimeWE + 450;
      }
      const departureTimeWE = minutesToTimeString(calcDepartureTimeWE);
      return departureTimeWE;
      break;
    case "thursday":
      const overtimeTH = timeStringToMinutes(getOverTime("thursday"));
      const arrivalTimeTH = timeStringToMinutes(getArrivalTime("thursday"));
      const breakTimeTH = timeStringToMinutes(getBreakTime("thursday"));

      let calcDepartureTimeTH;

      if (!hasInput("thursday")) {
        return;
      } else {
        calcDepartureTimeTH = arrivalTimeTH + overtimeTH + breakTimeTH + 450;
      }
      const departureTimeTH = minutesToTimeString(calcDepartureTimeTH);
      return departureTimeTH;

    case "friday":
      const overtimeFR = timeStringToMinutes(getOverTime("friday"));
      const arrivalTimeFR = timeStringToMinutes(getArrivalTime("friday"));
      const breakTimeFR = timeStringToMinutes(getBreakTime("friday"));

      let calcDepartureTimeFR;

      if (!hasInput("friday")) {
        return;
      } else {
        calcDepartureTimeFR = arrivalTimeFR + overtimeFR + breakTimeFR + 450;
      }
      const departureTimeFR = minutesToTimeString(calcDepartureTimeFR);
      return departureTimeFR;
    default:
      console.log("Not a valid day!");
      return false;
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
