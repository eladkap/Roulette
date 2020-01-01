class Board{
    constructor(x, y, rows, cols){
        this.pos = createVector(x, y);
        this.rows = rows;
        this.cols = cols;
        this.mat = this.initMatrix();
    }

    initMatrix(){
        let mat = [];
        let value = 1;
        for (let r = 0; r < this.rows; r++){
            let row = [];
            for (let c = 0; c < this.cols; c++){       
                let x = this.pos.x + c * TILE_SIZE1[0];
                let y = this.pos.y + r * TILE_SIZE1[1];
                let w = TILE_SIZE1[0];
                let h = TILE_SIZE1[1];
                let backColor = (value % 2 == 0) ? BLACK : RED;
                let foreColor = WHITE;
                let cell = new Cell(x, y, r, c, w, h, value, FONT_FAMILY, FONT_SIZE, foreColor, backColor);
                row.push(cell);
                value++;
            } 
            mat.push(row);
        }
        return mat;
    }

    draw(){
        for (let r = 0; r < this.rows; r++){
            for (let c = 0; c < this.cols; c++){
               this.mat[r][c].draw();
            } 
        }
    }
}