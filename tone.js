var scale = [4,5,6,7,8,9,10,11,12,13,14,15,16];

data =
{
        raw: [],
        addTone: function(n, length)
        {
                length += this.raw.length;
                for (var i=this.raw.length; i < length; i++) {
                        var step = Math.PI/Math.sqrt(n);
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
                        var step = Math.PI/Math.sqrt(n);
                        this.raw[i] = Math.min( this.raw[i] + Math.round(
                                                127.5*Math.sin(i * step)
                                                + 127.5), 255);
                }
        }
}

/*for (var j=0; j<32; j++) {
        scale.sort(function() {
                return .5 - Math.random();
        });
        for (var i=0; i<12; i++) {
                var n = scale[i];
                var length = 2000;
                data.addTone(n, length);
        }
}*/
for (var j=0; j<32; j++) {
        scale.sort(function() {
                return .5 - Math.random();
        });
        for (var i=0; i<12; i++) {
                var n = scale[i];
                var length = 2000;
                data.insertTone(j*24000+i*2000, n, length);
        }
}
alert(data.raw);

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI); // create the HTML5 audio element
audio.play();
