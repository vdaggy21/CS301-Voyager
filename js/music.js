var music_button = document.getElementById("music_button");
var toggled = false;
var music = document.getElementById("audio1");
music_button.addEventListener("click", function(){
    // If the music is not toggled, make it so //
    if (!toggled){
        toggled = true;
        music_button.value ="Music: On";
        music.play();
    }
    // If the music is toggled, pause it //
    else if (toggled){
        toggled = false;
        music_button.value ="Music: Off";
        music.pause();
    }
});