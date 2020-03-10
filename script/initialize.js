let canvas = document.getElementById('canvas-main');
let context = canvas.getContext('2d');

let game = {
  gameHeight: 1024,
  gameWidth: 1024,
  canvas: canvas,
  context: context,

  gravityAcc: 0.00001,

  // ------------ Images ---------------
  imgRocket: './assets/rocket.png',
}



let newGame = (game) => {
  game.rocket = game.createRocket(game.gameWidth / 2, 5, game.imgRocket, game.gravityAcc, context);
  game.gameLoop.start();
}
