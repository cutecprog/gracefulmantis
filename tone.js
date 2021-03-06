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
        sample_rate: 3000,
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
        genTone: function(step, i, length)
        {
                tone = [];
                for (var j=0; j < 50; i++, j++) {
                        tone[tone.length] = 127.5*Math.sin(i*step) * (j/50.0)
                                                        + 127.5;
                }
                for (; i < length - 50; i++) {
                        tone[tone.length] = 127.5*Math.sin(i*step) + 127.5;
                }
                for (var j=50; i < length; i++, j--) {
                        tone[tone.length] = 127.5*Math.sin(i*step) * (j/50.0)
                                                        + 127.5;
                }
                return tone;
        },
        addTone: function(hertz, length)
        {
                length += this.raw.length;
                var i = this.raw.length;
                var step = 2*Math.PI/(this.sample_rate/hertz);
                tone = this.genTone(step, i, length);
                for (var j=0; i < length; i++, j++) {
                        this.add(tone[j]);
                }
        },
        insertTone: function(position, hertz, length)
        {
                length += position; 
                for (var j=this.raw.length; j < length; j++) {
                        this.raw[j] = 128;
                }
                var i = position;
                var step = 2*Math.PI/(this.sample_rate/hertz);
                tone = this.genTone(step, i, length);
                for (var j=0; i < length; i++, j++) {
                        this.insert(i, tone[j]);
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
/*
data.insertTone(800,  440, 8000);
data.insertTone(3200, 600, 8009);*/

var scale = [0,1,2,3,4,5,6,7,8,9,10,11];

for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.addTone(twelveTone(n*100), 750);
        }
}

for (var j=0; j < 12; j++) {
        scale = shuffled(scale);
        for (var i=0; i < 12; i++) {
                n = scale[i] - 4;
                data.insertTone(j*9000+i*750, twelveTone((n-4)*100), 750);
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
