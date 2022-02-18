const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var naosei;
var torre, torreImagem;
var angulo,canhao, balacanhao;

function preload() {
 naosei = loadImage("./assets/background.gif");
 torreImagem = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 torre = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world,torre);
 angleMode(DEGREES);
 angulo=20;
 canhao=new Canhao (180,110,130,100,angulo);
 balacanhao = new BalaCanhao(canhao.x, canhao.y);
}

function draw() {
  background(189);
  image(naosei, 0, 0, 1200, 600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(torreImagem, torre.position.x, torre.position.y, 160, 310);
 pop();
  canhao.mostrar();
  balacanhao.mostrar();
}
