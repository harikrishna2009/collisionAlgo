var movingRect,fixedRect

function setup()
 {
  createCanvas(800,800);
 movingRect =  createSprite(400, 200, 80, 100);
 fixedRect = createSprite(200,100,60,80)

 movingRect.shapeColor = "blue"
 fixedRect.shapeColor = "red"
}

function draw() {
  background(0);
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 && 
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)
  {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "pink"
  }else {
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "red"
  }


  drawSprites();
}