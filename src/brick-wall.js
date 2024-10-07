import { Direction, BRICK_WALL_SPRITES } from './constants.js';
import Wall from './wall.js';

export default class BrickWall extends Wall {
    constructor(args) {
        super(args);

        this.sprites = BRICK_WALL_SPRITES;
        this.isHitting = false;
    }

    hit(bullet) {
        //if (this.isHitting) return;
        

        //this.isHitting = true;

        switch (bullet.direction) {
            case Direction.UP: 
                this.damage = 4;
                break;
            case Direction.RIGHT:
                this.damage = 1;
                break;
            case Direction.DOWN:
                this.damage = 2;
                break;
            case Direction.LEFT:
                this.damage = 3;
                break;
        }
    }
}