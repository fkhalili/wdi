$(function() {
  console.log("LInkeDd");

  // First, grab a reference to your canvas element & context
  var canvas = document.getElementById('canvas-fun');
  var ctx = canvas.getContext('2d');

  // Initial drawing of canvas and append to body
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  // ---- Instantiating particle list & number ---

  var particles = [];
  var particleNum = 20;
  // // declaring these up here for scope reasons
  var mouseLocationX;
  var mouseLocationY;

  // --- Let's make a particle constructor!
  var Particle = function Particle () {
    // this.x = canvas.width/2;
    // this.y = canvas.height/2;

    // Track the mouse
    this.x = mouseLocationX;
    this.y = mouseLocationY;
    this.gravity = 0.1;
    
    // Random velocity between 3 & -2
    this.velX = (Math.random() * 6) - 3;
    this.velY = (Math.random() * 6) - 3;
    // randomizing maxLife
    this.maxLife = Math.floor(Math.random() * 20 + 20);
    this.life = 0;
    this.draw = function() {
      this.x += this.velX;
      this.y += this.velY;
      ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255);
      ctx.fillRect(this.x, this.y, 5, 5);

      this.velY += this.gravity;

      this.life++;
      if (this.life >= this.maxLife) {
        // Deleting this from the array of particles so that it's not rendered anymore
        delete particles[particles.indexOf(this)];
      }
    }
  }

  //--- Add event listener for mouse movement
    $(document).on( "mousemove", function (event){
      mouseLocationX = event.pageX;
      mouseLocationY = event.pageY;
    });

  //--- Add event listener for click EXPLOSION

  $(document).on("click", function(event) {
    particles.forEach(function(el) {
      el.velX *= 10;
      el.velY *= 10;
    });
  });

  // --- animation interval
  setInterval(function() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (var i = 0; i < particleNum; i++) {
      var particle = new Particle();
      particles.push(particle);
    };

    particles.forEach(function(el) {
      el.draw();
    });

  }, 30);

});