const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; var holder,ball,ground;
var stand1,stand2; var ball; var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}


function setup(){ 
    createCanvas(900,400);
     engine = Engine.create(); 
     world = engine.world;
      Engine.run(engine);
        ground = new Ground(450,390,400,20)
        stand1 = new Ground(390,300,250,10); 
        stand2 = new Ground(700,200,200,10);
        Box1 = new Box(300,275,30,40); 
        console.log(Box1);
         Box2 = new Box(330,275,30,40);
          Box3 = new Box(360,275,30,40);
           Box4 = new Box(390,275,30,40); 
           Box5 = new Box(420,275,30,40); 
           Box6 = new Box(450,275,30,40); 
           Box7 = new Box(480,275,30,40);
           ball = Bodies.circle(50,200,20); 
           World.add(world,ball);
            slingShot = new SlingShot(this.ball,{x:100,y:200}); }


            function draw() { background(bg); //Engine.update(engine); //text(mouseX + ',' + mouseY, 10, 15);
             textSize(20); 
            fill("lightyellow"); text("Drag the Hexagonal Stone and Release it, to launch it towards theBoxs",100,30);
             ground.display(); stand1.display(); stand2.display(); strokeWeight(2); stroke(15); fill("skyblue");Box1.display();Box2.display();Box3.display();Box4.display();Box5.display();Box6.display();
            Box7.display();
            imageMode(CENTER) 
            image(polygon_img ,ball.position.x,ball.position.y,40,40); 
            slingShot.display();
            }
            function mouseDragged(){
                 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
         } 
         function mouseReleased(){
              slingShot.fly();
             }
             function keyPressed(){
              if(keyCode === 32 ){
                 
                  Matter.Body.setPosition(ball.body, {x: 100, y: 200});
                 
              }
          }
          async function getBackgroundImg(){
            var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
            var responseJSON = await response.json();
        
            var datetime = responseJSON.datetime;
            var hour = datetime.slice(11,13);
            
            if(hour>=0600 && hour<=1900){
                bg = "yellow";
            }
            else{
                bg = "black";
            }
        
           
        }