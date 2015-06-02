var data = [];
var a = 1;
var b = 1;
for (j=0; j < 256; j++) {
        a = a + b;
        a ^= b;
        b ^= a;
        a ^= b;
        for (var i=0; i<4000; i++)
                if (Math.round(i/(b%8+1))%2)
                        data[4000*j+i] = 128;
                else
                        data[4000*j+i] = 0 + Math.round(16*Math.random());
}
var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
