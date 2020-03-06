class Character extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, 0)

        this.x = config.x
        this.y = config.y

        this.setInteractive()

        config.scene.add.existing(this)
    }
}

export default Character