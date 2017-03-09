// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
};

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;
    this.click = null;
    this.clicked = false;
    this.mouse = null;
    this.mousePos = {x:0, y:0};
    this.rightMove = null;
    this.leftMove = null;
    this.direction = "right";
    this.jumping = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
    this.rightEdge = null;
    this.leftEdge = null;
    this.tickCount = 0;
    this.anotherCount = 0;
    this.changeScene = false;
    this.lastScene = 0;
    this.nextScene = 0;
    this.scenes = null;
    this.verticalDirection = "none";
    this.scoreTimerStart = null;

    // new properties
    this.score = null;
    this.offset = null;
    this.time = null;
    this.heroIsDead = null;
    this.deadTime = null;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    console.log('game initialized');
    this.ctx.canvas.style.cursor = "none";
};

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};


GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;

    var getXandY = function (e) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

        return { x: x, y: y };
    };



    this.ctx.canvas.addEventListener("keydown", function (e) {

        if (e.key === ' ') {
          that.jumping = true;

        }

        if (e.code === 'KeyD') {
            that.moveRight = true;
            that.direction = "right";
         }

         if (e.code === 'KeyA') {
           that.moveLeft = true;
           that.direction = "left";

         }

         if (e.code === 'KeyW') {
           that.moveup = true;
           that.verticalDirection = "up";
         }

         if (e.code === 'KeyS') {
           that.movedown = true;
           that.verticalDirection = "down";
         }
        e.preventDefault();
    }, false);


    this.ctx.canvas.addEventListener("keyup", function(e) {

        if (e.code === 'KeyD') {
          that.moveRight = false;

        }

        if (e.code === 'KeyA') {
          that.moveLeft = false;
        }

        if (e.code === 'KeyW') {
          that.moveup = false;
          that.verticalDirection = "none";
        }

        if (e.code === 'KeyS') {
          that.movedown = false;
          that.verticalDirection = "none";

        }

        e.preventDefault();
    }, false);

//    this.ctx.canvas.addEventListener("click", function(e) {
//        that.click = getXandY(e);
//
//
//        if (that.clicked === true) {
//            that.clicked = false;
//        }
//        else {
//            that.clicked = true;
//        }
//
//        e.preventDefault();
//    }, false);

    this.ctx.canvas.addEventListener("mousemove", function(e) {
    that.mousePos = getXandY(e);


    e.preventDefault();

}, false);

    this.ctx.canvas.addEventListener("mousedown", function(e) {
        that.mousePos = getXandY(e);
        that.click = getXandY(e);

        that.clicked = true;
    //e.preventDefault();

}, false);


    this.ctx.canvas.addEventListener("mouseup", function(e) {


    that.mousePos = getXandY(e);

       that.clicked = false;

    //e.preventDefault();

}, false);


    console.log('Input started');
};

GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
};

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
    this.ctx.restore();
};

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
          if(entity.type === "hero" && entity.x >= 1200) {
            this.rightEdge = true;

          } else if (entity.type === "hero" && entity.x < 0) {
            this.leftEdge = true;
          }
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
};

GameEngine.prototype.loop = function () {
  // If hero is dead
  if (!this.heroIsDead)
    this.time = this.timer.gameTime - this.scoreTimer - this.deadTime;
  // In the game
  else
    this.deadTime = this.timer.gameTime - this.time;

    document.getElementById("minutes").innerHTML = Math.floor(this.time / 60);
    document.getElementById("seconds").innerHTML = Math.floor(this.time) % 60;

    // Keep running
    this.score = 1000 - Math.floor(this.time) * 5 + this.offset;
    document.getElementById("score").innerHTML = this.score;

    this.clockTick = this.timer.tick();
    this.tickCount ++;
    this.anotherCount++;
    this.update();
    this.draw();
    this.space = null;
    if(this.changeScene) {
      this.changeScene = false;
      if (this.scenes[this.nextScene].startTimer) {
        this.scoreTimer = this.timer.gameTime;
      }
      this.scenes[this.nextScene].init();
      this.scenes[this.lastScene].remove();

    }
    this.lastScene = this.nextScene;

};

/*
Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}
*/
