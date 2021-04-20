var PLAY = 1;
var END = 0;
var gameState = PLAY;
var GameOver, YouWin
var FlappyBird


function preload() {
  Game_Over = loadImage("GameOver.png")
  Flappy_Bird_Logo = loadImage("Flappy Bird Logo.png")
  You_Win = loadImage("YouWin.png")
  See_Note = loadImage("Note 2.png")


FlappyBird = loadAnimation("FlyingBirdPng.png", "StillBirdPng.png")

Background = loadImage("Flappy Bird Background Shortest.png")

Up_Obstacle = loadImage("Up_Obstacle.png")

Down_Obstacle = loadImage("Down_Obstacle.png")


}





function setup() {
  createCanvas(1500,500);

  obstaclesGroup = new Group();

  FlappyBird_Logo = createSprite(-300,150,30,30)
  FlappyBird_Logo.addImage(Flappy_Bird_Logo)
  FlappyBird_Logo.scale = 0.7;

  Note = createSprite(-300,350,30,30)
  Note.addImage(See_Note)
  Note.scale = 0.7;


  ground = createSprite(1,500,100000,20);
  ground.shapeColor = "black"

 
  ball = createSprite(100,450,50,50)
  ball.shapeColor = "orange"
  ball.velocityY = 12;
  ball.addAnimation("flying", FlappyBird)
  ball.scale = 0.12


  obstacle1 = createSprite(300,460,50,500);
  obstacle1.shapeColor = "red"
  obstacle1.addImage(Up_Obstacle)
  obstacle1.scale = 0.3
  obstacle1.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle1);

  obstacle2 = createSprite(600,560,50,300);
  obstacle2.shapeColor = "red"
  obstacle2.addImage(Up_Obstacle)
  obstacle2.scale = 0.3
  obstacle2.debug = true;
  obstacle2.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle2);

  obstacle3 = createSprite(900,510,50,400);
  obstacle3.shapeColor = "red"
  obstacle3.addImage(Up_Obstacle)
  obstacle3.scale = 0.3
  obstacle3.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle3);

  obstacle4 = createSprite(1200,610,50,200);
  obstacle4.shapeColor = "red"
  obstacle4.addImage(Up_Obstacle)
  obstacle4.scale = 0.3
  obstacle4.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle4);

  obstacle5 = createSprite(300,-130,50,50);
  obstacle5.shapeColor = "red"
  obstacle5.addImage(Down_Obstacle)
  obstacle5.scale = 0.3
  obstacle5.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle5);


  obstacle6 = createSprite(600,-40,50,250);
  obstacle6.shapeColor = "red"
  obstacle6.addImage(Down_Obstacle)
  obstacle6.scale = 0.3
  obstacle6.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle6);


  obstacle7 = createSprite(900,-80,50,150);
  obstacle7.shapeColor = "red"
  obstacle7.addImage(Down_Obstacle)
  obstacle7.scale = 0.3
  obstacle7.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle7);


  obstacle8 = createSprite(1200,-20,50,350);
  obstacle8.shapeColor = "red"
  obstacle8.addImage(Down_Obstacle)
  obstacle8.scale = 0.3
  obstacle8.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle8);


  obstacle9 = createSprite(1500,460,50,500);
  obstacle9.shapeColor = "red"
  obstacle9.addImage(Up_Obstacle)
  obstacle9.scale = 0.3
  obstacle9.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle9);


  obstacle10 = createSprite(1800,560,50,300);
  obstacle10.shapeColor = "red"
  obstacle10.addImage(Up_Obstacle)
  obstacle10.scale = 0.3
  obstacle10.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle10);


  obstacle11 = createSprite(2100,510,50,400);
  obstacle11.shapeColor = "red"
  obstacle11.addImage(Up_Obstacle)
  obstacle11.scale = 0.3
  obstacle11.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle11);


  obstacle12 = createSprite(2400,560,50,200);
  obstacle12.shapeColor = "red"
  obstacle12.addImage(Up_Obstacle)
  obstacle12.scale = 0.3
  obstacle12.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle12);


  obstacle13 = createSprite(1500,-130,50,50);
  obstacle13.shapeColor = "red"
  obstacle13.addImage(Down_Obstacle)
  obstacle13.scale = 0.3
  obstacle13.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle13);


  obstacle14 = createSprite(1800,-40,50,250);
  obstacle14.shapeColor = "red"
  obstacle14.addImage(Down_Obstacle)
  obstacle14.scale = 0.3
  obstacle14.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle14);


  obstacle15 = createSprite(2100,-80,50,150);  
  obstacle15.shapeColor = "red"
  obstacle15.addImage(Down_Obstacle)
  obstacle15.scale = 0.3
  obstacle15.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle15);


  obstacle16 = createSprite(2400,-20,50,350);
  obstacle16.shapeColor = "red"
  obstacle16.addImage(Down_Obstacle)
  obstacle16.scale = 0.3
  obstacle16.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle16);


  obstacle17 = createSprite(2700,460,50,500);
  obstacle17.shapeColor = "red"
  obstacle17.addImage(Up_Obstacle)
  obstacle17.scale = 0.3
  obstacle17.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle17);


  obstacle18 = createSprite(3000,560,50,300);
  obstacle18.shapeColor = "red"
  obstacle18.addImage(Up_Obstacle)
  obstacle18.scale = 0.3
  obstacle18.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle18);


  obstacle19 = createSprite(3300,510,50,400);
  obstacle19.shapeColor = "red"
  obstacle19.addImage(Up_Obstacle)
  obstacle19.scale = 0.3
  obstacle19.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle19);


  obstacle20 = createSprite(3600,610,50,200);
  obstacle20.shapeColor = "red"
  obstacle20.addImage(Up_Obstacle)
  obstacle20.scale = 0.3
  obstacle20.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle20);


  obstacle21 = createSprite(2700,-130,50,50);
  obstacle21.shapeColor = "red"
  obstacle21.addImage(Down_Obstacle)
  obstacle21.scale = 0.3
  obstacle21.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle21);


  obstacle22 = createSprite(3000,-40,50,250);
  obstacle22.shapeColor = "red"
  obstacle22.addImage(Down_Obstacle)
  obstacle22.scale = 0.3
  obstacle22.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle22);


  obstacle23 = createSprite(3300,-80,50,150);
  obstacle23.shapeColor = "red"
  obstacle23.addImage(Down_Obstacle)
  obstacle23.scale = 0.3
  obstacle23.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle23);


  obstacle24 = createSprite(3600,-20,50,350);
  obstacle24.shapeColor = "red"
  obstacle24.addImage(Down_Obstacle)
  obstacle24.scale = 0.3
  obstacle24.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle24);

  obstacle25 = createSprite(3900,460,50,350);
  obstacle25.shapeColor = "red"
  obstacle25.addImage(Up_Obstacle)
  obstacle25.scale = 0.3
  obstacle25.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle25);


  obstacle26 = createSprite(4200,560,50,500);
  obstacle26.shapeColor = "red"
  obstacle26.addImage(Up_Obstacle)
  obstacle26.scale = 0.3
  obstacle26.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle26);


  obstacle27 = createSprite(4500,510,50,300);
  obstacle27.shapeColor = "red"
  obstacle27.addImage(Up_Obstacle)
  obstacle27.scale = 0.3
  obstacle27.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle27);


  obstacle28 = createSprite(4800,610,50,400);
  obstacle28.shapeColor = "red"
  obstacle28.addImage(Up_Obstacle)
  obstacle28.scale = 0.3
  obstacle28.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle28);


  obstacle29 = createSprite(3900,-130,50,200);
  obstacle29.shapeColor = "red"
  obstacle29.addImage(Down_Obstacle)
  obstacle29.scale = 0.3
  obstacle29.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle29);


  obstacle30 = createSprite(4200,-40,50,50);
  obstacle30.shapeColor = "red"
  obstacle30.addImage(Down_Obstacle)
  obstacle30.scale = 0.3
  obstacle30.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle30);


  obstacle31 = createSprite(4500,-80,50,250);
  obstacle31.shapeColor = "red"
  obstacle31.addImage(Down_Obstacle)
  obstacle31.scale = 0.3
  obstacle31.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle31);


  obstacle32 = createSprite(4800,-20,50,150);
  obstacle32.shapeColor = "red"
  obstacle32.addImage(Down_Obstacle)
  obstacle32.scale = 0.3
  obstacle32.setCollider("rectangle",0,0,200,1400);
  obstaclesGroup.add(obstacle32);


}

function draw() {
 // text("Note Try Not To Touch The Red!", -300,400)


//  if(gameState = PLAY) {
  background(Background);  

  GameOver = createSprite(ball.x,200,30,30)
  GameOver.addImage(Game_Over)
  GameOver.visible = false;

  YouWin = createSprite(5400,200,30,30)
  YouWin.addImage(You_Win)
  YouWin.visible = true;


 // obstaclesGroup.depth = ball.depth
  //ball.depth = ball.depth + 100




//  if(keyDown("left")) {
//    ball.x = ball.x-10;
//    GameOver.visible = false;

//  }
  
  if(keyDown("right")) {
    ball.x = ball.x+10;
    GameOver.visible = false;
  }
  

  if(keyDown("up") && ball.y >= 10) {
    ball.velocityY = -8;
    GameOver.visible = false;
  }

  ball.velocityY = ball.velocityY + 0.4
  ball.collide(ground);
  camera.position.x = ball.x






if(obstaclesGroup.isTouching(ball)){
//  GameOver.visible = true;
  ball.x = 100


//  if(keyDown("space")) {
//    ball.x = 100;
//  }


}

//if(ball.x = 10000) {
  //text("won", ball.x,200)
//}


 //}


if(keyDown("space")) {
  ball.x = 100
}
 

 drawSprites();

}













function reset() {

}