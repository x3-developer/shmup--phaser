import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.createBackground();
    this.createText();
    this.setEvents();
  }

  private createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }

  private createText() {
    const textX = Number(this.sys.game.config.width) / 2;
    const textY = Number(this.sys.game.config.height) - 250;

    this.add
      .text(textX, textY, 'Type to start', {
        font: '64px CurseCasual',
        color: '#ffffff',
      })
      .setOrigin(0.5, 0);
  }

  private setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
