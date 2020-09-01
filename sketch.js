const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var ground_options={
isStatic :true
}

ground=Bodies.rectangle(200,100,50,50,ground_options);
World.add(world,ground);

var ball_options={
  restitution : 1.0
}

ball = Bodies.circle(200,100,20);
World.add(world.ball);


console.log(ground);




}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}