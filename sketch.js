var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="play";
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%100===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //particles.lifetime(400);

   text("Score: "+score, 400, 400);
   fill("white");
  textSize(30);
   text("100",10,500);
   text("50",100,500);
   text("25",200,500);
   text("10",300,500);
   text("5",400,500);
   text("10",500,500);
   text("25",600,500);
   text("50",670,500);
   text("100",750,500);

   for(var i=0; i<=width; i+=50){
     line(i,475,i+50,450);
     strokeStyle="yellow";
   }
  
  
   if(particle!= null){
     particle.display();
        if(particle.body.position.y > 760){

           if(particle.body.position.x<=80){
             score=score+100;
             particle=null;
             if(turn>=5)
          gameState="end";
           }

           else if(particle.body.position.x>80 && particle.body.position.x<=160){
             score=score+50;
             particle=null;
             if(turn>=5)
          gameState="end";
           }

           else if(particle.body.position.x>160 && particle.body.position.x<=240){
            score=score+25;
            particle=null;
            if(turn>=5)
          gameState="end";
          }

          else if(particle.body.position.x>240 && particle.body.position.x<=320){
            score=score+10;
            particle=null;
            if(turn>=5)
          gameState="end";
          }

          else if(particle.body.position.x>320 && particle.body.position.x<=400){
            score=score+5;
            particle=null;
            if(turn>=5)
                 gameState="end";
          }

          else if(particle.body.position.x>400 && particle.body.position.x<=480){
            score=score+5;
            particle=null;
            if(turn>=5)
               gameState="end";;
          }

          else if(particle.body.position.x>480 && particle.body.position.x<=560){
            score=score+10;
            particle=null;
            if(turn>=5)
             gameState="end";
          }

          else if(particle.body.position.x>560 && particle.body.position.x<=640){
            score=score+25;
            particle=null;
            if(turn>=5)
              gameState="end";
          }

          else if(particle.body.position.x>640 && particle.body.position.x<=720){
            score=score+50;
            particle=null;
            if(turn>=5)
               gameState="end";
          }

          else if(particle.body.position.x>720 && particle.body.position.x<=800){
            score=score+100;
            particle=null;
            if(turn>=5)
               gameState="end";
          }
        }

        
    }
  

    if(gameState==="end"){
       text("GAME OVER", 400,300);
       textSize(40);
    }
}

/*function mousePressed(){
  if(gameState!== "end"){
    turn++;
    particle= new Particle(mouseX,10,10,10);
  }
} */

