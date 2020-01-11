// https://codepen.io/barney-parker/pen/zdVbvq

class Wheel{
    constructor(x, y, r, maxArcSpeed){
        this.pos = createVector(x, y);
        this.cpos = createVector(x + r, y + r);
        this.r = r;
        this.maxArcSpeed = maxArcSpeed;
        this.arcSpeed = 0;
        this.slots = WHEEL_SLOTS;
        this.startAngle = 0;
    }

    draw(){
        var textRadius = this.r * 0.75;
        fill(BLACK);
        ellipse(this.cpos.x, this.cpos.y, this.r, this.r);
        strokeWeight(1);
        stroke(WHITE);
        ellipse(this.cpos.x, this.cpos.y, this.r * 0.9);
        ellipse(this.cpos.x, this.cpos.y, this.r * 0.7);
        //ellipse(this.cpos.x, this.cpos.y, this.r * 0.4);
        //fill(BROWN);
        //ellipse(this.cpos.x, this.cpos.y, this.r * 0.2);

        // draw slots
        var arc = 2 * Math.PI / this.slots.length;
        for (let i = 0; i < this.slots.length; i++){
            let slot = this.slots[i];
            var angle = this.startAngle + i * arc;

            var value = slot;
            var backColor = BLACK;
            if (value == 0){
                backColor = GREEN; 
            }
            if ((value >=1 && value <= 10) || (value >= 19 && value <= 28)){
                backColor = (value % 2 == 0) ? BLACK : RED;
            }
            else{
                backColor = (value % 2 == 1) ? BLACK : RED;
            }

            //this.ctx.beginPath();
            //arc(250, 250, outsideRadius, angle, angle + arc, false);
            //arc(250, 250, insideRadius, angle + arc, angle, true);
            //stroke();
            //fill(backColor);
            
            fill(WHITE);
            //this.ctx.fillStyle = WHITE; 
            
            push();
            translate(this.cpos.x, this.cpos.y);
            scale(0.5);

            //rotate(angle + arc / 2 + Math.PI / 2);
            rotate(angle + Math.PI);
            noStroke();
            textSize(FONT_SIZE1 * 2);
            textStyle(NORMAL);
            textFont(FONT_FAMILY);
            text(value, textRadius * Math.cos(arc + PI/2), textRadius * Math.sin(arc + PI/2), TILE_SIZE * 2, TILE_SIZE);
            pop();
        }

        if (this.arcSpeed > 0){
            this.arcSpeed -= ARC_SPEED_SLOW_DOWN_RATE;
        }
        else{
            this.arcSpeed = 0;
        }
        
        this.startAngle += this.arcSpeed;
    }

    spin(){
        this.setArcSpeed(this.maxArcSpeed);
    }

    stop(){
        this.setArcSpeed(0);
    }

    setArcSpeed(value){
        this.arcSpeed = value;
    }
}