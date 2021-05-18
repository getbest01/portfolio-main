let shown = false;
let myOpenSound = new sound("./sound/curtain_open.ogg");
let myCloseSound = new sound("./sound/curtain_close.ogg");
let buttonText = document.querySelector(".curtainBtn");
let leftPanel = document.querySelector(".left-panel");
let rightPanel = document.querySelector(".right-panel");
let curtainObj = document.querySelector(".curtain");

function curtainFn() {
  console.log(shown);
  if (!shown) {
    myOpenSound.stop();
    myOpenSound.play();
    leftPanel.style = "transform:translateX(-100%)";
    rightPanel.style = "transform:translateX(100%)";
    setTimeout(curtainHide, 1000);
    curtainObj.style.overflow = "auto";
    shown = true;
    buttonText.textContent = "CLOSE IT OUT!";
  } else {
    myCloseSound.stop();
    myCloseSound.play();
    leftPanel.style.width = "50%";
    rightPanel.style.width = "50%";
    rightPanel.style.display = "block";
    setTimeout(curtainClose, 700);
    shown = false;
    buttonText.textContent = "CHECK IT OUT!";
    curtainObj.style.overflow = "hidden";
  }
}

function curtainHide() {
  rightPanel.style.display = "none";
}

function curtainClose() {
  leftPanel.style.transform = "";
  rightPanel.style.transform = "";
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
