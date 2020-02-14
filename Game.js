class Game
{
    constructor()
    {

    }

     getState()
     {
         var gamestateref= database.ref("gameState");
         gamestateref.on("value",function(data)
         {
             gameState=data.val();
         });
     }

     update(state)
     {
         database.ref("/").update({
             gameState:state
         });
     }

     async start()
     {
         if(gameState==0)
         {
             player=new Player();
             var playercountref=await database.ref("playerCount").once("value");
             if(playercountref.exists())
             {
                 //console.log(playercountref);
                 playerCount=playercountref.val();
                 player.getCount();
             }
             form=new Form();
             form.display();
         }

         car1=createSprite(100,200);
         //car1.addImage(car1_img);
         console.log(car1_img);

         car2=createSprite(300,200);
         //car2.addImage(car2_img);

         car3=createSprite(500,200);
         //car3.addImage(car3_img);

         car4=createSprite(700,200);
         //car4.addImage(car4_img);

         cars=[car1,car2,car3,car4];

     }

     play()
     {
         form.hide();
         Player.getPlayerInformation();
         if(allPlayers!=undefined)
         {
            background("#C68767");
            //image(track_img,10,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=0;
            var y=0;
         var displayPosition= 330;
         for(var plr in allPlayers)
         {
             //console.log(cars[0].x);
             index=index+1;
             x=x+200;//Positioning of the Car away from each other Along Absicca
             y=displayHeight-allPlayers[plr].Distance;
             cars[index-1].x=x;
             cars[index-1].y=y;
             if(index==player.index)
             {
                 cars[index-1].shapeColor="red";
                 camera.position.x=displayWidth/2;
                 camera.position.y=cars[index-1].y;               
             }
         }
        }
         if(keyDown(UP_ARROW)&&player.index!=null)
         {
             player.distance+=50;
             player.update();
         }

         drawSprites();

     }
}