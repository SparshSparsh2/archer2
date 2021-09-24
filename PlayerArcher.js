class PlayerArcher {
  constructor(x,y,w,h,angle) 
  {
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.angle=angle
    this.playerimage = loadImage("assets/player.png","assets/playerArcher.png");
    this.baseImage = loadImage("assets/base.png")
  }
  display()
  {
    push();
    pop();

  }
}