
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var board1,board2,board3;
var paper;

var myEngine,myWorld;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;



	//Create the Bodies Here.
	paper = new Paper(100,600,20,20);
	board1 =new Dustbin(400,635,200,30);
	board2 =new Dustbin(300,610,20,100);
	board3 =new Dustbin(500,620,20,100);


	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(myEngine);

  paper.display()
  board1.display();
  board2.display();
  board3.display();

  drawSprites();
 
}



