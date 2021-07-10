const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bImg,sI,s
function preload(){
bImg=loadImage("snow2.jpg"||"snow2.jpg")
sI=loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bImg); 
  spawn()
  drawSprites();
}
function spawn() {
  pox= Math.round(rand(1,400))
  
  for(var i=0; i<10; i++){
   s=createSprite(pox,0,5,5)
    s.addImage(sI)
    World.add(world,s)
    Bodies.add(bodies,s)
  }
}
