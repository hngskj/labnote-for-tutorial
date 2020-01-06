class Bubble {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColor(c){
        this.brightness = c;
    }

    contains(px, py){
        let d = dist(px, py, this.x, this.y);
        if (d < this.r){
            return true;
        } else {
            return false;
        }
        // return (d < this.r);
    }

    move(){
        this.x = this.x + random(-3,3);
        this.y = this.y + random(-3,3);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        fill(255,255,255,this.brightness);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}