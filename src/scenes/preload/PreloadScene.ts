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
    this.load.atlas(
      'enemy',
      'sprites/enemy/enemy.png',
      'sprites/enemy/enemy.json'
    );
  }

  create() {
    this.scene.start('StartScene');
  }
}
