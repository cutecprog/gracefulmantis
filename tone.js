var data = [];

for (j=0; j <= 128; j++) {
        var n = Math.round( 12 * Math.random()) + 4;
        for (i=2000*j; i<2000*(j+1); i++) {
                var step = Math.PI/Math.sqrt(n);
                data[i] = Math.round(127.5*Math.sin(i * step)+127.5);
                //alert(data[i]);
        }
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
