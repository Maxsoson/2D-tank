import { BULLET_WIDTH, BULLET_HEIGHT, BULLET_SPRITES } from './constants.js';
import GameObject from './game-object.js';
import { getAxisForDirection, getValueForDirection } from './utils.js';

export default class Bullet extends GameObject {
    constructor({ tank, direction, speed, ...args }) {
        super(args);

        this.width = BULLET_WIDTH;
        this.height = BULLET_HEIGHT;
        this.sprites = BULLET_SPRITES;
        this.tank = tank;
        this.direction = direction;
        this.speed = speed;
    }

    get sprite() {
        return this.sprites[this.direction];
    }

    update({ world }) {
        const axis = getAxisForDirection(this.direction);
        const value = getValueForDirection(this.direction);

        this._move(axis, value);

        const isOutOfBounds = world.isOutOfBounds(this);
        const collision = world.getCollision(this);

        if (isOutOfBounds) {
            this._destroy(world);
        } else if (collision) {
            this._collide(collision.objects);
            //this._destroy(world);
            }
        }

    _destroy(world) {
        this.speed = 0;
        this.tank.bullet = null;
        world.objects.delete(this);
    }

    _move(axis, value) {
        this[axis] += value * this.speed;
    }

    _collide(objects) {
        console.log(objects)
        for (const object of objects) {
            if (object === this.tank) continue;
        }
    }
}