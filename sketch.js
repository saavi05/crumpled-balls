
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ball,ground,ls,rs
var r=40
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
var options={
	isStatic:false,friction:0,density:1.2,restitution:0.3
}
	//Create the Bodies Here.
ball=Bodies.circle(260,100,r/2,options)
World.add(world,ball)
ground=new Ground(800,679,1600,20)
ls=new Ground(1100,600,20,120)
rs=new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,r,r)
  ground.display()
  ls.display()
  rs.display()

  drawSprites();
 
}
function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }


