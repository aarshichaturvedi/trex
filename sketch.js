
var fixedrect;
var movingrect;




function setup() {
  createCanvas(1200,800);

  // design the rectangels

 fixedrect = createSprite(600,400,50,80);
 movingrect = createSprite(400,200,80,30);

 fixedrect.shapeColor = "red";
 movingrect.shapeColor = "red";

 fixedrect.debug = true;
 movingrect.debug = true;

 
}

function draw() {
  background("black");  

  movingrect.x= mouseX;
  movingrect.y= mouseY;

  
    
if (isTouching(movingrect,fixedrect)) {

movingrect.shapeColor= "red";
fixedrect.shapeColor= "red";

   }
else {
  movingrect.shapeColor= "green";
fixedrect.shapeColor= "green";
}
 
  
 


  isTouching();
  
  drawSprites();
}


function isTouching(object1,object2) {

  if (object1.x-object2.x < object2.width/2 + object1.width/2 
  && object2.x-object1.x < object2.width/2 + object1.width/2 )
  {
   return true;
  } 
  else {
    return false;
  }
  


}








