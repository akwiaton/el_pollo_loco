class Cloud extends MovableObject {
  y = 40;
  width = 500;
  height = 250;

    /**
   * Constructor for initializing the Cloud object.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = 100 + Math.random() * 2500;
    this.animate();
  }

    /**
   * Animates the object's movement by invoking the moveLeft method periodically.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
