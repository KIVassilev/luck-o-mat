import { CONFIG } from '../utils/config'

class Board extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene);
        this.x = options.x;
        this.y = options.y;
        this.hand = scene.add.sprite(0, 0, 'hand');
        this.add(this.hand);
        scene.add.existing(this);
    }
}

export default Board

