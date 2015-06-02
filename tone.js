var data = [];
var a = 1;
var b = 1;
for (j=0; j < 256; j++) {
        a = a + b;
        a ^= b;
        b ^= a;
        a ^= b;
        for (var i=0; i<2000; i++) {
                if (Math.round(i/(j))%2)
                        data[2000*j+i] = 128;
                else
                        data[2000*j+i] = 0;
        }
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
