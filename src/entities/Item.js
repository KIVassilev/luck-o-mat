class Item extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, 0)

        this.x = config.x
        this.y = config.y
        this.isPicked = false

        this.setInteractive()

        this.on('drag', function (pointer, x, y) {
            if (!this.isPicked) return
            
            this.x = x;
            this.y = y;
        })

        config.scene.input.setDraggable(this);

        config.scene.add.existing(this)
    }

    pick () {
        this.isPicked = true
    }
}

export default Item