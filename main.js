let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".button");
var sound = new Audio("/sound/mixkit-fast-double-click-on-mouse-275.wav");

let string = "";
let arr = Array.from(buttons);

console.log(input);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    sound.play();
    if (e.target.value == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.value == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.value == "DE") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.value;
      input.value = string;
    }
  });
});
