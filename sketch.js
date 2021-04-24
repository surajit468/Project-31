
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1046,85,30);
	mango3=new mango(998,138,30);
	mango4=new mango(947,209,30);
	mango5=new mango(1075,197,30);
	mango6=new mango(1187,156,30);
	mango7=new mango(1153,210,30);


	stone=new Stone(242,430,60);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
 lineObj = new Line(stone.body,{x:248, y:425});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text(mouseX + ',' + mouseY, 30, 45);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  lineObj.display();

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
lineObj.fly();
}
