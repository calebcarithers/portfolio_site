var titleDivWidth, titleDivHeight, titleWidth;
var sketchID;

function setup() {
    titleDivWidth = select('#calebcarithers').width;
    titleDivHeight = select('#calebcarithers').height;
    
    var canvas = createCanvas(titleDivWidth, titleDivHeight);
    
    canvas.parent('calebcarithers');
    
    titleWidth = textWidth('caleb carithers');
    
    console.log("hello there. my name is caleb. im a recent grad interested in human interaction with technology. id love to chat! calebcarithers@me.com");
}

function draw() {
    background(255,255,255);

    titleNew.titleDraw();

//    if (sketchID == 0)
//        {
//            circleNew.circleDraw();
//        } else if (sketchID == 1) {
//            rectNew.rectDraw();
//        } else if (sketchID == 2){
//            lineNew.lineDraw();
//        } else {
//            titleNew.titleDraw();
//        }
    
//    let title = 'caleb carithers';
//    fill(255);
//    textSize(12);
//    textFont('monospace');
//    text(title, (titleDivWidth/2)-(titleWidth/1.5), titleDivHeight-4);
}

function windowResized() {
    titleDivWidth = select('#calebcarithers').width;
    resizeCanvas(titleDivWidth, titleDivHeight);
    
    background(255,0,0);
}

function pickSketch() {
//    sketchID = Math.floor(Math.random()*3);
    sketchID = 3;
}


var circleNew = {
    circleDraw : function() {
        for (var i = 0; i < 100; i++)
        {
            noStroke();
            circle(random(titleDivWidth), random(titleDivHeight), random(900));
            fill(random(255), random(255), random(255));
            //fill(255);
        }
    }
}

var rectNew = {
    rectDraw : function() {
        for (var i = 0; i < 100; i++)
        {
            noStroke();
            rect(random(-100, titleDivWidth), random(titleDivHeight), random(titleDivWidth), random(titleDivHeight));
            fill(random(0,255), random(0,100), random(0,255));
            //fill(255);
        }
    }
}

var lineNew = {
    lineDraw : function() {
        for (var i = 0; i < 100; i++)
        {
            //noStroke();
            line(random(0, titleDivWidth), random(titleDivHeight), random(titleDivWidth), random(titleDivHeight));
            stroke(0, 0, 0);
            //fill(255);
        }
    }
}

var titleNew = {
    titleDraw : function() {
        background(255);
        fill(0);
        textSize(35);
        textFont('Roboto');
        textStyle(BOLD);
        text("Caleb Carithers", (titleDivWidth/2)-(titleWidth*1.4), titleDivHeight-27);
    }
}
