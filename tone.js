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
                var start_tone = this.raw[this.raw.length]/2
                for (var i=1; i < 10; i++) {
                        this.raw[i] = Math.round( Math.min( 
                                        this.raw[this.raw.length-10+i]*((10-i)/10.0)
                                        + start_tone * (i/10.0), 255) );
                }
                for (var i=this.raw.length; i < length; i++) {
                        this.raw[i] = Math.round( 127.5*Math.sin(i * step)
                                                + 127.5 );
                }
        },
        insertTone: function(position, hertz, length)
        {
                length += position; 
                for (var i=this.raw.length; i < length; i++) {
                        this.raw[i] = 0;
                }
                var step = 2*Math.PI/(this.sample_rate/hertz);
                for (var i=position; i < length; i++) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 + Math.round(
                                                64*Math.sin(i * step)
                                                + 64), 255) );
                }
        }
}

var c_major = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
/*data.addTone(c_major[0], 16000);
data.insertTone(0, c_major[2], 16000);
data.insertTone(0, c_major[4], 16000);
*/
var scale = [0,1,2,3,4,5,6,7,8,9,10,11];
for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.addTone(twelveTone(n), 500);
        }
}
/*
for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.insertTone(j*24000+i*2000+16000, twelveTone(n-4), 2000);
        }
}
*/
var ctx = document.getElementById('content').getContext('2d');
ctx.beginPath();
for (var i=0; i < 600; i++) {
        ctx.rect(data.raw[i], i, 64, 1);
}
ctx.fillStyle="#FFF";
ctx.fill();
ctx.clearRect(0, 0, 350, 50);

setInterval(function() {
        ctx.beginPath();
        ctx.rect(data.raw[i], (i)%600,  64, 1);
        ctx.fill();
        ctx.clearRect(0, (i+50)%600, 350, 2);
        i++;
}, 10);

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
