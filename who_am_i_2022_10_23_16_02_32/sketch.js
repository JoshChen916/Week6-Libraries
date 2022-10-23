// referrence & inspiration: https://www.youtube.com/watch?v=587qclhguQg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=5
let pk3
function preload(){
  pk3=loadImage("pk3.png")
}
function setup() {
  frameRate(20);
  canvas=createCanvas(400, 400);

  createP('');
  slider=createSlider(0,200,0);
}
function changeColor(){
  bgcolor = color(random(255))
}

function draw() {
  
 
  background(0,random(250),random(255));
  fill(255,0,175);
  image(pk3,100,100,slider.value(),slider.value())
  textSize(40);
  text("Guess who am I",30,80)
  fill(250);
}