class Wheel{
    constructor(x, y, radius, slots){
        this.pos = createVector(x, y);
        this.radius = radius;
        this.slots = slots;
        this.angularVelocity = 0;
    }

    draw(){
        push();
        translate(this.pos.x, this.pos.y);
        fill(color(WHITE));
        ellipse(0, 0, this.radius);
        for (let i = 0; i < this.slots.length - 5; i++){
            let slot = this.slots[i];
            
            if (slot % 2 == 0){
                fill(color(BLACK));
            }
            else{
                fill(color(RED));
            }
           // ellipse(0, 0, TILE_SIZE);

            noStroke();
            textSize(FONT_SIZE);
            textStyle(NORMAL);
            textFont(FONT_FAMILY);
    
            textAlign(CENTER, CENTER);
            fill(color(BLACK));
            rotate(2 * PI * 0.25);
            text(this.slots[i], 0, 0, this.radius / 2, this.radius / 2);       
        }    
        pop(); 
    }

    spin(){

    }
}