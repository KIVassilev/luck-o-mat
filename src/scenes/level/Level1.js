import loader from '../../utils/loader'
import Button from '../../entities/Button'
import backgroundImg from '../../assets/background.png'
import { char0Sprite } from '../../assets/sprite'
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
import imgBigButton from '../../assets/bigbutton.png'

class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1')
        this.isLevel = true
        this.level = getLevel()
    }

    init(data) {

      }

    preload() {
        loader(this)

        this.load.image('background', backgroundImg)
        this.load.image('items', imgItems)
        this.load.spritesheet('hand', imgHand, { frameWidth: 166, frameHeight: 100 });
        this.load.image('rope', imgRope);
        this.load.spritesheet('bigbutton', imgBigButton, { frameWidth: 1120/4, frameHeight: 95 });
        this.load.image('items', imgItems)
        this.load.spritesheet('char-0', char0Sprite, { frameWidth: 215, frameHeight: 390 })
        this.load.audio('char-0-happy', clickSound)
    }

    create(data) {
        console.log(this.level)
        
        this.scene.launch('Hud')
        this.scene.bringToTop('Hud')

        this.add.sprite(0, 0, 'background').setOrigin(0, 0)

        // Spawn characters
        this.createCharacters()

        this.createBoardAndCards(data)
    }

    createBoardAndCards() {
        this.basket = 0;
        this.baskets = [ { x: 100, y: 600 }, { x: 300, y: 600}, { x:500, y: 600}];
        this.board = new Board(this, { x: 630, y: 230 })
        this.cards = []
        var itemW = CONFIG.item.width + this.board.padding;
        var itemH = CONFIG.item.height + this.board.padding;
        var snap = {
            rect: new Phaser.Geom.Rectangle(630, 230, (CONFIG.boardSize.x - 1) * itemW, (CONFIG.boardSize.y - 1) * itemH),
            itemWidth: itemW,
            itemHeight: itemH
        }

        for (var i = 0; i < 3; i++) {
            this.cards[i] = new Card(this, { 
                x: 1090, 
                y: 60 + i * 200, 
                map: this.level.cards[i], 
                snap: snap 
            })
        }

        this.hand = new Hand(this, { x: this.board.x, y: 100});
        this.events.on('cardOver', (pt) => {
          this.hand.positionOver(this.board.x + pt.x*itemW);
        }, this);
        this.events.on('sct', this.sct.bind(this));
        this.events.on('pickBoardPos', (x, y, item) => {
          var i = this.board.items[y][x];
          this.baskets[this.basket].item = i;
          this.board.items[y][x] = null;
          if (i) {
            this.hand.pickBoardPos(i.x, i.y, i, this.baskets[this.basket]);
          } else {
            this.hand.pickBoardPos(this.board.x+x*itemW, this.board.y + y*itemH, null, this.baskets[this.basket]);
          }
          this.basket++;
          if (this.basket == this.baskets.length) {
            for (i = 0; i < this.baskets.length; i++) {
                let item = this.baskets[i].item
                item.anchorX = item.x
                item.anchorY = item.y
                this.input.setDraggable(item);
            }
            this.hint.setText('GIVE THE ITEMS TO THE CHARS');
          } else {
            this.hint.setText('COLLECT THREE ITEMS');
          }
        }, this);

        this.hint = this.add.text(80, 645, 'DRAG THE CARDS ON THE RIGHT', { font: '22px Arial', color: '#fff', stroke: '#000', strokeThickness: 4});

        const newButton = new Button({
            scene: this,
            key: 'bigbutton',
            x: 1180,
            y: 680
        })

        newButton.scale = 0.6;

        newButton.on('pointerup', this.onNewGame.bind(this));
    }

    onNewGame() {
        this.scene.shutdown();
        this.scene.restart();
    }

    sct(x, y, text) {
        var text = this.add.text(x, y, text, { font: '64px Comic Sans MS', color: '#fff', stroke: '#000', strokeThickness: 4});
        this.tweens.add({
            targets: text,
            y: 0,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => { text.destroy()}
        });

    }

    createCharacters () {
        this.chars = []
        this.level.chars.forEach((charId, i) => {
            const charSizeX = 215
            const charSound = this.sound.add(`char-${charId}-happy`)
            const Char = new Character({
                scene: this,
                key: `char-${charId}`,
                x: 15 + (charSizeX * i),
                y: 50,
                id: charId
            })
            Char.on('pointerup', function() {
                charSound.play()
            }, this)

            this.chars.push(Char)
        })
    }

    update(time, delta) { }
}


export default Level1
