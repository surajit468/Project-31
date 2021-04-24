class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.lineObj= Constraint.create(options);
        World.add(world, this.lineObj);
    }

      display(){
          if(this.lineObj.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
        
    }
    fly() {this.lineObj.bodyA=null};
        
}
