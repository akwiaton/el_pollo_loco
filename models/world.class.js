class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  chicken;
  chickenSmall;
  endboss;
  camera_x = 0;

  coin;
  bottle;

  statusBar = new StatusBar();
  statusBarBottle = new StatusBarBottle();
  statusBarCoin = new StatusBarCoin();
  statusBarEndboss = new StatusBarEndboss();
  throwableObject = [];
  amountBottle = 1;


  /**
   * Constructor function for initializing canvas, context, and keyboard.
   *
   * @param {Canvas} canvas - The canvas element to draw on.
   * @param {Keyboard} keyboard - The keyboard input for the game.
   */

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

    /**
   * Assigns the current World instance to the character's world property.
   *
   */
  setWorld() {
    this.character.world = this;
  }

    /**
   * Runs the game loop by calling various game logic functions periodically.
   *
   */
  run() {
    setInterval(() => {
      this.collectCoins();
      this.collectBottles();
      this.checkThrowObjects();
      this.killChicken();
      this.killChickenSmall();
      this.killEndbossWithBottle();
      this.killChickenWithBottle();
      this.killChickenSmallWithBottle();
    }, 100); 

    setInterval(() => {
      this.checkCollisions();
    }, 50);

  }

    /**
   * Checks if the 'D' key is pressed and there are available bottles to throw. If conditions are met, creates a new ThrowableObject instance and updates the amount of bottles and the bottle status bar accordingly.
   */
  checkThrowObjects() {
      if (this.keyboard.D && this.amountBottle > 0) {
      let bottle = new ThrowableObject(this.character.x + 120, this.character.y + 80);
      this.throwableObject.push(bottle);
      this.amountBottle --; 
      this.statusBarBottle.setPercentage(this.amountBottle * 100 / 5);
    }
  }

  /**
   * Iterates over throwableObject and endboss arrays to check for collision between bottle and endboss.
   *
   */
  killEndbossWithBottle() {
    this.throwableObject.forEach((bottle) => {
      this.level.endboss.forEach((endboss, i) => {
        if (endboss.isColliding(bottle)) {
          endboss.battleEndboss();
          endboss.isHurt();
          this.statusBarEndboss.setPercentage(endboss.energy);
        }
        if (endboss.isDead()) {
          endboss.isDead();
          setTimeout(() => {
            this.level.endboss.splice(i, 1);
          }, 1000);
        }
      });
    });
  }

    /**
   * Iterates over throwable objects and chickens to check for collisions.
   *
   */
  killChickenWithBottle() {
    this.throwableObject.forEach((bottle) => {
      this.level.chicken.forEach((chicken, i) => {
        if (chicken.isColliding(bottle)) {
          chicken.kill();
          chicken.isDead();
        }
        if (chicken.isDead()) {
          setTimeout(() => {
            this.level.chicken.splice(i, 1);
          }, 200);
        }
      });
    });
  }

    /**
   * Iterates over throwable objects and chickens to check for collisions.
   *
   */
  killChickenSmallWithBottle() {
    this.throwableObject.forEach((bottle) => {
      this.level.chickenSmall.forEach((chickenSmall, i) => {
        if (chickenSmall.isColliding(bottle)) {
          chickenSmall.kill();
          chickenSmall.isDead();
        }
        if (chickenSmall.isDead()) {
          setTimeout(() => {
            this.level.chickenSmall.splice(i, 1);
          }, 200);
        }
      });
    });
  }

    /**
   * Iterates over coins in the level, collects the coin if character is colliding with it,
   * updates character's coin status, and removes the collected coin from the level.
   *
   */
  collectCoins() {
    this.level.coins.forEach((coin, i) => {
      if (this.character.isColliding(coin)) {
        this.character.getCoin();
      
        this.statusBarCoin.setPercentage(this.character.coinStatus);
        this.level.coins.splice(i, 1);
      }
    });
  }

  /**
   * Iterates over bottles in the level, checks for collision with the character, collects the bottle,
   * updates the amount of bottles, sets bottle status bar percentage, and removes the collected bottle from the level.
   */
  collectBottles() {
    this.level.bottles.forEach((bottle, i) => {
      if (this.character.isColliding(bottle)) {
        this.character.getBottle();
        this.amountBottle++;
        this.statusBarBottle.setPercentage(this.amountBottle * 100 / 5);
        this.level.bottles.splice(i, 1);
      }
    });
  }

    /**
   * Checks collisions between the character and different entities in the level such as chickens, small chickens, and endboss.
   *
   */
  checkCollisions() {
    this.level.chicken.forEach((chicken) => {
      if (this.character.isColliding(chicken) && !this.character.isAboveGround() && !chicken.isDead()) { 
        this.character.hitChicken();
        this.statusBar.setPercentage(this.character.energy);
      }
    });

    this.level.chickenSmall.forEach((chickenSmall) => {
      if (this.character.isColliding(chickenSmall) && !this.character.isAboveGround() && !chickenSmall.isDead()) {
        this.character.hitChickenSmall();
        this.statusBar.setPercentage(this.character.energy);
      }
    });

    this.level.endboss.forEach((endboss) => {
      if (this.character.isColliding(endboss)) {
        this.character.hitEndboss();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

    /**
   * Iterates over chicken entities in the level, checks collision with character, 
   * and removes a chicken if collided and above ground.
   *
   */
  killChicken() {
    this.level.chicken.forEach((chicken, i) => {
      if (this.character.isColliding(chicken) && this.character.isAboveGround()) {
        chicken.kill();
        setTimeout(() => {
          this.level.chicken.splice(i, 1);
        }, 250);
      }
    });
  }

    /**
   * Iterates over small chicken entities in the level, checks collision with character, 
   * and removes a small chicken if collided and above ground.
   */
  killChickenSmall() {
    this.level.chickenSmall.forEach((chickenSmall, i) => {
      if (this.character.isColliding(chickenSmall) && this.character.isAboveGround()) {
        chickenSmall.kill();
        setTimeout(() => {
          this.level.chickenSmall.splice(i, 1);
        }, 250);
      }
    });
  }

    /**
   * Draws the game elements on the canvas, including background, characters, and objects.
   *
   * @return {void} No return value
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0); 
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarEndboss);
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.chicken);
    this.addObjectsToMap(this.level.chickenSmall);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObject);
    this.ctx.translate(-this.camera_x, 0); 

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

    /**
   * Iterates over the objects array and calls addToMap for each object.
   *
   * @param {Array} objects - The array of objects to be added to the map.
   * @return {void} No return value
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

    /**
   * A function that adds a movable object to the map with optional flipping based on direction.
   *
   * @param {Object} mo - The movable object to be added to the map.
   * @return {void} No return value
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    // mo.drawFrame(this.ctx); // am ende entfernen - funktion in drawable-object
    // mo.drawFrameWithOffset(this.ctx); // am ende entfernen - funktion in drawable-object

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

    /**
   * A function that flips the image based on the movable object's properties.
   *
   * @param {Object} mo - The movable object to be flipped.
   * @return {void} No return value
   */
  flipImage(mo) {
    this.ctx.save(); 
    this.ctx.translate(mo.width, 0); 
    this.ctx.scale(-1, 1); 
    mo.x = mo.x * -1; 
  }

    /**
   * A function that flips the image back based on the movable object's properties.
   *
   * @param {Object} mo - The movable object to be flipped back.
   * @return {void} No return value
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore(); 
  }

  
}
