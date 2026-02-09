function setup() {
  createCanvas(600, 400);
  textFont("Arial");
}

function draw() {
  background(25);
  buttons = [];

  drawStoryText(scenes[currentScene].text);
  drawChoices(scenes[currentScene].choices);
}

function mousePressed() {
  for (let b of buttons) {
    if (
      mouseX > b.x &&
      mouseX < b.x + b.w &&
      mouseY > b.y &&
      mouseY < b.y + b.h
    ) {
      b.action();
      break;
    }
  }
}
