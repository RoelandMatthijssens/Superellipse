function Circle(){
    this.getX = function getX(theta){
        return radius * sin(theta);
    };
    this.getY = function getY(theta){
        return radius * cos(theta);
    };
}

function Ellipse(horizontalDiameter, verticalDiameter, curve){
    this.a = horizontalDiameter;
    this.b = verticalDiameter;
    this.n = curve;
    this.getX = function getX(theta){
        return pow(abs(cos(theta)), 2/this.n) * this.a * sgn(cos(theta));
    };
    this.getY = function getY(theta){
        return pow(abs(sin(theta)), 2/this.n) * this.b * sgn(sin(theta));
    };
}

function sgn(x) {
    if (x > 0){
        return 1;
    } else if (x < 0){
        return -1;
    } else {
        return 0;
    }
}
