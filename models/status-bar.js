class StatusBar extends DrawableObject {
  IMAGES_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png", 
  ];

  percentage = 100;

    /**
   * Initializes the StatusBarHealth object.
   *
   */
  constructor() {
    super(); 
    this.loadImages(this.IMAGES_HEALTH);
    this.x = 30;
    this.y = -10;
    this.setPercentage(100);
    this.width = 200;
    this.height = 60;
  }

  /**
   * Set the percentage value and update the image based on the resolved path.
   *
   * @param {type} percentage - description of parameter
   * @return {type} No return value
   */
  setPercentage(percentage) {
    this.percentage = percentage; 
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCash[path];
  }

    /**
   * A function to determine the image index based on the percentage value.
   *
   * @return {number} The image index determined by the percentage value.
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  changeStatus() {
    this.setPercentage(this.percentage - 10);

    if (this.percentage == 0) {
      this.game.gameOver();
    }
  }
}
