////////////////////////////
// Import Inputs

// Monday
const arrivalMOInput = document.getElementById(
  "input_Monday_Arrival"
) as HTMLInputElement;
const breakMOInput = document.getElementById(
  "input_Monday_Break"
) as HTMLInputElement;
const overtimeMOInput = document.getElementById(
  "input_Monday_Overtime"
) as HTMLInputElement;

// Tuesday
const arrivalTUInput = document.getElementById(
  "input_Tuesday_Arrival"
) as HTMLInputElement;
const breakTUInput = document.getElementById(
  "input_Tuesday_Break"
) as HTMLInputElement;
const overtimeTUInput = document.getElementById(
  "input_Tuesday_Overtime"
) as HTMLInputElement;

// Wednesday
const arrivalWEInput = document.getElementById(
  "input_Wednesday_Arrival"
) as HTMLInputElement;
const breakWEInput = document.getElementById(
  "input_Wednesday_Break"
) as HTMLInputElement;
const overtimeWEInput = document.getElementById(
  "input_Wednesday_Overtime"
) as HTMLInputElement;

// Thursday
const arrivalTHInput = document.getElementById(
  "input_Thursday_Arrival"
) as HTMLInputElement;
const breakTHInput = document.getElementById(
  "input_Thursday_Break"
) as HTMLInputElement;
const overtimeTHInput = document.getElementById(
  "input_Thursday_Overtime"
) as HTMLInputElement;

// Friday
const arrivalFRInput = document.getElementById(
  "input_Friday_Arrival"
) as HTMLInputElement;
const breakFRInput = document.getElementById(
  "input_Friday_Break"
) as HTMLInputElement;
const overtimeFRInput = document.getElementById(
  "input_Friday_Overtime"
) as HTMLInputElement;

////////////////////////////
// Functions

function getArrivalTime(day: string) {
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
      throw new Error("Could not find day");
  }
}

function getBreakTime(day: string) {
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
      throw new Error("Could not find day");
  }
}

function getOverTime(day: string) {
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
      throw new Error("Could not find day");
  }
}

function hasInput(day: string) {
  switch (day) {
    case "monday":
      if (arrivalMOInput.value || breakMOInput.value || overtimeMOInput.value) {
        return true;
      } else {
        return false;
      }
    case "tuesday":
      if (arrivalTUInput.value || breakTUInput.value || overtimeTUInput.value) {
        return true;
      } else {
        return false;
      }
    case "wednesday":
      if (arrivalWEInput.value || breakWEInput.value || overtimeWEInput.value) {
        return true;
      } else {
        return false;
      }
    case "thursday":
      if (arrivalTHInput.value || breakTHInput.value || overtimeTHInput.value) {
        return true;
      } else {
        return false;
      }
    case "friday":
      if (arrivalFRInput.value || breakFRInput.value || overtimeFRInput.value) {
        return true;
      } else {
        return false;
      }
  }
}
