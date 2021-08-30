
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fruitgroup, obstaclegroup,ground;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  
  ground=createSprite(200,390,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  fruitgroup=new Group();
  obstaclegroup=new Group();

  
}


function draw() {
  background(255);
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;

  if (obstaclegroup.isTouching(monkey)){
    fruitgroup.destroyEach();
    text("Game Over",300,300);
    ground.setVelocityX=0;
    obstaclegroup.setVelocityXEach(0);
    fruitgroup.setVelocityXEach(0);
    monkey.setVelocityY=0;
    obstaclegroup.setLifetimeEach(-1);
    fruitgroup.setLifetimeEach(-1);
  }
    
  if(fruitgroup.isTouching(monkey)){
    score=score+1
  }
  
 
  monkey.collide(ground);
  
  text ("score "+score,300,100)
  
  drawSprites();
  spawnFood();
  spawnObstacles();
}


function spawnFood(){
  if (frameCount%80===0){
    banana=createSprite(600,random(100,400));
    banana.velocityX=-5;
    banana.addImage(bananaImage)
    banana.scale=0.2
    fruitgroup.add(banana);
    banana.lifetime=400
  }
}

function spawnObstacles(){
  if (frameCount%200===0){
    obstacle=createSprite(600,350);
    obstacle.velocityX=-4
    obstacle.scale=0.2;
    obstacle.addImage(obstaceImage);
    obstaclegroup.add(obstacle);
    obstacle.lifetime=400;
  }
}


