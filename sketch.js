
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var barelandImg, greenlandImg, bareland, greenland;
var bgImg, bg,tree;

function preload(){
  bgImg = loadImage("bg1.png");
  barelandImg = loadImage("bareland.png");
  greenlandImg = loadImage("greenland.png");
}


function setup() {
  createCanvas(windowWidth , windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
}

function draw() 
{
  background(bgImg);
  Engine.update(engine);
  
}

