// Voyager class object //
var Voyager = {
    x: 0, //Initial x position //
    y: 50, //Initial y position //
    image_src_off : "images/Voyager_lights_off.png",
    image_src_on : "images/Voyager_lights_on.png"
};

// Create and attribute a voyager image tag with a source image //
var voyager_off = document.createElement("img");
voyager_off.setAttribute("src", Voyager.image_src_off );

var voyager_on = document.createElement("img");
voyager_on.setAttribute("src", Voyager.image_src_off);


// When the document is loaded, go to loadHandler for the setup //
window.addEventListener("DOMContentLoaded", loadHandler);
function loadHandler(){
    // Create the event listener for a keypress //
    document.addEventListener("keypress", keypressHandler);
    drawFrame();
}




// If a key is pressed, see if it is w or s and move Voyager accordingly//
function keypressHandler(event){
    if (event.key == "w" && Voyager.y >= 0){    Voyager.y -= 15;}
    else if (event.key == "s" && Voyager.y <= canvas1.height-voyager_off.height*0.5){   Voyager.y += 15;}
}
