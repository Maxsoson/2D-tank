export default class Game{
  constructor({ world, view, stages }) {
    this.world = world;
    this.view = view;
    this.stages = stages;
    this.stage = 0;
    this.activeKeys = new Set();

    this.loop = this.loop.bind(this);
  }

  async init() {
    this.view.init();
    this.world.setStage(this.stages[this.stage]);

    document.addEventListener('keydown', event => {
      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'Space':
        case 'Enter':
          event.preventDefault();
          this.activeKeys.add(event.code);  
      }
      
      this.key = event.code;
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
          case 'ArrowUp':
          case 'ArrowRight':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'Space':
          case 'Enter':
            event.preventDefault();
            this.activeKeys.delete(event.code);
      } 

      this.key = '';
    });
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop() {
    this.world.update(this.activeKeys);
    this.view.update(this.world);

    requestAnimationFrame(this.loop);
  }
}