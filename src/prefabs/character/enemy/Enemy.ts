import Phaser from 'phaser';
import GameScene from '@scenes/game/GameScene';
import AbstractCharacter from '@/prefabs/character/AbstractCharacter';

export default class Enemy extends AbstractCharacter {
  constructor(
    scene: GameScene,
    positionX: number,
    positionY: number,
    frame: string
  ) {
    super(scene, positionX, positionY, 'enemy', frame);

    this.velocityX = -800;
  }

  protected init() {
    this.scene.add.existing(this).setScale(4);
    this.scene.physics.add.existing(this);
    this.scene.events.on('update', this.update, this);
  }

  public update() {
    if (this.active && this.x < -this.width) {
      this.setAlive(false);
    }
  }

  public reset() {
    const { positionX, positionY, frame } = Enemy.generateAttributes(
      this.gameScene
    );

    this.setFrame(frame).setPosition(positionX, positionY);
    this.setAlive(true);
  }

  static generateAttributes(scene: GameScene) {
    const positionX = Number(scene.sys.game.config.width) + 200;
    const positionY = Phaser.Math.Between(
      100,
      Number(scene.sys.game.config.height)
    );
    const frame = `bat0${Phaser.Math.Between(1, 2)}`;

    return { positionX, positionY, frame };
  }

  static generate(scene: GameScene) {
    const { positionX, positionY, frame } = Enemy.generateAttributes(scene);

    return new Enemy(scene, positionX, positionY, frame);
  }

  public move() {
    if (this.gameScene && this.body) {
      this.body.velocity.x = this.velocityX;
    }
  }

  private setAlive(isAlive: boolean) {
    this.setVisible(isAlive).setActive(isAlive);

    if (!isAlive) {
      this.destroy();
    }
  }
}
