var canvas;
var backgroundImage;
var gameState=0;
var playerCount;
var database;
var form;
var player;
var game;
var allPlayers;
var cars;
var car1,car2,car3,car4;
var car1_img;
var car2_img;
var car3_img;
var car4_img;
var ground_img;
var track_img,test;

function preLoad()
{
     car1_img=loadImage("../js/images/car1.png");
     car2_img=loadImage("images/car2.png");
     car3_img=loadImage("images/car3.png");
     car4_img=loadImage("images/car4.png");
     track_img=loadImage("images/track.jpg");
     ground_img=loadImage("images/ground.png");
     test=loadImage("track.png");
}
function setup()
{
    database=firebase.database();
    canvas= createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();

}

function draw()
{
    console.log(test);
    if(playerCount==4)
    {
        game.update(1);
    }

    if(gameState==1)
    {
        clear();
        game.play();
    }
}