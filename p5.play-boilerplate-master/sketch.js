var rocket , laser,  spaceImg;
var rocketImg, laserImg;
var ufo1,ufo2,ufo3,ufo4,ufo1Img,ufo2Img,ufo3Img,ufo4Img;
var score=0;

function preload(){  
  spaceImg = loadImage("spaceImg.png");
  laserImg = loadImage("laser.png");
  rocketImg = loadImage("Rocket.png");
  ufo1Img=loadImage("UFO1.jpg");
  ufo2Img=loadImage("UFO2.jpg");
  ufo3Img=loadImage("UFO3.jpg");
  ufo4Img=loadImage("UFO4.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  spaceImg = createSprite(0,0,400,400);
  spaceImg.addImage(spaceImg);
  spaceImg.scale = 2.5
  
  // creating rocket to shoot laser
  rocket = createSprite(380,220,20,50);
  rocket.addImage(rocketImg); 
  rocket.scale = 1;
  
  
}

function draw() {
 background(0);
  // moving ground
    spaceImg.velocityX = -3 

    if (spaceImg.x < 0){
      spaceImg.x = spaceImg.width/2;
    }
  
  //moving rocket
  rocket.y = World.mouseY
  
   // release laser when space key is pressed
  if (keyDown("space")) {
    createlaser();
    
  }
   
  //Uncomment correct option to get random number from 1 to 4 
   var select_ufo = Math.round(random(1,4));

   if (World.frameCount % 100 == 0) {

            switch(select_ufo ){
            case 1:UFO1();
            break;
            case 2:UFO2();
            break;
            case 3:UFO3();
            break;
            case 4:UFO4();
            break;
            default:break;
            }
          }       
    
  drawSprites();
}


// Creating  lasers for rocket
 function createlaser() {
  var laser= createSprite(100, 100, 60, 10);
  laser.addImage(laserImage);
  laser.x = 360;
  laser.y=rocket.y;
  laser.velocityX = -4;
  laser.lifetime = 100;
  laser.scale = 0.3;
} 

function UFO1() {
  var ufo1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo1.addImage(ufo1Img);
  ufo1.velocityY = 3;
  ufo1.lifetime = 150;
  ufo1.scale = 0.1;
}

function UFO2() {
  var ufo2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo2.addImage(ufo2Img);
  ufo2.velocityY = 3;
  ufo2.lifetime = 150;
  ufo2.scale = 0.1;
}

function UFO3() {
  var ufo3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo3.addImage(ufo3Img);
  ufo3.velocityY = 3;
  ufo3.lifetime = 150;
  ufo3.scale = 0.1;
}

function UFO4() {
  var ufo4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo4.addImage(ufo4Img);
  ufo4.velocityY = 3;
  ufo4.lifetime = 150;
  ufo4.scale = 1
}