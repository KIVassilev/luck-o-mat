class Hud extends Phaser.Scene {
    constructor() {
        super('Hud')

        this.score = 0
    }

    init(data) { }

    preload() { }

    create(data) {
        let score = this.add.text(10, 10, 'Score: 0', { font: '48px Arial', fill: '#000000' })

        this.game.events.on('addScore', function(points) {
            this.score += points

            score.setText('Score: ' + this.score)
        }, this)
    }

    update(time, delta) { }
}


export default Hud