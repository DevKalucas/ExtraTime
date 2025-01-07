/* Get Input values*/
const arrivalInput = document.getElementById("#input_Arrival").value;
const breakInput = document.getElementById("#input_Break").value;
const overtimeInput = document.getElementById("#input_Overtime").value;

/* Function to detect if all Inputs have values */
const checkInputs = function (arrivalInput, breakInput, overtimeInput) {
  if (!arrivalInput == "" || breakInput == "" || overtimeInput == "") {
    return true;
  } else {
    return false;
  }
};
