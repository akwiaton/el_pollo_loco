class ChickenSmall extends MovableObject {
  height = 60;
  width = 70;
  y = 360;

  offset = {
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
  };

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

    /**
   * Constructor for initializing the ChickenSmall object.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 250 + Math.random() * 2100; // Zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

    /**
   * Animates the object's movement and actions based on energy and life status.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60); 

    setInterval(() => {
      if (this.energy == 0) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isAlive) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);
  }
}
