let font;
let points = [];
let d = 15;

function preload() {
  font = loadFont("fonts/Roboto-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor: 0.1
  });
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill()
}

function draw() {
  background(220);

  // 繪製旋轉方塊
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      push();
      translate(x-950, y-450);
      rotate(sin(frameCount) * 10);
      for (let i = 0; i < 10; i++) {
        let r = map(sin(frameCount), -1, 1, 50, 255);
        let g = map(cos(frameCount / 2), -1, 1, 50, 255);
        let b = map(sin(frameCount / 4), -1, 1, 50, 255);
        stroke(r, g, b);
        noFill()
        rect(0, 0, 100 - i * 3, 100 - i * 3, 20);
      }
      pop();
    }
  }

  // 繪製動態文字
  push();
  translate(width / 2-1000, height / 2-600);
  rotateX(frameCount);
  fill("#669bbc");
  for (let i = 0; i < points.length - 1; i++) {
    ellipse(points[i].x, points[i].y + d * sin(frameCount), 10);
    line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
  }
  pop();
}