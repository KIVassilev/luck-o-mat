import { CONFIG } from '../utils/config'
import Item from './Item'

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

        // Y
        for (let y = 0; y < scene.level.board.length; y++) {
            this.items[y] = [];
            for (var x = 0; x < scene.level.board[y].length; x++) {
                const newItem = new Item({
                    scene: scene,
                    key: 'items',
                    x: this.x + (x * (itemWidth + this.padding)),
                    y: this.y + (y * (itemHeight + this.padding)),
                    id: scene.level.board[y][x]
                })
                this.items[y][x] = newItem;
            }
        }

        scene.add.existing(this);
    }
}

export default Board
