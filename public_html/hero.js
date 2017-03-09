function Hero(game, x, y, invetoryCTX) {
  this.type = "hero";
  this.animationRight = new Animation(AM.getAsset("./img/horz_walk_right.png"), 0, 0, 104, 128, .03, 31, true, false);
  this.animationLeft = new Animation(AM.getAsset("./img/horz_walk_left.png"), 0, 0, 80, 128, .03, 31, true, false);
  this.animationJumpRight = new Animation(AM.getAsset("./img/right_jump.png"), 0, 0, 96, 120, .1, 12, false, false);
  this.animationJumpLeft = new Animation(AM.getAsset("./img/left_jump.png"), 12, 0, 83, 128, .1, 12, false, false);
  this.animationLeftFall = new Animation(AM.getAsset("./img/right_forward_fall.png"), 0, 0, 67, 60, .05, 25, true, false);
  this.animationRightFall = new Animation(AM.getAsset("./img/right_forward_fall.png"), 0, 0, 67, 60, .05, 25, true, false);
  this.animationLeftFall = new Animation(AM.getAsset("./img/left_fall_forward.png"), 0, 0, 62, 60, .05, 25, true, false);
  this.animationRightFallDeath = new Animation(AM.getAsset("./img/right_forward_facing_fall_death.png"), 0, 0, 131, 102, .05, 25, false, false, true);
  this.animationLeftFallDeath = new Animation(AM.getAsset("./img/left_fall_forward_death.png"), 0, 0, 121, 102, .05, 25, false, false, true);
  this.animationRightSpikeDeath = new Animation(AM.getAsset("./img/forward_facing_spike_death.png"), 0, 0, 79, 97, .05, 35, false, false, true);
  this.animationLeftSpikeDeath = new Animation(AM.getAsset("./img/left_forward_facing_spike_death.png"), 0, 0, 79, 97, .05, 35, false, false, true);
  this.animationRightStand = new Animation(AM.getAsset("./img/right_stand.png"), 0, 0, 48, 58, 0.1, 25, true, false);
  this.animationLeftStand = new Animation(AM.getAsset("./img/left_stand.png"), 0, 0, 33, 58, 0.1, 25, true, false);
  this.animationLeftDismount = new Animation(AM.getAsset("./img/left_dismount.png"), 0, 0, 65, 66, 0.05, 10, true, false, true);
  this.animationRightDismount = new Animation(AM.getAsset("./img/right_dismount.png"), 0, 0, 66, 65, 0.05, 10, true, false, true);
  this.animationOpenChest = new Animation(AM.getAsset("./img/left_facing_open_chest.png"), 0, 0, 44, 59, .05, 29, false, false);
  this.animationRightCrushDeath = new Animation(AM.getAsset("./img/crush.png"), 0, 0, 138, 207, .02, 25, false, false, true);

  this.animationLowGrav = new Animation(AM.getAsset("./img/lowGravWaves.png"), 0, 0, 179, 176, .02, 50, true, false, false);
  this.animationInvincibility = new Animation(AM.getAsset("./img/invincibilityBubble.png"), 0, 0, 90, 157, .02, 50, true, false, false);


  //TODO sound effects
  this.soundEFWalk        = MM.getSoundEF("./sound/walk.wav");
  this.soundEFSpikeDeath  = MM.getSoundEF("./sound/spikeDeath.flac");
  this.soundEFFallDeath   = MM.getSoundEF("./sound/fallDeath.wav");
    this.soundEFOpenDoor    = MM.getSoundEF("./sound/openDoor.wav");
  this.soundEFOpenChest   = MM.getSoundEF("./sound/openChest.wav");
  this.soundEFFlameDeath  = MM.getSoundEF("./sound/flameDeath.mp3");
  this.soundEFLand        = MM.getSoundEF("./sound/land.wav");
  this.soundEFDeathPlayed = false;
  this.soundEFOpenChestPlayed = false;

  this.game = game;
  this.x = x;
  this.y = y;
  this.StartX = x;
  this.StartY = y;
  this.speed = 275;
  this.jumpSpeed = 6;
  this.fallSpeed = 12;
  this.jumpMax = this.jumpSpeed * 18;
  this.jumpCurrent = 0;
  this.hooked = false;
  this.removeFromWorld = false;
  this.ctx = game.ctx;
  this.invetoryCTX = invetoryCTX;
  this.width = 40;
  this.height = 70;
  this.scale = 1.3;
  this.lastX = null;//
  this.lastY = null;//
  this.triggerFall = false;
  this.defaultFallDistance = 200;
  this.fallY = 580;
  this.fallDeath = false;
  this.hitGround = false;
  this.jumpAllowed = true;
  this.hookY = null;
  this.isDead = false;
  this.spikeDeath = false;
  this.lavaDeath = null;
  this.crushDeath = null;;
  this.DeathDirection = null;
  this.FallDirection = null;
  this.secondHalf = false;
  this.wasHooked = false;
  this.action_OpenChest = false;
  this.inventory = new Inventory(this.invetoryCTX, this);
  this.goToNext = false;
  this.doorAnimationDone = null;
  this.lava = false;
  this.frame = 1;
  this.filePath = "./img/smoke_puff_1.png";
  this.smokeScale = 1;

};

Hero.prototype.reset = function() {
  this.speed = 275;
  this.jumpSpeed = 6;
  this.fallSpeed = 12;
  this.jumpMax = this.jumpSpeed * 18;
  this.jumpCurrent = 0;
  this.hooked = false;
  this.removeFromWorld = false;
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
  this.lavaDeath = null;
  this.crushDeath = null;
  this.DeathDirection = null;
  this.FallDirection = null;
  this.game.rightEdge = false;
  this.game.leftEdge = true;
  this.secondHalf = false;
  this.wasHooked = false;
  this.action_OpenChest = false;
  this.goToNext = false;
  this.doorAnimationDone = null;
  this.frame = 1;
  this.filePath = "./img/smoke_puff_1.png";
  this.smokeScale = 1;
  this.game.tickCount = 0;

  //Inventory reset
  this.inventory.key = null;
  this.inventory.invincibility = null;
  this.inventory.Revive = null;
  this.inventory.safeFall = null;
  this.inventory.lowGrav = null;


};

Hero.prototype.hasKey = function() {
  return this.inventory.key !== null;
};

Hero.prototype.update = function () {
    // You lose
    if (this.game.score <= 0) this.isDead = true;

    if (this.inventory.lowGrav !== null && !this.inventory.lowGrav.empty) {
        this.fallSpeed = 3;
        this.fallCount = 0;

    } else {
        this.fallSpeed = 12;
        this.inventory.lowGrav = null;
    }


  if(!this.isDead) {
    if (this.hookY === null && this.hooked) {
      this.hookY = this.y;
      this.fallY = this.y;
    }

    if (!this.hooked) {

      if (this.triggerFall) {
        this.fallCount += this.y - this.fallY;
        this.fallY = this.y;
      }


      if (this.fallCount >= this.defaultFallDistance && (this.inventory.invincibility === null && this.inventory.lowGrav === null)) {
        //console.log("FallDeath: " + this.fallDeath);
        this.fallDeath = true;
        if (this.FallDirection === null) {
          this.FallDirection = this.game.direction;
        }
      }

      if (this.game.tickCount >= 121 ) {
        var xDif = Math.abs(this.lastX - this.x);
        var yDif = Math.abs(this.lastY - this.y);

        //console.log("xDif: " + xDif + " yDif: " + yDif);
        if (xDif <= 64 && yDif > 3) {
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

      if (this.game.rightEdge === true && !this.secondHalf) {

        this.x = 1;
        this.y = 600;
        this.secondHalf = true;
      }
      else if (this.game.leftEdge === true) {

        this.x = 1190;
        this.y = 600;
        this.secondHalf = false;
        //go to next scene
      }


      /// bug somewhere here


      else if (this.goToNext && this.game.anotherCount - this.doorAnimationDone > 80) {
        // Bonus
        this.game.offset += 500;

        this.game.changeScene = true;
        this.game.nextScene ++;
        this.reset();

        //music, add new bgm here
        if (this.game.nextScene === 2) {
            backgroundMusic.setMusic(MM.getSoundEF("./sound/bgm2.mp3"));
        } else if (this.game.nextScene === 3){
            backgroundMusic.setMusic(MM.getSoundEF("./sound/bgm3.mp3"));
        } else {
          backgroundMusic.setMusic(MM.getSoundEF("./sound/bgm.mp3"));
        }

        //music, play takes the number of current stage.
        backgroundMusic.stop();
        backgroundMusic.play(this.game.nextScene);

      }

      //  if (this.game)
      if (this.game.moveRight && !this.hooked) {

        //music, walk sound.
        if (this.jumpAllowed && this.jumpCurrent === 0) {
          this.soundEFWalk.play();
        }

        this.x += this.game.clockTick * this.speed;
      }
      if (this.game.moveLeft && !this.hooked) {
        //music, walk sound.
        if (this.jumpAllowed && this.jumpCurrent === 0) {
          this.soundEFWalk.play();
        }

        this.x -= this.game.clockTick * this.speed;
      }



      var landed = collisionCheck(this.game, this);

      if(landed.lava && this.lavaDeath == null && this.inventory.invincibility === null) {
        this.lavaDeath = true;

      }

      if(landed.bottom || landed.spike) {
        this.wasHooked = false;
        this.animationLeftDismount.elapsedTime = 0;
        this.animationRightDismount.elapsedTime = 0;
      }


      if(landed.spike && this.inventory.invincibility === null) {
        if(this.DeathDirection === null) {
          this.DeathDirection = this.game.direction;
        }
        this.spikeDeath = true;
        //console.log(this.spikeDeath);
      }

      //    if (landed.door !== null) {
      //
      //                  // DOOR
      //
      //        if (this.hasKey()) {
      //            landed.door.door_opening = true;
      //            console.log("door opened");
      //        }
      //        else {
      //            console.log("locked");
      //        }
      //
      //    }

      else if (landed.chest !== null && landed.chest.type === 3) {
        landed.chest.chest_opening = true;
        this.inventory.key = landed.chest.inventory;
          this.inventory.key.owner = this;
          this.inventory.key.setCoords();
          this.action_OpenChest = true;
      }
      else if (landed.chest !== null && landed.chest.type === 19) {
          landed.chest.chest_opening = true;
          this.action_OpenChest = true;
      }


      else if (this.game.jumping && (landed.bottom || this.jumpAllowed) && !this.hooked) {

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
          //            landed = collisionCheck(this.game, this);
          //
          //            if (landed.bottom) {
          //                this.jumpCurrent = 0;
          //                this.jumpAllowed = true;
          //            }
        }

      }
      landed = collisionCheck(this.game, this);

      if (landed.bottom) {
        this.jumpCurrent = 0;

	    //music, when landed
        if (!this.jumpAllowed) {
            this.soundEFLand.play();
        }


        this.jumpAllowed = true;
      }

    }
    else {
      //Hookshot resets fall
      this.fallCount = 0;
      this.triggerFall = false;
      this.fallDeath = false;
      this.lastX = this.x;
      this.lastY = this.y;
      this.FallDirection = null;
      this.animationLeftDismount.elapsedTime = 0;
      this.animationRightDismount.elapsedTime = 0;
    }
  }
  //Dead Hero
  else {
    if (this.game.clicked) {

      //music, reset dead SFX played.
      this.soundEFDeathPlayed = false;

      this.targetX = this.game.click.x;
      this.targetY = this.game.click.y;
      if((this.targetY >= 300 && this.targetY <= 425) &&
      (this.targetX >= 450 && this.targetX <= 850)) {

        if(this.inventory.Revive !== null) {
          this.x = this.StartX;
          this.y = this.StartY;
          this.inventory.Revive = null;
          this.game.heroIsDead = false;
          this.reset();
          backgroundMusic.play(this.game.nextScene);


        } else {
        this.game.changeScene = true;
        this.game.nextScene = 0;
        this.reset();
      }
      }
    }
  }

if(this.inventory.key !== null) {
document.getElementById("Inventory").innerHTML = "Inventory: Key";
} else {
  document.getElementById("Inventory").innerHTML = "Inventory: Empty";
}

if (this.inventory.invincibility !== null && this.inventory.invincibility.empty) {
  this.inventory.invincibility = null;
}


};

Hero.prototype.drawItems = function(ctx) {
  if(this.inventory.lowGrav !== null) {
    this.animationLowGrav.drawFrame(this.game.clockTick, ctx, this.x - (this.width * .75), this.y + (this.height * .75), .63);
  }

  if(this.inventory.invincibility !== null) {
    this.animationInvincibility.drawFrame(this.game.clockTick, ctx, this.x - (this.width * .2), this.y - (this.height * .35), .8);
  }
}

Hero.prototype.draw = function (ctx) {

  this.inventory.draw();

//  ctx.save();
//  ctx.beginPath();
//  ctx.strokeStyle ="Yellow";
//  ctx.rect(this.x, this.y, this.width, this.height);
//  ctx.stroke();
//  ctx.restore();

  if(this.wasHooked && !this.hooked) {
    ;      if(this.game.direction === "left") {
      this.animationLeftDismount.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    } else if (this.game.direction === "right") {
      this.animationRightDismount.drawFrame(this.game.clockTick, ctx, this.x - 30, this.y, this.scale);
    }
  }
  else if (this.action_OpenChest) {

    //music chest open.
    this.soundEFOpenChest.play();

    this.animationOpenChest.drawFrame(this.game.clockTick, ctx, this.x - 15, this.y - 8, this.scale);
    if (this.animationOpenChest.isDone()) {
      this.action_OpenChest = false;
      this.animationOpenChest.elapsedTime = 0;
    }
  }
  else if (this.spikeDeath) {
    this.isDead = true;
    //music spike death.
    if (!this.soundEFDeathPlayed) {
      this.soundEFSpikeDeath.play();
      //stop the sound effect keep playing while dead.
      this.soundEFDeathPlayed = true;
    }

    if(this.DeathDirection === "right") {
      this.animationRightSpikeDeath.drawFrame(this.game.clockTick, ctx, this.x + 3, this.y + 40, this.scale);
    } else {
      this.animationLeftSpikeDeath.drawFrame(this.game.clockTick, ctx, this.x - this.width * 2, this.y + 40, this.scale);
    }
  }



  else if (this.lavaDeath) {
	//music, flame death
    if (!this.soundEFDeathPlayed) {
        this.soundEFFlameDeath.play();
        //stop the sound effect keep playing while dead.
        this.soundEFDeathPlayed = true;
    }
    this.isDead = true;
    var interval = 20;

    switch(this.frame) {
      case 1 * interval:  this.filePath = "./img/smoke_puff_1.png";
                          this.frame++;
                          this.smokeScale = 1;
                          break;

      case 2 * interval:  this.filePath = "./img/smoke_puff_2.png";
                          this.frame++;
                          this.smokeScale = 1.5;

                          break;

      case 3 * interval:  this.filePath = "./img/smoke_puff_3.png";
                          this.frame++;
                          this.smokeScale = 1.75;

                          break;

      case 4 * interval:  this.filePath = "./img/smoke_puff_4.png";
                          this.frame++;
                          this.smokeScale = 2;

                          break;

      case 5 * interval:  this.filePath = "./img/smoke_puff_5.png";
                          this.frame++;
                          this.smokeScale = 2.25;

                          break;

      case 6 * interval:  this.filePath = "./img/smoke_puff_6.png";
                          this.frame++;
                          this.smokeScale = 2.5;

                          break;

      default:            this.frame++;
                          break;
    }

    ctx.drawImage(AM.getAsset(this.filePath),
    0, 0, // source from sheet
    278, 278,
    this.x - (this.width * this.smokeScale) / 2,  this.y - (this.frame * this.smokeScale) / 2,
    this.width * this.smokeScale,
    this.height * this.smokeScale);

    this.isDead = true;

  }

  else if (this.hitGround && this.fallDeath && this.inventory.safeFall !== null && this.inventory.safeFall.fallsLeft > 0) {
    this.inventory.safeFall.landed();
    this.hitGround = false;
    this.fallDeath = false;
    this.fallCount = 0;
    if(this.inventory.safeFall.fallsLeft === 0) {
      this.inventory.safeFall = null;
    }
  }




  else if (this.hitGround && this.fallDeath) {
    this.isDead = true;

    //fall death
    if (!this.soundEFDeathPlayed) {
      this.soundEFFallDeath.play();
      //stop the sound effect keep playing while dead.
      this.soundEFDeathPlayed = true;
    }

    if(this.FallDirection === "left") {
      this.animationLeftFallDeath.drawFrame(this.game.clockTick, ctx, this.x - 50, this.y - 10, this.scale);
    } else if (this.FallDirection === "right") {
      this.animationRightFallDeath.drawFrame(this.game.clockTick, ctx, this.x - 50, this.y - 10, this.scale);
    }

    ctx.drawImage(AM.getAsset("./img/Blood_splatter.png"),
              0, 0, // source from sheet
              1200, 800,
              0,  200,
              1200,
              800);
  }


  else if (this.crushDeath) {
    this.animationRightCrushDeath.drawFrame(this.game.clockTick, ctx, this.x - 40, this.y - 20, .65);
    this.isDead = true;

    ctx.drawImage(AM.getAsset("./img/Blood-Splatter_dir.png"),
              0, 0, // source from sheet
              534, 378,
              this.x,  this.y - 300,
              534,
              378);

  }

  else if (this.fallDeath && !this.hooked && this.inventory.invincibility === null) {
    if(this.FallDirection === "right") {
      this.animationRightFall.drawFrame(this.game.clockTick, ctx, this.x - 30, this.y, this.scale);
    } else if (this.FallDirection === "left") {
      this.animationLeftFall.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
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

  this.drawItems(ctx);

  if (this.isDead) {
    // Update for game engine
    this.game.heroIsDead = this.isDead;
    this.game.deadTime = 0;

    //stop the music when dead.
    backgroundMusic.stop();
    this.soundEFDeathPlayed = true;

    ctx.beginPath();
    ctx.rect(450, 300, 400, 125);
    ctx.lineWidth = 7;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over Weakling!", 655, 345);

    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Click for another feeble attempt! ", 655, 400);
  }
};
