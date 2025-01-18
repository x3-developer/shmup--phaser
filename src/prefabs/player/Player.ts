import Phaser from 'phaser';
import GameScene from '@scenes/game/GameScene';

export default class Player extends Phaser.GameObjects.Sprite {
  private readonly playerVelocity = 500;
  private gameScene: GameScene | null;

  constructor(scene: GameScene) {
    const positionX = 100;
    const positionY = Number(scene.sys.game.config.height) / 2;

    super(scene, positionX, positionY, 'witch', 'witch1');

    this.gameScene = scene;
    this.init();
  }

  private init() {
    this.scene.add.existing(this).setScale(4);
    this.scene.physics.add.existing(this);
  }

  public move() {
    if (this.gameScene && this.body) {
      const cursors = this.gameScene.getCursors();
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (cursors) {
        if (cursors.right.isDown) {
          this.body.velocity.x = this.playerVelocity;
        } else if (cursors.left.isDown) {
          this.body.velocity.x = -this.playerVelocity;
        }

        if (cursors.up.isDown) {
          this.body.velocity.y = -this.playerVelocity;
        } else if (cursors.down.isDown) {
          this.body.velocity.y = this.playerVelocity;
        }
      }
    }
  }
}
