class BalaCanhao {
    constructor(posx, posy){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(posx, posy, this.raio, options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }

    mostrar(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop();
    }
    atirar(){
        var newAngle = canhao.ang - 28;
         newAngle = newAngle*(3.14/180);
         var velocity = p5.Vector.fromAngle(newAngle);
          velocity.mult(0.5);
    Matter.Body.setStatic(this.body,false);   
    Matter.Body.setVelocity(this.body,{ x: velocity.x * (180/3.14), y: velocity.y * (3.14/180)}); 
    }
}