import { CONFIG } from '../utils/config'

class Hand extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene);
        this.x = options.x;
        this.y = options.y;
        this.hand = scene.add.sprite(0, 0, 'hand');
        this.rope = scene.add.sprite(0, 15-this.hand.height/2, 'rope');
        this.rope.setOrigin(0.5,1);
        this.add(this.hand);
        this.add(this.rope);
        scene.add.existing(this);
    }

    positionOver(x) {
        this.hand.setFrame(0);
        this.scene.tweens.add({
            targets: this,
            x: x,
            duration: 300,
            ease: 'Linear'
        });
    }
    
    dropOver() {
        this.scene.tweens.timeline({
            targets: [this, this.item],
            tweens: [
              { y: 100 } ,
              { x: this.dropPos.x } ,
            ],
            duration: 800,
            ease: 'Linear',
            onComplete: this.onDrop.bind(this)
        });
    }

    pickBoardPos(x, y, item, dropPos) {
        this.dropPos = dropPos;
        this.item = item;
        this.hand.setFrame(1);
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            duration: 1000,
            ease: 'Linear',
            onComplete: this.onPick.bind(this)
        });
    }

    onDrop(tween) {
        this.hand.setFrame(0);
        if (this.item) {
            this.scene.tweens.add({
                targets: this.item,
                x: this.dropPos.x,
                y: this.dropPos.y,
                duration: 800,
                ease: 'Exponential'
            });
        }
    }

    onPick(tween) {
        this.dropOver();
        this.hand.setFrame(2);
    }
}

export default Hand

