var width, height, radius, curveSlider;
function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
    curveSlider = createSlider(0, 10, 2, 0.01)
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    translate(width/2, height/2); //center shape
    var shape = new Ellipse(200, 100, curveSlider.value());
    beginShape();
    for(var theta = 0; theta < TWO_PI; theta += 0.1){
        var x = shape.getX(theta);
        var y = shape.getY(theta);
        vertex(x, y);
    }
    endShape(CLOSE);
}


