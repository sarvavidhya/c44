function preload(){
  snow=loadImage("snow2.jpg");
 doremonIMG=loadAnimation("doremon3.png","doremon2.png","doremon4.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  backGround=createSprite(400,200);
  backGround.addImage("BG",snow);
  doremon=createSprite(400,450,50,50);
  doremon.addAnimation("character",doremonIMG);
  doremon.scale=0.8
  doremon.velocityX=2
}

function draw() {
  background(255,255,255);  
  drawSprites();
}