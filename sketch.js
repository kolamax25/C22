const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground, ball;
function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld =  myengine.world;

  var ground_options = {
      isStatic : true
  }

  ground  = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(myworld,ground);

  var ball_options = {
  restitution: -1
  }
    ball = Bodies.circle(400, 100, 25, ball_options);
    World.add(myworld, ball);
  
}



function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  fill("black")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  fill("green")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 25, 25)
  
}