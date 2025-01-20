import Phaser from 'phaser';
import GameScene from '@scenes/game/GameScene.ts';
import Enemy from '@/prefabs/character/enemy/Enemy.ts';
import TimerEvent = Phaser.Time.TimerEvent;

export default class Enemies extends Phaser.Physics.Arcade.Group {
  readonly scene: GameScene;
  private readonly enemyMaxCount: number = 10;
  private enemyCreatedCount: number = 0;
  private readonly timer: TimerEvent;

  constructor(scene: GameScene) {
    super(scene.physics.world, scene);

    this.scene = scene;
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      callback: this.enemySpawn,
      callbackScope: this,
      loop: true,
    });
  }

  private enemySpawn() {
    if (this.enemyCreatedCount < this.enemyMaxCount) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }
  }

  public createEnemy() {
    let enemy: Enemy = this.getFirstDead();

    if (!enemy) {
      enemy = Enemy.generate(this.scene);

      this.add(enemy);
    } else {
      enemy.reset();
    }

    enemy.move();

    this.enemyCreatedCount++;
  }
}
