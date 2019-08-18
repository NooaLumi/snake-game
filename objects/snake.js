
export default class Snake {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.move = 1;
        this.ate = false;

        this.blocks = [Math.floor(gridSize / 2) * gridSize + Math.floor(gridSize / 2)];
    }

    updateDirection(e) {
        switch(e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                if(this.move !== 1) {
                    this.move = -1;
                }
                break;
            case 'KeyD':
            case 'ArrowRight':
                if(this.move !== -1) {
                    this.move = 1;
                }
                break;
            case 'KeyW':
            case 'ArrowUp':
                if(this.move !== this.gridSize) {
                    this.move = -this.gridSize;
                }
                break;
            case 'KeyS':
            case 'ArrowDown':
                if(this.move !== -this.gridSize) {
                    this.move = this.gridSize;
                }
        }
    }

    Update() {
        let oldPos = this.blocks[this.blocks.length - 1];
        let newPos = oldPos + this.move;
        if(this.collisionWithSelf(newPos)) {
            this.move = 0;
            this.updateDirection = () => {}
            return 0;
        } else if(this.collisionWithWalls(newPos, oldPos)) {
            return 0;
        }
        this.blocks.push(newPos);

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

    collisionWithSelf(pos) {
        let collision = false;
        this.blocks.forEach(block => {
            if(pos === block) {
                collision = true;
            }
        });
        return collision;
    }

    collisionWithWalls(pos, prevPos) {
        if((pos % this.gridSize) === 0 && (prevPos % this.gridSize) === this.gridSize - 1 // Right to left
        || (pos % this.gridSize) === this.gridSize - 1 && (prevPos % this.gridSize) === 0 // Left to right
        || pos >= this.gridSize * this.gridSize // Bottom
        || pos < 0 ) {  // Top
            return true;
        }
        return false;
    }
}