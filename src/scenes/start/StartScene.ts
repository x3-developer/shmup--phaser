import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('background', 'sprites/backgrounds/background.jpg');
  }

  create() {
    this.createBackground();
  }

  private createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }
}
