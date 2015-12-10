$(function() {
  // Your code here!
  console.log("linked")
  var canvas = document.getElementById("canvas-fun");
  var ctx = canvas.getContext("2d");

  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

var posX = 100
var posY = 100

setInterval(function() {
ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "white";
ctx.fillRect(posX, posY, 10, 10);

posX ++

posY += 2


if (posY > 400) {
	posY * -0.5
}



})



});