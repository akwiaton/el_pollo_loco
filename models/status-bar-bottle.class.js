class StatusBarBottle extends DrawableObject {
  IMAGES_BOTTLE = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  percentage = 20; 

    /**
   * Constructor for initializing the StatusBarBottle object.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  constructor() {
    super(); 
    this.loadImages(this.IMAGES_BOTTLE);
    this.x = 30;
    this.y = 40;
    this.setPercentage(20);
    this.width = 200;
    this.height = 60;
  }

  /**
   * Set the percentage value and update the image based on the resolved path.
   *
   * @param {number} percentage - The new percentage value to be set.
   * @return {void} No return value
   */
  setPercentage(percentage) {
    this.percentage = percentage; 
    let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
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
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
