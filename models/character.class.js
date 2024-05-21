class Character extends MovableObject {
  height = 280;
  width = 190;
  y = 80;
  speed = 10;

  offset = {
    top: 100,
    bottom: 10,
    left: 35,
    right: 40,
  };
  lastMove = 0;
  coins = 0;
  throwBottles = [];
  soundIsPlaying = true;
  deadsoundIsPlaying = true;
  hitsoundIsPlaying = true;
  walksoundIsPlaying = true;
  jumpsoundIsPlaying = true;


  world;
  theme_sound = new Audio("./audio/theme.mp3");
  walking_sound = new Audio("./audio/walk_short.mp3");
  snork_sound = new Audio("./audio/snork_short.mp3");
  hit_sound = new Audio("./audio/hurt.mp3");
  dying_sound = new Audio("./audio/dead-short.mp3");
  jump_sound = new Audio("./audio/jump_sound.mp3");

  IMAGES_IDLE = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEPING = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURTING = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

world;

    /**
   * Constructor for initializing the character.
   *
   * @return {void} No return value
   */
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURTING);
    this.loadImages(this.IMAGES_SLEEPING);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();
    
  }

    /**
   * Animates the character movement based on keyboard inputs and game events.
   *
   * @return {void} No return value
   */
  animate() {
    this.theme_sound.play();
    this.theme_sound.volume = 0.1;
    
    this.moveCharacter();
    this.characterFeatures();
  }

    /**
   * Set the vertical speed to 30.
   *
   * @return {void} No return value.
   */
  jump() {
    this.speedY = 30;
  }

    /**
   * Moves the character based on keyboard inputs and game events at a set interval.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  moveCharacter() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.lastMove = new Date().getTime();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.lastMove = new Date().getTime();
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.lastMove = new Date().getTime();
        if(this.jumpsoundIsPlaying) {
          this.playSound(this.jump_sound);
          this.jumpsoundIsPlaying = false;
        }
      }

      this.world.camera_x = -this.x + 100; 
    }, 1000 / 60);
  }

    /**
   * Executes a series of character animations based on specific conditions and intervals.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  characterFeatures() {
    this.playAnimation(this.IMAGES_IDLE);
    setInterval(() => {
      this.charaterIdle();
      this.charaterDead();
    }, 1000 / 10); 
  }

  /**
   * Executes a character idle animation based on the last move time and whether the character is above the ground.
   * If the character is not above the ground and the last move time is less than 10 seconds ago, the function plays the idle animation.
   * If the last move time is greater than or equal to 10 seconds ago, the function plays the sleeping animation and plays the snork sound with a volume of 0.1.
   *
   * @return {void} No return value
   */

  charaterIdle() {
    if (new Date().getTime() - this.lastMove < 10000 && !this.isAboveGround()) {
      this.playAnimation(this.IMAGES_IDLE);
    } else if (new Date().getTime() - this.lastMove >= 10000) {
      this.playAnimation(this.IMAGES_SLEEPING);
      if(this.soundIsPlaying) {
        this.playSound(this.snork_sound);
        this.snork_sound.volume = 0.1;
        this.soundIsPlaying = false;
      }
    }
  }

/**
 * Executes a series of character animations based on specific conditions and intervals.
 *
 * @return {void} No return value
 */

  charaterDead() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      if(this.deadsoundIsPlaying) {
        this.playSound(this.dying_sound);
        this.deadsoundIsPlaying = false;
      }
      setTimeout(() => {
        gameOver();
      }, 1000);
    } else if (this.isHurt()) {
      this.characterHurt();
    } else if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.playAnimation(this.IMAGES_WALKING);
      this.lastMove = new Date().getTime();
      if(this.walksoundIsPlaying) {
        this.playSound(this.walking_sound);
        this.walksoundIsPlaying = false;
      }
    }
  }

/**
 * Plays the character's hurt animation and plays the hit sound if it is currently playing.
 *
 * @return {void} This function does not return anything.
 */
  characterHurt() {
    this.playAnimation(this.IMAGES_HURTING);
    if(this.hitsoundIsPlaying) {
      this.playSound(this.hit_sound);
      this.hitsoundIsPlaying = false;
    }
  }
}
