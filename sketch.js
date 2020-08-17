
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,rope2;
var bob1,bob2;
var base,base2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
  base = new Base(400,300,150,150);

  bob1 = new Bob(200,200,50,50);
  bob2 = new Bob(240,200,50,50);

  rope1 = new Chain(base.body,bob1.body);
  rope2 = new Chain(base.body,bob2.body);

	Engine.run(engine);

	
	
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);

  rope1.display();
  rope2.display();
  base.display();

  
  bob1.display();
  bob2.display();
  drawSprites();
 
}



