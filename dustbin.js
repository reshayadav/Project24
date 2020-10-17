class Dustbin{
    constructor(x,y,w,h){

        this.body=Bodies.rectangle(x,y,w,h);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.body);

    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,this.width,this.height);
        

    }
}