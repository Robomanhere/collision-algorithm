var fixedRect,MovingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  MovingRect=createSprite(600, 200, 80, 30);
  MovingRect.shapeColor="green";
}

function draw() {
  background(255,155,235);  
  MovingRect.x = World.mouseX;
  MovingRect.y= World.mouseY;
  if(MovingRect.x - fixedRect.x < MovingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - MovingRect.x < MovingRect.width/2 + fixedRect.width/2 &&
    MovingRect.y - fixedRect.y < MovingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - MovingRect.y < MovingRect.height/2 + fixedRect.height/2){
    
  fixedRect.shapeColor="orange"
  MovingRect.shapeColor= "orange"
  }
  else{
    fixedRect.shapeColor="green";
    MovingRect.shapeColor="green";  
  }
  drawSprites();
}