class Cell{
    constructor(x, y, row, col, w, h, value, fontFamily, fontSize, foreColor, backColor){
        this.pos = createVector(x, y);
        this.row = row;
        this.col = col;
        this.w = w;
        this.h = h;
        this.value = value;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.foreColor = foreColor;
        this.backColor = backColor;
    }

    draw(){
        // draw rectangle
        strokeWeight(2);
        stroke(color(WHITE));
        fill(color(this.backColor));
        rect(this.pos.x, this.pos.y, this.w, this.h);

        // draw value 
        fill(this.foreColor);
        noStroke();
        //stroke(this.foreColor);
        textSize(this.fontSize);
        textStyle(NORMAL);
        textFont(this.fontFamily);
        if (this.value > 9){
            text(this.value, this.pos.x + this.w / 4, this.pos.y + this.h / 3, this.w, this.h);
        }
        else{
            text(this.value, this.pos.x + this.w / 3, this.pos.y + this.h / 3, this.w, this.h);
        }
        
    }
}