
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {

    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = this.elapsedTime - this.totalTime;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;

    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
    ctx.drawImage(this.spriteSheet,
            index * this.frameWidth + offset, vindex * this.frameHeight + this.startY, // source from sheet
            this.frameWidth, this.frameHeight,
            locX, locY,
            this.frameWidth * scaleBy,
            this.frameHeight * scaleBy);

};

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

Animation.prototype.isDone = function () {
    if (!this.loop && this.elapsedTime >= this.totalTime) {
        this.elapsedTime -= this.frameDuration;
        return false;
    } else {
        return (this.elapsedTime >= this.totalTime);
    }
};

function collisionCheck(game, sprite) {

    var collide = {
        right: false,
        left: false,
        top: false,
        bottom: false,
        spike: false
    };

    // Get the Map out of the Games Entity list
    var map = null;
    for (var i = 0; i < game.entities.length; i++) {
        var e = game.entities[i];
        if (e.type === "map") {
            map = e;
        }
    }


    var gridY = Math.round(map.rows * (sprite.y / (64 * map.rows)));
    var gridX = Math.round(map.cols * (sprite.x / (64 * map.cols)));

    if (gridX < 0)
        gridX = 0;
    if (gridY < 0)
        gridY = 0;

    var gridXStart = gridX - 1;
    var gridYStart = gridY - 1;
    if (gridXStart < 0)
        gridXStart = 0;
    if (gridYStart < 0)
        gridYStart = 0;

    var gridXEnd = gridX + 1;
    var gridYEnd = gridY + 1;
    if (gridXEnd >= map.cols)
        gridXEnd = map.cols - 1;
    if (gridYEnd >= map.rows)
        gridYEnd = map.rows - 1;


    // Detection for hitting a Block
    for (var i = gridYStart; i <= gridYEnd; i++) {
        for (var j = gridXStart; j <= gridXEnd; j++) {
            var block = map.mapBlocks[i][j];

            // If its block type 1

            if (block.type === 1 || block.type === 2) {


                //If Hero hits a block from the top with Hero's Feet
                if (sprite.y + sprite.height <= block.y + sprite.fallSpeed &&
                        sprite.y + sprite.height >= block.y &&
                        ((sprite.x <= block.x + block.width && sprite.x >= block.x) ||
                                (sprite.x + sprite.width >= block.x &&
                                        sprite.x <= block.x + block.width))) {

                    collide.bottom = true;

                    sprite.y = block.y - sprite.height;

                    if (sprite.fallDeath) {
                        sprite.hitGround = true;
                    }

                }

                // Head
                if (sprite.y <= block.y + block.height &&
                        sprite.y >= (block.y + block.height) - sprite.jumpSpeed * 2 &&
                        ((sprite.x <= block.x + block.width && sprite.x >= block.x) ||
                                (sprite.x + sprite.width > block.x &&
                                        sprite.x < block.x + block.width))) {

                    collide.top = true;
                    sprite.y = block.y + block.height;
                }

                // left
                if (sprite.x + sprite.width > block.x &&
                        sprite.x < (block.x + block.width) &&
                        sprite.x >= (block.x + block.width) - sprite.game.clockTick * sprite.speed &&
                        sprite.y < block.y + block.height &&
                        sprite.height + sprite.y > block.y) {

                    collide.left = true;
                    sprite.x = (block.x + block.width) + 1;

                }


                // right
                if (sprite.x < block.x &&
                        sprite.x + sprite.width > block.x &&
                        sprite.x + sprite.width <= block.x + sprite.game.clockTick * sprite.speed &&
                        sprite.y < block.y + block.height &&
                        sprite.height + sprite.y > block.y) {

                    collide.right = true;
                    sprite.x = (block.x - sprite.width) - 3;
                }
            }
            else if (block.type === 4 || block.type === 6 ||block.type === 7 ) {

              if (sprite.y + sprite.height <= block.y + sprite.fallSpeed &&
                      sprite.y + sprite.height >= block.y &&
                      ((sprite.x <= block.x + (block.width * .75) && sprite.x >= block.x +(block.width / 4)) ||
                      (sprite.x + sprite.width >= block.x  + (block.width / 4) &&
                      sprite.x <= block.x + (block.width * .75)))) {

                                        collide.spike = true;

                                        //sprite.y = block.y - sprite.height/2.5;

            }
          }

        }
    }
    return collide;
}

//Entity Area

function Hero(game, x, y) {
    this.type = "hero";
    this.animationRight = new Animation(AM.getAsset("./img/horz_walk_right.png"), 0, 0, 104, 128, .03, 31, true, false);
    this.animationLeft = new Animation(AM.getAsset("./img/horz_walk_left.png"), 0, 0, 80, 128, .03, 31, true, false);
    this.animationJumpRight = new Animation(AM.getAsset("./img/right_jump.png"), 0, 0, 96, 120, .1, 12, false, false);
    this.animationJumpLeft = new Animation(AM.getAsset("./img/left_jump.png"), 12, 0, 83, 128, .1, 12, false, false);
    this.animationLeftFall = new Animation(AM.getAsset("./img/right_forward_fall.png"), 0, 0, 67, 60, .05, 25, true, false);
    this.animationRightFall = new Animation(AM.getAsset("./img/right_forward_fall.png"), 0, 0, 67, 60, .05, 25, true, false);
    this.animationLeftFall = new Animation(AM.getAsset("./img/left_fall_forward.png"), 0, 0, 62, 60, .05, 25, true, false);

    this.animationRightFallDeath = new Animation(AM.getAsset("./img/right_forward_facing_fall_death.png"), 0, 0, 131, 102, .05, 25, false, false);
    this.animationLeftFallDeath = new Animation(AM.getAsset("./img/left_fall_forward_death.png"), 0, 0, 121, 102, .05, 25, false, false);

    this.animationRightSpikeDeath = new Animation(AM.getAsset("./img/forward_facing_spike_death.png"), 0, 0, 79, 97, .05, 35, false, false);
    this.animationLeftSpikeDeath = new Animation(AM.getAsset("./img/left_forward_facing_spike_death.png"), 0, 0, 79, 97, .05, 35, false, false);
    this.animationRightStand = new Animation(AM.getAsset("./img/right_stand.png"), 0, 0, 48, 58, 0.1, 25, true, false);
    this.animationLeftStand = new Animation(AM.getAsset("./img/left_stand.png"), 0, 0, 33, 58, 0.1, 25, true, false);
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 275;
    this.jumpSpeed = 6;
    this.fallSpeed = 12;
    this.jumpMax = this.jumpSpeed * 18;
    this.jumpCurrent = 0;
    this.hooked = false;
    this.removeFromWorld = false;
    this.ctx = game.ctx;
    this.width = 40;
    this.height = 70;
    this.scale = 1.3;
    this.lastX = null;//
    this.lastY = null;//
    this.triggerFall = false;
    this.defaultFallDistance = 200;
    this.fallCount = 0;
    this.fallY = 580;
    this.fallDeath = false;
    this.hitGround = false;
    this.jumpAllowed = true;
    this.hookY = null;
    this.isDead = false;
    this.spikeDeath = false;
    this.DeathDirection = null;
    this.FallDirection = null;
}

Hero.prototype.update = function () {
  if(!this.isDead) {
    if (this.hookY === null && this.hooked) {
        this.hookY = this.y;
        this.fallY = this.y;
    }



    if (!this.hooked) {

    if (this.triggerFall) {

        this.fallCount += this.y - this.fallY;
        //console.log("caculate " + this.fallCount);
        //console.log("New Addition: " + (this.y - this.fallY));
        this.fallY = this.y;

    }

    if (this.fallCount >= this.defaultFallDistance) {
        //console.log("FallDeath: " + this.fallDeath);
        this.fallDeath = true;
        if (this.FallDirection === null) {
        this.FallDirection = this.game.direction;
      }
    }

    if (this.game.tickCount >= 121 ) {
        var xDif = Math.abs(this.lastX - this.x);
        var yDif = Math.abs(this.lastY - this.y);
        if (xDif <= 64 && yDif > 3) {
            //console.log("TriggerFall: " + this.triggerFall);
            this.triggerFall = true;
        } else {
            this.triggerFall = false;
            this.fallCount = 0;
            this.FallDirection = null;

        }
        this.lastX = this.x;
        this.lastY = this.y;
        this.game.tickCount = 120;
    }

    if (this.game.rightEdge === true) {
        this.x = 1;
        this.y = 600;
    }

    if (this.game.leftEdge === true) {
        this.x = 1190;
        this.y = 600;
    }
    if (this.game.moveRight && !this.hooked) {
        this.x += this.game.clockTick * this.speed;
    }
    if (this.game.moveLeft && !this.hooked) {
        this.x -= this.game.clockTick * this.speed;
    }


    var landed = collisionCheck(this.game, this);

    if(landed.spike) {
      if(this.DeathDirection === null) {
        this.DeathDirection = this.game.direction;
      }
      this.spikeDeath = true;
      console.log(this.spikeDeath);
    }

    else  if (this.game.jumping && (landed.bottom || this.jumpAllowed) && !this.hooked) {

        if (this.jumpCurrent < this.jumpMax) {
            if (this.jumpCurrent >= .8 * this.jumpMax) {
                this.y -= this.jumpSpeed / 2;
                this.jumpCurrent += this.jumpSpeed / 2;
            } else {
                this.y -= this.jumpSpeed;
                this.jumpCurrent += this.jumpSpeed;
            }

        } else {
            this.game.jumping = false;
            this.jumpAllowed = false;
            this.animationJumpRight.elapsedTime = 0;
            this.animationJumpLeft.elapsedTime = 0;

        }
    }
    else if (!landed.bottom && !this.hooked){
        this.jumpAllowed = false;


        if (this.y < 800 && !this.hooked) {

            if (this.jumpCurrent > this.jumpMax * .8) {
                this.y += this.fallSpeed * .8;
            } else {
                this.y += this.fallSpeed;
            }

            if (this.jumpCurrent > 0) {
                if (this.jumpCurrent > this.jumpMax * .8) {
                    this.jumpCurrent -= this.fallSpeed * .8;
                } else {
                    this.jumpCurrent -= this.fallSpeed;

                }
            }
            landed = collisionCheck(this.game, this);

            if (landed.bottom) {
                this.jumpCurrent = 0;
                this.jumpAllowed = true;
            }
        }

    }
            landed = collisionCheck(this.game, this);

            if (landed.bottom) {
                this.jumpCurrent = 0;
                this.jumpAllowed = true;
            }

    }
  }



};

Hero.prototype.draw = function (ctx) {

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle ="Yellow";
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.stroke();
  ctx.restore();


    if (this.spikeDeath) {
      this.isDead = true;
      if(this.DeathDirection === "right") {
        this.animationRightSpikeDeath.drawFrame(this.game.clockTick, ctx, this.x + 3, this.y + 40, 1.5);
      } else {
        this.animationLeftSpikeDeath.drawFrame(this.game.clockTick, ctx, this.x - this.width * 2, this.y + 40, 1.5);
      }
    }
      else if (this.hitGround && this.fallDeath) {
      this.isDead = true;
      if(this.FallDirection === "left") {
        this.animationLeftFallDeath.drawFrame(this.game.clockTick, ctx, this.x - 50, this.y - 25, 1.5);
      } else if (this.FallDirection === "right") {
        this.animationRightFallDeath.drawFrame(this.game.clockTick, ctx, this.x - 50, this.y - 25, 1.5);
      }
    }
    else if (this.fallDeath) {
      if(this.FallDirection === "right") {
        this.animationRightFall.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.5);
      } else if (this.FallDirection === "left") {
        this.animationLeftFall.drawFrame(this.game.clockTick, ctx, this.x - 30, this.y, 1.5);

      }
    }
    else if (this.hooked) {
        switch (this.game.direction) {
            case "right":
                ctx.drawImage(AM.getAsset("./img/right_swing.png"),
                        0, 0, // source from sheet
                        53, 58,
                        this.x - this.width, this.y,
                        53 * this.scale,
                        58 * this.scale);
                break;

            case "left":
                ctx.drawImage(AM.getAsset("./img/left_swing.png"),
                        0, 0, // source from sheet
                        53, 58,
                        this.x, this.y,
                        53 * this.scale,
                        58 * this.scale);
                break;
        }

    }
    else if (this.game.jumping && !this.hooked) {
        if (this.game.direction === "right") {
            this.animationJumpRight.drawFrame(this.game.clockTick, ctx, this.x, this.y, .65);
        } else if (this.game.direction === "left") {
            this.animationJumpLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, .65);

        }

    }
    else if (this.game.moveRight && !this.hooked) {
        this.animationRight.drawFrame(this.game.clockTick, ctx, this.x, this.y, .65);
    }
    else if (this.game.moveLeft && !this.hooked) {
        this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, .65);
    }
    else if (!this.game.moveLeft && !this.game.moveRight && !this.hooked) {
        switch (this.game.direction) {
            case "right":
                this.animationRightStand.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
//                ctx.drawImage(AM.getAsset("./img/horz_walk_right.png"),
//                        1150, 0, // source from sheet
//                        85, 128,
//                        this.x, this.y,
//                        85 * this.scale,
//                        128 * this.scale);

                break;

            case "left":
                this.animationLeftStand.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
//                ctx.drawImage(AM.getAsset("./img/horz_walk_left.png"),
//                        330, 0, // source from sheet
//                        85, 128,
//                        this.x, this.y,
//                        85 * this.scale,
//                        128 * this.scale);

                break;
        }

    }


};

function Hookshot(game, hero) {
    this.type = "hookshot";
    this.owner = hero;
    this.game = game;
    this.swinging = false;
    this.swingDirection = null;
    this.hooked = false;
    this.startAngle = null;
    this.startX = null;
    this.startY = null;
    this.currentX = null;
    this.currentY = null;
    this.targetX = null;
    this.targetY = null;
    this.height = null;
    this.width = null;
    this.length = null;
    this.currentDegree = 0;
    this.map = null;
    this.count = 1; // remove test only
    this.travelDistance = null;



}

Hookshot.prototype.update = function () {

    if (this.map === null) {
        for (var i = 0; i < this.game.entities.length; i++) {
            var e = this.game.entities[i];
            if (e.type === "map") {
                this.map = e;
            }
        }
    }


    if (this.startX === null && this.startY === null) {
        this.startX = this.owner.x + this.owner.width;
        this.startY = this.owner.y + (this.owner.height / 2);
    }
    this.currentX = this.owner.x;
    this.currentY = this.owner.y;



    if (this.game.clicked) {

        this.swinging = true;
        this.targetX = this.game.click.x;
        this.targetY = this.game.click.y;
        this.owner.hookY = null;

        var gridY = Math.floor(this.map.rows * (this.targetY / (64 * this.map.rows)));
        var gridX = Math.floor(this.map.cols * (this.targetX / (64 * this.map.cols)));


        if (gridX < 0)
            gridX = 0;
        if (gridY < 0)
            gridY = 0;

        if (this.map.mapBlocks[gridY][gridX].type === 2) {

            this.hooked = true;
            this.owner.hooked = true;



            if (this.length === null) {
//                this.owner.y -= 35;
//                this.startY -= 35;
                this.swingDirection = this.game.direction;

                this.height = (this.startY - this.targetY);
                this.width = (this.startX - this.targetX);

                this.length = (Math.sqrt((this.width * this.width) + (this.height * this.height)));
                this.travelDistance = Math.abs(2 * (this.targetX - this.startX));

            }

            this.swing(5);

        }

    } else {
        this.hooked = false;
        this.owner.hooked = false;
        this.swinging = false;
        this.startX = null;
        this.currentX = null;
        this.currentY = null;
        this.startY = null;
        this.targetX = null;
        this.targetY = null;
        this.height = null;
        this.width = null;
        this.length = null;
        this.travelDistancel = null;
        this.startAngle = null;
        this.swingDirection = null;
        this.currentDegree = 0;
        this.count = 1;

    }

};



Hookshot.prototype.draw = function (ctx) {

    if (this.hooked && !this.game.clicked) {
        this.hooked = false;
        this.owner.hooked = false;
    }

    if (this.game.clicked && this.hooked) {

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "saddleBrown";
        ctx.lineWidth = 3;
        ctx.moveTo(this.currentX + (this.owner.width / 2), this.currentY + (this.owner.height / 2));
        ctx.lineTo(this.targetX, this.targetY);
        ctx.stroke();
        ctx.restore();

        /*
         ctx.drawImage(AM.getAsset("./img/shot.png"),
         0 , 563,  // source from sheet
         800, 20,
         this.startX, this.startY,
         this.width,
         this.height);

         */

    }
};

Hookshot.prototype.calculateOwnerY = function(ownerX) {
    return Math.sqrt(this.length * this.length
                    - (this.owner.x - this.targetX) * (this.owner.x - this.targetX))
                    + this.targetY;
}

Hookshot.prototype.swing = function (movePixel) {

    // Facing right and swing right
    if (this.swingDirection === "right") {

        // console.log("right1");

        // Start to swing right
        if (this.startX < this.targetX) {
            // During the swing
            if (this.owner.x < this.startX + this.travelDistance) {

                // console.log("right2");

                this.owner.x += movePixel;
                this.owner.y = this.calculateOwnerY(this.owner.x);
    
            }
            // Hit the end, reverse direction 
            else {
                
                // console.log("right3");
                this.startX = this.owner.x;
                this.swingDirection = 'left';
                this.game.direction = 'left';
                
            }

        }
        // facing right but shot left
        else {
        
            this.swingDirection = 'left';
            this.game.direction = 'left';
    

        } 
        
    // Facing left and swing left
    } else {
        
        // console.log("left1");


        if (this.startX > this.targetX) {
            // During the swing
            if (this.owner.x > this.startX - this.travelDistance) {

                // console.log("left2");

                this.owner.x -= movePixel;
                this.owner.y = this.calculateOwnerY(this.owner.x);
            
            }
            // Hit the end, reverse direction 
            else {
                // console.log("left3");
                this.startX = this.owner.x;
                this.swingDirection = 'right';
                this.game.direction = 'right';
            }

        }
        // facing left but shot right
        else {
            this.swingDirection = 'right';
            this.game.direction = 'right';
            
        }
    }
    
    var collide = collisionCheck(this.game, this.owner);
    
    if (collide.bottom || collide.right || collide.left) {
        this.hooked = false;
        this.owner.hooked = false;
        this.game.clicked = false;
        this.swinging = false;
    }

    this.count++;
};


function Background(game) {
    this.type = "background";
    this.x = 0;
    this.y = 400;
    this.radius = 200;
}


Background.prototype.update = function () {
};

Background.prototype.draw = function (ctx) {
    ctx.save();

    ctx.drawImage(AM.getAsset("./img/stonebackground.png"),
            0, 0, // source from sheet
            1190, 798,
            0, 0,
            1200,
            800);
    ctx.restore();
};

function Map(game, map) {
    this.game = game;
    this.type = "map";
    this.rows = 13;
    this.cols = 38;
    this.map = map;
    this.mapBlocks = new Array(this.rows);

    for (var i = 0; i < this.rows; i++) {
        this.mapBlocks[i] = new Array(this.cols / 2);
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
            this.mapBlocks[i][j] = new Block(game, j * 64, i * 64, map[i][j]);
        }
    }
}

Map.prototype.update = function () {

    if (this.game.rightEdge === true) {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 19; j < this.cols; j++) {
                var newX = j - 19;
                this.mapBlocks[i][newX] = new Block(this.game, newX * 64, i * 64, this.map[i][j]);
            }
        }
        this.game.rightEdge = false;
    } else if (this.game.leftEdge === true) {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < 19; j++) {
                this.mapBlocks[i][j] = new Block(this.game, j * 64, i * 64, this.map[i][j]);
            }
        }
        this.game.leftEdge = false;
    }

};

Map.prototype.draw = function (ctx) {

    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
            var tile = this.mapBlocks[i][j];
            tile.draw(ctx);
        }
    }
};

function Block(game, x, y, type) {
    this.type = type;
    this.game = game;
    this.x = x;
    this.y = y;
    this.spriteHeight = 32;
    this.spriteWidth = 32;
    //this.scale = 2;
    this.height = 64;
    this.width = 64;
    this.torch = new Animation(AM.getAsset("./img/torch.png"), 0, 0, 59, 148, .03, 50, true, false);
    this.surfaceLava = new Animation(AM.getAsset("./img/surface_lava.png"), 1, 0, 40, 56, .05, 50, true, false);
    this.lava = new Animation(AM.getAsset("./img/lava.png"), 0, 0, 143, 143, .05, 62, true, false);

}

Block.prototype.update = function () {

};

Block.prototype.draw = function (ctx) {

     ctx.save();
     ctx.beginPath();
     ctx.strokeStyle ="Blue";
     ctx.rect(this.x, this.y, this.width, this.height);
     ctx.stroke();
     ctx.restore();



    if (this.type === 1) {
        // Floor
        ctx.drawImage(AM.getAsset("./img/background_tile.png"),
                0, 0, // source from sheet
                512, 512,
                this.x, this.y,
                this.height,
                this.width);
    } else if (this.type === 2) {
        // Roof
        ctx.drawImage(AM.getAsset("./img/background_tile.png"),
                0, 0, // source from sheet
                512, 512,
                this.x, this.y,
                this.height,
                this.width);

    } else if (this.type === 5) {

        this.lava.drawFrame(this.game.clockTick, ctx, this.x - 10, this.y, 2.3);

    } else if (this.type === 4) {
        ctx.drawImage(AM.getAsset("./img/skeleton_spike2.png"),
                83, 0, // source from sheet
                270, 382,
                this.x, this.y,
                this.height,
                this.width);
    } else if (this.type === 6) {
        ctx.drawImage(AM.getAsset("./img/Empty_Spike2.png"),
                83, 0, // source from sheet
                270, 382,
                this.x, this.y,
                this.height,
                this.width);
    } else if (this.type === 7) {
        ctx.drawImage(AM.getAsset("./img/SpikeWithSkull2.png"),
                83, 0, // source from sheet
                270, 382,
                this.x, this.y,
                this.height,
                this.width);
    } else if (this.type === 8) {
        this.torch.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.5);
    } else if (this.type === 9) {
        this.surfaceLava.drawFrame(this.game.clockTick, ctx, this.x - 10, this.y, 2.7);
    } else if (this.type === 10) {
        ctx.drawImage(AM.getAsset("./img/lavarightside.png"),
              0, 0, // source from sheet
              512, 512,
              this.x, this.y,
              this.height,
              this.width);

    } else if (this.type === 11) {
        ctx.drawImage(AM.getAsset("./img/leftlavaSide.png"),
            0, 0, // source from sheet
            512, 512,
            this.x, this.y,
            this.height,
            this.width);

    } else if (this.type === 12) {
              ctx.drawImage(AM.getAsset("./img/BrokenTile.png"),
                  0, 0, // source from sheet
                  512, 512,
                  this.x, this.y,
                  this.height,
                  this.width);
    }
};

var mapArray = [[2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 1, 1, 1, 0, 8, 0, 8, 0, 8, 0, 8, 1, 1],
                [1, 0, 8, 0, 8, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 9, 9, 9, 9, 9, 9, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7, 6, 6, 6, 4, 6, 6, 6, 7, 1],
                [1, 1, 1, 1, 4, 4, 1, 1, 11, 5, 5, 5, 5, 5, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 11, 5, 5, 5, 5, 5, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ];
var AM = new AssetManager();

AM.queueDownload("./img/horz_walk_left.png");
AM.queueDownload("./img/horz_walk_right.png");
AM.queueDownload("./img/right_jump.png");
AM.queueDownload("./img/left_jump.png");
AM.queueDownload("./img/background_tile.png");
AM.queueDownload("./img/lava.png");
AM.queueDownload("./img/stonebackground.png");
AM.queueDownload("./img/skeleton_spike2.png");
AM.queueDownload("./img/SpikeWithSkull2.png");
AM.queueDownload("./img/Empty_Spike2.png");
AM.queueDownload("./img/torch.png");
AM.queueDownload("./img/surface_lava.png");
AM.queueDownload("./img/shot.png");
AM.queueDownload("./img/right_forward_fall.png");
AM.queueDownload("./img/right_forward_facing_fall_death.png");
AM.queueDownload("./img/forward_facing_spike_death.png");
AM.queueDownload("./img/left_forward_facing_spike_death.png");
AM.queueDownload("./img/leftlavaSide.png");
AM.queueDownload("./img/lavarightside.png");
AM.queueDownload("./img/BrokenTile.png");
AM.queueDownload("./img/right_swing.png");
AM.queueDownload("./img/left_swing.png");
AM.queueDownload("./img/left_stand.png");
AM.queueDownload("./img/right_stand.png");
AM.queueDownload("./img/left_fall_forward.png");
AM.queueDownload("./img/left_fall_forward_death.png");





AM.downloadAll(function () {


    var canvas = document.getElementById("GameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();

    gameEngine.ctx = ctx;
    var bg = new Background(gameEngine);
    var map = new Map(gameEngine, mapArray);
    var hero = new Hero(gameEngine, 100, 0);
    var hookshot = new Hookshot(gameEngine, hero);


    gameEngine.init(ctx);

    gameEngine.addEntity(bg);
    gameEngine.addEntity(map);
    gameEngine.addEntity(hookshot);
    gameEngine.addEntity(hero);



    gameEngine.start();

});
