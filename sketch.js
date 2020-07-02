const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var floor;

var player;
var forestNight;
var painting;

var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var fireSkill;

function preload(){
  backg1 = loadImage("Photos/back1.jpg");
  forestNight = loadImage("Photos/backNight.JPG");
  painting = loadImage("Photos/prophet'sPaint.png");
  fireSkill = loadImage("Photos/FireButton.PNG")
}

function setup() {
 createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  floor = new Ground(250,480,500,20);
  player = new PC1(50,440,20,50)

  skill1 = createButton("Fire");
  skill1.position(800,450);

  skill2 = createButton("Frost");
  skill2.position(850,450);

  skill3 = createButton("Cloak of deception");
  skill4 = createButton("Lunar Frenzy");
  skill5 = createButton("Hover");
}

/*function keyPressed(){
  if(keyCode === 32 && player === new PC1){
    player = new PC2(player.x,player.y,20,50);
    console.log("Two");
 }

 if(keyCode === 32 && player === new PC2){
  player = new PC1(player.x,player.y,20,50);
}
}*/


function draw() {  
  background(forestNight);
  Engine.update(engine);
  

  floor.display();
  player.display();

  skill1.mousePressed(shootFlame)
}

function shootFlame(){
  player.shootFire();
}

/*function keyPressed(){
  if(keyCode === 32){
    player.velocityX = 2
  }
}*/


