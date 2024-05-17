class StatusBarEndboss extends DrawableObject {
  IMAGES_ENDBOSS = [
    "img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
    "img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
    "img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
    "img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
    "img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
    "img/7_statusbars/2_statusbar_endboss/orange/orange100.png",
  ];

  percentage = 100;

    /**
   * Constructor for initializing the StatusBarEndboss object.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_ENDBOSS);
    this.x = 500;
    this.y = 100;
    this.setPercentage(100);
    this.width = 200;
    this.height = 60;
  }
    /**
   * A description of the entire function.
   *
   * @param {type} percentage - description of parameter
   * @return {type} No return value
   */
  setPercentage(percentage) {
    this.percentage = percentage; 
    let path = this.IMAGES_ENDBOSS[this.resolveImageIndex()];
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
