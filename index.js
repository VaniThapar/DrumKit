var numberOfDrums = document.querySelectorAll(".drum").length;



function whichButton(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }
}
for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // const tom1= new Audio('sounds/tom-1.mp3');
    // tom1.play();


    var buttonInnerHTML = this.innerHTML;
whichButton(buttonInnerHTML);
buttonAnimation(buttonInnerHTML)







  });
}

document.addEventListener("keydown", function(event) {
  whichButton(event.key);
  buttonAnimation(event.key)
});

function buttonAnimation(currentButton){
    var activeButton= document.querySelector("."+ currentButton);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed")
    },100);


}
