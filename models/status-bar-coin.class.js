class StatusBarCoin extends DrawableObject {
    
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png', 
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',  
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png' 
    ];
    
    percentage = 100;

        /**
     * Constructor for initializing the StatusBarCoin object.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    constructor() {
        super(); 
        this.loadImages(this.IMAGES_COIN);
        this.x = 30;
        this.y = 90;
        this.setPercentage(0);
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
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
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
    
        /**
     * A function to change the status based on the current percentage value.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    changeStatus() {
        this.setPercentage(this.percentage - 10);
        if (this.percentage == 0) {
            this.game.gameOver();
        }
    }
    
}