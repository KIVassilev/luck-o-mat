class Item extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, 0)

        this.id = config.id
        this.x = config.x
        this.y = config.y
        this.anchorX = config.x
        this.anchorY = config.y

        this.setInteractive()

        this.on('drag', this.drag)
        this.on('dragend', this.dragEnd);

        config.scene.add.existing(this)
    }

    drag(pointer, x, y) {
        this.x = x;
        this.y = y;
    }

    dragEnd(pointer, x, y) {
        const chars = this.scene.chars
        let char = false

        for (let i = 0; i < chars.length; i++) {
            let bounds = chars[i].getBounds()
            if (bounds.contains(pointer.x, pointer.y)) {
                char = chars[i]
                break
            }
        }

        if (char) {
            char.getItem(this)
        } else {
            this.x = this.anchorX;
            this.y = this.anchorY;
        }
    }
}

export default Item
