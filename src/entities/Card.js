class Card extends Phaser.GameObjects.Graphics {
    constructor(scene, options) {
        super(scene, options);
        const itemWidth = 80;
        const itemHeight = 80;
        const pad = 14;
        const w = pad*3 + itemWidth*2;
        const h = pad*3 + itemHeight*2;
        var x, y;

        this.fillStyle(0x555555, 1);
        
        for (x = 0; x < 3; x++) {
            this.fillRect(0, x*(pad+itemHeight), w, pad);
            this.fillRect(x*(pad+itemWidth), 0, pad, h);
        }
        if (options.map) {
            this.fillStyle(0xff0000, 0.6);
            for (x = 0; x < 2; x++) {
                for (y = 0; y < 2; y++) {
                    if (options.map[x][y]) {
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
        scene.input.on('drag', function (pointer, gameObject, _x, _y) {
            gameObject.scale = 1;
            var x = pointer.x;
            var y = pointer.y;
            if (gameObject.snap) {
                var s = gameObject.snap;
                if (s.rect.contains(x, y)) {
                    x = ((x-s.rect.x)/s.itemWidth)|0;
                    y = ((y-s.rect.y)/s.itemHeight)|0;
                    x *= s.itemWidth;
                    y *= s.itemHeight;
                    x += s.rect.x + s.itemWidth/2;
                    y += s.rect.y + s.itemHeight/2;
                }
            }
            gameObject.x = x - gameObject.width/2;
            gameObject.y = y - gameObject.height/2;
        });
        scene.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = gameObject.anchorX;
            gameObject.y = gameObject.anchorY;
            gameObject.scale = 0.8;
        });
        scene.input.setDraggable(this);
    }
}

export default Card
