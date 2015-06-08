var scale = [4,5,6,7,8,9,10,11,12,13,14,15,16];

data =
{
        raw: [],
        sample_rate: 8000,
        addTone: function(n, length)
        {
                length += this.raw.length;
                for (var i=this.raw.length; i < length; i++) {
                        //var step = Math.PI/Math.sqrt(n);
                        var step = 2*Math.PI/(n);
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
                        //var step = Math.PI/Math.sqrt(n);
                        var step = 2*Math.PI/(n);
                        this.raw[i] = Math.min( this.raw[i]/2 + Math.round(
                                                64*Math.sin(i * step)
                                                + 64), 255);
                }
        }
}
/*
data.addTone(4, 2000);
data.addTone(6, 2000);
data.addTone(8, 2000);
data.addTone(9, 2000);
data.addTone(11, 2000);
data.addTone(13, 2000);
data.addTone(15, 2000);
data.addTone(16, 2000);

data.addTone(28, 2000);
data.addTone(27, 2000);
data.addTone(25, 2000);
data.addTone(23, 2000);
data.addTone(21, 2000);
data.addTone(20, 2000);
data.addTone(18, 2000);
data.addTone(16, 3000);

data.addTone(28, 8000);
data.insertTone(data.raw.length - 8000, 16, 8000);
*/

var c_major = [30.58, 27.24, 24.27, 22.91, 20.41, 18.18, 16.2, 15.29]

/*data.addTone(30.58, 16000);
data.insertTone(data.raw.length - 12000, 24.27, 16000);
data.insertTone(data.raw.length - 8000, 20.41, 16000);*/

for (var i=0; i < c_major.length; i++)
        data.addTone(c_major[i], 4000);


/*
for (var j=0; j<32; j++) {
        scale.sort(function() {
                return .5 - Math.random();
        });
        for (var i=0; i<12; i++) {
                var n = scale[i];
                var length = 3000;
                data.addTone(n, length);
        }
}
for (var j=0; j<16; j++) {
        scale.sort(function() {
                return .5 - Math.random();
        });
        for (var i=0; i<12; i++) {
                var n = scale[i] + 128;
                var length = 6000;
                data.insertTone(j*24000+i*2000, n, length);
        }
}
for (var j=0; j<64; j++) {
        scale.sort(function() {
                return .5 - Math.random();
        });
        var octave = 3 * Math.random() * 12; 
        for (var i=0; i<12; i++) {
                var n = scale[i] + octave;
                var length = 1500;
                data.insertTone(j*24000+i*2000, n, length);
        }
}
*/
var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
audio.play();
