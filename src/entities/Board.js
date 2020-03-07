import { CONFIG } from '../utils/config'

class Board extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene);
        console.log(scene.level)
        const itemWidth = CONFIG.item.width;
        const itemHeight = CONFIG.item.height;
        this.x = options.x;
        this.y = options.y;
        this.padding = CONFIG.boardSize.padding
        this.items = [];

        for (var y = 0; y < CONFIG.boardSize.y; y++) {
            this.items[y] = [];
            for (var x = 0; x < CONFIG.boardSize.x; x++) {
                var sprite = scene.add.sprite(
                    x * (itemWidth + this.padding), 
                    y * (itemHeight + this.padding), 
                    'items'
                );
                this.items[y][x] = sprite;
                this.add(sprite);
            }
        }

        scene.add.existing(this);
    }
}

export default Board
