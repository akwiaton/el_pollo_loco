class BackgroundObject extends MovableObject {
    
    width = 720;
    height = 480;

        /**
     * A constructor function that initializes a BackgroundObject with the provided imagePath and x coordinate.
     *
     * @param {string} imagePath - The path to the image of the BackgroundObject.
     * @param {number} x - The x coordinate of the BackgroundObject.
     * @return {void} No return value
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height; 
        this.x = x;
    }
}