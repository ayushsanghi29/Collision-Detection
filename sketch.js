var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(200, 200, 80, 30);
  edges = createEdgeSprites()

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  fixedRect.bounceOff(edges)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  fixedRect.velocityX = 4;
  movingRect.velocityX = 4;

}
else{movingRect.shapeColor="black";
fixedRect.shapeColor="black";

}
  drawSprites();
}
