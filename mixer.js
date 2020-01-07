class Mixer {
    constructor(){
        this.id = new Date().getTime();
        this.s = new Solution(x=xloc, y=y);
    }

    addSol(sol1, sol2){
        y = yloc * 50;
        y = solutions.length * 50;
        // let s = new Solution(x=xloc, y=y);
        this.s.previous.push(sol1, sol2);
        solutions.push(this.s);
        yloc++;
    }

    updateSol(){
        s = solutions[solutions.length-1];
        let temp = " + ".concat(s.previous[1].name);
        s.name = s.previous[0].name.concat(temp);
        s.x = (s.previous[0].x + s.previous[1].x)/2;
        s.y = (s.previous[0].y + s.previous[1].y)/2;
    }

    removeSol(sol1, sol2){
        let idx1 = solutions.indexOf(sol1);
        if (idx1 !== -1) solutions.splice(idx1, 1);
        let idx2 = solutions.indexOf(sol2);
        if (idx2 !== -1) solutions.splice(idx2, 1);
    }

    showWin(){}
}


function addNewSol(sol1, sol2){
    y = yloc * 50;
    y = solutions.length * 50;
    let s = new Solution(x=xloc, y=y);
    s.previous.push(sol1, sol2);
    solutions.push(s);
    yloc++;
}

function updateNewSol(){
    s = solutions[solutions.length-1];
    s.x = (s.previous[0].x + s.previous[1].x)/2;
    s.y = (s.previous[0].y + s.previous[1].y)/2;
    s.mixed = true;
    if (s.previous[0].mixed) {
        s.prev_names.push(s.previous[0].prev_names);
    } else {
        s.prev_names.push(s.previous[0].name);
    }
    if (s.previous[1].mixed) {
        s.prev_names.push(s.previous[1].prev_names);
    } else {
        s.prev_names.push(s.previous[1].name);
    }
    // s.prev_names.flat();
    s.prev_names = flatten(s.prev_names);
}

function removeSols(sol1, sol2){
    let idx1 = solutions.indexOf(sol1);
    if (idx1 !== -1) solutions.splice(idx1, 1);
    let idx2 = solutions.indexOf(sol2);
    if (idx2 !== -1) solutions.splice(idx2, 1);
}

function updateVol(sol){
    let updateButton = createButton('merge');
    updateButton.position(sol.x, sol.y+180);
    // updateButton.mousePressed();

    fill(50, 50);
    rect(sol.x, sol.y+110, 200, 200);
    // s1_t = createP()
    // s1_in = createInput();
}