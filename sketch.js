const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, slingShot

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,920,100,100);
    box2 = new Box(920,920,70,70);
    

    box3 = new Box(700,840,70,70);
    box4 = new Box(920,940,70,70);
    


    box5 = new Box(810,960,70,70);
    box6 = new Box(710,960,70,70);
    box7 = new Box(710,860,70,70);
    box8 = new Box(710,760,100,100);
    box9 = new Box(710,660,70,70);
    box10 = new Box(710,560,70,70);
    box11= new Box(710,460,70,70);
    box12 = new Box(710,360,70,70);
    box13 = new Box(710,260,70,70);
    box14 = new Box(810,160,70,70);
    box15 = new Box(810,960,70,70);
    box16 = new Box(810,960,70,70);
    box17= new Box(810,960,70,70);
    box18 = new Box(810,960,70,70);
    box19= new Box(810,960,70,70);
    box20 = new Box(810,960,70,70);
    box21 = new Box(810,960,70,70);
    box22 = new Box(810,960,70,70);

    ball = new Ball(600,600,40);
    
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:600, y:600});
}

function draw(){

        background("blue")
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    ball.display()
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }




