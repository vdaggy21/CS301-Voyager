//Create layers and append them to the div with id of voyager//
var canvas1 = document.createElement("CANVAS");
var divItem = document.getElementById("voyager");
divItem.appendChild(canvas1);
canvas1.setAttribute("class", "myCanvas");
canvas1.setAttribute("id", "layer1");
canvas1.setAttribute("height", "550px");
canvas1.setAttribute("width", "1900px");
canvas1.setAttribute("style", "z-index: 3");
var context1 = canvas1.getContext("2d");

var canvas2 = document.createElement("CANVAS");
divItem.appendChild(canvas2);
canvas2.setAttribute("class", "myCanvas");
canvas2.setAttribute("id", "layer2");
canvas2.setAttribute("height", "550px");
canvas2.setAttribute("width", "1900px");
canvas2.setAttribute("style","z-index: 1");
var context2 = canvas2.getContext("2d");

var canvas3 = document.createElement("CANVAS");
divItem.appendChild(canvas3);
canvas3.setAttribute("class", "myCanvas");
canvas3.setAttribute("id", "layer3");
canvas3.setAttribute("height", "550px");
canvas3.setAttribute("width", "1900px");
canvas3.setAttribute("style","z-index: 2");
var context3 = canvas3.getContext("2d");

var canvas4 = document.createElement("CANVAS");
divItem.appendChild(canvas4);
canvas4.setAttribute("class", "myCanvas");
canvas4.setAttribute("id", "layer4");
canvas4.setAttribute("height", "550px");
canvas4.setAttribute("width", "1900px");
canvas4.setAttribute("style","z-index: 4");
var context4 = canvas4.getContext("2d");


//Create image objects and also declare TranslationPosition variables to be used for each layer (delta is how fast the layer moves) //
// Thank you to Adam Beres-Deak for the article! //
var TranslatePosition = 0;
var bng = document.createElement("img");
bng.setAttribute("src", "images/VoyagerBackground.png");
delta = .15;

var TranslatePosition2 = 0;
var bng2 = document.createElement("img");
bng2.setAttribute("src", "images/VoyagerBackground2.png");
delta2 = 5;

var TranslatePosition3 = 0;
var bng3 = document.createElement("img");
bng3.setAttribute("src", "images/VoyagerBackground3.png");
delta3 = 15;

//Draws the layers that isn't voyager (technically also includes the foreground layer) //
function drawBackground(){
    context2.clearRect(-TranslatePosition,0, canvas2.width, canvas2.height);
    TranslatePosition -= delta;

    // If the Translation exceeds the width of the image, reset the translation by going back the amount taken and setting the TranslationPositon to 0 for each layer //
    if (TranslatePosition < -bng.width)
        {context2.translate(-TranslatePosition,0); TranslatePosition = 0;}
    context2.translate(-delta, 0);
            /* Draws two images, so that the illusion of a seemless loop is created */
    context2.drawImage(bng, 0,0, bng.width, bng.height);
    context2.drawImage(bng, bng.width,0, bng.width, bng.height);

    context3.clearRect(-TranslatePosition2,0, canvas3.width, canvas3.height);
    TranslatePosition2 -= delta2;
    if (TranslatePosition2 < -bng2.width)
        {context3.translate(-TranslatePosition2,0); TranslatePosition2 = 0;}
    context3.translate(-delta2, 0);
            /* Draws two images, so that the illusion of a seemless loop is created */
    context3.drawImage(bng2, 0,0, bng2.width, bng2.height);
    context3.drawImage(bng2, bng2.width,0, bng2.width, bng2.height);

    context4.clearRect(-TranslatePosition3,0, canvas4.width, canvas4.height);
    TranslatePosition3 -= delta3;
    if (TranslatePosition3 < -bng3.width)
        {context4.translate(-TranslatePosition3,0); TranslatePosition3 = 0;}
    context4.translate(-delta3, 0);
            /* Draws two images, so that the illusion of a seemless loop is created */
    context4.drawImage(bng3, 0,0, bng3.width, bng3.height);
    context4.drawImage(bng3, bng3.width,0, bng3.width, bng3.height);

}

function drawFrame() {
    // Clear all of the canvases //
    context1.clearRect(0,0, canvas1.width, canvas1.height);
    // Draw the background then voyager itself //
    drawBackground();
    context1.drawImage(voyager_off, Voyager.x,Voyager.y, voyager_off.width*0.5, voyager_off.height*0.5);        
    // Call function to make a new frame//
    window.requestAnimationFrame(drawFrame);
}

