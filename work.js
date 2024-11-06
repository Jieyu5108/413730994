let font;  //載入字型文字
let points = [];  //轉成點狀文字
let d = 15
let angle = 0
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/Roboto-Bold.ttf") 
}
//===================================================
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(220);
  for(let y=0 ; y < height; y=y+100 ){
    for(let x = 0 ; x < width ; x = x+ 100 ){
        push()
            translate(x,y)
            stroke(255)
            for(let i = 0 ; i < 10 ; i = i + 1){
                let r = map(sin(frameCount),-1,1,50,255)
                let g = map(cos(frameCount/2),-1,1,50,255)
                let b = map(sin(frameCount/4),-1,1,50,255)
                stroke(r,g,b)
                rotate(angle)
                rect(0,0,100 - i * 3 ,100 - i * 3 ,20)
                angle = sin(frameCount)*10
            }
        pop() 
        rotateX((angle)%360)
  //translate(width/2,height/2)
  fill("#669bbc")
  for (let z=0; z<points.length-1; z++) { 
    //text(str(i),points[i].x,points[i].y)
    ellipse(points[z].x+d*sin(angle),points[z].y+d*sin(angle),10)
    line(points[z].x+d*sin(angle),points[z].y,points[z+1].x+d*sin(angle),points[z+1].y)
    angle = angle + 10
      }    
    }
  }
}
