var data = [];
for (var i=0; i<100000; i++)
        if (Math.round(i/1000)%2)
                data[i] = 212;
        else
                data[i] = 128; 
var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
