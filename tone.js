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

var c_major = [30.58, 27.24, 24.27, 22.91, 20.41, 18.18, 16.2, 15.29]

for (var i=0; i < c_major.length; i++)
        data.addTone(c_major[i], 4000);

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
audio.play();
