
import Snake from './objects/snake.js';
import Food from './objects/food.js';

const game = {

    Start() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.gridSize = 20;
        this.cellSize = this.canvas.width / this.gridSize;

        this.snake = new Snake(this.gridSize);
        this.food = new Food(this.gridSize, this.snake.blocks);
        document.addEventListener('keydown', e => this.snake.updateDirection(e));
        this.lastUpdate = 0; // Keeps track of last gameLoop update

        requestAnimationFrame(gameLoop);
    },

    Update() {
        this.snake.Update();

        if(this.snake.blocks[this.snake.blocks.length - 1] === this.food.pos) {
            this.snake.eatFood();
            this.food = new Food(this.gridSize, this.snake.blocks);
        }
    },

    Draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.food.Draw(this.ctx, this.cellSize);
        this.snake.Draw(this.ctx, this.cellSize);
    },
}
window.onload = () => game.Start();

function gameLoop(timestamp) {

    if((timestamp - game.lastUpdate) >= 500) {
        game.Update();
        game.lastUpdate = timestamp;
    }
    game.Draw();

    requestAnimationFrame(gameLoop);
}