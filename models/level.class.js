class Level {
    chicken;
    chickenSmall;
    endboss;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    level_end_x = 2250;

        /**
     * Initializes a new Level instance with the provided entities.
     *
     * @param {type} chicken - Description of the chicken parameter
     * @param {type} chickenSmall - Description of the chickenSmall parameter
     * @param {type} endboss - Description of the endboss parameter
     * @param {type} coins - Description of the coins parameter
     * @param {type} bottles - Description of the bottles parameter
     * @param {type} clouds - Description of the clouds parameter
     * @param {type} backgroundObjects - Description of the backgroundObjects parameter
     */
    constructor(chicken, chickenSmall, endboss, coins, bottles, clouds, backgroundObjects) {
        this.chicken = chicken;
        this.chickenSmall = chickenSmall;
        this.endboss = endboss;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}