import loader from '../../utils/loader'
import Button from '../../entities/Button'
import bgImg from '../../assets/bg.png'
import { SPRITE } from '../../assets/sprite'
import { clickSound, music } from '../../assets/audio'
import Character from '../../entities/Character'

class SplashScreen extends Phaser.Scene {
    constructor() {
        super('Splash')
    }

    init(data) { }

    preload() {
        loader(this) 

        this.load.spritesheet('bigbutton', SPRITE.bigButton, { frameWidth: 1120/4, frameHeight: 95 });
        this.load.image('background', bgImg)
        this.load.audio('click', clickSound)
        this.load.audio('music', music)
        this.load.spritesheet('char-1', SPRITE.chars[1], { frameWidth: 215, frameHeight: 390 })
        this.load.spritesheet('char-2', SPRITE.chars[2], { frameWidth: 215, frameHeight: 390 })
        this.load.spritesheet('char-4', SPRITE.chars[4], { frameWidth: 215, frameHeight: 390 })
    }

    create(data) {
        this.add.sprite(0, 0, 'background').setOrigin(0, 0)
        const clickSound = this.sound.add('click')
        const playButton = new Button({
            scene: this,
            key: 'bigbutton',
            text: 'PLAY',
            x: 600,
            y: 580
        })

        playButton.on('pointerup', function () {
            clickSound.play()
            this.scene.switch('Level1')
        }, this)

        const music = this.sound.add('music', {
            loop: true
        })
        music.play()

        const Char = new Character({
            scene: this,
            key: 'char-1',
            x: 850,
            y: 80,
            id: 1,
            frame: 1
        })

        new Character({
            scene: this,
            key: 'char-2',
            x: 150,
            y: 80,
            id: 1,
            frame: 1
        })

        new Character({
            scene: this,
            key: 'char-4',
            x: 450,
            y: 80,
            id: 1,
            frame: 1
        })

        // this.tweens.add({
        //     targets: Char,
        //     scale: 1.2,
        //     duration: 700,
        //     ease: 'Power2',
        //     yoyo: true,
        //     loop: -1
        // })
  }

    update(time, delta) { }
}


export default SplashScreen
