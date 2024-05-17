class ThrowableObject extends MovableObject {

    /**
   * Initializes a ThrowableObject with the provided x and y coordinates, loads the image, sets dimensions, and initiates throwing action.
   *
   * @param {number} x - The x coordinate of the ThrowableObject.
   * @param {number} y - The y coordinate of the ThrowableObject.
   * @return {void} No return value
   */
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.throw();
  }

    /**
   * A function to initiate the throwing action by setting the vertical speed, applying gravity, and moving the object horizontally at a constant rate.
   *
   * @param {type} No parameters
   * @return {type} No return value
   */
  throw() {
    this.speedY = 30;
    this.applyGravity();

    setInterval(() => {
      this.x += 10;
    }, 30);
  }
}
