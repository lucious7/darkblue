var scale = 20;

function convertToTime(timeInMilis){
    var seconds = (Math.round(timeInMilis/1000)%60);
    var minutes = Math.floor(timeInMilis/60000);

    return (minutes < 10 ? '0'+minutes : minutes) + ':' + (seconds < 10 ? '0'+seconds : seconds );
}

function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}

function CanvasDisplay(parent, level) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = Math.min(1200, level.width * scale);
    this.canvas.height = Math.min(450, level.height * scale);
    parent.appendChild(this.canvas);
    this.cx = this.canvas.getContext("2d");

    this.level = level;
    this.animationTime = 0;
    this.flipPlayer = false;

    this.viewport = {
        left: 0,
        top:  0,
        width: this.canvas.width/scale,
        height: this.canvas.height/scale

    };

    this.drawFrame(0);
}

var otherSprites = document.createElement("img");
otherSprites.src = "img/sprites.png";

CanvasDisplay.prototype.drawBackground = function(){
    var view = this.viewport;
    var xStart = Math.floor(view.left);
    var xEnd = Math.ceil(view.left + view.width);
    var yStart = Math.floor(view.top);
    var yEnd = Math.ceil(view.top + view.height);

    for (var y = yStart; y < yEnd; y++) {
        for (var x = xStart; x < xEnd; x++) {
            var tile = this.level.grid[y][x];
            if(tile === null) continue;
            var screenX = (x - view.left) * scale;
            var screenY = (y - view.top) * scale;
            var tileX = (tile === Type.LAVA ? scale : 0);
            this.cx.drawImage(otherSprites, tileX, 0, scale, scale,
                                    screenX, screenY, scale, scale);
        }
    }
};

var playerSprites = document.createElement("img");
playerSprites.src = "img/player.png";
var playerXOverlap = 4;

CanvasDisplay.prototype.drawPlayer = function(x, y, width, height){
    var sprite = 8, player = this.level.player;
    width += playerXOverlap * 2;
    x -= playerXOverlap;
    if(player.speed.x != 0){
        this.flipPlayer = player.speed.x < 0;
    }
    if(player.speed.y != 0){
        sprite = 9;
    } else if(player.speed.x != 0){
        sprite = Math.floor(this.animationTime * 12) % 8;
    }

    this.cx.save();
    if(this.flipPlayer){
        flipHorizontally(this.cx, x + width/2);
    }

        this.cx.drawImage(playerSprites, sprite * width, 0, width, height,
                                                      x, y, width, height);

        this.cx.restore();
};

var heartsSprites = document.createElement("img");
heartsSprites.src = "img/hearts.png";

CanvasDisplay.prototype.drawStatusBar = function(){
    this.cx.fillStyle = "rgba(255, 255, 255, 0.5)";
    this.cx.fillRect(0,0, this.canvas.width, scale * 2);
    var heartX = 0;
    
    for(var i = 0; i < 3; i++){
        if(playerHearts < i+1){
            heartX = 25;
        }
        this.cx.drawImage(heartsSprites, heartX, 0, 25, 22,
                                        (i * 35) + 10, 10, 25, 22);
    }

    this.cx.fillStyle = "rgb(0,0,0)";
    this.cx.font = "bold 20px monospace";

    this.cx.fillText(convertToTime(Date.now() - this.level.startTime), (this.canvas.width/2)-50, 25);
    this.cx.fillText("Level:"+this.level.number, this.canvas.width - 110, 25);

};

CanvasDisplay.prototype.drawActors = function(){

    this.level.actors.forEach(function(actor){
        this.drawActor(actor);
    }, this);

};

CanvasDisplay.prototype.drawActor = function(actor){
    var width = actor.size.x * scale;
    var height = actor.size.y * scale;
    var x = (actor.pos.x - this.viewport.left) * scale;
    var y = (actor.pos.y - this.viewport.top) * scale;

    if(actor.type === Type.PLAYER){
        this.drawPlayer(x, y, width, height);
    } else {
        var tileX = (actor.type === Type.COIN ? 2 : 1) * scale;
        this.cx.drawImage(otherSprites, tileX, 0, width, height,
                                            x, y, width, height);
    }
};

CanvasDisplay.prototype.drawFrame = function(step) {
    this.animationTime += step;

    this.updateViewport();
    this.clearDisplay();
    this.drawBackground();
    if(this.level.status === Status.GAME_OVER){
        this.drawGameOver();
        this.drawActor(this.level.player);
    } else {
        this.drawActors();
        this.drawStatusBar();
    }
};

CanvasDisplay.prototype.updateViewport = function(){
    var view = this.viewport, xMargin = view.width/3, yMargin = view.height/3;
    var player = this.level.player;
    var center = player.pos.plus(player.size.times(0.5));

    if(center.x < view.left + xMargin){
        view.left = Math.max(center.x - xMargin, 0);
    } else if(center.x > view.left + view.width - xMargin){
        view.left = Math.min(center.x + xMargin - view.width, this.level.width - view.width);
    } 

    if(center.y < view.top + yMargin){
        view.top = Math.max(center.y - yMargin, 0);
    } else if(center.y > view.top + view.height - yMargin){
        view.top = Math.min(center.y + yMargin - view.height, this.level.height - view.height);
    }

};

CanvasDisplay.prototype.clearDisplay = function(){
    if(this.level.status === Status.WON){
        this.cx.fillStyle = "rgb(68,191,255)";
    } else if (this.level.status === Status.LOST){
        this.cx.fillStyle = "rgb(44,136,214)";
    } else {
        this.cx.fillStyle = "rgb(52,166,251)";
    }
    this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

CanvasDisplay.prototype.drawGameOver = function(){
    if(this.gameOverCount === undefined){
        this.gameOverCount = -1;
    }
    this.gameOverCount++;

    for(var i = 0; i < Math.min(this.gameOverCount,this.canvas.height); i++){
        this.cx.fillStyle = "rgb(0,0,0)";
        this.cx.fillRect(0, 0, this.canvas.width, i * scale);
    }

    this.cx.fillStyle = "rgb(255,255,255)";
    this.cx.fillText("GAME OVER", (this.canvas.width/2)-50, this.canvas.height/2);
}


CanvasDisplay.prototype.clear = function() {
    this.canvas.parentNode.removeChild(this.canvas);
    if(this.level.status === Status.GAME_OVER){
        document.querySelector(".game-over-layer").style.display = "flex";
    }
};