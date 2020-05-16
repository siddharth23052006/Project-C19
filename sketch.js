/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}*/
var fixedRect, movingRect;
var gameObject1, gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,100, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,300,50,50);
  movingRect.shapeColor = "green";
  //gameObject1.createSprite(400,100,50,50);
  //gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(400,300,50,50);
  gameObject2.shapeColor = "yellow";

  fixedRect.velocityY = +5;
  movingRect.velocityY = -5;

 // gameObject1.velocityY = 6;
  gameObject2.velocityY = -6;
}

function draw() {
  background(0,0,0); 
  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  //bounceoff(fixedRect,movingRect);
  oppositeVelocity(fixedRect,gameObject2);
  
  drawSprites();
}

