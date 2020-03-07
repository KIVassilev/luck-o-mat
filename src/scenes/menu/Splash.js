import loader from '../../utils/loader'
import Button from '../../entities/Button'
import bgImg from '../../assets/bg.png'
import { SPRITE } from '../../assets/sprite'
import { clickSound } from '../../assets/audio'
import Character from '../../entities/Character'

class SplashScreen extends Phaser.Scene {
    constructor() {
        super('Splash')
    }

    init(data) { }

    preload() {
        loader(this)

        this.load.spritesheet('button', SPRITE.button, { frameWidth: 193, frameHeight: 71 })
        this.load.image('background', bgImg)
        this.load.audio('click', clickSound)
        this.load.spritesheet('char-1', SPRITE.chars[1], { frameWidth: 215, frameHeight: 390 })
    }

    create(data) {
        this.add.sprite(0, 0, 'background').setOrigin(0, 0)
        const clickSound = this.sound.add('click')
        const playButton = new Button({
            scene: this,
            key: 'button',
            x: 540,
            y: 180
        })

        playButton.on('pointerup', function () {
            clickSound.play()
            this.scene.switch('Level1')
        }, this)

        const Char = new Character({
            scene: this,
            key: 'char-1',
            x: 850,
            y: 80,
            id: 1,
            frame: 1
        })

        this.tweens.add({
            targets: Char,
            scale: 1.2,
            duration: 700,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        })
  }

    update(time, delta) { }
}


export default SplashScreen
