var trex,trexImage,trexCollided;
var   ground,groundImage;
var  gameState,score;
var invisibleGround;

function preload(){
  trexImage = loadAnimation("trex1.png" , "trex3.png", "trex4.png");
  trexCollided = loadImage("trex_collided.png"); 
  
  groundImage = loadImage("ground2.png");
  
  
  
}


function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,10,10);
  trex.addAnimation("trexRunning", trexImage);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,10,10);
  ground.addImage("ground" , groundImage);
  
  invisibleGround = createSprite(200,185,600,10);
  invisibleGround.visible = false;
  
  
  
}

function draw() {
  background(220);
  
  trex.collide(invisibleGround);
  
  if(keyDown("space") && trex.y>150){
  trex.velocityY = -10;
  
  }
  
  trex.velocityY = trex.velocityY +0.8;
  //console.log(trex.y);
  
  ground.velocityX = -(3 * frameCount/100);
  
  if(ground.x<0){
  ground.x = ground.width/2;
  }
  
  drawSprites();
}







