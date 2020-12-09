/*
  spaceinvaders.js

  the core logic for the space invaders game.

*/

/*  
    Game Class

    The Game class represents a Space Invaders game.
    Create an instance of it, change any of the default values
    in the settings, and call 'start' to run the game.

    Call 'initialise' before 'start' to set the canvas the game
    will draw to.

    Call 'moveShip' or 'shipFire' to control the ship.

    Listen for 'gameWon' or 'gameLost' events to handle the game
    ending.
*/

//  Constants for the keyboard.
const limon_nave_bla_blah = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5wAAAKnCAMAAADdprI5AAAC4lBMVEUAAAD20yD20yD20yD20yD20yD20yD20yD20x8HBQENCgMZFQQODAIkHgbLyskFBAIFAwHn5+UKCAEBAQBWSQwaFgTx8fBANgkGBAH+/v7a2tl+axEDAgEEAgATDwS5uLYRDgQQDgJ4eHYxKgciHQX76Y////+OjounjxYkJCIKBwNhYV/4+Pc2NjU9NAhLS0oEAwEEAgApIwUNCgT98r4EAgEJBgL++Nz///7///3/++wLCQL///3//O7///////4NCgT///z////+9tD//vn//fT//PH+++f//vukpKFsXA4FBAGkpKH//vnn5+b//////vf///z///7+3QT/3wD/3wD/3wD/3wD/3wD/3wEhGwX/3wH/3gH/3wD/3wD/3gL+3gPv7+3+3gP+3gSenpyZmZZPT07Av72rqqd5eHRlVwm2tbO3trS2tbOAf33///8AAAD33gD/3wAJBgTUsREKBwUPCwbR0dH//vzQ4Oz//vqqqqrqzQQSDgdRRQERDgHfxAExKgE4LwlANwEgGwEpIgcbFwZxYgHv0QGgjAAmHwmAcACahwdsa2pgUwGNfAuPfQDq0gGvmQCmlAb01wHQtgDCrQRkVwxIPgUZFQmojBZ9bgzz8/I1MCnfvgz59s/++c7QuQMgHRi1mA8SEA61oAVaTgHkyAO+pgCqlAj62wCJdA/AqABORAsuJgzx1gL650OQeRGEbROBe0vXtQ+XgA+UgQH9975lWAHZvwD++95iUg78856MiFz+/O/s6s5PST776mT88ZCNjY16agHJsADQsA+knoj55DD49uCWlG6wrpScgxDX0rJrXQGkiw+HdgC+x8WDfWc7NBnJpxCxmwBkYFR7Zw/44h/j37/IwqH18tnk4db773+Tjne+oQ5sXQ1ZSw11YhLd3t66uLb288f99a/p6enb056up4fCu53n1oHv3VVEOhGLhXbWtx82MBbd5tjw56DBsTXl0zufl2ourRQdAAAAb3RSTlMABQcJAgsEDQ+VhUZpN8zStNZ+4hhZ3iqk8tAS8cNlyndV0TtMCvjNDPfg1ufoId6tyCyREPi/HcWsLnKiNuq5oIniFm5IPyV6yh3py2HV2FOXzyPw4aKykn9AaVTB0UU12zsvzbXcxr2o/c7K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'


const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_SPACE = 32;

//  Creates an instance of the Game class.
function Game() {

    //  Set the initial config.
    this.config = {
        bombRate: 0.05,
        bombMinVelocity: 50,
        bombMaxVelocity: 50,
        invaderInitialVelocity: 25,
        invaderAcceleration: 0,
        invaderDropDistance: 20,
        rocketVelocity: 120,
        rocketMaxFireRate: 2,
        gameWidth: 400,
        gameHeight: 300,
        fps: 50,
        debugMode: false,
        invaderRanks: 5,
        invaderFiles: 10,
        shipSpeed: 120,
        levelDifficultyMultiplier: 0.2,
        pointsPerInvader: 5,
        limitLevelIncrease: 25
    };

    //  All state is in the variables below.
    this.lives = 3;
    this.width = 0;
    this.height = 0;
    this.gameBounds = {left: 0, top: 0, right: 0, bottom: 0};
    this.intervalId = 0;
    this.score = 0;
    this.level = 1;

    //  The state stack.
    this.stateStack = [];

    //  Input/output
    this.pressedKeys = {};
    this.gameCanvas = null;

    //  All sounds.
    this.sounds = null;

    //  The previous x position, used for touch.
    this.previousX = 0;
}

//  Initialise the Game with a canvas.
Game.prototype.initialise = function (gameCanvas) {

    //  Set the game canvas.
    this.gameCanvas = gameCanvas;

    //  Set the game width and height.
    this.width = gameCanvas.width;
    this.height = gameCanvas.height;

    //  Set the state game bounds.
    this.gameBounds = {
        left: gameCanvas.width / 2 - this.config.gameWidth / 2,
        right: gameCanvas.width / 2 + this.config.gameWidth / 2,
        top: gameCanvas.height / 2 - this.config.gameHeight / 2,
        bottom: gameCanvas.height / 2 + this.config.gameHeight / 2,
    };
};

Game.prototype.moveToState = function (state) {

    //  If we are in a state, leave it.
    if (this.currentState() && this.currentState().leave) {
        this.currentState().leave(game);
        this.stateStack.pop();
    }

    //  If there's an enter function for the new state, call it.
    if (state.enter) {
        state.enter(game);
    }

    //  Set the current state.
    this.stateStack.pop();
    this.stateStack.push(state);
};

//  Start the Game.
Game.prototype.start = function () {

    //  Move into the 'welcome' state.
    this.moveToState(new WelcomeState());

    //  Set the game variables.
    this.lives = 3;
    this.config.debugMode = /debug=true/.test(window.location.href);

    //  Start the game loop.
    var game = this;
    this.intervalId = setInterval(function () {
        GameLoop(game);
    }, 1000 / this.config.fps);

};

//  Returns the current state.
Game.prototype.currentState = function () {
    return this.stateStack.length > 0 ? this.stateStack[this.stateStack.length - 1] : null;
};

//  Mutes or unmutes the game.
Game.prototype.mute = function (mute) {

    //  If we've been told to mute, mute.
    if (mute === true) {
        this.sounds.mute = true;
    } else if (mute === false) {
        this.sounds.mute = false;
    } else {
        // Toggle mute instead...
        this.sounds.mute = this.sounds.mute ? false : true;
    }
};

//  The main loop.
function GameLoop(game) {
    var currentState = game.currentState();
    if (currentState) {

        //  Delta t is the time to update/draw.
        var dt = 1 / game.config.fps;

        //  Get the drawing context.
        var ctx = this.gameCanvas.getContext("2d");

        //  Update if we have an update function. Also draw
        //  if we have a draw function.
        if (currentState.update) {
            currentState.update(game, dt);
        }
        if (currentState.draw) {
            currentState.draw(game, dt, ctx);
        }
    }
}

Game.prototype.pushState = function (state) {

    //  If there's an enter function for the new state, call it.
    if (state.enter) {
        state.enter(game);
    }
    //  Set the current state.
    this.stateStack.push(state);
};

Game.prototype.popState = function () {

    //  Leave and pop the state.
    if (this.currentState()) {
        if (this.currentState().leave) {
            this.currentState().leave(game);
        }

        //  Set the current state.
        this.stateStack.pop();
    }
};

//  The stop function stops the game.
Game.prototype.stop = function Stop() {
    clearInterval(this.intervalId);
};

//  Inform the game a key is down.
Game.prototype.keyDown = function (keyCode) {
    this.pressedKeys[keyCode] = true;
    //  Delegate to the current state too.
    if (this.currentState() && this.currentState().keyDown) {
        this.currentState().keyDown(this, keyCode);
    }
};

Game.prototype.touchstart = function (s) {
    if (this.currentState() && this.currentState().keyDown) {
        this.currentState().keyDown(this, KEY_SPACE);
    }
};

Game.prototype.touchend = function (s) {
    delete this.pressedKeys[KEY_RIGHT];
    delete this.pressedKeys[KEY_LEFT];
};

Game.prototype.touchmove = function (e) {
    const currentX = e.changedTouches[0].pageX;
    if (this.previousX > 0) {
        if (currentX > this.previousX) {
            delete this.pressedKeys[KEY_LEFT];
            this.pressedKeys[KEY_RIGHT] = true;
        } else {
            delete this.pressedKeys[KEY_RIGHT];
            this.pressedKeys[KEY_LEFT] = true;
        }
    }
    this.previousX = currentX;
};

//  Inform the game a key is up.
Game.prototype.keyUp = function (keyCode) {
    delete this.pressedKeys[keyCode];
    //  Delegate to the current state too.
    if (this.currentState() && this.currentState().keyUp) {
        this.currentState().keyUp(this, keyCode);
    }
};

function WelcomeState() {

}

WelcomeState.prototype.enter = function (game) {

    // Create and load the sounds.
    game.sounds = new Sounds();
    game.sounds.init();
    game.sounds.loadSound('shoot', 'sounds/shoot.wav');
    game.sounds.loadSound('bang', 'sounds/bang.wav');
    game.sounds.loadSound('explosion', 'sounds/explosion.wav');
};

WelcomeState.prototype.update = function (game, dt) {


};

WelcomeState.prototype.draw = function (game, dt, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    // image


    ctx.font = "30px Arial";
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Space Invaders", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";

    ctx.fillText("Press 'Space' or touch to start.", game.width / 2, game.height / 2);
    // image
    const img = new Image()
    img.src = limon_nave_bla_blah
    ctx.drawImage(img, 100, 100, 100 , 70);

};

WelcomeState.prototype.keyDown = function (game, keyCode) {
    if (keyCode == KEY_SPACE) {
        //  Space starts the game.
        game.level = 1;
        game.score = 0;
        game.lives = 3;
        game.moveToState(new LevelIntroState(game.level));
    }
};

function GameOverState() {

}

GameOverState.prototype.update = function (game, dt) {

};

GameOverState.prototype.draw = function (game, dt, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = "center";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";
    ctx.fillText("You scored " + game.score + " and got to level " + game.level, game.width / 2, game.height / 2);
    ctx.font = "16px Arial";
    ctx.fillText("Press 'Space' to play again.", game.width / 2, game.height / 2 + 40);
};

GameOverState.prototype.keyDown = function (game, keyCode) {
    if (keyCode == KEY_SPACE) {
        //  Space restarts the game.
        game.lives = 3;
        game.score = 0;
        game.level = 1;
        game.moveToState(new LevelIntroState(1));
    }
};

//  Create a PlayState with the game config and the level you are on.
function PlayState(config, level) {
    this.config = config;
    this.level = level;

    //  Game state.
    this.invaderCurrentVelocity = 10;
    this.invaderCurrentDropDistance = 0;
    this.invadersAreDropping = false;
    this.lastRocketTime = null;

    //  Game entities.
    this.ship = null;
    this.invaders = [];
    this.rockets = [];
    this.bombs = [];
}

PlayState.prototype.enter = function (game) {

    //  Create the ship.
    this.ship = new Ship(game.width / 2, game.gameBounds.bottom);

    //  Setup initial state.
    this.invaderCurrentVelocity = 10;
    this.invaderCurrentDropDistance = 0;
    this.invadersAreDropping = false;

    //  Set the ship speed for this level, as well as invader params.
    var levelMultiplier = this.level * this.config.levelDifficultyMultiplier;
    var limitLevel = (this.level < this.config.limitLevelIncrease ? this.level : this.config.limitLevelIncrease);
    this.shipSpeed = this.config.shipSpeed;
    this.invaderInitialVelocity = this.config.invaderInitialVelocity + 1.5 * (levelMultiplier * this.config.invaderInitialVelocity);
    this.bombRate = this.config.bombRate + (levelMultiplier * this.config.bombRate);
    this.bombMinVelocity = this.config.bombMinVelocity + (levelMultiplier * this.config.bombMinVelocity);
    this.bombMaxVelocity = this.config.bombMaxVelocity + (levelMultiplier * this.config.bombMaxVelocity);
    this.rocketMaxFireRate = this.config.rocketMaxFireRate + 0.4 * limitLevel;

    //  Create the invaders.
    var ranks = this.config.invaderRanks + 0.1 * limitLevel;
    var files = this.config.invaderFiles + 0.2 * limitLevel;
    var invaders = [];
    for (var rank = 0; rank < ranks; rank++) {
        for (var file = 0; file < files; file++) {
            invaders.push(new Invader(
                (game.width / 2) + ((files / 2 - file) * 200 / files),
                (game.gameBounds.top + rank * 20),
                rank, file, 'Invader'));
        }
    }
    this.invaders = invaders;
    this.invaderCurrentVelocity = this.invaderInitialVelocity;
    this.invaderVelocity = {x: -this.invaderInitialVelocity, y: 0};
    this.invaderNextVelocity = null;
};

PlayState.prototype.update = function (game, dt) {

    //  If the left or right arrow keys are pressed, move
    //  the ship. Check this on ticks rather than via a keydown
    //  event for smooth movement, otherwise the ship would move
    //  more like a text editor caret.
    if (game.pressedKeys[KEY_LEFT]) {
        this.ship.x -= this.shipSpeed * dt;
    }
    if (game.pressedKeys[KEY_RIGHT]) {
        this.ship.x += this.shipSpeed * dt;
    }
    if (game.pressedKeys[KEY_SPACE]) {
        this.fireRocket();
    }

    //  Keep the ship in bounds.
    if (this.ship.x < game.gameBounds.left) {
        this.ship.x = game.gameBounds.left;
    }
    if (this.ship.x > game.gameBounds.right) {
        this.ship.x = game.gameBounds.right;
    }

    //  Move each bomb.
    for (var i = 0; i < this.bombs.length; i++) {
        var bomb = this.bombs[i];
        bomb.y += dt * bomb.velocity;

        //  If the rocket has gone off the screen remove it.
        if (bomb.y > this.height) {
            this.bombs.splice(i--, 1);
        }
    }

    //  Move each rocket.
    for (i = 0; i < this.rockets.length; i++) {
        var rocket = this.rockets[i];
        rocket.y -= dt * rocket.velocity;

        //  If the rocket has gone off the screen remove it.
        if (rocket.y < 0) {
            this.rockets.splice(i--, 1);
        }
    }

    //  Move the invaders.
    var hitLeft = false, hitRight = false, hitBottom = false;
    for (i = 0; i < this.invaders.length; i++) {
        var invader = this.invaders[i];
        var newx = invader.x + this.invaderVelocity.x * dt;
        var newy = invader.y + this.invaderVelocity.y * dt;
        if (hitLeft == false && newx < game.gameBounds.left) {
            hitLeft = true;
        } else if (hitRight == false && newx > game.gameBounds.right) {
            hitRight = true;
        } else if (hitBottom == false && newy > game.gameBounds.bottom) {
            hitBottom = true;
        }

        if (!hitLeft && !hitRight && !hitBottom) {
            invader.x = newx;
            invader.y = newy;
        }
    }

    //  Update invader velocities.
    if (this.invadersAreDropping) {
        this.invaderCurrentDropDistance += this.invaderVelocity.y * dt;
        if (this.invaderCurrentDropDistance >= this.config.invaderDropDistance) {
            this.invadersAreDropping = false;
            this.invaderVelocity = this.invaderNextVelocity;
            this.invaderCurrentDropDistance = 0;
        }
    }
    //  If we've hit the left, move down then right.
    if (hitLeft) {
        this.invaderCurrentVelocity += this.config.invaderAcceleration;
        this.invaderVelocity = {x: 0, y: this.invaderCurrentVelocity};
        this.invadersAreDropping = true;
        this.invaderNextVelocity = {x: this.invaderCurrentVelocity, y: 0};
    }
    //  If we've hit the right, move down then left.
    if (hitRight) {
        this.invaderCurrentVelocity += this.config.invaderAcceleration;
        this.invaderVelocity = {x: 0, y: this.invaderCurrentVelocity};
        this.invadersAreDropping = true;
        this.invaderNextVelocity = {x: -this.invaderCurrentVelocity, y: 0};
    }
    //  If we've hit the bottom, it's game over.
    if (hitBottom) {
        game.lives = 0;
    }

    //  Check for rocket/invader collisions.
    for (i = 0; i < this.invaders.length; i++) {
        var invader = this.invaders[i];
        var bang = false;

        for (var j = 0; j < this.rockets.length; j++) {
            var rocket = this.rockets[j];

            if (rocket.x >= (invader.x - invader.width / 2) && rocket.x <= (invader.x + invader.width / 2) &&
                rocket.y >= (invader.y - invader.height / 2) && rocket.y <= (invader.y + invader.height / 2)) {

                //  Remove the rocket, set 'bang' so we don't process
                //  this rocket again.
                this.rockets.splice(j--, 1);
                bang = true;
                game.score += this.config.pointsPerInvader;
                break;
            }
        }
        if (bang) {
            this.invaders.splice(i--, 1);
            game.sounds.playSound('bang');
        }
    }

    //  Find all of the front rank invaders.
    var frontRankInvaders = {};
    for (var i = 0; i < this.invaders.length; i++) {
        var invader = this.invaders[i];
        //  If we have no invader for game file, or the invader
        //  for game file is futher behind, set the front
        //  rank invader to game one.
        if (!frontRankInvaders[invader.file] || frontRankInvaders[invader.file].rank < invader.rank) {
            frontRankInvaders[invader.file] = invader;
        }
    }

    //  Give each front rank invader a chance to drop a bomb.
    for (var i = 0; i < this.config.invaderFiles; i++) {
        var invader = frontRankInvaders[i];
        if (!invader) continue;
        var chance = this.bombRate * dt;
        if (chance > Math.random()) {
            //  Fire!
            this.bombs.push(new Bomb(invader.x, invader.y + invader.height / 2,
                this.bombMinVelocity + Math.random() * (this.bombMaxVelocity - this.bombMinVelocity)));
        }
    }

    //  Check for bomb/ship collisions.
    for (var i = 0; i < this.bombs.length; i++) {
        var bomb = this.bombs[i];
        if (bomb.x >= (this.ship.x - this.ship.width / 2) && bomb.x <= (this.ship.x + this.ship.width / 2) &&
            bomb.y >= (this.ship.y - this.ship.height / 2) && bomb.y <= (this.ship.y + this.ship.height / 2)) {
            this.bombs.splice(i--, 1);
            game.lives--;
            game.sounds.playSound('explosion');
        }

    }

    //  Check for invader/ship collisions.
    for (var i = 0; i < this.invaders.length; i++) {
        var invader = this.invaders[i];
        if ((invader.x + invader.width / 2) > (this.ship.x - this.ship.width / 2) &&
            (invader.x - invader.width / 2) < (this.ship.x + this.ship.width / 2) &&
            (invader.y + invader.height / 2) > (this.ship.y - this.ship.height / 2) &&
            (invader.y - invader.height / 2) < (this.ship.y + this.ship.height / 2)) {
            //  Dead by collision!
            game.lives = 0;
            game.sounds.playSound('explosion');
        }
    }

    //  Check for failure
    if (game.lives <= 0) {
        game.moveToState(new GameOverState());
    }

    //  Check for victory
    if (this.invaders.length === 0) {
        game.score += this.level * 50;
        game.level += 1;
        game.moveToState(new LevelIntroState(game.level));
    }
};

PlayState.prototype.draw = function (game, dt, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    //  Draw ship.
    ctx.fillStyle = '#999999';
    ctx.fillRect(this.ship.x - (this.ship.width / 2), this.ship.y - (this.ship.height / 2), this.ship.width, this.ship.height);

    //  Draw invaders.
    ctx.fillStyle = '#FED500';
    for (var i = 0; i < this.invaders.length; i++) {
        var invader = this.invaders[i];
        ctx.fillRect(invader.x - invader.width / 2, invader.y - invader.height / 2, invader.width, invader.height);
    }

    //  Draw bombs.
    ctx.fillStyle = '#22A7F2';
    for (var i = 0; i < this.bombs.length; i++) {
        var bomb = this.bombs[i];
        ctx.fillRect(bomb.x - 2, bomb.y - 2, 4, 4);
    }

    //  Draw rockets.
    ctx.fillStyle = '#FFFFFF';
    for (var i = 0; i < this.rockets.length; i++) {
        var rocket = this.rockets[i];
        ctx.fillRect(rocket.x, rocket.y - 2, 1, 4);
    }

    //  Draw info.
    var textYpos = game.gameBounds.bottom + ((game.height - game.gameBounds.bottom) / 2) + 14 / 2;
    ctx.font = "14px Arial";
    ctx.fillStyle = '#ffffff';
    var info = "Lives: " + game.lives;
    ctx.textAlign = "left";
    ctx.fillText(info, game.gameBounds.left, textYpos);
    info = "Score: " + game.score + ", Level: " + game.level;
    ctx.textAlign = "right";
    ctx.fillText(info, game.gameBounds.right, textYpos);

    //  If we're in debug mode, draw bounds.
    if (this.config.debugMode) {
        ctx.strokeStyle = '#ff0000';
        ctx.strokeRect(0, 0, game.width, game.height);
        ctx.strokeRect(game.gameBounds.left, game.gameBounds.top,
            game.gameBounds.right - game.gameBounds.left,
            game.gameBounds.bottom - game.gameBounds.top);
    }

};

PlayState.prototype.keyDown = function (game, keyCode) {

    if (keyCode == KEY_SPACE) {
        //  Fire!
        this.fireRocket();
    }
    if (keyCode == 80) {
        //  Push the pause state.
        game.pushState(new PauseState());
    }
};

PlayState.prototype.keyUp = function (game, keyCode) {

};

PlayState.prototype.fireRocket = function () {
    //  If we have no last rocket time, or the last rocket time 
    //  is older than the max rocket rate, we can fire.
    if (this.lastRocketTime === null || ((new Date()).valueOf() - this.lastRocketTime) > (1000 / this.rocketMaxFireRate)) {
        //  Add a rocket.
        this.rockets.push(new Rocket(this.ship.x, this.ship.y - 12, this.config.rocketVelocity));
        this.lastRocketTime = (new Date()).valueOf();

        //  Play the 'shoot' sound.
        game.sounds.playSound('shoot');
    }
};

function PauseState() {

}

PauseState.prototype.keyDown = function (game, keyCode) {

    if (keyCode == 80) {
        //  Pop the pause state.
        game.popState();
    }
};

PauseState.prototype.draw = function (game, dt, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    ctx.font = "14px Arial";
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Paused", game.width / 2, game.height / 2);
    return;
};

/*  
    Level Intro State

    The Level Intro state shows a 'Level X' message and
    a countdown for the level.
*/
function LevelIntroState(level) {
    this.level = level;
    this.countdownMessage = "3";
}

LevelIntroState.prototype.update = function (game, dt) {

    //  Update the countdown.
    if (this.countdown === undefined) {
        this.countdown = 3; // countdown from 3 secs
    }
    this.countdown -= dt;

    if (this.countdown < 2) {
        this.countdownMessage = "2";
    }
    if (this.countdown < 1) {
        this.countdownMessage = "1";
    }
    if (this.countdown <= 0) {
        //  Move to the next level, popping this state.
        game.moveToState(new PlayState(game.config, this.level));
    }

};

LevelIntroState.prototype.draw = function (game, dt, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    ctx.font = "36px Arial";
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Level " + this.level, game.width / 2, game.height / 2);
    ctx.font = "24px Arial";
    ctx.fillText("Ready in " + this.countdownMessage, game.width / 2, game.height / 2 + 36);
    return;
};


/*
 
  Ship

  The ship has a position and that's about it.

*/
function Ship(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 16;
}

/*
    Rocket

    Fired by the ship, they've got a position, velocity and state.

    */
function Rocket(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
}

/*
    Bomb

    Dropped by invaders, they've got position, velocity.

*/
function Bomb(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
}

/*
    Invader 

    Invader's have position, type, rank/file and that's about it. 
*/

function Invader(x, y, rank, file, type) {
    this.x = x;
    this.y = y;
    this.rank = rank;
    this.file = file;
    this.type = type;
    this.width = 18;
    this.height = 14;
}

/*
    Game State

    A Game State is simply an update and draw proc.
    When a game is in the state, the update and draw procs are
    called, with a dt value (dt is delta time, i.e. the number)
    of seconds to update or draw).

*/
function GameState(updateProc, drawProc, keyDown, keyUp, enter, leave) {
    this.updateProc = updateProc;
    this.drawProc = drawProc;
    this.keyDown = keyDown;
    this.keyUp = keyUp;
    this.enter = enter;
    this.leave = leave;
}

/*

    Sounds

    The sounds class is used to asynchronously load sounds and allow
    them to be played.

*/
function Sounds() {

    //  The audio context.
    this.audioContext = null;

    //  The actual set of loaded sounds.
    this.sounds = {};
}

Sounds.prototype.init = function () {

    //  Create the audio context, paying attention to webkit browsers.
    context = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new context();
    this.mute = false;
};

Sounds.prototype.loadSound = function (name, url) {

    //  Reference to ourselves for closures.
    var self = this;

    //  Create an entry in the sounds object.
    this.sounds[name] = null;

    //  Create an asynchronous request for the sound.
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';
    req.onload = function () {
        self.audioContext.decodeAudioData(req.response, function (buffer) {
            self.sounds[name] = {buffer: buffer};
        });
    };
    try {
        req.send();
    } catch (e) {
        console.log("An exception occured getting sound the sound " + name + " this might be " +
            "because the page is running from the file system, not a webserver.");
        console.log(e);
    }
};

Sounds.prototype.playSound = function (name) {

    //  If we've not got the sound, don't bother playing it.
    if (this.sounds[name] === undefined || this.sounds[name] === null || this.mute === true) {
        return;
    }

    //  Create a sound source, set the buffer, connect to the speakers and
    //  play the sound.
    var source = this.audioContext.createBufferSource();
    source.buffer = this.sounds[name].buffer;
    source.connect(this.audioContext.destination);
    source.start(0);
};
