class Item extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, config.id)

        this.id = config.id
        this.x = config.x
        this.y = config.y
        this.anchorX = config.x
        this.anchorY = config.y

        this.setInteractive()

        this.on('drag', this.drag)
        this.on('dragend', this.dragEnd);

        this.scale = 2/3

        // config.scene.input.setDraggable(this);

        config.scene.add.existing(this)
    }

    drag(pointer, x, y) {
        this.x = x;
        this.y = y;

        const chars = this.scene.chars
        let char = false

        for (let i = 0; i < chars.length; i++) {
            chars[i].scale = chars[i].anchorScale 
            let bounds = chars[i].getBounds()
            if (bounds.contains(pointer.x, pointer.y)) {
                char = chars[i]
                break
            }
        }

        if (char) {
            for (let i = 0; i < chars.length; i++) {
                chars[i].scale = chars[i].anchorScale 
            }
            char.scale = char.anchorScale * 1.10
        }
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
