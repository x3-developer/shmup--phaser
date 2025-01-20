import Phaser from 'phaser';
import GameScene from '@scenes/game/GameScene';

export default abstract class AbstractCharacter extends Phaser.GameObjects
  .Sprite {
  protected velocityX: number = 0;
  protected velocityY: number = 0;
  protected gameScene: GameScene;

  constructor(
    scene: GameScene,
    positionX: number,
    positionY: number,
    texture: string,
    frame: string
  ) {
    super(scene, positionX, positionY, texture, frame);

    this.gameScene = scene;

    this.init();
  }

  protected abstract init(): void;

  protected abstract move(): void;
}
