
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var ground1;
var ball;

function preload()
{
	
}

function setup() {
createCanvas(1100, 900);

engine = Engine.create();
world = engine.world;

var balloptions={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}





ground1 = new Ground (500,670,1000,20);
leftside = new Ground (1100,600,20,120);

ball = Bodies.circle(100,10,20);
World.add(world,ball);
	
Engine.run(engine);
} 

function draw() {
rectMode(CENTER);
background("light blue");

//rect(ground.position.x,ground.position.y,1000,20);
ground1.display();
ellipse(ball.position.x,ball.position.y,20);



drawSprites();


 }
 
 function keypressed(){
if (keycode === up_arrow){

Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:0.05});
}
 }