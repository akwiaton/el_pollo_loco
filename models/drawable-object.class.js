class DrawableObject {
  img;
  imageCash = {};
  currentImage = 0;
  x = 120;
  y = 280;
  height = 150;
  width = 100;

  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

   /**
   * A description of the entire function.
   *
   * @param {type} path - description of parameter
   * @return {type} No return value
   */
  loadImage(path) {
    this.img = new Image(); 
    this.img.src = path;
  }

    /**
   * A description of the entire function.
   *
   * @param {type} ctx - description of parameter
   * @return {type} No return value
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  // drawFrame(ctx) {
  //   if (this instanceof Chicken || this instanceof ChickenSmall) {
  //     ctx.beginPath();
  //     ctx.lineWidth = "5";
  //     ctx.strokeStyle = "blue";
  //     ctx.rect(this.x, this.y, this.width, this.height);
  //     ctx.stroke();
  //   }
  // }

  // drawFrameWithOffset(ctx) {
  //   if (this instanceof Character || this instanceof ChickenSmall || this instanceof Chicken || this instanceof Endboss) {
  //     ctx.beginPath();
  //     ctx.lineWidth = 5;
  //     ctx.strokeStyle = "red";
  //     ctx.rect(this.x + (this.offset.left || 0),
  //       this.y + (this.offset.top || 0),
  //       this.width - (this.offset.left || 0) - (this.offset.right || 0),
  //       this.height - (this.offset.top || 0) - (this.offset.bottom || 0)
  //     );
  //     ctx.stroke();
  //   }
  // }

    /**
   * Loads images from the provided array of paths and stores them in the imageCash object.
   *
   * @param {Array} arr - The array of image paths to load
   * @return {void} No return value
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCash[path] = img;
    });
  }
}
