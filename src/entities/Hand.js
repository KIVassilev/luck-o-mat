import { shuffleArray } from '../utils/helpers'
import Item from './Item'

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
        this.depth = 99
        scene.add.existing(this);
    }

    positionOver(x) {
        if (this.scene.handMoving)
          return;
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

    pickBoardPos(x, y, item, dropPos, boardX, boardY) {
        this.scene.handMoving = true;
        this.dropPos = dropPos;
        this.item = item;
        this.hand.setFrame(1);
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            duration: 1000,
            ease: 'Expo',
            onComplete: this.onPick.bind(this, x, y, item, boardX, boardY)
        });
    }

    onDrop(tween) {
        this.hand.setFrame(0);
        this.scene.handMoving = false;
        if (this.item) {
            this.scene.tweens.add({
                targets: this.item,
                x: this.dropPos.x,
                y: this.dropPos.y,
                scale: 0.8,
                duration: 800,
                ease: 'Bounce'
            });
        }
    }

    onPick(x, y, item, boardX, boardY) {
        this.dropOver();
        this.hand.setFrame(2);
        let possibleItems = [12, 14]
        let newItem = new Item({
            scene: this.scene,
            key: 'items',
            x: x,
            y: 0,
            id: shuffleArray(possibleItems)[0]
        })
        this.scene.board.items[boardY][boardX] = newItem;
        this.scene.tweens.add({
          targets: newItem,
          y: y,
          ease: 'bounce',
          duration: 500+Math.random()*1000
        });
    }
}

export default Hand

