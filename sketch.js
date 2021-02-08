var cat ,mouseImg,garden,catImg1,catImg2,catImg3,catImg4,mouseImg1,mouseImg2,mouseImg3,mouseImg4,gardenImg;

function preload() {
    //load the images 
    gardenImg=loadAnimation("garden.png")
    catImg1=loadAnimation("cat1.png")
    catImg2=loadAnimation("cat2.png")
    catImg3=loadAnimation("cat3.png")
    catImg4=loadAnimation("cat4.png")
    mouseImg1=loadAnimation("mouse1.png")
    mouseImg2=loadAnimation("mouse2.png")
    mouseImg3=loadAnimation("mouse3.png")
    mouseImg4=loadAnimation("mouse4.png")
    
}


function setup(){
    createCanvas(700,800);
    //create tom and jerry sprites here
    garden=createSprite(250,250)
garden.addAnimation("g",gardenImg)
cat=createSprite(200,400,10,10)
cat.addAnimation("c",catImg1)
cat.addAnimation("c",catImg2)
cat.addAnimation("c",catImg3)
cat.addAnimation("c",catImg4)
cat.scale=0.05
mouseImg=createSprite(300,450,50,10)
mouseImg.addAnimation("m",mouseImg1)
mouseImg.addAnimation("m",mouseImg2)
mouseImg.addAnimation("m",mouseImg3)
mouseImg.addAnimation("m",mouseImg4)
mouseImg.scale=0.05



}

function draw() {

    background("pink");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-2
    cat.addAnimation("catrunning",catImg2)
    cat.changeAnimation("catrunning")
}

}
