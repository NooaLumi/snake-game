
export default class Snake {
    constructor(gridSize) {
        this.length = 1;
        this.gridSize = gridSize;
        this.move = 1;
        this.ate = false;

        this.blocks = [Math.floor(gridSize / 2) * gridSize + Math.floor(gridSize / 2)];
    }

    updateDirection(e) {

        switch(e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                this.move = -1;
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.move = 1;
                break;
            case 'KeyW':
            case 'ArrowUp':
                this.move = -this.gridSize;
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.move = this.gridSize;
        }
    }

    Update() {
        this.blocks.push(this.blocks[this.blocks.length - 1] + this.move);
        if(!this.ate) {
            this.blocks.shift();
        } else {
            this.ate = false;
        }
    }

    Draw(ctx, size) {
        this.blocks.forEach(block => {
            let y = Math.floor(block / this.gridSize);
            let x = block % this.gridSize;

            ctx.fillStyle = "#f00";
            ctx.fillRect(x * size, y * size, size, size);
        });
    }

    eatFood() {
        this.ate = true;
    }
}