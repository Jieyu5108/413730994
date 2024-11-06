function setup() {
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER)
    noFill()
    angleMode(DEGREES)
    frameRate(10)
  }
  
  
  
  function draw() {
    background(0);
    stroke(255)
    rotate(10)
    rect(width/2,height/2,600,600)
    angle = angle + 10
  }
  