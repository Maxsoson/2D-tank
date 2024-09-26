import GameObject from './game-object.js';

export default class Base extends GameObject {
    constructor(args) {
        super(args);

        this.destroyed = false;
    }

    get sprite() {
        return this.sprite[Number(this.destroyed)];
    }
}