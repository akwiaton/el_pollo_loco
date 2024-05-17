class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  coinStatus = 0;
  bottleStatus = 0;
  lastHit = 0;
  isAlive = true;
  amount = 0;

    /**
   * Applies gravity to the object by updating its position based on speed and acceleration.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

    /**
   * Checks if the object is above the ground level.
   *
   * @param {void} No parameters
   * @return {boolean} Indicates if the object is above the ground
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 150;
    }
  }

  /**
   * A function that plays a sound if the sound is not turned off.
   *
   * @param {Object} sound - The sound object to be played
   * @return {void} No return value
   */
  playSound(sound) {
    if (!soundOff) {
      sound.pause();
      sound.currentTime = 0;
      sound.play();
    }
  }

    /**
   * Checks if this object is colliding with another movable object.
   *
   * @param {Object} mo - The movable object to check collision with
   * @return {boolean} Indicates if collision is happening
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

    /**
   * A function that decreases the energy by 5 when the chicken is hit, sets energy to 0 if it goes below 0, otherwise updates the last hit time.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  hitChicken() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

    /**
   * A function that decreases the energy by 3 when the small chicken is hit, sets energy to 0 if it goes below 0, otherwise updates the last hit time.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  hitChickenSmall() {
    this.energy -= 3;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

    /**
   * A function that decreases the energy by 10 when the endboss is hit, sets energy to 0 if it goes below 0, otherwise updates the last hit time.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  hitEndboss() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

    /**
   * Decreases the energy by 10 when battling the endboss, sets energy to 0 if it goes below 0, otherwise updates the last hit time.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  battleEndboss() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

    /**
   * A function that sets the energy to 0, effectively killing the object.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  kill() {
    this.energy = 0;
  }

    /**
   * Increases the coin status by 20.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  getCoin() {
    this.coinStatus += 20;
  }

    /**
   * Increases the bottle status by 20.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  getBottle() {
    this.bottleStatus += 20;
  }

    /**
   * Checks if the object is dead based on its energy level.
   *
   * @param {void} No parameters
   * @return {boolean} Indicates if the object is dead
   */
  isDead() {
    return this.energy == 0;
  }

    /**
   * Calculates if the object is hurt based on the time elapsed since the last hit.
   *
   * @param {void} No parameters
   * @return {boolean} Indicates if the object is hurt
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; 
    return timepassed < 1; 
  }

    /**
   * Plays the animation by updating the current image and setting the image based on the provided array.
   *
   * @param {Array} arr - The array of image paths for the animation.
   * @return {void} No return value
   */
  playAnimation(arr) {
    this.currentImage = this.currentImage % arr.length || 0;
    let path = arr[this.currentImage];
    this.img = this.imageCash[path]; 
    this.currentImage++;
  }

    /**
   * Moves the object to the right based on its speed.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  moveRight() {
    this.x += this.speed;
  }

    /**
   * Moves the object to the left based on its speed.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  moveLeft() {
    this.x -= this.speed;
  }

    /**
   * Set the vertical speed to 30.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  jump() {
    this.speedY = 30;
  }
}
