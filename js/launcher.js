class Launcher
{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){

        
        

        if(this.launcher.bodyA){
            var pointA = this.launcher.pointA.position;
            var pointB = this.pointB;
            strokeWeight(7);
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           stroke(48,22,8);

           
                
    }
    }
    
}