var data = [];

for (j=2; j <= 128; j++) {
        for (i=2000*j; i<2000*(j+1); i++) {
                step = Math.PI/j;
                data[i] = Math.round(127*Math.sin(i * step)+127);
                //alert(data[i]);
        }
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
