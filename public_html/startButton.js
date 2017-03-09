function StartButton(x, y, game) {
  this.x = x;
  this.y = y;
  this.game = game;
  this.width = 650;
  this.height = 125;
}

StartButton.prototype.update = function() {
    if (this.game.clicked) {



      this.targetX = this.game.click.x;
      this.targetY = this.game.click.y;
      if((this.targetY >= this.y && this.targetY <= this.y + this.height) &&
          (this.targetX >= this.x && this.targetX <= this.x + this.width)) {

          //music, start the bgm from the beginning.
          //backgroundMusic.currentTime = 0;
          backgroundMusic.play(1);

          // Start the timer;
          this.game.timer.gameTime = 0;
          this.game.heroIsDead = false;
          this.game.offset = 0;
          this.game.deadTime = 0;

          this.game.changeScene = true;
          this.game.nextScene = 1;
        }
    }

};

StartButton.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.lineWidth = 7;
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.font = "60px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Start the Adventure", 350, 550);
};
