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
        if (config.text) {
            var t = config.scene.add.text(this.x, this.y, config.text, { font: 'bold 32px Arial', color: '#ff0', stroke: '#000', strokeThickness: 4});
            t.setOrigin(0.5);
        }
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
