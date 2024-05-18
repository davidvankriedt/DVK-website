
const color = ['white', '#f2ddae', '#e2f2ae', '#c8f2ae', '#aef2ed', '#b5aef2'];

body = document.body;
titleBtn = document.getElementById("titleBtn");


function changeColour() {
  randomNum = Math.floor(Math.random()*6)
  body.style.background = color[randomNum];
  titleBtn.style.background = color[randomNum];
}