var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50,200,50,50);
}
function draw() {
  background(0); 
  wall.shapeColor=rgb(80,80,80);
  bullet.velocityX=speed/2;

  /*if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=weight*speed*speed/22500;
    if(deformation>180){
      bullet.shapeColor=rgb(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=rgb(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=rgb(0,255,0);  
    }*/
  }
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=rgb(250,0,0);
    }
    if(damage<10){
      wall.shapeColor=rgb(0,255,0);
    }
  }
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+bullet.width;
    wallLeftEdge=lwall.x; 
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }
  drawSprites();

