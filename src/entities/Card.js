import { CONFIG } from '../utils/config'
import { shuffleArray } from '../utils/helpers'

class Card extends Phaser.GameObjects.Graphics {
    constructor(scene, options) {
        super(scene, options);
        const itemWidth = CONFIG.item.width;
        const itemHeight = CONFIG.item.height;
        const pad = CONFIG.boardSize.padding;
        const w = pad * 3 + itemWidth * 2;
        const h = pad * 3 + itemHeight * 2;
        this.map = options.map
        var x, y;

        this.fillStyle(0x555555, 1);
        
        for (x = 0; x < 3; x++) {
            this.fillRect(0, x * (pad + itemHeight), w, pad);
            this.fillRect(x * (pad + itemWidth), 0, pad, h);
        }
        if (options.map) {
            this.fillStyle(0x440000, 0.6);
            for (x = 0; x < 2; x++) {
                for (y = 0; y < 2; y++) {
                    if (options.map[y][x]) {
                        this.fillRect(pad+x*(itemWidth+pad), pad+y*(itemHeight+pad), itemWidth, itemHeight);
                    }
                }
            }
        }
        this.snap = options.snap;
        this.width = w;
        this.height = h;
        this.anchorX = options.x;
        this.anchorY = options.y;

        scene.add.existing(this);
        this.setInteractive();
        this.scale = 0.8;
        this.on('drag', function (pointer, _x, _y) {
            this.scale = 1;
            var x = pointer.x;
            var y = pointer.y;
            if (this.snap) {
                var s = this.snap;
                s.pt = null;
                if (s.rect.contains(x, y)) {
                    x = ((x-s.rect.x)/s.itemWidth)|0;
                    y = ((y-s.rect.y)/s.itemHeight)|0;
                    s.pt = { x:x, y:y };
                    x *= s.itemWidth;
                    y *= s.itemHeight;
                    x += s.rect.x + s.itemWidth/2;
                    y += s.rect.y + s.itemHeight/2;
                    scene.events.emit('cardOver', s.pt)
                }
            }
            this.x = x - this.width/2;
            this.y = y - this.height/2;
        });
        this.on('dragend', function (pointer, dragX, dragY) {
            this.scale = 0.8;
            if (this.snap.pt && !scene.handMoving) {
                this.rollSpot();
            } else {
                this.x = this.anchorX;
                this.y = this.anchorY;
            }
        });
        scene.input.setDraggable(this);
    }

    rollSpot() {
        let slots = []
        
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 0) slots.push({ y, x })
            }
        }

        let slot = shuffleArray(slots)[0]

        if (slot) {
            this.scene.events.emit('pickBoardPos', this.snap.pt.x + slot.x, this.snap.pt.y + slot.y);
            this.destroy();
        }
    }
}

export default Card
