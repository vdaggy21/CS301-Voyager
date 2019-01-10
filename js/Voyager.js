// Voyager class object //
var Voyager = {
    x: 270, //Initial x position //
    y: 470, //Initial y position //

    image : "img/Voyager_lights.gif",

    move_up : function(){
        y += 1; //Changes y coordinate by +1 (probably needs to be different when implementing control script)
    },
    move_down : function(){
        y -= 1; //Changes y coordinate by -1 (probably needs to be different when implementing control script)//
    }
};