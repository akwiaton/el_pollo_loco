class Bottle extends DrawableObject {
  height = 90;
  width = 90;

  offset = {
    top: 10,
    bottom: 10,
    left: 25,
    right: 25,
  };

    /**
   * A constructor function that initializes a Bottle object with the provided x and y coordinates.
   *
   * @param {number} x - The x coordinate of the Bottle object.
   * @param {number} y - The y coordinate of the Bottle object.
   * @return {void} No return value
   */
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png");

    this.x = x;
    this.y = y;
  }
}
