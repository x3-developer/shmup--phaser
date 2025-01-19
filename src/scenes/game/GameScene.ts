import Phaser from 'phaser';
import Player from '@/prefabs/player/Player.ts';
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import TileSprite = Phaser.GameObjects.TileSprite;

export default class GameScene extends Phaser.Scene {
  private background: TileSprite | null = null;
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
    if (this.player) this.player.move();
    if (this.background) this.background.tilePositionX += 0.5;
  }

  private createBackground() {
    const screenWidth = Number(this.sys.game.config.width);
    const screenHeight = Number(this.sys.game.config.height);

    this.background = this.add
      .tileSprite(0, 0, screenWidth, screenHeight, 'background')
      .setOrigin(0);
  }

  public getCursors() {
    return this.cursors;
  }
}
