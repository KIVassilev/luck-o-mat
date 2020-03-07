import loader from '../../utils/loader'
import Button from '../../entities/Button'
import logoImg from '../../assets/logo.png'
import { buttonSprite } from '../../assets/sprite'
import { clickSound } from '../../assets/audio'

class SplashScreen extends Phaser.Scene {
    constructor() {
        super('Splash')
    }

    init(data) { }

    preload() {
        loader(this)

        this.load.spritesheet('button', buttonSprite, { frameWidth: 193, frameHeight: 71 })
        this.load.image('logo', logoImg)
        this.load.audio('click', clickSound)
    }

    create(data) {
        const logo = this.add.image(400, 150, 'logo')
        const clickSound = this.sound.add('click')
        const playButton = new Button({
            scene: this,
            key: 'button',
            x: 140,
            y: 180
        })

        playButton.on('pointerup', function () {
            clickSound.play()
            this.scene.switch('Level1')
        }, this)

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        })
  }


    update(time, delta) { }
}


export default SplashScreen
