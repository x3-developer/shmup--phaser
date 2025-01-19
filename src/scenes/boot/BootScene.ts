import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('background', 'sprites/backgrounds/background.png');
  }

  create() {
    this.scene.start('PreloadScene');
  }
}
