import loader from '../../utils/loader'
import backgroundImg from '../../assets/background.png'
import { babySprite } from '../../assets/sprite'
import { clickSound } from '../../assets/audio'
import Character from '../../entities/Character'
import { getCurrentLevel } from '../../utils/helpers'
import { CONFIG } from '../../utils/config'
import Card from '../../entities/Card'
import Board from '../../entities/Board'
import imgItems from '../../assets/items.png'

class Level1 extends Phaser.Scene {
	constructor() {
		super('Level1')
		this.isLevel = true
	}

	init(data) { }

	preload() {
		loader(this)

		this.load.image('background', backgroundImg)
		this.load.image('char-0', babySprite)
		this.load.image('items', imgItems)
		this.load.audio('char-0-happy', clickSound)
	}

	create(data) {
		const level = getCurrentLevel(33)
		console.log(level)
		
		this.scene.launch('Hud')
		this.scene.bringToTop('Hud')

		this.add.sprite(0, 0, 'background').setOrigin(0, 0)

		this.input.on('pointerup', function () {
			this.game.events.emit('addScore')
		}, this)

		// TODO: Iterate trough all levels available
		const babyHappySound = this.sound.add('char-0-happy')
		const babyCharacter = new Character({
			scene: this,
			key: 'char-0',
			x: 140,
			y: 250
		})

		babyCharacter.on('pointerup', function () {
			babyHappySound.play()
		}, this)
    this.createBoardAndCards(data);
	}

  createBoardAndCards(data) {
    let board = new Board(this, { x: 630, y: 230});
    this.cards = [];
    var itemW = 80 + board.pad;
    var itemH = 80 + board.pad;
    var snap = {
      rect: new Phaser.Geom.Rectangle(630, 230, CONFIG.gridSize.x*itemW, CONFIG.gridSize.y*itemH),
      itemWidth: itemW,
      itemHeight: itemH
    }
    var maps = [
      [[1, 0], [0,1]],
      [[1, 1], [0,1]],
      [[0, 0], [0,1]],
    ];
    for (var i = 0; i < 3; i++) {
      this.cards[i] = new Card(this, { x: 1090, y: 60+i*200, map: maps[i], snap: snap});
    }
	}

	update(time, delta) { }
}


export default Level1
