class Bet{
    constructor(x, y, r, value, fontFamily, fontSize, foreColor, betIndex){
        this.pos = createVector(x, y);
        this.r = r;
        this.value = value;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.foreColor = foreColor;
        this.betIndex = betIndex;
    }

    draw(){
        // draw circle
        strokeWeight(1);
        stroke(WHITE);
        fill(BET_COLORS[this.betIndex]);
        //ellipse(this.pos.x + this.r / 2, this.pos.y + this.r / 2, this.r, this.r);
        rect(this.pos.x, this.pos.y, 2*this.r, 2*this.r, 100);

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
}
