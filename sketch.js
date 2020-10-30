var frect,mrect;



function setup() {
  createCanvas(1200,800);
 frect= createSprite(200, 200, 50, 80);
mrect=createSprite(400,200,80,50);
frect.debug=true;
frect.shapeColor="red"
mrect.debug=true;
mrect.shapeColor="red"


}

function draw() {
  background(255,255,255);
  mrect.y=World.mouseY;
  mrect.x=World.mouseX;
  
if(mrect.x-frect.x<frect.width/2+mrect.width/2
  &&frect.x-mrect.x<frect.width/2+mrect.width/2
  &&frect.y-mrect.y<frect.height/2+mrect.height/2
  &&mrect.y-frect.y<frect.height/2+mrect.height/2){

  frect.shapeColor="green"
  mrect.shapeColor="green"

}
else {
  frect.shapeColor="red"
  mrect.shapeColor="red"

}


  drawSprites();
}