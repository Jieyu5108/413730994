let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/Roboto-Bold.ttf") 
}
let angle = 0
let a = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER)

  points = font.textToPoints("TKUET", 0 , 200 , 350, {
    sampleFactor:0.06
  });
  angleMode(DEGREES) //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  //frameRate(10)
}

function draw() {
  background(0);

  //translate(width/2,height/2)
  for(let y=0 ; y<height ; y= y +100){
    for(let x=0 ; x<width ; x= x +100){
      push()
        translate(x,y)
        stroke(255)
        rotate(angle)
        //rect(0,0,600,600,100)
        //angle = sin(frameCount) * 20

        for(let i =0;i<1;i = i+1){
          let r = map(sin(frameCount),-1,1,50,255)
          let g = map(cos(frameCount/2),-1,1,50,255)
          let b = map(sin(frameCount/2),-1,1,50,255)
          stroke(r,g,b)
          rotate(angle)
          noFill()
          rect(0,0,100-i*3,100-i*3,20)
          angle = sin(frameCount) *10
        }
      pop()
      angle = angle +1
      for (let i=0; i<points.length; i++) { 
        ellipse(points[i].x+450,points[i].y+350,15)
        fill(255)
        if(mouseIsPressed){
          fill(255,0,0)

         }else{
          fill(255)
         } 
         
     }
    }
  }
  if(mouseIsPressed){
    fill(255);
    ellipse(950, 200, 150, 150);
  
    // 左眼
    fill(0);
    ellipse(910, 180, 20, 20);
  
    // 右眼
    ellipse(990, 180, 20, 20);
  
    // 嘴巴
    arc(950, 220, 100, 50, 0,PI);
    }else{
      
    }
    
}