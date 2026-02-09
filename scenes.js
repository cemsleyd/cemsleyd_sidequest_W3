// scenes.js

/* ---------- STORY TEXT ---------- */
function drawStoryText(content) {
  fill(240);
  textSize(15);
  textAlign(LEFT, TOP);

  const margin = 30;
  const textWidth = width - margin * 2;

  text(content, margin, margin, textWidth);
}

/* ---------- BUTTONS ---------- */
function drawChoices(choices) {
  const buttonWidth = 200;
  const buttonHeight = 40;
  const spacing = 12;

  let startY = height - choices.length * (buttonHeight + spacing) - 20;

  for (let i = 0; i < choices.length; i++) {
    let x = width / 2 - buttonWidth / 2;
    let y = startY + i * (buttonHeight + spacing);

    drawButton(choices[i].label, x, y, buttonWidth, buttonHeight, () => {
      currentScene = choices[i].next;
    });
  }
}

function drawButton(label, x, y, w, h, action) {
  fill(240);
  rect(x, y, w, h, 8);

  fill(20);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);

  buttons.push({ x, y, w, h, action });
}
