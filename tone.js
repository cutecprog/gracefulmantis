twelveTone = function(index)
{
        return 440 * Math.pow(2, index/1200.);
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
        add: function(value)
        {
                this.raw[this.raw.length] = Math.round(value);
        },
        insert: function(position, value)
        {
                while (position > this.raw.length)
                        this.add(128);
                this.raw[position] = Math.round( Math.min(
                                                this.raw[position]/2 + value/2,
                                                255 ) );
        },
        addTone: function(hertz, length)
        {
                length += this.raw.length;
                var step = 2*Math.PI/(this.sample_rate/hertz);
                var i = this.raw.length;
                for (var j=0; j < 50; i++, j++) {
                        this.add(127.5*Math.sin(i*step) * (j/50.0) + 127.5);
                }
                for (; i < length - 50; i++) {
                        this.add(127.5*Math.sin(i*step) + 127.5);
                }
                for (var j=50; i < length; i++, j--) {
                        this.add(127.5*Math.sin(i*step) * (j/50.0) + 127.5);
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
                for (var j=0; j < 50; i++, j++) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 
                                                + Math.round(64*Math.sin(i * step)
                                                * (j/50.0)
                                                + 64), 255) );
                }
                for (; i < length - 50; i++) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 + Math.round(
                                                64*Math.sin(i * step)
                                                + 64), 255) );
                }
                for (var j=50; i < length; i++, j--) {
                        this.raw[i] = Math.round( Math.min( this.raw[i]/2 
                                                + Math.round(64*Math.sin(i * step)
                                                * (j/50.0)
                                                + 64), 255) );
                }
        }
}

/*for (var i=100; i < 640; i++)
        data.addTone(i,50);
for (var i=100; i < 640; i++)
        data.addTone(i,Math.random()*100);*/
/*for (var i=0; i < 1200; i+=100)
        data.addTone(twelveTone(i),8000);
*/
/*for (var j=0; j< 32; j++) {
        data.addTone(twelveTone(-4500), 8000);
        data.insertTone(j*800, twelveTone(-4200), 8000);
}
for (var j=0; j < 256000; j++)
        data.raw[j] = Math.min( data.raw[j] + (Math.random()/Math.random()), 255);
for (var j=0; j < 256000; j++)
        data.raw[j] = Math.min( data.raw[j] + (Math.random()*32), 255);
*/

var scale = [0,1,2,3,4,5,6,7,8,9,10,11];

for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.addTone(twelveTone(n*100), 2000);
        }
}

for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.insertTone(j*24000+i*2000, twelveTone((n-4)*100), 2000);
        }
}

var ctx = document.getElementById('content').getContext('2d');
ctx.strokeStyle="#FFF";
var i=0;
setInterval(function() {
        if (i%600==0) {
                ctx.beginPath();
                ctx.moveTo(data.raw[i], 0);
                for (var j=1; j < 1200; j++) {
                        ctx.lineTo(data.raw[i+j], j);
                }
                ctx.clearRect(0, 0, 350, 1200);
                ctx.stroke();
        }
        document.getElementById('window').scrollTop = i%600;
        i++;
}, 1);

t=0;
setInterval(function() {
        t++;
        document.getElementById('info').innerHTML = '<p>'+t+'</p>';
}, 1000);

var wave = new RIFFWAVE(data.raw);       // create the wave file
var audio = new Audio(wave.dataURI);     // create the HTML5 audio element
