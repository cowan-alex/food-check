var userInput = $('input');
var button = $('button');
var feedback = $('.feedback');
var p = $('p');

button.on("click", evaluate)

function evaluate() {
  if (userInput.val() == "Taco Bell") {
    console.log("Yes! You truly do have good taste in food.");

  }
  else {
    console.log("Ewwwwwwwwwwww!");
  }
}
