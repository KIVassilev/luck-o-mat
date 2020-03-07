class Card extends Phaser.GameObjects.Graphics {
  constructor(scene, options) {
    super(scene, options);
    const itemWidth = 80;
    const itemHeight = 80;
    const pad = 10;
    const w = pad*3 + itemWidth*2;
    const h = pad*3 + itemHeight*2;


    this.fillStyle(0xff0000, 1);
    for (var x = 0; x < 3; x++) {
      this.fillRect(0, x*(pad+itemHeight), w, pad);
      this.fillRect(x*(pad+itemWidth), 0, pad, h);
    }
    this.width = w;
    this.height = h;
    this.anchorX = options.x;
    this.anchorY = options.y;
    scene.add.existing(this);
    this.setInteractive();
    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = 80*((dragX/80)|0);
        gameObject.y = 80*((dragY/80)|0);
    });
    scene.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = gameObject.anchorX;
        gameObject.y = gameObject.anchorY;
    });
    scene.input.setDraggable(this);
  }
}

export default Card
