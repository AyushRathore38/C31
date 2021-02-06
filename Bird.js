class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }
/*
position1 = [x1,y1]
position2 = [x2,y2]

this.trajectory = [position1, position2, position3, position4, position5, position6,......];
this.trajectory = [ [x1,y1], [x2,y2], [x3,y3], [x4,y4], [x5,y5], [x6,y6],......];


*/ 
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //  [100,105], [105, 110], [106, 115], [110,120],....
    if(this.body.position.x > 200 && this.body.velocity.x > 10) {
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);   //this.trajectory = [[100,105],[105, 110],[106, 115],[110,120],..]
    }
    for(var i = 0; i < this.trajectory.length; i++){

      image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1]);

    }

    super.display(); 
  }
}
