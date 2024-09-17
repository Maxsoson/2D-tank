// Зберігання інформації\
import Tank from './tank.js';

export default class World {
  grid = [];
  player1Tank = new Tank();
  player2Tank = null;
  enemyTanks = [];

  update(activeKeys) {
    this.player1Tank.update(activeKeys);
  }
}