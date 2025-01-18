import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.atlas(
      'witch',
      'sprites/character/witch.png',
      'sprites/character/witch.json'
    );
  }

  create() {
    this.scene.start('StartScene');
  }
}
