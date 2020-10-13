//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var rope1;
function preload(){
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
bob1 = new Bob(300,300);
roof = new Roof(400,50,700,20);
bob2 = new Bob(350,300);
bob3 = new Bob(400,300);
bob4 = new Bob(450,300);
bob5 = new Bob(500,300);
rope1 = new Rope(bob1.body,roof.body,-100,0);
rope2 = new Rope(bob2.body,roof.body,-50,0);
rope3 = new Rope(bob3.body,roof.body,0,0)
rope4 = new Rope(bob4.body,roof.body,50,0)
rope5 = new Rope(bob5.body,roof.body,100,0)

	//Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  background("lightgrey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
   
		Matter.Body.applyForce(bob1.body,bob1.position, {x: -20, y: 10});
		
	}
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}