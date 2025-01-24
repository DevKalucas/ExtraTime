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

/* Function to calculate the departure Time */
const calcDepartureTime = function (arrivalInput, breakInput, overtimeInput) {
  const arrivalMinutes = timeStringToMinutes(arrivalInput.value);
  const breakMinutes = timeStringToMinutes(breakInput.value);
  const overtimeMinutes = timeStringToMinutes(overtimeInput.value);
  let calcDepartureTime;

  calcDepartureTime = arrivalMinutes + overtimeMinutes + breakMinutes + 450;
  const departureTime = minutesToTimeString(calcDepartureTime);
  return departureTime;
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

/* Event Listener for the calculater Button */
const calculateBttn = document.querySelector(".calculateBttn");
calculateBttn.addEventListener("click", displayTime);
