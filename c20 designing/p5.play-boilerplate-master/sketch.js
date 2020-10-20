var fixRect,movingRect
var box1,box2;

function setup() {
  createCanvas(800,600);
 fixRect=createSprite(200,200,80,80);
 fixRect.shapeColor="red";

 movingRect=createSprite(480,200,80,80);
 movingRect.shapeColor="yellow";

box1=createSprite(600,200,80,80);
box1.shapeColor="purple";
box1.velocityY=1;

box2=createSprite(600,400,80,80);
box2.shapeColor="blue";
box2.velocityY=-1;
}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if (movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2
  &&fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2
  &&movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2
  &&fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2) {
  movingRect.shapeColor="orange";
  fixRect.shapeColor="orange";
  
} else {
  movingRect.shapeColor="yellow";
  fixRect.shapeColor="red";
}

if(box1.y-box2.y<box1.height/2+box2.height/2
  &&box2.y-box1.y<box1.height/2+box2.height/2){
    box1.velocityY=box1.velocityY*(-1);
    box2.velocityY=box2.velocityY*(-1);
}

  drawSprites();
}