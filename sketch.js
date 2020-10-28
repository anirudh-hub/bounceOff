var fixedRect, movingRect;
var m,t;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
m = createSprite(300,300,50,50);
t = createSprite(100,100,50,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  m.x=mouseX
  m.y=mouseY
if(istouching(m,t)){
  m.shapeColor='red';
  t.shapeColor= 'red';
}
else{
  m.shapeColor='blue';
    t.shapeColor= 'blue';
}
 bouceOff();
  drawSprites();
}

function istouching (G1,G2){
if(G1.x - G2.x < G2.width/2 + G1.width/2
  && G2.x - G1.x < G1.width/2 + G2.width/2
  && G1.y - G2.y < G2.height/2 + G1.height/2
  && G2.y - G1.y < G2.height/2 + G1.height/2 ){
    return true;
  }
  else {
    return false;
  }
}
