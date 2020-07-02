class NPC1{
    constructor(x,y,width,height){
        var options={
            density:1,
            friction:0.3,
            restitution:0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("Red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}