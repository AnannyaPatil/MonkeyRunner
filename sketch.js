var monkey,monkeyRunning,monkeyImage;
var food,foodImage,foodsGroup;
var obstacle,obstacleImage,obstaclesGroup;
var ground,invisibleGround;
var socre;

function preload(){
 monkeyRunning = loadAnimation
("sprite_0.png","sprite_1.png","sprite_2.png",
 "sprite_3.png","sprite_4.png","sprite_5.png",
 "sprite_6.png","sprite_7.png","sprite_8.png");
  
  foodImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");           
}

function setup(){
  createCanvas(600,200);
  
  monkey = createSprite(100,135,10,10);
  monkey.addAnimation("running",monkeyRunning);
  monkey.scale = 0.13;
  
  ground = createSprite(200,180,1200,15);
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,1200,15);
  invisibleGround.visible = false;

  foodsGroup = createGroup();
  obstaclesGroup = createGroup();
}

function draw (){
  background(205,205,205);
  
 if(ground.x<0){
   ground.x= ground.width/2;
 } 
  
 if(keyDown("space")&&monkey.y>=100){
   monkey.velocityY = -12;
 } 
   monkey.velocityY = monkey.velocityY + 0.8; 

  
 monkey.collide(invisibleGround); 
  
  Food();
  Obstacle();
  
 drawSprites(); 
}

function Food(){
  if(World.frameCount%110===0){
   var food = createSprite(400,200);
   food.addImage(foodImage);
   food.scale = 0.1;  
   food.velocityX = -2;
   food.lifetime = 600; 
   food.y = Math.round(random(100,150));

   food.depth = monkey.depth;
   monkey.depth = monkey.depth+1;  
    
   foodsGroup.add(food)

 }
}

function Obstacle(){
  if(World.frameCount%300===0){
   var obstacle = createSprite(200,160,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
   obstacle.velocityX = -2;
   obstacle.lifetime = 600;
   
   obstacle.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
   
   obstaclesGroup.add(obstacle); 
 
  }
  
}