var sea ,  seaImg;
var ship , shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation ("ship4.png", "ship1.png","ship2.png","ship3.png");
}

function setup(){
createCanvas(800,400);
sea = createSprite (200,200);
sea.addImage(seaImg);
ship = createSprite (780,320,10,20);
ship.addAnimation ("ship", shipImg1);
ship.scale= 0.1;
edges = createEdgeSprites()
sea.velocityX= 4;
ship.velocityX= -2;
console.log(ship.y);
}
if (keyDown("space")) {
    ship.velocityY= -10;
}

ship.velocityY = ship.velocity + 0.8;

function draw() {
   background("whait"); 
   drawSprites();
   if (sea.x <0 ){ 
    sea.x=sea.width/2;
   }
    if (ship.x <0 ){ 
    ship.x=800;
     }

}


