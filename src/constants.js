export const NUMBER_OF_UNITS = 13;
export const TILE_SIZE = 16;
export const UNIT_SIZE = 32;
export const STAGE_SIZE = NUMBER_OF_UNITS * UNIT_SIZE;

export const Keys = {
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    SPACE: 'Space'
};

export const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

export const ObjectType = {
    BASE: 0,
    BRICK_WALL: 1,
    STEEL_WALL: 2,
    TREE: 3,
    WATER: 4,
    ICE: 5
};

export const BASE_POSITION = [6 * UNIT_SIZE, 12 * UNIT_SIZE];
export const BASE_WIDTH = UNIT_SIZE;
export const BASE_HEIGHT = UNIT_SIZE;
export const BASE_SPRITES = [
    [19 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [20 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const TANK_WIDTH = UNIT_SIZE;
export const TANK_HEIGHT = UNIT_SIZE;
export const TANK_SPEED = 2;
export const TANK_TURN_THRESHOLD = 8;

export const BULLET_WIDTH = 8;
export const BULLET_HEIGHT = 8;
export const BULLET_SPEED = 4;
export const BULLET_SPRITES = [
    [20 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [21.5 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [21 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT],
    [20.5 * UNIT_SIZE + 4, 6 * UNIT_SIZE + 12, BULLET_WIDTH, BULLET_HEIGHT]
];

export const PLAYER1_TANK_POSITION = [4 * UNIT_SIZE, 12 * UNIT_SIZE];
export const PLAYER1_TANK_SPRITES = [
    [0 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [1 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [6 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [7 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [4 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [5 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [2 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [3 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const ENEMY_TANK_START_POSITIONS = [
    [0 * UNIT_SIZE, 0],
    [6 * UNIT_SIZE, 0],
    [12 * UNIT_SIZE, 0],
];
export const ENEMY_TANK_SPRITES = [
    [],
    []
];

export const BRICK_WALL_SPRITES = [
    [16 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // full
    [16.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right
    [17 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom
    [17.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // left
    [18 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top
];

export const STEEL_WALL_SPRITES = [
    [16 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // full
    [17 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right
    [18 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom
    [19 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // left
    [20 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top
]