var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score, survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x)
 
  var bananaGroup = createGroup();
  var ObstacleGroup = createGroup();
}

function draw() {

  background(255);
  
  if(ground.x<0){
      ground.x = ground.width/2
     }
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  var survivalTime=0
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)
  
  Banana();
  Obstacle();
  drawSprites();
}
function Banana()
{
  if(World.frameCount%80===0)
  {
    var banana=        createSprite(400,randomNumber(160,240),20,20);
    banana.setAnimation("banana",bananaImage);
    banana.velocityX=-4;
    banana.scale=0.05;
    banana.lifetime=110;
    bananaGroup.add(banana);
  }
}

function Obstacle()
{
  if (World.frameCount%300===0)
  {
    var obstacle= createSprite(400,340,20,20);
    obstacle.setAnimation("Stone",obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.15;
    obstacle.lifetime=110;
    obstacleGroup.add(obstacle);
  }
}
