twelveTone = function(index)
{
        return 440 * Math.pow(2, index/12.);
}

shuffled = function(list)
{
        list.sort(function() {
                return .5 - Math.random();
        });
        return list;
}

data =
{
        raw: [],
        sample_rate: 8000,
        addTone: function(n, length)
        {
                length += this.raw.length;
                for (var i=this.raw.length; i < length; i++) {
                        var step = 2*Math.PI/(this.sample_rate/n);
                        this.raw[i] = Math.round( 127.5*Math.sin(i * step)
                                                + 127.5 );
                }
        },
        insertTone: function(position, n, length)
        {
                length += position; 
                for (var i=this.raw.length; i < length; i++) {
                        this.raw[i] = 0;
                }
                for (var i=position; i < length; i++) {
                        var step = 2*Math.PI/(this.sample_rate/n);
                        this.raw[i] = Math.min( this.raw[i]/2 + Math.round(
                                                64*Math.sin(i * step)
                                                + 64), 255);
                }
        }
}

var c_major = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
data.addTone(c_major[0], 16000);
data.insertTone(0, c_major[2], 16000);
data.insertTone(0, c_major[4], 16000);

var scale = [0,1,2,3,4,5,6,7,8,9,10,11];
for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.addTone(twelveTone(n), 2000);
        }
}

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
audio.play();
