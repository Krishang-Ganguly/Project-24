
var ground,box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = new Ground(width/2, height-35, width,10)

	box = new Box(650, 650,200,20)

	box1 = new Box(540,610,20,100)

	box2 = new Box(740,610,20,100)
		
	paperObject = new Paper(50,450)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display()
  box1.display()
  box2.display()
  ground.display()
  paperObject.display()
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-15})

    
	}

}




