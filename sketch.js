var canvas;
var block1,block2,block3,block4;
var ball, edges;
var sound;

function preload(){
    // load sound here
    sound = loadSound("Mymusic.mp3");
}


function setup(){
    canvas = createCanvas(825,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "Red";

    ball = createSprite(random(20,750),random(20,100), 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY=10;
    ball.velocityX=10;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        sound.stop();
       sound.play();
    }
    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
    	sound.stop();
    	sound.play();
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
        
    }
    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
    	sound.stop();
    	sound.play();
        ball.shapeColor = "green";
        //write code to set velocityX and velocityY of ball as 0
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    	sound.stop();
    	sound.play();
        ball.shapeColor = "red";
        //write code to set velocityX and velocityY of ball as 0
    }

    if(block1.isTouching(ball)){
    	ball.velocityY= -1*(ball.velocityY);
        ball.velocityX= -1*(ball.velocityX);
    }

    if(block2.isTouching(ball)){
    	ball.velocityY= -1*(ball.velocityY);
        ball.velocityX= -1*(ball.velocityX);
    }
    
    if(block3.isTouching(ball)){
    	ball.velocityY= -1*(ball.velocityY);
        ball.velocityX= -1*(ball.velocityX);
    }
    
    if(block4.isTouching(ball)){
    	ball.velocityY= -1*(ball.velocityY);
        ball.velocityX= -1*(ball.velocityX);
    }
    drawSprites();
}
