const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var divisionHeight = 300;
var width 
var k , j
var particle
var score 
var count
var gameState = "START"
var particles =[]
var plinkos = []
var divisions = []
var body = Matter.body


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
 score=0
 count=0

  
  ground = new Ground(240,790,480,10)
  for(var k = 0; k <=width ; k=k+80){
    divisions.push(new Division(k , height-divisionHeight/2 , 10 , divisionHeight))
      }
  for(var j = 40; j <=width ; j=j+50){
    plinkos.push(new Plinko(j,75))
          }
   for(var j = 40; j <=width ; j=j+50){
     plinkos.push(new Plinko(j,130))
                  }
    for(var j = 40; j <=width ; j=j+50){
      plinkos.push(new Plinko(j,185))
                          }
    for(var j = 40; j <=width ; j=j+50){
       plinkos.push(new Plinko(j,240))
        }      
        for(var j = 40; j <=width ; j=j+50){
          plinkos.push(new Plinko(j,295))
                              }
        for(var j = 40; j <=width ; j=j+50){
         plinkos.push(new Plinko(j,350))
         }
  for(var j = 40; j <=width ; j=j+50){
   plinkos.push(new Plinko(j,405))
          }
          for(var j = 40; j <=width ; j=j+50){
            plinkos.push(new Plinko(j,460))
                   }
  //division1 = new Division(10 , 700,10,200)
  //division2 = new Division(100 , 700,10,200)
  //division3 = new Division(190 , 700,10,200)
  //division4 = new Division(280 , 700,10,200)
  //division5 = new Division(370 , 700,10,200)
  //division6 = new Division(460 , 700,10,200)

  //plinko = new Plinko(200,200)

  
  

}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  if(frameCount%90===0){
    particles.push(new Particle(random(20,460),10,10))
 console.log(frameCount)
   }
  textSize(20)
    text("SCORE = "+ score , 350,40)
    textSize(20)
    text("COUNT = "+ count , 50,40)
    textSize(30)
    text("200" ,260,530)
    text("200" ,340,530)
    text("100" ,420,530)
    text("500" ,180,530)
    text("500" ,100,530)
    text("500" ,20,530)
  //division1.display();
  //division2.display();
  //division3.display();
  //division4.display();
  //division5.display();
  //division6.display();
  for(var k = 0 ; k < divisions.length ; k++){
    divisions[k].display();
    
    }
    for(var j = 0 ; j < plinkos.length ; j++){
      plinkos[j].display();
     
      }
      for(var j = 0 ; j < particles.length ; j++){
        particles[j].display();
      }
      if(particle!=null){
        particle.display();

        if(particle.body.position.y>760)
        {
        if(particle.body.position.x < 300)
        {
          score = score+500
          count = count + 1
        particle = null;
      if(count>= 5 )gameState = "END"
    }
      }
    }
        
  //plinko.display();
  //particle1.display();
  drawSprites();
  
}
 function mousePressed(){
   if(gameState!=="END"){

    count++;
    particle = new Particle(mouseX , 10,10,10)
   }
 }
