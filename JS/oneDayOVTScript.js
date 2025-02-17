/* Get Inputs*/
const arrivalInput = document.getElementById("input_Arrival");
const breakInput = document.getElementById("input_Break");
const overtimeInput = document.getElementById("input_Overtime");

/* Functions to convert time to minutes and minutes to time */
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

const dismantleCB = document.getElementById("dismantle");

/* Function to calculate the departure Time */
const calcDepartureTime = function (arrivalInput, breakInput, overtimeInput) {
  const arrivalMinutes = timeStringToMinutes(arrivalInput.value);
  const breakMinutes = timeStringToMinutes(breakInput.value);
  const overtimeMinutes = timeStringToMinutes(overtimeInput.value);
  let calcDepartureTime;

  if (dismantleCB.checked) {
    calcDepartureTime = arrivalMinutes + breakMinutes + 450 - overtimeMinutes;
  } else {
    calcDepartureTime = arrivalMinutes + overtimeMinutes + breakMinutes + 450;
  }
  const departureTime = minutesToTimeString(calcDepartureTime);
  return departureTime;
};

/* Function to calculate the total worked hours */
const calcWorkedHours = function (arrivalInput, departureTime, breakInput) {
  const arrivalMinutes = timeStringToMinutes(arrivalInput.value);
  const departureMinutes = timeStringToMinutes(departureTime);
  const breakMinutes = timeStringToMinutes(breakInput.value);
  const workedMinutes = departureMinutes - arrivalMinutes - breakMinutes;
  return minutesToTimeString(workedMinutes);
};

/* Function to display the departure Time */
const departureOutput = document.querySelector(".departureTime");
const displayTime = function () {
  const departureTime = calcDepartureTime(
    arrivalInput,
    breakInput,
    overtimeInput
  );
  departureOutput.textContent = departureTime || "00:00";
};

// Function to display the total worked hours
const workedHoursOutput = document.querySelector(".workedHours");
const displayWorkedHours = function () {
  const departureTime = calcDepartureTime(
    arrivalInput,
    breakInput,
    overtimeInput
  );
  const workedHours = calcWorkedHours(arrivalInput, departureTime, breakInput);
  workedHoursOutput.textContent = workedHours || "00:00";
};

/* Event Listener for the calculate Button */
const calculateBttn = document.querySelector(".calculateBttn");
calculateBttn.addEventListener("click", () => {
  displayTime();
  displayWorkedHours();
});
