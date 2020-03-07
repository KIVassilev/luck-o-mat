import { CONFIG } from '../utils/config'

class Character extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, 0)

        this.x = config.x
        this.y = config.y
        this.profile = CONFIG.chars.find(char => char.id === config.id)

        this.setOrigin(0, 0)

        this.setInteractive()

        config.scene.add.existing(this)
    }

    getItem(item) {
        let charItem = false
        for (let i = 0; i < this.profile.items.length; i++) {
            let ich = this.profile.items[i]
            if (ich.id === item.id) {
                charItem = ich
                break
            }
        }
        this.scene.game.events.emit('addScore', charItem.pt || CONFIG.item.pointsPenalty)
        item.destroy()
    }
}

export default Character