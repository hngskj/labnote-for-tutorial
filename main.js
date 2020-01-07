let createbutton;
let guide, input, button;
let auto_input, auto_div, auto_comp;
let solutions = [];
var infos = ['Name', 'Product No.', 'Type', 'Solvent', 'Concentration'];
var cur = 0;
var released = false;
var yloc = 0;


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
    y = yloc * 50;
    let s = new Solution(y=y);
    solutions.push(s);
    yloc++;

    cur_s = solutions[solutions.length-1];
    makeInputs(cur_s);
}

function makeAutocomplete(info){
    auto_input = createElement('input');
    auto_input.class(info);
    auto_input.id('myInput');
    auto_input.attribute('type', 'text');

    auto_div = createElement('div');
    auto_div.class('autocomplete');
    auto_div.style('width', '200px');
    auto_div.child(auto_input);

    auto_comp = createElement('form');
    auto_comp.position(30, 100);
    auto_comp.size(150, 30);
    auto_comp.attribute('autocomplete', "off");
    auto_comp.child(auto_div);
}

function makeInputs(s, info){
    guide = createP(infos[cur]);
    guide.position(30, 60);

    makeAutocomplete(infos[cur]);
    autocomplete(document.getElementById("myInput"));

    button = createButton('done');
    button.position(auto_comp.x+auto_comp.width+50, auto_comp.y);
    button.size(60, 40);
    button.mousePressed(function(){submitButton(infos[cur], s, cur++)});
}

function submitButton(info, s){
    let val = auto_input.value();
    if (info == 'Name'){
        s.name = val;
        guide.remove();
        auto_input.remove();
        button.remove();
        makeInputs(s, info);
    } else if (info == 'Product No.'){
        s.prod_num = val;
        guide.remove();
        auto_input.remove();
        button.remove();
        makeInputs(s, info);
    } else if (info == 'Type'){
        s.type = val;
        guide.remove();
        auto_input.remove();
        button.remove();
        makeInputs(s, info);
    } else if (info == 'Solvent'){
        s.solvent = val;
        guide.remove();
        auto_input.remove();
        button.remove();
        makeInputs(s, info);
    } else if (info == 'Concentration'){
        s.concentration = val;
        guide.remove();
        auto_input.remove();
        button.remove();
        cur = 0;
    }
}

function mousePressed(){
    released = false;
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
    fill(0,127,255,50);
    solutions.forEach(function(s,i){
        if (s.locked) {
            s.x = mouseX - s.xoffset;
            s.y = mouseY - s.yoffset;
        } 
    })
}

function mouseReleased(){
    released = true;
    for (let i=0; i<solutions.length; i++){
        solutions[i].locked = false;
    }
}

function mergeSols(sol1, sol2){
    // ADD NEW SOL
    y = yloc * 50;
    y = solutions.length * 50;
    let s = new Solution(y=y);
    s.previous.push(sol1.name, sol2.name);
    temp = " + ".concat(sol2.name);
    s.name = sol1.name.concat(temp);
    solutions.push(s);
    yloc++;


    // REMOVE sol1 AND sol2
    let idx1 = solutions.indexOf(sol1);
    if (idx1 !== -1) solutions.splice(idx1, 1);
    let idx2 = solutions.indexOf(sol2);
    if (idx2 !== -1) solutions.splice(idx2, 1);
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
                if (released) {
                    mergeSols(solutions[ii], solutions[jj]);
                }
            }
        }
    }
}
