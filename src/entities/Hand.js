import { CONFIG } from '../utils/config'

class Hand extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene);
        this.x = options.x;
        this.y = options.y;
        this.hand = scene.add.sprite(0, 0, 'hand');
        this.hand.setOrigin(0.5,0.12);
        this.rope = scene.add.sprite(0, 0, 'rope');
        this.rope.setOrigin(0.5,1);
        this.add(this.hand);
        this.add(this.rope);
        scene.add.existing(this);
    }
    pick(x, y) {
      this.hand.setFrame(1);
      this.scene.tweens.add({
          targets: this,
          x: x,
          y: y,
          duration: 2000,
          ease: 'Linear',
          onComplete: function(tween, targets) { tween.targets[0].hand.setFrame(2);}
        });
    }
}

export default Hand

