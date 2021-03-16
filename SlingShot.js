class SlingShot{
constructor (object1,object2)
{
    var options={
bodyA:object1,
bodyB:object2,
length:100,
stiffnesss:0.04
    }
this.band = Matter.Constraint.create(options);
World.add(world,this.band);

}
display(){
  
var pointA=this.band.bodyA.position;
var pointB=this.band.bodyB.position;

line(pointA.x,pointA.y,pointB.x,pointB.y);


}

}