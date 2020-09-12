class Plinkos {
    constructor(x, y) {
        var options = {
            isStatic : true,
            restitution:0.3,
            friction:0.5,
            density:1.2
          
        }
        this.body = Bodies.circle(x,y,10, options,);
        //this.width = 10;
        //this.height = 5;
       
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        
        
        
        fill("white");
        
       
        ellipseMode (RADIUS);
        ellipse (pos.x, pos.y,10,10);
        
      }
      
    };

    
    
