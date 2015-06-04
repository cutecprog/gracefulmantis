var data = [];
var scale = [4,5,6,7,8,9,10,11,12,13,14,15,16];

scale.sort(function() {
  return .5 - Math.random();
});

addTone = function(data, n, length)
{
        for (var i=data.length; i<length; i++) {
                var step = Math.PI/Math.sqrt(n);
                data[i] = Math.round(127.5*Math.sin(i * step)+127.5);
        }
}

for (var i=0; i<12; i++) {
        var n = scale[i];
        var length = data.length+2000;
        addTone(data, n, length);
}

var wave = new RIFFWAVE(data);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
