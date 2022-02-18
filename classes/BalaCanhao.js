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
}