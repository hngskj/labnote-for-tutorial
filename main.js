let createbutton;
let guide, input, button;
let auto_input, auto_div, auto_comp;
var solutions = [];
var infos = ['Name', 'Product No.', 'Type', 'Solvent', 'Concentration'];
var cur = 0;
var released = false;
var y;
var yloc = 0;
var xloc;


function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    textAlign(CENTER);
    xloc = width/2;

    let createbutton = createButton('create new');
    createbutton.position(20, 20);
    createbutton.size(150, 40);
    createbutton.mousePressed(createSolution);
}


function draw(){
    background(220);
    solutions.forEach(function(s){
        s.show();
        s.contains();
        s.col = color(255,255,255,127);
        if (s.over){
            s.dispinfo();
        }
    })

    // MERGE function
    for (var ii=0; ii<solutions.length; ii++){
        for (var jj=0; jj<solutions.length; jj++){
            if (ii != jj && solutions[ii].intersect(solutions[jj])){
                // CHECK INTERSECT EACH OTHER
                solutions[ii].col = color(0,255,0,127);
                solutions[jj].col = color(0,255,0,127);
                if (released) {
                    addNewSol(solutions[ii], solutions[jj]);
                    updateNewSol();
                    removeSols(solutions[ii], solutions[jj]);
                }
            }
        }
    }
    // UPDATE VOLUMN
    if (solutions.length > 1){
        let _s = solutions[solutions.length-1];
        if (_s.volumn == null && _s.mixed == true){
            updateVol(_s);
            
        }
    }
    

    // COPY function
    solutions.forEach(function(s){
        if (keyIsPressed === true && keyCode === CONTROL) {
            if (s.over) {
                // let new_s = s;
                s.col = color(255,255,0,127);
                // new_s.x = mouseX;
                // new_s.y = mouseY;
            }
        }
    })

    // Solution pos
    if (y>height) {
        yloc = 0;
        xloc = width/2 + 250;
    }
}
