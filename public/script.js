
const color = ['white', '#f2ddae', '#e2f2ae', '#c8f2ae', '#aef2ed', '#b5aef2'];
const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270

body = document.body;
titleBtn = document.getElementById("titleBtn");


function changeColour() {
  randomNum = Math.floor(Math.random()*6)
  body.style.background = color[randomNum];
  titleBtn.style.background = color[randomNum];
}

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

window.addEventListener("mousemove", handleMouseMove);