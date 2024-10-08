import { TILE_SIZE } from '/src/constants.js';

import GameObject from '/src/game-object.js';

export default class Wall extends GameObject {
    constructor({ type, ...rest }) {
        super(rest);

        this.width = TILE_SIZE;
        this.height = TILE_SIZE;
        this.damage = 0;
    }

    get sprite() {
        return this.sprites[this.damage];
    }
}