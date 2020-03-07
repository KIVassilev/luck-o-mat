class Item extends Phaser.GameObjects.Sprite {
    constructor(config) {
        console.log(config)
        super(config.scene, 0, 0, config.key, 0)

        this.x = config.x
        this.y = config.y

        this.setInteractive()

        config.scene.add.existing(this)
    }
}

export default Item