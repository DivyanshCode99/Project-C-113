function preload(){

}
function setup(){
    canvas=createCanvas(800,480);
    canvas.position(375,190);
    video=createCapture(VIDEO);
    video.hide();
};
function draw(){
    
   
    fill(173,216,230);
    stroke('red');
    strokeWeight(20);
    rect(55, 60, 700, 375);
    
    
    image(video,55,60,700,375);
    
    //first outer circle
   // fill(0,128,0);
   // stroke( 0,128,0);
    fill('yellow');
    stroke('yellow');
    circle(60, 60, 80);
    circle(745, 60, 80);
    circle(525, 60, 80);
    circle(275, 60, 80);
    circle(60, 420, 80);
    circle(745, 420, 80);
    circle(525, 420, 80);
    circle(275, 420, 80);
    circle(60, 240, 80);
    circle(745, 240, 80);
    

    fill('red');
    stroke('red');
    circle(60, 60, 40);
    circle(745, 60, 40);
    circle(525, 60, 40);
    circle(275, 60, 40);
    circle(60, 420, 40);
    circle(745, 420, 40);
    circle(525, 420, 40);
    circle(275, 420, 40);
    circle(60, 240, 40);
    circle(745, 240, 40);

    fill(0,128,0);
    stroke( 0,128,0);

    circle(60, 60, 20);
    circle(745, 60, 20);
    circle(525, 60, 20);
    circle(275, 60, 20);
    circle(60, 420, 20);
    circle(745, 420, 20);
    circle(525, 420, 20);
    circle(275, 420, 20);
    circle(60, 240, 20);
    circle(745, 240, 20);

    fill('red');
    stroke('red');
    circle(60, 60, 10);
    circle(745, 60, 10);
    circle(525, 60, 10);
    circle(275, 60, 10);
    circle(60, 420, 10);
    circle(745, 420, 10);
    circle(525, 420, 10);
    circle(275, 420, 10);
    circle(60, 240, 10);
    circle(745, 240, 10);

    fill(0,128,0);
    stroke( 0,128,0);

    circle(60, 60, 5);
    circle(745, 60, 5);
    circle(525, 60, 5);
    circle(275, 60, 5);
    circle(60, 420, 5);
    circle(745, 420, 5);
    circle(525, 420, 5);
    circle(275, 420, 5);
    circle(60, 240, 5);
    circle(745, 240, 5);

    
}
function take_snapshot(){
    save("Selfie.png");
}