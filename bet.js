class Bet{
    constructor(x, y, r, value, fontFamily, fontSize, foreColor, betIndex){
        this.pos = createVector(x, y);
        this.cpos = createVector( x + r, y + r);
        this.r = r;
        this.value = value;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.foreColor = foreColor;
        this.betIndex = betIndex;
        this.backColor = BET_COLORS[this.betIndex];
        this.cellNumbers = [];
    }

    draw(){
        // draw circle
        strokeWeight(1);
        stroke(WHITE);
        fill(this.backColor);
        ellipse(this.pos.x + this.r, this.pos.y + this.r, 2*this.r, 2*this.r);
        //rect(this.pos.x, this.pos.y, 2*this.r, 2*this.r, 100);

        // draw value
        fill(this.foreColor);
        noStroke();
        textSize(this.fontSize);
        textStyle(NORMAL);
        textFont(this.fontFamily);
        textAlign(CENTER, CENTER);
        if (this.value < 10){
            text(" " + this.value + " ", this.pos.x, this.pos.y, 2*this.r, 2*this.r);
        }
        else{
            text(this.value, this.pos.x, this.pos.y, 2*this.r, 2*this.r);
        }
        
    }

    setValue(value){
        this.value = value;
    }

    setBetIndex(index){
        this.betIndex = index;
    }

    setBackcolor(col){
        this.backColor = col;
    }

    isClicked(mouseX, mouseY){
        return dist(mouseX, mouseY, this.cpos.x, this.cpos.y) < this.r;
    }

    addCellNumber(cellNumber){
        this.cellNumbers.push(cellNumber);
    }
}
