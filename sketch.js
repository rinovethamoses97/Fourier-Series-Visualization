let angle=0;
let n=1;
let wave=[];
function setup(){
    createCanvas(900,600);
}
function draw(){
    background(0);
    let x=0;
    let y=0;
    for(var i=1;i<=7;i+=2){
        n=i;
        let prevx=x;
        let prevy=y;
        angleMode(DEGREES);
        let radius=75*(4/(PI*n));
        x+=radius*cos(angle*n);
        y+=radius*sin(angle*n);
        stroke(255);
        noFill();
        ellipse(200+prevx,200+prevy,radius*2,radius*2);
        stroke(255);
        line(200+prevx,200+prevy,200+x,200+y);
        ellipse(200+x,200+y,8,8);
    }
    wave.unshift(y);
    stroke(255);
    line(200+x,200+y,700,200+wave[0])
    beginShape();
    for(var i=wave.length;i>=0;i--){
        vertex(700+i,200+wave[i]);
    }
    endShape();
    if(wave.length>200){
        wave.pop();
    }
    angle+=2;
}