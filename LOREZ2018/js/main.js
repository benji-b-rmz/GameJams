let config = {
  width: 64,
  height: 65,
  pixelArt: true,
  title: "LOREZ",
  scene: [LoadScene,
          TitleScene,
          Level1
          ],
  fps: 30 
};

let game = new Phaser.Game(config);