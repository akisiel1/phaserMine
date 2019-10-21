import Scene1 from "/src/Scene1";
import Scene2 from "/src/Scene2";
import Phaser from "phaser";

var config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000001,
  scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
