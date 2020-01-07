function createSolution(){
    y = yloc * 50;
    let s = new Solution(x=xloc, y=y);
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

function makeInputs(s){
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

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }