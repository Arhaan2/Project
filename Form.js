class Form
{
    constructor()
    {
        this.input=createInput("Name-");
        this.button=createButton("Play");
        this.greeting=createElement("H3");
        this.reset=createButton("Reset");

    }

    display()
    {
        var title= createElement("H2");
        title.html("Car Racing");
        title.position(displayWidth/2-50,0);
        //var input= createInput("Name-");
       // var button=createButton("Play");
      //var greeting=createElement("H3");
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hi- "+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
        
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}