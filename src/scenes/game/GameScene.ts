import Phaser from 'phaser';
import Player from '@/prefabs/player/Player.ts';
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;

export default class GameScene extends Phaser.Scene {
  private player: Player | null = null;
  private cursors: CursorKeys | null = null;

  constructor() {
    super('GameScene');
  }

  init() {
    if (this.input.keyboard)
      this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.createBackground();
    this.player = new Player(this);
  }

  update() {
    this.player?.move();
  }

  private createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }

  public getCursors() {
    return this.cursors;
  }
}
