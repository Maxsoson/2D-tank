// Показ даних на ікрані
export default class View {
  constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.sprite = sprite;
  }

  async init() {
    await this.sprite.load();
  }

  update(world) {
    this.clearScrreen();
    this.renderPlayer1Tank(world.player1Tank);
  }

  renderPlayer1Tank(player1Tank) {
    this.context.drawImage(
      this.sprite.image,
      ...player1Tank.sprite,
      player1Tank.x, player1Tank.y, 16, 16
    );
  }

  clearScrreen() {
    this.context.clearRect(0, 0, this.canvas.world, this.
    canvas.height);
  }
}
