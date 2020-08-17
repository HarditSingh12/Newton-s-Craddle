class Bob{
    constructor(x,y,width,height){
        var options={
            restitution :1
        }
       this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.body.width = width;
        this.body.height = height;
    }
    display(){
        var pos = this.body.position;
       
        rect(pos.x,pos.y,this.width,this.height);
    }
}