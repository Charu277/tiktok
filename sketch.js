var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)

}

function draw() {
  background("black");  
 translate(200,200)
 rotate(-90) 
 hr=hour();
 mn=minute();
 sc=second();
 scAngle=map(sc,0,60,0,360)
 mnAngle=map(mn,0,60,0,360)
 hrAngle=map(hr%12,0,12,0,360);


 push();
 rotate(scAngle);
 strokeWeight(7)
 stroke("red");
 line(0,0,100,0);
 pop()

 push();
 rotate(mnAngle);
 strokeWeight(7)
 stroke("blue");
 line(0,0,75,0);
 pop()

 push();
 rotate(hrAngle);
 strokeWeight(7)
 stroke("yellow");
 line(0,0,50,0);
 pop()
 stroke("orange")
 point(0,0)
 stroke("red")
 arc(0,0,300,300,0,scAngle)
  
 stroke("blue")
 arc(0,0,280,280,0,mnAngle);

 stroke("yellow")
 arc(0,0,260,260,0,hrAngle);
}