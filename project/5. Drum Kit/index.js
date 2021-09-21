var numbeOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbeOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

document.addEventListener("keydown", function() {
  makesound(event.key);
  buttonAnimation(event.key);
});


function makesound(key) {
  switch (key) {
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "f":
      var tom1 = new Audio('sounds/tom-2.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(key);
  }

}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  setTimeout(function() {  activeButton.classList.toggle("pressed");}, 200);
activeButton.classList.toggle("pressed");
}
