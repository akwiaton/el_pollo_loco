class Endboss extends MovableObject {
  height = 300;
  width = 300;
  y = 135;

  offset = {
    top: 40,
    bottom: 20,
    left: 50,
    right: 20,
  };

  hadFirstContact = false;
  speed = 3;
  soundIsPlaying = true;
  hitsoundIsPlaying = true;

  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_WALK = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  world;
  endboss_hurt = new Audio("./audio/endboss-hurt-short.mp3");
  endboss_dead = new Audio("./audio/endboss_dead.mp3");
  win_sound = new Audio("./audio/win_sound.mp3");

    /**
   * Constructor for initializing the Endboss object with images and initial position.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  constructor() {
    super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png");
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2500; 

    this.animate();
  }

    /**
   * Executes a series of animations based on specific conditions and intervals.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  animate() {
    let i = 0;
    setInterval(() => {
      if (i < 10) {
        this.playAnimation(this.IMAGES_ALERT);
      } else {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
      }
      i++;
      if (world.character.x > 1950 && !this.hadFirstContact) {
        i = 0;
        this.hadFirstContact = !this.hadFirstContact;
        this.playAnimation(this.IMAGES_ATTACK);
      }
    }, 1000 / 10);
    this.endbossFeatures();
  }

    /**
   * Executes specific actions when the end boss is either dead or hurt.
   *
   * @param {void} No parameters
   * @return {void} No return value
   */
  endbossFeatures() {

    setInterval(() => {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      if(this.soundIsPlaying) {
      this.endboss_hurt.pause();
      this.playSound(this.endboss_dead);
      this.endboss_dead.volume = 0.1;
      this.soundIsPlaying = false;
      }
      setTimeout(() => {
        this.playSound(this.win_sound);
        this.win_sound = 0.1;
        youWin();
      }, 800);
    } else if (this.isHurt()) {
      
      this.playAnimation(this.IMAGES_HURT);
      if(this.hitsoundIsPlaying) {
      this.playSound(this.endboss_hurt);
      this.endboss_hurt.volume = 0.1;
      this.hitsoundIsPlaying = false;
      }
    }
  }, 1000 / 10);
  }
}
