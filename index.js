
import Snake from './objects/snake.js';

const game = {

    Start() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.gridSize = 20;
        this.cellSize = this.canvas.width / this.gridSize;

        this.snake = new Snake(this.gridSize);
        document.addEventListener('keydown', e => this.snake.updateDirection(e));
        this.lastUpdate = 0; // Keeps track of last gameLoop update

        requestAnimationFrame(gameLoop);
    },

    Update() {
        this.snake.Update();
    },

    Draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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