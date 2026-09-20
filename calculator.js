const screen = document.getElementById("screen");

function showInScreen(input) {
  screen.value += input;
}
function clearScreen() {
  screen.value = "";
}
function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}
function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}
