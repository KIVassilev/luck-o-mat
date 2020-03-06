import loader from '../../utils/loader'
import backgroundImg from '../../assets/background.jpg'

class Level1 extends Phaser.Scene {
	constructor() {
		super('Level1')
		this.isLevel = true
	}

	init(data) { }

	preload() {
		loader(this)

		this.load.image('background', backgroundImg)
	}

	create(data) {
		this.scene.launch('Hud')
		this.scene.bringToTop('Hud')

		this.add.sprite(0, 0, 'background').setOrigin(0, 0)

		this.input.on('pointerup', function () {
			this.game.events.emit('addScore')
		}, this)
		
	}

	update(time, delta) { }
}


export default Level1