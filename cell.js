class Cell{
    constructor(x, y, row, col, w, h, value, index, fontFamily, fontSize, foreColor, backColor){
        this.pos = createVector(x, y);
        this.cpos = createVector(x + w/2, y + h/2);
        this.row = row;
        this.col = col;
        this.w = w;
        this.h = h;
        this.value = value;
        this.index = index;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.foreColor = foreColor;
        this.backColor = backColor;
        this.focus = false;
        this.chosen = false;
        this.totalBet = 0;
    }

    draw(){
        if (this.value == 'quad red' || this.value == 'quad black'){
            strokeWeight(2);
            stroke(WHITE);
            fill(GREEN);
            rect(this.pos.x, this.pos.y, this.w, this.h);
            fill(this.backColor);
            let s = TILE_SIZE * 3;
            let t = TILE_SIZE * 2;
            let x = this.pos.x;
            let y = this.pos.y;
            quad(x + s / 2, y + t/8, x + s*7/8, y + t/2, x + s / 2, y + t*7/8, x + s*1/8, y + t/2);
            return;
        }

        // draw rectangle
        strokeWeight(1);
        stroke(WHITE);
        fill(this.backColor);
        rect(this.pos.x, this.pos.y, this.w, this.h);

        // draw value 
        fill(this.foreColor);
        noStroke();
        textSize(this.fontSize);
        textStyle(NORMAL);
        textFont(this.fontFamily);
        textAlign(CENTER, CENTER);
        text(this.value, this.pos.x, this.pos.y, this.w, this.h);
    }

    isFocusedIn(mouseX, mouseY){
        let xAxis =  mouseX > this.pos.x && mouseX < this.pos.x + this.w;
        let yAxis =  mouseY > this.pos.y && mouseY < this.pos.y + this.h;
        return xAxis && yAxis;
    }

    isFocusedNear(mouseX, mouseY){
        return dist(this.cpos.x, this.cpos.y, mouseX, mouseY) < this.w/2*sqrt(2)+5;
    }

    setFocus(value){
        this.focus = value;
        if (value){
            switch (this.backColor) {
                case BLACK:
                    this.backColor = BLACKLIGHT;
                    break;
                case RED:
                    this.backColor = REDLIGHT;
                    break;    
                case GREEN:
                    this.backColor = GREENLIGHT;
                    break;
                default:
                    break;
            }
        }
        else{
            switch (this.backColor) {
                case BLACKLIGHT:
                    this.backColor = BLACK;
                    break;
                case REDLIGHT:
                    this.backColor = RED;
                    break;    
                case GREENLIGHT:
                    this.backColor = GREEN;
                    break;
                default:
                    break;
            }
        }
    }
 
    hasBet(){
        return this.totalBet > 0;
    }

    addBet(betValue){
        this.totalBet += betValue;
    }

    isChosen(){
        return this.chosen;
    }

    setChosen(value){
        this.chosen = value;
    }

    isClicked(mouseX, mouseY){
        let axisX = mouseX > this.pos.x && mouseX < this.pos.x + this.w;
        let axisY = mouseY > this.pos.y && mouseY < this.pos.y + this.h;
        return axisX && axisY;
    }
}
