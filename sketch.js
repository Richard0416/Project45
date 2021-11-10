var girl;
var wall1, wall2, wall3, wall4;
var ball;


function preload(){
girlImage= loadImage("Images/girlImage.png");
wallImage= loadImage("Images/wallImage.png");
}


function setup(){

createCanvas(900,700);
girl=createSprite(300,100, 10,20);
girl.addImage(girlImage);
girl.scale=.1;
wall1= createSprite(700,500, 80, 10);
wall1.addImage(wallImage);
wall1.scale=.1;
wall2= createSprite(700,200, 80, 10);
wall2.addImage(wallImage);
wall2.scale=.1;
wall3= createSprite(200, 700, 10,80);
wall3.addImage(wallImage);
wall3.scale=.1;
wall4= createSprite(200, 200, 10,80);
wall4.addImage(wallImage);
wall4.scale=.1;


}

function draw(){
background("yellow");
drawSprites();

}