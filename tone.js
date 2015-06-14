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
        addTone: function(hertz, length)
        {
                length += this.raw.length;
                var step = 2*Math.PI/(this.sample_rate/hertz);
                var i = this.raw.length;
                for (var j=0; j < 50; i++, j++) {
                        this.raw[i] = Math.round( 127.5*Math.sin(i * step)
                                                * (j/50.0)
                                                + 127.5 );
                }
                for (; i < length - 50; i++) {
                        this.raw[i] = Math.round( 127.5*Math.sin(i * step)
                                                + 127.5 );
                }
                for (var j=50; i < length; i++, j--) {
                        this.raw[i] = Math.round( 127.5*Math.sin(i * step)
                                                * (j/50.0)
                                                + 127.5 );
                }
        },
        insertTone: function(position, hertz, length)
        {
                length += position; 
                var i;
                for (var i=this.raw.length; i < length; i++) {
                        this.raw[i] = 0;
                }
                var step = 2*Math.PI/(this.sample_rate/hertz);
                i = position;
                /*for (var j=0; j < 50; i++, j++) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 
                                                + Math.round(64*Math.sin(i * step)
                                                * (j/50.0)
                                                + 64), 255) );
                }*/
                for (; i < length; i++) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 + Math.round(
                                                64*Math.sin(i * step)
                                                + 64), 255) );
                }
                /*for (var j=50; i < length; i++, j--) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 
                                                + Math.round(64*Math.sin(i * step)
                                                * (j/50.0)
                                                + 64), 255) );
                }*/
        }
}

var c_major = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
/*data.addTone(c_major[0], 16000);
data.insertTone(0, c_major[2], 16000);
data.insertTone(0, c_major[4], 16000);
*/
var scale = [0,1,2,3,4,5,6,7,8,9,10,11];

/*for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.addTone(twelveTone(n), 500);
        }
}*/

for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.insertTone(j*6000+i*500, twelveTone(n-4), 500);
        }
}

var ctx = document.getElementById('content').getContext('2d');
ctx.beginPath();
ctx.moveTo(data.raw[i], 0);
var i;
for (i=1; i < 1200; i++) {
        ctx.lineTo(data.raw[i], i);
}
ctx.strokeStyle="#FFF";
ctx.fillStyle="#FFF";
ctx.stroke();
ctx.clearRect(0, 0, 350, 50);

setInterval(function() {
        if (i%600==0) {
                ctx.beginPath();
                for (var j=-600; j < 600; j++) {
                        ctx.lineTo(data.raw[i+j], j+600);
                }
                ctx.clearRect(0, 0, 350, 1200);
                ctx.stroke();
        }
        document.getElementById('window').scrollTop = i%600;
        i++;
}, 10);

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
