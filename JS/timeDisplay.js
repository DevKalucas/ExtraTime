/**
 * Returns the current date formatted as "Weekday, MM/DD/YYYY".
 *
 * @returns {string} The current date in the format "Weekday, MM/DD/YYYY".
 */
function getCurrentDate() {
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDate = new Date();
  var currentDateLayout =
    weekdays[currentDate.getDay()] + ", " + currentDate.toLocaleDateString();
  return currentDateLayout;
}
/**
 * Gets the current time as a localized string.
 *
 * @returns {string} The current time formatted as a locale-specific string.
 */
function getCurrentTime() {
  var currentTime = new Date();
  return currentTime.toLocaleTimeString();
}
/**
 * Updates the text content of the HTML element with the class "currentTime"
 * to the current time.
 */
function updateCurrentTime() {
  var currentTimeH = document.querySelector(".currentTime");
  currentTimeH.textContent = getCurrentTime();
}
/**
 * A reference to the HTML element with the class "currentDate".
 * This element is used to display the current date.
 * @type {Element}
 */
document.addEventListener("DOMContentLoaded", function () {
  var currentDateH = document.querySelector(".currentDate");
  currentDateH.textContent = getCurrentDate();
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});
