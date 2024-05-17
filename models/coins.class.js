// class Coin extends CollectableObject {
class Coin extends DrawableObject {
  height = 150;
  width = 150;

  offset = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
  };

    /**
   * Constructor for initializing the Coin object with the provided x and y coordinates.
   *
   * @param {number} x - The x coordinate of the Coin object.
   * @param {number} y - The y coordinate of the Coin object.
   * @return {void} No return value
   */
  constructor(x, y) {
    super().loadImage("img/8_coin/coin_1.png");
    this.x = x;
    this.y = y;
  }
}
