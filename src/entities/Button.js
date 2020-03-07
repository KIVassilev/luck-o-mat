class Button extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, 1)

        this.x = config.x
        this.y = config.y

        this.setInteractive()

        this.on('pointerdown', this.onDown, this)
        this.on('pointerup', this.onUp, this)
        this.on('pointerover', this.onOver, this)
        this.on('pointerout', this.onUp, this)

        config.scene.add.existing(this)
    }

    onDown() {
        this.setFrame(0)
    }
    onOver() {
        this.setFrame(2)
    }
    onUp() {
        this.setFrame(1)
    }
}

export default Button