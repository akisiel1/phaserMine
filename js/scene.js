class Scene extends Phaser.Scene {
    constructor() {
        super("bootGame");
        this.sceneWidth = 256;
        this.sceneHeight = 272;
    }

    preload() {
        this.load.image("background", "assets/bg.png");
        this.load.spritesheet("ship", "assets/hawk.png", {
            frameWidth: 32,
            frameHeight: 32
          });
        this.load.image("ship2", "assets/ship2.png");
        this.load.image("ship3", "assets/ship3.png");
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.ship1 = this.physics.add.sprite(
            this.sceneWidth / 2 - 50,
            this.sceneHeight / 2,
            "ship"
        );
        this.ship2 = this.physics.add.image(
            this.sceneWidth / 2,
            0,
            "ship2"
        );
        this.ship3 = this.physics.add.image(
            this.sceneWidth/2 + 50,
            0,
            "ship3"
        );


        this.enemiesShips = this.physics.add.group();
        this.enemiesShips.add(this.ship2);
        this.enemiesShips.add(this.ship3);

        this.anims.create({
            key: "ship_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.ship1.play("ship_anim");
        this.keys = this.input.keyboard.createCursorKeys();

        
        this.physics.add.collider(this.ship1, this.enemiesShips, this.endGame, null, this);
    }

    update() {
        let speed = 2;

        if (this.keys.left.isDown && this.ship1.x > 0) {
            this.ship1.x = this.ship1.x - speed;
        } else if (this.keys.right.isDown && this.ship1.x < this.sceneWidth) {
            this.ship1.x = this.ship1.x + speed;
        }

        if (this.keys.up.isDown && this.ship1.y > 0) {
            this.ship1.y = this.ship1.y - speed;
        } else if (this.keys.down.isDown && this.ship1.y < this.sceneHeight) {
            this.ship1.y = this.ship1.y + speed;
        }

        this.ship2.y += 0.4;
        this.ship3.y += 1.1;

        if (this.ship2.y > this.sceneHeight) {
            this.ship2.y = 0;
            this.ship2.x = Math.random() * this.sceneWidth;
        }

        if (this.ship3.y > this.sceneHeight) {
            this.ship3.y = 0;
            this.ship3.x = Math.random() * this.sceneWidth;
        }
    }

    endGame() {
        this.scene.start("endgame");
    }
}
