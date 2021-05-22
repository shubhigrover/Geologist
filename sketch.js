const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(200,550,50,50)
    stone= new Stone(350,200,20,20)
    stone2= new Stone(375,200,20,20)
    stone3= new Stone(400,200,20,20)
    stone4= new Stone(425,200,20,20)
    stone5= new Stone(450,200,20,20)
    stone6= new Stone(475,200,20,20)
    iron= new Iron(550,0,70,70)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display()
    stone.display()
    stone2.display()
    stone3.display()
    stone4.display()
    stone5.display()
    stone6.display()
    iron.display()
}