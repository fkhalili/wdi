
$(function() {
  // Your code here!
  var canvas = document.getElementById('canvas-fun');
  var ctx = canvas.getContext('2d');

  // canvas setup
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var mouseLocationX;
  var mouseLocationY;
  var particles = [];

// Add a 'mousemove' event listener
$(document).on('mousemove', function(event) {
  mouseLocationX = event.pageX;
  mouseLocationY = event.pageY;

});

// explode
$(document).on('click', function() {
  particles.forEach(function(el) {
    el.velX *= 10;
    el.velY *= 10;
  });
});

// Let's make a Particle constructor!

var Particle = function Particle (color, r, g, b) {
  // paricle in the middle
  this.color = color;
  this.x = mouseLocationX;
  this.y = mouseLocationY;
  this.gravity = 0;
  // ombre effect
  this.red = r || 255;
  this.green = g || 255;
  this.blue = b || 255;
  this.opacity = 1;

  this.velX = (Math.random() * 6) - 3;
  this.velY = (Math.random() * 6) - 3;
  this.maxLife = (Math.random() * 20) + 25;
  this.lifeCounter = 0;
  this.render = function() {
    this.lifeCounter += 1;
    this.x += this.velX;
    this.y += this.velY;


    if (this.color === "green") {
      this.blue -= Math.floor(Math.random() * 30)
      this.red -= Math.floor(Math.random() * 30)
      
    } else if (this.color === "blue") {
      this.green -= Math.floor(Math.random() * 30)
      this.red -= Math.floor(Math.random() * 30)

    } else if (this.color === "red") {
      this.green -= Math.floor(Math.random() * 30)
      this.blue -= Math.floor(Math.random() * 30)
    }
    
    this.opacity *= 0.95;

    ctx.fillStyle = "rgba("+this.red+ ","+this.green+ ","+this.blue+", "+this.opacity+")";
    ctx.fillRect(this.x, this.y, 5, 5);
    this.velY += this.gravity;
    if (this.lifeCounter >= this.maxLife) {
      console.log("LET ME DIE")
      delete particles[particles.indexOf(this)];
    }
  }
}

  // Let's get animating!
  setInterval(function() {
    // redrawing our background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 5; i++) {
      // var particle1 = new Particle("red");
      // var particle2 = new Particle("green");
      var particle3 = new Particle("blue", 100, 255, 100);
      // particles.push(particle1);
      // particles.push(particle2);
      particles.push(particle3);
      
    };

    particles.forEach(function(el) {
      el.render();
    })


  }, 20)

});