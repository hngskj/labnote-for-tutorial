class Solution {
    constructor(y){
        this.name = 'empty';
        this.prod_num = null;
        this.type = null; // solid, solution,
        this.solvent = null; // water, ethanol,
        this.concentration = null; // 0.5
        this.unit = null; // mM, g/L,

        this.x = width/2;
        this.y = y+100;
        this.xoffset = 0.0;
        this.yoffset = 0.0;
        this.w = 200;
        this.h = 40;
        this.over = false;
        this.locked = false;
        this.col = color(255,255,255,127);
    }

    intersect(other){
        if (
            this.x + this.w/2 > other.x - other.w/2 &&
            this.x - this.w/2 < other.x + other.w/2 &&
            this.y + this.h/2 > other.y - other.h/2 &&
            this.y - this.h/2 < other.y + other.h/2
        ){
            return true;
        } else {
            return false;
        }
    }

    contains(){
        if (
            mouseX > this.x - this.w/2 &&
            mouseX < this.x + this.w/2 &&
            mouseY > this.y - this.h/2 &&
            mouseY < this.y + this.h/2
        ){
            this.over = true;
        } else {
            this.over = false;
        }
    }

    dispinfo(){
        let cur_x = this.x + 170;
        let cur_y = this.y + 5;
        fill(255, 127);
        rect(cur_x, this.y, 100, 90);
        fill(0);
        textSize(13);
        text(this.prod_num, cur_x, cur_y-30);
        text(this.type, cur_x, cur_y-10);
        text(this.solvent, cur_x, cur_y+10);
        text(this.concentration, cur_x, cur_y+30);
    }

    show(){
        fill(this.col);
        rect(this.x, this.y, this.w, this.h, 20);
        
        fill(0,0,0);
        textSize(16);
        text(this.name, this.x, this.y+5);
    }
}