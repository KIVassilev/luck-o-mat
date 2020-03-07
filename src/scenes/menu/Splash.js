import loader from '../../utils/loader'
import Button from '../../entities/Button'
import Card from '../../entities/Card'
import Board from '../../entities/Board'
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

	create_old(data) {
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

    let card = new Card(this, { x: 500, y: 10, map: [[1,0],[0,1]]});

		this.tweens.add({
			targets: logo,
			y: 450,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1
		})
  }

  create(data) {
    let board = new Board(this, { x: 500, y: 200});
    this.cards = [];
    for (var i = 0; i < 3; i++) {
      this.cards[i] = new Card(this, { x: 1000, y: 100+i*200, map: [[1,0],[0,1]]});
    }
	}

	update(time, delta) { }
}


export default SplashScreen
