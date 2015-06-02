var data = [];

for (j=0; j <= 128; j++) {
        for (i=2000*j; i<2000*(j+1); i++) {
                if (i%j < j/2)
                        data[i] = 0;
                else {
                        x = i % 256;
                        data[i] = Math.round( 127.5 * Math.cos( 
                                        Math.PI*x/1000+Math.PI)+1);
                }
        }
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
