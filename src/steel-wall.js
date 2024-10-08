import { STEEL_WALL_SPRITES } from '/src/constants.js';
import Wall from '/src/wall.js';

export default class SteelWall extends Wall {
    constructor(args) {
        super(args);
        
        this.sprites = STEEL_WALL_SPRITES;
    }
}