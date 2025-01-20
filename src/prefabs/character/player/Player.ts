import GameScene from '@scenes/game/GameScene.ts';
import AbstractCharacter from '@/prefabs/character/AbstractCharacter.ts';

export default class Player extends AbstractCharacter {
  constructor(scene: GameScene) {
    const positionX = 100;
    const positionY = Number(scene.sys.game.config.height) / 2;

    super(scene, positionX, positionY, 'witch', 'witch1');

    this.velocityX = 500;
    this.velocityY = 500;
  }

  public move() {
    if (this.body) {
      const cursors = this.gameScene.getCursors();
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (cursors) {
        if (cursors.right.isDown) {
          this.body.velocity.x = this.velocityX;
        } else if (cursors.left.isDown) {
          this.body.velocity.x = -this.velocityX;
        }

        if (cursors.up.isDown) {
          this.body.velocity.y = -this.velocityY;
        } else if (cursors.down.isDown) {
          this.body.velocity.y = this.velocityY;
        }
      }
    }
  }
}
