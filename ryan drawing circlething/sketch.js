function setup() {
  createCanvas(600,600)
  background(0,255)
  
  

}

function draw() {
  stroke(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX, mouseY,random(30,100));
  strokeWeight(30);
  line(mouseX,mouseY,pmouseX,pmouseX);
}
  
  function mousePressed () {
    background(0,255)
    rect(mouseX, mouseY,30,50)
    
  }
  