import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";
import Phaser from "phaser";

var config = {
  parent: "game-container",
  width: 800,
  height: 600,
  backgroundColor: "#000000",
  scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
