var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  bullet = createSprite(50, 200, 10, 50);
  bullet.VelocityX=speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.ShapeColor=color(80, 80, 80);
  
}  

function draw() {
  background(220);
  
  if(hasCollided(bullet, wall)) {
    
    bullet.VelocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage > 10) {
      wall.ShapeColor=color(225, 0, 0);
    }
    
    if(damage<10) {
      wall.shapeColor=color(0, 255, 0);
    }
  }
  drawSprites();
}
function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}