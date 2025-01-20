import GameScene from '@scenes/game/GameScene.ts';
import AbstractCharacter from '@/prefabs/character/AbstractCharacter.ts';

export default class Enemy extends AbstractCharacter {
  constructor(scene: GameScene) {
    const positionX = Number(scene.sys.game.config.width) - 100;
    const positionY = Number(scene.sys.game.config.height) / 2;

    super(scene, positionX, positionY, 'enemy', 'bat01');

    this.velocityX = -300;
  }

  public move() {
    if (this.gameScene && this.body) {
      this.body.velocity.x = this.velocityX;
    }
  }
}
