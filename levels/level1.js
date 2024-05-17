let level1;

/**
 * Initializes the game level by creating instances of Chicken, ChickenSmall, Endboss, Coin, Bottle, Cloud, and BackgroundObject.
 *
 */
function initLevel() {

  level1 = new Level(
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken()
  ],

  [
    new ChickenSmall(),
    new ChickenSmall(), 
    new ChickenSmall()
  ],
   
  [
    new Endboss(),
  ],

  [
    new Coin(1340, 180), 
    new Coin(1400, 140), 
    new Coin(1460, 100),
    new Coin(1520, 140), 
    new Coin(1580, 180)
  ],

  [
    new Bottle(400, 300),
    new Bottle(750, 280),
    new Bottle(1200, 300),
    new Bottle(2000, 180)
],

  [new Cloud(),

    new Cloud(),

    new Cloud(),

    new Cloud(),

    new Cloud(),
],

  [
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),

    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),
  ]
);
}
