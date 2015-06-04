var data = [];

for (j=0; j <= 128; j++) {
        for (i=2000*j; i<2000*(j+1); i++) {
                step = Math.PI/Math.sqrt(j%12 + 4);
                data[i] = Math.round(127.5*Math.sin(i * step)+127.5);
                //alert(data[i]);
        }
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
