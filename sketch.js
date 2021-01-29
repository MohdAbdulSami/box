var canvas;
var music;
var one,two,three,four;
var box ,musi;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

one=createSprite(500,500,140,20)
one.shapeColor="black"


two=createSprite(700,500,140,20)
two.shapeColor="green"

three=createSprite(100,500,140,20)
three.shapeColor="blue"


four=createSprite(300,500,140,20)
four.shapeColor="red"


    //create 4 different surfaces
box=createSprite(random(20,750))
box.shapeColor="white"
box.velocityY=4

music.play();

    //create box sprite and give velocity

}

function draw() {
    background("yellow");
    //create edgeSprite

if(one.isTouching(box)){
box.shapeColor="black";
box.velocityY=0;
music.stop();
}

if(two.isTouching(box)){
    box.shapeColor="green";
    box.velocityY=0;
    music.stop();
    }

    if(three.isTouching(box)){
        box.shapeColor="blue";
        box.velocityY=0;
        music.stop();
        }

        if(four.isTouching(box)){
            box.shapeColor="red";
            box.velocityY=0;
            music.stop();
            }


  createEdgeSprites();
  bounceoff();
drawSprites();
    //add condition to check if box touching surface and make it box
}

  
  function bounceoff() {
  
  if(box.x - one.x < one.width/2 + box.width/2
    && one.x - box.x < one.width/2 + box.width/2
    &&box.x - two.x < two.width/2 + box.width/2
    && two.x - box.x <two.width/2 + box.width/2
    &&box.x - three.x < three.width/2 + box.width/2
    && three.x - box.x <three.width/2 + box.width/2
    &&box.x - four.x < four.width/2 + box.width/2
    && four.x - box.x <four.width/2 + box.width/2){
      
        box.velocityX=box.velocityX *(-1);
  
  }
  
  if(box.y - one.y < one.height/2 + box.height/2
    && one.y - box.y < one.height/2 + box.height/2
    &&box.y - two.y < two.height/2 + box.height/2
    && two.y - box.y <two.height/2 + box.height/2
    &&box.y - three.y < three.height/2 + box.height/2
    && three.y - box.y <three.height/2 + box.height/2
    &&box.y - four.y < four.height/2 + box.height/2
    && four.y - box.y <four.height/2 + box.height/2){
  
       box.velocityY=box.velocityY *(-1);
        
    
  
  }
    
  }
  