import loader from '../../utils/loader'
import backgroundImg from '../../assets/background.png'
import { babySprite } from '../../assets/sprite'
import { clickSound } from '../../assets/audio'
import Character from '../../entities/Character'
import { getLevel } from '../../utils/helpers'
import { CONFIG } from '../../utils/config'
import Card from '../../entities/Card'
import Hand from '../../entities/Hand'
import Board from '../../entities/Board'
import imgItems from '../../assets/items.png'
import imgHand from '../../assets/hand.png'
import imgRope from '../../assets/rope.png'

class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1')
        this.isLevel = true
        this.level = getLevel()
    }

    init(data) { }

    preload() {
        loader(this)

        this.load.image('background', backgroundImg)
        this.load.image('char-0', babySprite)
        this.load.image('items', imgItems)
        this.load.spritesheet('hand', imgHand,  { frameWidth: 166, frameHeight: 100 });
        this.load.image('rope', imgRope);
        this.load.image('items', imgItems)
        this.load.audio('char-0-happy', clickSound)
    }

    create(data) {
        console.log(this.level)
        
        this.scene.launch('Hud')
        this.scene.bringToTop('Hud')

        this.add.sprite(0, 0, 'background').setOrigin(0, 0)

        this.input.on('pointerup', function () {
            this.game.events.emit('addScore')
        }, this)

        // Spawn characters
        this.createCharacters()

        this.createBoardAndCards(data)
    }

    createBoardAndCards(data) {
        let board = new Board(this, { x: 630, y: 230 })
        this.cards = []
        var itemW = CONFIG.item.width + board.padding
        var itemH = CONFIG.item.height + board.padding
        var snap = {
            rect: new Phaser.Geom.Rectangle(630, 230, (CONFIG.boardSize.x - 1) * itemW, (CONFIG.boardSize.y - 1) * itemH),
            itemWidth: itemW,
            itemHeight: itemH
        }
        var maps = [
            [[1, 0], [0,1]],
            [[1, 1], [0,1]],
            [[0, 0], [0,1]]
        ]

        for (var i = 0; i < 3; i++) {
            this.cards[i] = new Card(this, { x: 1090, y: 60 + i * 200, map: maps[i], snap: snap })
        }

        this.hand = new Hand(this, { x: 100, y: 100});
        this.hand.pick(300, 300);
    }

    createCharacters () {
        this.level.chars.forEach((charId, i) => {
            const charSizeX = 250
            const charSound = this.sound.add(`char-${charId}-happy`)
            const Char = new Character({
                scene: this,
                key: `char-${charId}`,
                x: 100 + (charSizeX * i),
                y: 250
            })
    
            Char.on('pointerup', function() {
                charSound.play()
            }, this)
        })
    }

    update(time, delta) { }
}


export default Level1
