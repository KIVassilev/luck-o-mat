class Hud extends Phaser.Scene {
    constructor() {
        super('Hud')

        this.score = 0
    }

    init(data) {
        this.score = 0
    }

    preload() { }

    create(data) {
        let score = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' })

        this.game.events.off('addScore');

        this.game.events.on('addScore', function(points) {
            this.score += points
            let stars = []
            let starsTxt = ''
            stars.length = this.score > 0 ? Math.floor(this.score / 150) : 0
            console.log(this.score)
            for (let s = 0; s < stars.length; s++) {
                starsTxt += '🌟 '
            }

            score.setText(starsTxt)
        }, this)
    }

    update(time, delta) { }
}


export default Hud
