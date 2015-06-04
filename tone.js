var data = [];
var scale = [4,5,6,7,8,9,10,11,12,13,14,15,16];

scale.sort(function() {
  return .5 - Math.random();
});

addTone = function(data, n, length)
{
        for (i=data.length; i<length; i++) {
                var step = Math.PI/Math.sqrt(n);
                data[i] = Math.round(127.5*Math.sin(i * step)+127.5);
        }
}

for (j=0; j <= 128; j++) {
        var n = Math.round( 12 * Math.random()) + 4;
        var length = data.length+2000;
        addTone(data, n, length);
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
