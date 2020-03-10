let canvas = document.getElementById('canvas-main');
let context = canvas.getContext('2d');

let inputBuffer = {};
window.addEventListener('keydown', function(event) {
  inputBuffer[event.key] = event.key;
});
window.addEventListener('keyup', function(event) {
  delete inputBuffer[event.key];
});

let game = {
  // ------------- Canvas --------------
  gameHeight: 1024,
  gameWidth: 1024,
  canvas: canvas,
  context: context,

  // ---------- Game State -------------
  level: 1,
  gameOver: false,

  // ---------- Game Vars --------------
  gravityAcc: 0.001,

  // ----------- Controls --------------
  up: 'ArrowUp',
  left: 'ArrowLeft',
  right: 'ArrowRight',

  // ------------ Images ---------------
  imgRocket: './assets/rocket.png',
};

let newGame = (game) => {
  game.terrain = game.createTerrain(game);
  game.rocket = game.createRocket(game.gameWidth / 2, 100, game.imgRocket, game.gravityAcc, context);
  game.gameLoop.start();
}
