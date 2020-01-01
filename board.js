class Board{
    constructor(x, y, rows, cols){
        this.pos = createVector(x, y);
        this.rows = rows;
        this.cols = cols;
        this.tiles = this.initTiles();
    }

    initTiles(){
        let tiles = [];
        let value = 1;
        for (let r = 0; r < this.rows; r++){
            for (let c = 0; c < this.cols; c++){       
                let x = this.pos.x + c * TILE_SIZE;
                let y = this.pos.y + r * TILE_SIZE;
                let w = TILE_SIZE;
                let h = TILE_SIZE;
                let backColor = (value % 2 == 0) ? BLACK : RED;
                let foreColor = WHITE;
                let cell = new Cell(x, y, r, c, w, h, value, FONT_FAMILY, FONT_SIZE, foreColor, backColor);
                tiles.push(cell);
                value++;
            }
        }
               
         // 1st 12
        let x = this.pos.x + 3 * TILE_SIZE;
        let y = this.pos.y;
        let w = 3 * TILE_SIZE;
        let h = 4 * TILE_SIZE;
        value = '1st 12';
        let cell_1_12 = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(cell_1_12);

        // 2nd 12
        x = this.pos.x + 3 * TILE_SIZE;
        y = this.pos.y + 4 * TILE_SIZE;
        w = 3 * TILE_SIZE;
        h = 4 * TILE_SIZE;
        value = '2nd 12';
        let cell_2_12 = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(cell_2_12);

        // 3rd 12
        x = this.pos.x + 3 * TILE_SIZE;
        y = this.pos.y + 8 * TILE_SIZE;
        w = 3 * TILE_SIZE;
        h = 4 * TILE_SIZE;
        value = '3rd 12';
        let cell_3_12 = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(cell_3_12);

        // 1 - 18
        x = this.pos.x + 6 * TILE_SIZE;
        y = this.pos.y;
        w = 3 * TILE_SIZE;
        h = 2 * TILE_SIZE;
        value = '1 - 18';
        let cell_1_18 = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(cell_1_18);

        // 19 - 36
        x = this.pos.x + 6 * TILE_SIZE;
        y = this.pos.y + 10 * TILE_SIZE;
        w = 3 * TILE_SIZE;
        h = 2 * TILE_SIZE;
        value = '19 - 36';
        let cell_19_36 = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(cell_19_36);

        // EVEN
        x = this.pos.x + 6 * TILE_SIZE;
        y = this.pos.y + 2 * TILE_SIZE;
        w = 3 * TILE_SIZE;
        h = 2 * TILE_SIZE;
        value = 'EVEN';
        let even_tile = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(even_tile);

        // ODD
        x = this.pos.x + 6 * TILE_SIZE;
        y = this.pos.y + 8 * TILE_SIZE;
        w = 3 * TILE_SIZE;
        h = 2 * TILE_SIZE;
        value = 'ODD';
        let odd_tile = new Cell(x, y, 0, 0, w, h, value, FONT_FAMILY, FONT_SIZE * FONT_FACTOR, WHITE, GREEN);
        tiles.push(odd_tile);
        
        return tiles;
    }

    draw(){
        for (let cell of this.tiles){        
            cell.draw();
        }
    }
}