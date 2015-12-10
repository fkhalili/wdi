// -------- PART UNO ---------------

$(function() {
  // Your code here!
  var canvas = document.getElementById('canvas-fun');
  var ctx = canvas.getContext('2d');

  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // let's make a trianglz bro
  ctx.fillStyle = "blanchedalmond";
  var path = new Path2D();
  // Lifts our pen to the starting point
  path.moveTo(175, 50);
  // started drawing lines from that point to other points
  path.lineTo(100, 75);
  path.lineTo(100, 25);
  ctx.fill(path);

  // circle up

  ctx.strokeStyle = "#FFFFFF"
  var ceercle = new Path2D();
  // ceercle.arc(x, y, radius, startedrting angle, ending angle, counter clockwise?);
  ceercle.arc(205, 85, 60, 0, Math.PI * 2, true);
  ctx.stroke(ceercle);

});

// --------- PART DOS -------------

$(function() {
  // Your code here!
  var canvas = document.getElementById('canvas-fun');
  var ctx = canvas.getContext('2d');

  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var posX = 100;
  var posY = 100;

  var velX = 5;
  var velY = 5;

  var gravity = 1;

  // Let's get animating!
  setInterval(function() {
    // redrawing our background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw that square!
    ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
    // ctx.fillStyle = "white"
    ctx.fillRect(posX, posY, 10, 10);

    posX += velX;
    posY += velY;

    if (posX > canvas.width - 10 || posX < 10) {
      velX *= -1;
    }

    // Make it bounce off the walls!
    if (posY > 400) {
      velY *= -1;

      posY = 400;
    }


    velY += gravity;

  }, 30)

});


// ---------- Part Tres -----------

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

// Let's make a Particle constructor!

var Particle = function Particle () {
  // paricle in the middle
  this.x = mouseLocationX;
  this.y = mouseLocationY;
  this.gravity = 0.5;
  // rainbow effect
  this.red = 255;
  this.green = 255;
  this.blue = 255;
  this.velX = (Math.random() * 6) - 3;
  this.velY = (Math.random() * 6) - 3;
  this.maxLife = 20;
  this.lifeCounter = 0;
  this.render = function() {
    this.lifeCounter += 1;
    this.x += this.velX;
    this.y += this.velY;
    this.red -= Math.floor(Math.random() * 20)
    this.green -= Math.floor(Math.random() * 20)
    this.blue -= Math.floor(Math.random() * 20)
    ctx.fillStyle = "rgb("+this.red+ ","+this.green+ ","+this.blue+")";
    ctx.fillRect(this.x, this.y, 10, 10);
    this.velY += this.gravity;
    if (this.lifeCounter >= this.maxLife) {
      // console.log("LET ME DIE")
      delete particles[particles.indexOf(this)];
    }
  }
}

  // Let's get animating!
  setInterval(function() {
    // redrawing our background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 10; i++) {
      var particle = new Particle();
      particles.push(particle);
      
    };

    particles.forEach(function(el) {
      el.render();
    })


  }, 30)

});


