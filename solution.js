class Solution {
    constructor(x, y){
        this.id = new Date().getTime();
        this.name = 'empty';
        this.prod_num = null;
        this.type = null; // solid, solution,
        this.solvent = null; // water, ethanol,
        this.concentration = null; // 0.5
        this.unit = null; // mM, g/L,
        this.volumn = null; // uL, mL
        this.previous = [];
        this.prev_names = [];

        this.x = x;
        this.y = y+100;
        this.xoffset = 0.0;
        this.yoffset = 0.0;
        this.w = 200;
        this.h = 40;
        this.over = false;
        this.locked = false;
        this.col = color(255,255,255,127);
        this.mixed = false;
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
        let cur_x = this.x + 220;
        let cur_y = this.y + 5;

        fill(255, 80);
        rect(cur_x, this.y, 200, 90);

        fill(0);
        textSize(13);
        if (this.prod_num) text("Product No.: ".concat(this.prod_num), cur_x, cur_y-30);
        if (this.type) text("Type: ".concat(this.type), cur_x, cur_y-10);
        if (this.solvent) text("Solvent: ".concat(this.solvent), cur_x, cur_y+10);
        if (this.concentration) text("Conc.: ".concat(this.concentration), cur_x, cur_y+30);
        if (this.prev_names.length>1) {
            // FOR MIXED SOLUTIONS
            text("Prevs.:", cur_x-60, cur_y-30);
            this.prev_names.forEach(function(p, i){
                text(p, cur_x-10, cur_y+(i*20)-30);
            })
        }
    }

    show(){
        fill(this.col);
        rect(this.x, this.y, this.w, this.h, 20);
        
        fill(0,0,0);
        textSize(16);
        
        if (this.prev_names.length>1){
            this.name = this.prev_names.join(" + ");
        } 
        text(this.name, this.x, this.y+5);
    }
}