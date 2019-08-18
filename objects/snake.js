
export default class Snake {
    constructor(gridSize) {
        this.length = 1;
        this.gridSize = gridSize;
        this.dir = 'right';

        this.blocks = [Math.floor(gridSize / 2) * gridSize + Math.floor(gridSize / 2)];
    }

    updateDirection(e) {

        switch(e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                this.dir = 'left';
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.dir = 'right';
                break;
            case 'KeyW':
            case 'ArrowUp':
                this.dir = 'up';
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.dir = 'down';
        }
    }

    Update() {
        this.blocks[0] += 1;
    }

    Draw(ctx, size) {
        this.blocks.forEach(block => {
            console.log(block);
            let y = Math.floor(block / this.gridSize);
            let x = block % this.gridSize;

            ctx.fillStyle = "#f00";
            ctx.fillRect(x * size, y * size, size, size);
        });
    }
}