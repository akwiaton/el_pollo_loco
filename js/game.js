let canvas;
let world;
let keyboard = new Keyboard();
let soundOff = false;

/**
 * Function to start the game by setting up the initial display and binding button events.
 *
 * @return {void} This function does not return anything.
 */
function startGame() {
  document.getElementById("btnMute").classList.remove("d-none");
  document.getElementById("start_game").style.display = "none";
  document.getElementById("how-to-play").style.display = "none";
  document.getElementById("description-icon").style.display = "none";
  document.getElementById("game_over").style.display = "none";
  document.getElementById("you_win").style.display = "none";
  document.getElementById("btnPlay").style.display = "none";
  document.getElementById("btnPlayMobile").style.display = "none";
  document.getElementById("canvas").classList.remove("d-none");
  canvas = document.getElementById("canvas");
  initLevel();
  world = new World(canvas, keyboard);
  bindBtnsPressEvent();
}

/**
 * A function to handle displaying game instructions.
 *
 * @return {void} This function does not return anything.
 */
function howToPlay() {
  document.getElementById("start_game").style.display = "none";
  document.getElementById("how-to-play").style.display = "block";
  document.getElementById("back-to-start").style.display = "flex";
}

/**
 * Hides the "how-to-play" element and shows the "start_game" element while hiding the "back-to-start" element.
 *
 * @return {void} This function does not return anything.
 */
function backToStart() {
  location.reload();
}

/**
 * A function to clear all intervals up to a certain limit.
 *
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Pauses the game theme sound, clears all intervals, and updates the game over screen.
 *
 */
function gameOver() {
  world.character.theme_sound.pause();
  clearAllIntervals();
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("game_over").style.display = "flex";
  document.getElementById("btnPlayMobile").style.display = "block";
  document.getElementById("back-to-start").style.display = "flex";
  document.getElementById("btnPlay").style.display = "flex";
  document.getElementById("btnMute").classList.add("d-none");
}

/**
 * Pauses the game sound, clears all intervals, and updates the you win screen.
 *
 */
function youWin() {
  world.character.theme_sound.pause();
  clearAllIntervals();
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("you_win").style.display = "flex";
  document.getElementById("btnMute").classList.add("d-none");
  document.getElementById("btnPlay").style.display = "flex";
  document.getElementById("back-to-start").style.display = "flex";
}

/**
 * Toggles the mute functionality by changing the sound status and updating the button image accordingly.
 *
 */
function toggleMute() {
  soundOff = !soundOff;
  if (soundOff) {
    document.getElementById("btnMute").src = "./img/10_icon/btn-sound-on.png";
    world.character.theme_sound.pause();
  } else {
    document.getElementById("btnMute").src = "./img/10_icon/btn-sound-off.png";
    world.character.theme_sound.play();
  
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    keyboard.RIGHT = true;
  } else if (e.keyCode === 37) {
    keyboard.LEFT = true;
  } else if (e.keyCode === 38) {
    keyboard.UP = true;
  } else if (e.keyCode === 40) {
    keyboard.DOWN = true;
  } else if (e.keyCode === 32) {
    keyboard.SPACE = true;
  } else if (e.keyCode === 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 39) {
    keyboard.RIGHT = false;
  } else if (e.keyCode === 37) {
    keyboard.LEFT = false;
  } else if (e.keyCode === 38) {
    keyboard.UP = false;
  } else if (e.keyCode === 40) {
    keyboard.DOWN = false;
  } else if (e.keyCode === 32) {
    keyboard.SPACE = false;
  } else if (e.keyCode === 68) {
    keyboard.D = false;
  }
});

/**
 * Binds touchstart and touchend events to the buttons for handling keyboard input.
 *
 * @return {void} This function does not return anything.
 */
function bindBtnsPressEvent() {
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("btnThrow").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document.getElementById("btnJump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("btnJump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}
