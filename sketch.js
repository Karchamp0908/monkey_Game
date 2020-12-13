
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaImagee;
var FoodGroup, obstacleGroup
var score


function preload(){
  
  obstacleImage = loadImage("obstacle.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bananaImagee = loadImage("banana.png");
 
  
  
}




 function setup() {
  createCanvas(450,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("movings",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)

 FoodGroup=createGroup();
   obstacleGroup=createGroup();
 
 }


function draw() {
background("blue")
  
  spawnob();
  fruitban();
  
  if (ground.x<0){
      ground.x=ground.width/2
  }
  if(mouseIsPressed && monkey.y >= 200){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground)
  
  
  drawSprites();
  
}

function fruitban(){
  if(World.frameCount%80===0) {
    banana=createSprite(400,200,20,20);
    banana.scale=0.1;

    r=Math.round(random(1,2));
    if(r==1){
      banana.addImage(bananaImage);
    } else if (r==2){
      banana.addImage(bananaImagee);
    }
    
    
      banana.y=Math.round(random(120,200));
banana.velocityX=-7
    banana.setLifetime=100;
    FoodGroup.add(banana);
  }


}

function spawnob(){
  if(World.frameCount%300===0){
    obstacle=createSprite(400,200,20,20);
    obstacle.addAnimation("movings",obstacleImage);
    obstacle.scale=0.1;
    obstacle.y=Math.round(random(329,330));
    obstacle.velocityX=-7;
    obstacle.setLifetime=50;
    obstacleGroup.add(obstacle);
}

}




