class Chain{
    constructor(b1,b2){
        var options = {
            bodyA:b1,
        bodyB:b2,
    length:10,
    stiffness:0.04,
        }
       this.chain = Constraint.create(options)
        World.add(world,this.chain)   
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(15);
        stroke("orange");
        line(pointA.x,pointA.y,pointB.x,pointB.y)     
    }
}