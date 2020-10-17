
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var board1,board2,board3;
var paper;
var ground

var myEngine,myWorld;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	myEngine = Engine.create();
	myWorld = myEngine.world;



	//Create the Bodies Here.
	paper = new Paper(100,500,20,20);
	board1 =new Dustbin(500,500,200,30);
	board2 =new Dustbin(400,510,20,100);
	board3 =new Dustbin(600,520,20,100);
	ground =new Ground(400,580,800,20);


	
  
}


function draw() {

  background(0);
  Engine.update(myEngine);

  paper.display()
  board1.display();
  board2.display();
  board3.display();
  ground.display();
  drawSprites();
 
}



