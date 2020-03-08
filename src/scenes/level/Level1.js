import loader from '../../utils/loader'
import machineImg from '../../assets/machine.png'
import { SPRITE } from '../../assets/sprite'
import Button from '../../entities/Button'
import { clickSound } from '../../assets/audio'
import Character from '../../entities/Character'
import { getLevel } from '../../utils/helpers'
import { CONFIG } from '../../utils/config'
import Card from '../../entities/Card'
import Hand from '../../entities/Hand'
import Board from '../../entities/Board'
import imgHand from '../../assets/hand.png'
import imgRope from '../../assets/rope.png'

class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1')
        this.isLevel = true
        this.level = getLevel()
    }

    init(data) {
        this.scene.launch('Hud')
        this.scene.bringToTop('Hud')
    }

    preload() {
        loader(this)

        this.load.image('machine', machineImg)
        this.load.spritesheet('hand', imgHand, { frameWidth: 166, frameHeight: 100 });
        this.load.image('rope', imgRope);
        this.load.spritesheet('bigbutton', SPRITE.bigButton, { frameWidth: 1120/4, frameHeight: 95 });
        this.load.spritesheet('items', SPRITE.items, { frameWidth: 120, frameHeight: 120 });
        // Characters 
        for (let i = 0; i < 6; i++) {
            this.load.spritesheet(`char-${i}`, SPRITE.chars[i], { frameWidth: 215, frameHeight: 390 })
        }
        
        this.load.audio('char-0-happy', clickSound)
    }

    create(data) {
        this.events.on('sct', this.sct.bind(this));
        console.log(this.level)

        this.add.sprite(0, 0, 'background').setOrigin(0, 0)
        this.add.sprite(0, 0, 'machine').setOrigin(0, 0)

        // Spawn characters
        this.createCharacters()

        this.createBoardAndCards(data)
    }

    createBoardAndCards() {
        this.basket = 0;
        this.baskets = [{ x: 100, y: 595 }, { x: 280, y: 600 }, { x: 480, y: 600 }];
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
        this.events.on('pickBoardPos', (x, y) => {
          var i = this.board.items[y][x];
          this.baskets[this.basket].item = i;
          this.board.items[y][x] = null;
          if (i) {
            this.hand.pickBoardPos(i.x, i.y, i, this.baskets[this.basket], x, y);
          } else {
            this.hand.pickBoardPos(this.board.x+x*itemW, this.board.y + y*itemH, null, this.baskets[this.basket], x, y);
          }
          this.basket++;
          if (this.basket == this.baskets.length) {
            for (i = 0; i < this.baskets.length; i++) {
                let item = this.baskets[i].item
                item.anchorX = item.x
                item.anchorY = item.y
                this.input.setDraggable(item);
            }
            this.hint.setText('GIVE THE ITEMS TO YOUR BUDDIES');
          } else {
            this.hint.setText('COLLECT 3 ITEMS');
          }
        }, this);

        this.hint = this.add.text(70, 653, 'DRAG THE CARDS ON THE RIGHT', { font: '22px Arial', color: '#fff', stroke: '#000', strokeThickness: 4});

        const newButton = new Button({
            scene: this,
            key: 'bigbutton',
            text: 'NEXT',
            x: 1180,
            y: 680
        })

        newButton.scale = 0.6;

        newButton.on('pointerup', this.onNewGame.bind(this));
    }

    onNewGame() {
        this.level = getLevel(this.level.id+1)
        this.scene.handMoving = false;
        this.level.generate();
        this.events.off('pickBoardPos');
        this.events.off('sct');
        this.events.off('cardOver');
        this.scene.stop('Hud')
        this.scene.shutdown();
        this.scene.restart();
    }

    sct(x, y, text) {
        var text = this.add.text(x, y, text, { font: '48px Comic Sans MS', color: '#fff', stroke: '#000', strokeThickness: 4});
        text.setOrigin(0.5);
        this.tweens.add({
            targets: text,
            y: 0,
            duration: 3000,
            ease: 'Linear',
            onComplete: () => { text.destroy()}
        });

    }

    createCharacters () {
        this.chars = []
        this.level.chars.forEach((charId, i) => {
            const charSizeX = 180
            // const charSound = this.sound.add(`char-${charId}-happy`)
            let offsetX = 280 - (56.66 * this.level.chars.length)
            offsetX = this.level.chars.length === 1 ? 170 : offsetX
            let blob = i === 1 && this.level.chars.length === 2 ? 80 : 0
            let scale = 1.36 - (this.level.chars.length * 0.12)
            const Char = new Character({
                scene: this,
                key: `char-${charId}`,
                x: (charSizeX * i) + offsetX + blob,
                y: 230,
                id: charId,
            })
            Char.scale = 0;
            this.tweens.add({
              targets: Char,
              scale: scale,
              ease: 'Bounce',
              delay: i*1500,
              duration: 1500,// + Math.random()*3000,
              onComplete: (tween) => { let t = tween.targets[0]; this.sct(t.x, t.y, t.profile.talk.hi); }
            });
            // Char.on('pointerup', function() {
            //     charSound.play()
            // }, this)

            this.chars.push(Char)
        })
    }

    update(time, delta) { }
}


export default Level1
