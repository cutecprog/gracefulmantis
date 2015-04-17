var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
var disp = document.getElementById('data');
var World = new BitSet(160000);
var time_inactive = 0;
content.scrollLeft = 50;
content.scrollTop = 50;

function writeCell(state,x,y)
{
        xoffset = 800;
        yoffset = 800;
        if(x>200)
                xoffset *= -1;
        if(y>200)
                yoffset *= -1;
        x = x*2 + 200.5;
        y = y*2 + 200.5;
        if(state) {
                ctx.rect(x, y, 1, 1);
                ctx.rect(x+xoffset, y+yoffset, 1, 1);
                ctx.rect(x, y+yoffset, 1, 1);
                ctx.rect(x+xoffset, y, 1, 1);
                World.set(y*400+x, 1);
        } else {
                ctx.clearRect(x, y, 1, 1);
                ctx.clearRect(x+xoffset, y+yoffset, 1, 1);
                ctx.clearRect(x, y+yoffset, 1, 1);
                ctx.clearRect(x+xoffset, y, 1, 1);
        }
}

function readCell(x,y)
{
        x = x*2 + 200.5;
        y = y*2 + 200.5;
        return ctx.getImageData(x,y,1,1).data;
}

function neighbors(x,y)
{
        n = 0;
	for(i=-1; i<2; i++)
		if(readCell(x+i,y-1)[0])
			alert(i+' -1');
			n++;
	if(readCell(x-1,y)[0])
		alert('-1 0');
		n++;
	if(readCell(x+1,y)[0])
		alert('1 0');
		n++;
	for(i=-1; i<2; i++)
		if(readCell(x+i,y+1)[0])
                        alert(i+' +1');
                        n++;
        return n;
}

function writeDisp(str)
{
        disp.innerHTML = '<p>' + str + '</p>';
}

ctx.beginPath();
/*for(i=0; i < 400; i++) {
        x = Math.floor((Math.random() * 400) + 0);
        y = Math.floor((Math.random() * 400) + 0);
        writeCell(true, x, y);
}*/
writeCell(true, 20,20);
writeCell(true, 21,20);
writeCell(true, 20,19);
writeCell(true, 23,20);
ctx.strokeStyle="#FF7300";
ctx.stroke();/*
writeDisp('hi');
for(i=17; i<23; i++) {
        for(j=17; j<23; j++) {
                d = readCell(i,j);
                r = ('0' + d[0].toString(16)).slice(-2);
                g = ('0' + d[1].toString(16)).slice(-2);
                b = ('0' + d[2].toString(16)).slice(-2);
                alert(i+', '+j+': '+r+g+b);
        }
}
writeDisp(neighbors(21,21));
*/
setInterval(function() {
        if (content.scrollLeft <= 0) {
                content.scrollLeft = 800;
        } else if(content.scrollLeft >= 800) {
                content.scrollLeft = 0;
        }
        if (content.scrollTop <= 0) {
                content.scrollTop = 800;
        } else if(content.scrollTop >= 800) {
                content.scrollTop = 0;
        }
}, 10);
/*
setInterval(function() {
        time_inactive += 1;
}, 1000);

setInterval(function() {
        if(time_inactive >= 4)
                content.scrollLeft += 1;
}, 20);

document.addEventListener('keydown', function(event) {
        if(event.keyCode)
                time_inactive = 0;
});*/
