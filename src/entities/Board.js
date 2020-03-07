class Board extends Phaser.GameObjects.Container {
  constructor(scene, options) {
    super(scene);
    const itemWidth = 80;
    const itemHeight = 80;
    const pad = 10;
    const boardSize = 5;
    this.x = options.x;
    this.y = options.y;
    this.items = [];

    for (var y = 0; y < boardSize; y++) {
      this.items[y] = [];
      for (var x = 0; x < boardSize; x++) {
        var sprite = scene.add.sprite(x*(itemWidth+pad), y*(itemHeight+pad), 'items');
        this.items[y][x] = sprite;
        this.add(sprite);
      }
    }

    scene.add.existing(this);
  }
}

export default Board
