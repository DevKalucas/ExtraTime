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
      return arrivalMOInput.value || "0:00";
    case "tuesday":
      return arrivalTUInput.value || "0:00";
    case "wednesday":
      return arrivalWEInput.value || "0:00";
    case "thursday":
      return arrivalTHInput.value || "0:00";
    case "friday":
      return arrivalFRInput.value || "0:00";
    default:
      console.log("Not a valid day!");
      return "0:00";
  }
}

function getBreakTime(day) {
  switch (day) {
    case "monday":
      return breakMOInput.value || "0:00";
    case "tuesday":
      return breakTUInput.value || "0:00";
    case "wednesday":
      return breakWEInput.value || "0:00";
    case "thursday":
      return breakTHInput.value || "0:00";
    case "friday":
      return breakFRInput.value || "0:00";
    default:
      console.log("Not a valid day!");
      return "0:00";
  }
}

function getOverTime(day) {
  switch (day) {
    case "monday":
      return overtimeMOInput.value || "0:00";
    case "tuesday":
      return overtimeTUInput.value || "0:00";
    case "wednesday":
      return overtimeWEInput.value || "0:00";
    case "thursday":
      return overtimeTHInput.value || "0:00";
    case "friday":
      return overtimeFRInput.value || "0:00";
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

function calcTotalTime(day) {
  const arrivalTime = timeStringToMinutes(getArrivalTime(day));
  const breakTime = timeStringToMinutes(getBreakTime(day));
  const overtimeTime = timeStringToMinutes(getOverTime(day));
  const totalTime = arrivalTime + overtimeTime;
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

// BUG
function calcDepartureTime(day) {
  switch (day) {
    case "monday":
      const overtime = timeStringToMinutes(getOverTime("monday"));
      const arrivalTime = timeStringToMinutes(getArrivalTime("monday"));
      const breakTime = timeStringToMinutes(getBreakTime("monday"));

      if (hasInput("monday")) {
        const calcDepartureTime = arrivalTime + overtime + breakTime + 450;
        const departureTimeMO = minutesToTimeString(calcDepartureTime);

        return departureTimeMO;
      } else {
        const calcDepartureTime = arrivalTime;
        const departureTimeMO = minutesToTimeString(calcDepartureTime);

        return departureTimeMO;
      }

      break;
    case "tuesday":
      const overtimeTU = timeStringToMinutes(getOverTime("tuesday"));
      const arrivalTimeTU = timeStringToMinutes(getArrivalTime("tuesday"));
      const breakTimeTU = timeStringToMinutes(getBreakTime("tuesday"));

      if (hasInput("tuesday")) {
        const calcDepartureTimeTU =
          arrivalTimeTU + overtimeTU + breakTimeTU + 450;
        const departureTimeTU = minutesToTimeString(calcDepartureTimeTU);

        return departureTimeTU;
      } else {
        const calcDepartureTimeTU = arrivalTimeTU;
        const departureTimeTU = minutesToTimeString(calcDepartureTimeTU);

        return departureTimeTU;
      }
      break;
    case "wednesday":
      const overtimeWE = timeStringToMinutes(getOverTime("wednesday"));
      const arrivalTimeWE = timeStringToMinutes(getArrivalTime("wednesday"));
      const breakTimeWE = timeStringToMinutes(getBreakTime("wednesday"));

      if (hasInput("wednesday")) {
        const calcDepartureTimeWE =
          arrivalTimeWE + overtimeWE + breakTimeWE + 450;
        const departureTimeWE = minutesToTimeString(calcDepartureTimeWE);

        return departureTimeWE;
      } else {
        const calcDepartureTimeWE = arrivalTimeWE;
        const departureTimeWE = minutesToTimeString(calcDepartureTimeWE);

        return departureTimeWE;
      }

      break;
    case "thursday":
      const overtimeTH = timeStringToMinutes(getOverTime("thursday"));
      const arrivalTimeTH = timeStringToMinutes(getArrivalTime("thursday"));
      const breakTimeTH = timeStringToMinutes(getBreakTime("thursday"));

      if (hasInput("thursday")) {
        const calcDepartureTimeTH =
          arrivalTimeTH + overtimeTH + breakTimeTH + 450;
        const departureTimeTH = minutesToTimeString(calcDepartureTimeTH);

        return departureTimeTH;
      } else {
        const calcDepartureTimeTH = arrivalTimeTH;
        const departureTimeTH = minutesToTimeString(calcDepartureTimeTH);

        return departureTimeTH;
      }

    case "friday":
      const overtimeFR = timeStringToMinutes(getOverTime("friday"));
      const arrivalTimeFR = timeStringToMinutes(getArrivalTime("friday"));
      const breakTimeFR = timeStringToMinutes(getBreakTime("friday"));

      if (hasInput("friday")) {
        const calcDepartureTimeFR =
          arrivalTimeFR + overtimeFR + breakTimeFR + 450;
        const departureTimeFR = minutesToTimeString(calcDepartureTimeFR);

        return departureTimeFR;
      } else {
        const calcDepartureTimeFR = arrivalTimeFR;
        const departureTimeFR = minutesToTimeString(calcDepartureTimeFR);

        return departureTimeFR;
      }

    default:
  }
}

/////////////////
// Display Times
/////////////////

const mondayOutput = document.getElementById("mondayTimeOutput");
const tuesdayOutput = document.getElementById("tuesdayTimeOutput");
const wednesdayOutput = document.getElementById("wednesdayTimeOutput");
const thursdayOutput = document.getElementById("thursdayTimeOutput");
const fridayOutput = document.getElementById("fridayTimeOutput");

function displayTime() {
  const departureDisplayMO = calcDepartureTime("monday");
  mondayOutput.textContent = departureDisplayMO;

  const departureDisplayTU = calcDepartureTime("tuesday");
  tuesdayOutput.textContent = departureDisplayTU;

  const departureDisplayWE = calcDepartureTime("wednesday");
  wednesdayOutput.textContent = departureDisplayWE;

  const departureDisplayTH = calcDepartureTime("thursday");
  thursdayOutput.textContent = departureDisplayTH;

  const departureDisplayFR = calcDepartureTime("friday");
  fridayOutput.textContent = departureDisplayFR;
}

const calculateBttn = document.querySelector(".calcButton");

calculateBttn.addEventListener("click", () => {
  displayTime();
});

/////////////////
// Check if input is not null
// BUG
function hasInput(day) {
  switch (day) {
    case "monday":
      if (arrivalMOInput.value != null) {
        notificationManager("warning", "No Arrival Time selected!", 3000);
        return false;
      } else {
        return true;
      }
      break;
    case "tuesday":
      if (arrivalTUInput.value != null) {
        notificationManager("warning", "No Arrival Time selected!", 3000);
        return false;
      } else {
        return true;
      }
      break;
    case "wednesday":
      if (arrivalWEInput.value != null) {
        notificationManager("warning", "No Arrival Time selected!", 3000);
        return false;
      } else {
        return true;
      }
      break;
    case "thursday":
      if (arrivalTHInput.value != null) {
        notificationManager("warning", "No Arrival Time selected!", 3000);
        return false;
      } else {
        return true;
      }
      break;
    case "friday":
      if (arrivalFRInput.value != null) {
        notificationManager("warning", "No Arrival Time selected!", 3000);
        return false;
      } else {
        return true;
      }
      break;
  }
}

/////////////////
// Notifications

/* Get all Elements */
const notifManager = document.querySelector(".notifManger");
const notifTitle = document.getElementById("notifTitle");
const notifMessage = document.getElementById("notifMessage");

/**
 * @param {string} type The type of the Notification Message (warning, success, info, error)
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
