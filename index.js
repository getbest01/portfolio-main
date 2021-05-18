let shown = false;
let myOpenSound = new sound("./sound/curtain_open.ogg");
let myCloseSound = new sound("./sound/curtain_close.ogg");
let buttonText = document.querySelector(".curtainBtn");

function curtainFn() {
  if (!shown) {
    myOpenSound.stop();
    myOpenSound.play();
    document.querySelector(".left-panel").style.transform = "translateX(-100%)";
    document.querySelector(".right-panel").style.transform = "translateX(100%)";
    document.querySelector(".right-panel").style.width = "1px";
    document.querySelector(".left-panel").style.width = "1px";
    document.querySelector(".curtain").style.overflow = "auto";
    shown = true;
    buttonText.textContent = "CLOSE IT OUT!";
  } else {
    myCloseSound.stop();
    myCloseSound.play();
    document.querySelector(".left-panel").style.transform = "";
    document.querySelector(".right-panel").style.transform = "";
    document.querySelector(".right-panel").style.width = "50%";
    document.querySelector(".left-panel").style.width = "50%";
    document.querySelector(".curtain").style.overflow = "hidden";
    shown = false;
    buttonText.textContent = "CHECK IT OUT!";
  }
}

//define soundsource
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
    this.sound.currentTime = 0;
  };
}
