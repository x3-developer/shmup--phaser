import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    this.createBackground();
  }

  private createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }
}
