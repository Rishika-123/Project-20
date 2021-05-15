var canvas;
var music;
var block1, block2, block3, block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(950,700);

    
    block1 = createSprite(100,690,200,20);
    block1.shapeColor =(rgb(255,105,180));

    block2 = createSprite(350,690,200,20);
    block2.shapeColor =(rgb(255,0,0));

    block3 = createSprite(600,690,200,20);
    block3.shapeColor = (rgb(0,0,255));

    block4 = createSprite(850,690,200,20);
    block4.shapeColor =(rgb(0,255,0));

    
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor =(rgb(255,250,250));
    ball.velocityY = 5;

}

function draw() {
    background(rgb(255));
  
    edgeSprite = createSprite(475,700,950,20);
    edgeSprite.visible = false;
    ball.bounceOff(edgeSprite);

    
    if(ball.isTouching(block1)){
        ball.shapeColor = (rgb(255,105,180));
        music.play();
        ball.bounceOff(block1);
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = (rgb(255,0,0));
        music.play();
        ball.bounceOff(block2);
    }
    if(ball.isTouching(block3)){
        ball.shapeColor = (rgb(0,0,255));
        music.play();
        ball.bounceOff(block3);
    }
    if(ball.isTouching(block4)){
        ball.shapeColor = (rgb(0,255,0));
        music.play();
        ball.bounceOff(block4);
    }

    drawSprites();
}