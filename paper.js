class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction = 0.5,
          density
      }
      this.x=x;
      this.y=y;
      this.r=r;

     
      
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      push ()
      translate (paperpos.x,paperpos,y)
      ellipseMode(CENTER);

      fill("Cyan");
      stroke ("Golden");
      strokeWeight(7)
      ellipse(0,0,this.r,this.r);
      pop ()
    }
  }