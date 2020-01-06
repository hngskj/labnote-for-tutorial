// import { autocomplete } from 'autocomplete';

let input, button, greeting;

function setup() {
    // create canvas
    createCanvas(500, 400);

    input = createInput();
    input.position(20, 65);
    input.size(300);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);

    greeting = createElement('h2', 'what is your name?');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);
}

function greet() {
    const name = input.value();
    greeting.html('hello ' + name + '!');
    input.value('');

    for (let i = 0; i < 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        text(name, 0, 0);
        pop();
    }
}