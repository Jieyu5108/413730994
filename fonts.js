let font;
let points;

function preload() {
  font = loadFont('NotoSansTC-VariableFont_wght.ttf'); // Load a font of your choice
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints('TKUET', 50, 300, 200, {
    sampleFactor: 0.1, // Adjust for more or fewer points
  });
}

function draw() {
  background(240);
  
  // Draw text using circles for each point
  fill(70, 130, 180);
  noStroke();
  points.forEach(pt => {
    ellipse(pt.x, pt.y, 8, 8); // Draw circle at each text point
    drawPattern(pt.x, pt.y); // Draw looping pattern around each point
  });
}

// Function to draw looping pattern around each character
function drawPattern(x, y) {
  stroke(200, 200, 0, 100);
  noFill();
  for (let i = 0; i < 10; i++) {
    beginShape();
    for (let j = 0; j < TWO_PI; j += 0.1) {
      let r = i * 5 + 10; // Adjust for spacing
      let px = x + cos(j) * r;
      let py = y + sin(j) * r;
      vertex(px, py);
    }
    endShape(CLOSE);
  }
}
