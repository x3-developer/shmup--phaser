import './style.css';
import Phaser from 'phaser';
import scenes from './scenes';

new Phaser.Game({
  type: Phaser.AUTO,
  // parent: 'app',
  width: 1920,
  height: 1080,
  scene: scenes,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
