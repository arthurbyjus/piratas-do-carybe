class Canhao {
    constructor(posx, posy, largura, altura, angulo){
        this.x = posx;
        this.y = posy;
        this.lar = largura;
        this.alt = altura;
        this.ang = angulo;
        this.imagem= loadImage("./assets/canon.png");
        this.base= loadImage("./assets/cannonBase.png");
    }
    mostrar(){
   push();
  imageMode(CENTER);
  image(this.imagem,this.x,this.y,this.lar,this.alt);
   pop();
   image(this.base,70,20,200,200);
   noFill();
    }
}