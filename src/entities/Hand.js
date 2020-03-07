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
            duration: 500,
            ease: 'Linear'
        });
    }
    pickItem(item) {
        this.item = item;
        this.hand.setFrame(1);
        this.scene.tweens.add({
            targets: this,
            x: item.x,
            y: item.y,
            duration: 2000,
            ease: 'Linear',
            onComplete: this.onPick.bind(this)
        });
    }
    onPick(tween) {
        tween.targets[0].hand.setFrame(2);
    }
}

export default Hand

