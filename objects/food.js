
export default class Food {
    constructor(gridSize, takenSpots) {
        this.gridSize = gridSize;
        this.max = this.gridSize * this.gridSize;
        this.pos = this.pickPos(takenSpots);
    }
    pickPos(takenSpots) {
        let pos;
        do { 
            pos = Math.floor(Math.random() * this.max);
        } while(checkIfReserved(pos, takenSpots) !== false);
        return pos;

        function checkIfReserved(pos, takenSpots) {
            takenSpots.forEach(spot => {
                if(pos === spot) { return true }
            });
            return false;
        }
    }

    Draw(ctx, size) {
        let y = Math.floor(this.pos / this.gridSize);
        let x = this.pos % this.gridSize;

        ctx.fillStyle = "#0f0";
        ctx.fillRect(x * size, y * size, size, size)
    }
}