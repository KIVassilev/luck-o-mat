import { CONFIG } from '../utils/config'

class Character extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, 0, 0, config.key, config.frame || 0)

        this.x = config.x
        this.y = config.y
        this.profile = CONFIG.chars.find(char => char.id === config.id)
        if (config.scale) {
            this.anchorScale = config.scale
            this.scale = config.scale
        }

        this.setOrigin(0, 0)

        this.setInteractive()

        config.scene.add.existing(this)
        config.scene.events.emit('sct', this.x, this.y + this.height, this.profile.talk.hi);
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
        const points = charItem.pt || CONFIG.item.pointsPenalty
        if (points > 0) {
            this.setFrame(1)
        } else {
            this.setFrame(2)
        }
        
        this.scene.game.events.emit('addScore', points)
        if (charItem && charItem.pt > 0)
          this.scene.events.emit('sct', this.x, this.y + this.height, this.profile.talk.win);
        else
          this.scene.events.emit('sct', this.x, this.y + this.height, this.profile.talk.lose);
        item.destroy()
    }
}

export default Character
