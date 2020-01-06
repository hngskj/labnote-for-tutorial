let createbutton;
let guide, input, button;
let solutions = [];
var infos = ['Name', 'Product No.', 'Type', 'Solvent', 'Concentration'];
var cur = 0;


function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    textAlign(CENTER);

    let createbutton = createButton('create new');
    createbutton.position(20, 20);
    createbutton.size(150, 40);
    createbutton.mousePressed(createSolution);
}

function createSolution(){
    y = solutions.length * 50;
    let s = new Solution(y=y);
    solutions.push(s);

    cur_s = solutions[solutions.length-1];
    makeInputs(cur_s);
}

function makeInputs(s){
    guide = createP(infos[cur]);
    guide.position(30, 60);
    input = createInput('');
    input.position(30, 100);
    input.size(150, 30);
    button = createButton('done');
    button.position(input.x+input.width, input.y);
    button.size(60, 30);
    button.mousePressed(function(){submitButton(infos[cur], s, cur++)});
}

function submitButton(info, s){
    let val = input.value();
    if (info == 'Name'){
        s.name = val;
        guide.remove();
        input.remove();
        button.remove();
        makeInputs(s);
    } else if (info == 'Product No.'){
        s.prod_num = val;
        guide.remove();
        input.remove();
        button.remove();
        makeInputs(s);
    } else if (info == 'Type'){
        s.type = val;
        guide.remove();
        input.remove();
        button.remove();
        makeInputs(s);
    } else if (info == 'Solvent'){
        s.solvent = val;
        guide.remove();
        input.remove();
        button.remove();
        makeInputs(s);
    } else if (info == 'Concentration'){
        s.concentration = val;
        guide.remove();
        input.remove();
        button.remove();
        cur = 0;
    }
}

function mousePressed(){
    solutions.forEach(function(s){
        if (s.over){
            s.locked = true;
        } else {
            s.locked = false;
        }
        s.xoffset = mouseX - s.x;
        s.yoffset = mouseY - s.y;
    })
}

function mouseDragged(){
    solutions.forEach(function(s,i){
        if (s.locked) {
            s.x = mouseX - s.xoffset;
            s.y = mouseY - s.yoffset;
        } 
    })
}

function mouseReleased(){
    for (let i=0; i<solutions.length; i++){
        solutions[i].locked = false;
    }
}

function draw(){
    background(220);
    solutions.forEach(function(s){
        s.show();
        s.contains();
        s.col = color(255,255,255,127);
        if (s.over && s.prod_num && s.type && s.solvent && s.concentration){
            s.dispinfo();
        }
    })
    for (var ii=0; ii<solutions.length; ii++){
        for (var jj=0; jj<solutions.length; jj++){
            if (ii != jj && solutions[ii].intersect(solutions[jj])){
                solutions[ii].col = color(0,255,0,127);
                solutions[jj].col = color(0,255,0,127);
                
                // merge

            }
        }
    }
}
