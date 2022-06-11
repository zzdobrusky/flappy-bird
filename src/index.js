import Phaser from 'phaser';

const config = {
  // WebGL (Web Graphics Library) default
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: 'arcade'
  },
  scene: {
    preload,
    create,
  }
}

// Loading assets, such as images, music, animations ...
function preload() {
  // 'this' context - scene
  // contains functions and properties we can use
  console.log('preload()');
  // debugger;
  this.load.image('sky', 'assets/sky.png')
}

// 
function create() {
  console.log('create()');
  // debugger;
}

new Phaser.Game(config);