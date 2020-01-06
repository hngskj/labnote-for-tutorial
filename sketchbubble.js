let bubbles = [];

function setup(){
    createCanvas(windowWidth/2, windowHeight);
    for (let i = 0; i < 20; i++){
        let x = random(width);
        let y = random(height);
        let r = random(10,40);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function mousePressed(){
    for (let i = bubbles.length; i >= 0; i--){
        if (bubbles[i].contains(mouseX, mouseY)){
            bubbles.splice(i, 1);
        }
    }
}

function draw(){
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        if (bubbles[i].contains(mouseX, mouseY)){
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
        // bubbles[i].rollover(mouseX, mouseY);
        bubbles[i].move();
        bubbles[i].show();
    }
}