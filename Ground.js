class Ground{
    constructor(){
        var options = {isStatic: true}

        this.ground = Bodies.rectangle(750,595,1500,10,options)

        World.add(world, this.ground)
        
        }

        display() {

        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1500,10);

    }

}