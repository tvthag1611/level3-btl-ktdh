const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});
const { scene } = createScene();
const { sound } = createScene();

let play = 1;

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});

const musicBackground = () => {
  if (play === 1) {
    sound.play();
    play = 0;
  } else {
    sound.pause();
    play = 1;
  }
};

const getIconMusic = () => {
  const music = document.getElementById("iconMusic");
  music.src = play === 1 ? "./icons/play.svg" : "./icons/pause.svg";
};

setInterval(getIconMusic);
