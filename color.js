var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
var disp = document.getElementById('data');
var World = new BitSet(1600);
var time_inactive = 0;
content.scrollLeft = 50;
content.scrollTop = 50;

function mod(n,m) {
        return ((n % m) + m) % m;
}

function writeCell(state,x,y)
{
        World.set(y*40+x, state);
        xoffset = 800;
        yoffset = 800;
        if(x>=30)
                xoffset *= -1;
        else if(x > 10)
                xoffset = 0;
        if(y>=30)
                yoffset *= -1;
        else if(y > 10)
                yoffset = 0;
        x = x*20 + 200;
        y = y*20 + 200;
        if(state) {
                ctx.rect(x, y, 20, 20);
                ctx.rect(x+xoffset, y+yoffset, 20, 20);
                ctx.rect(x, y+yoffset, 20, 20);
                ctx.rect(x+xoffset, y, 20, 20);
        }
}

function readCell(world,x,y)
{
        return world.get((mod(y,40))*40+(mod(x,40)));
}

function neighbors(world,x,y)
{
        n = 0;
	for(i=-1; i<2; i++)
		if(readCell(world,x+i,y-1))
			n++;
	if(readCell(world,x-1,y))
		n++;
	if(readCell(world,x+1,y))
		n++;
	for(i=-1; i<2; i++)
		if(readCell(world,x+i,y+1))
                        n++;
        return n;
}

function nextGen()
{
        lastWorld = World.clone();
        for(y=0; y<40; y++) {
                for(x=0; x<40; x++) {
                        n = neighbors(lastWorld,x,y);
                        if(n<2)
                                writeCell(false, x, y);
                        else if(n>3)
                                writeCell(false, x, y);
                        else if(n==2)
                                writeCell(readCell(lastWorld,x,y),x,y);
                        else if(n==3)
                                writeCell(true,x,y);
                }
        }

}

function writeDisp(str)
{
        disp.innerHTML = '<p>' + str + '</p>';
}

ctx.beginPath();
for(i=0; i < 600; i++) {
        x = Math.floor((Math.random() * 40) + 0) % 40;
        y = Math.floor((Math.random() * 40) + 0) % 40;
        writeCell(true, x, y);
}
/*
writeCell(true, 1,3);
writeCell(true, 2,3);
writeCell(true, 2,1);
writeCell(true, 4,2);
writeCell(true, 5,3);
writeCell(true, 6,3);
writeCell(true, 7,3);
*/
ctx.fillStyle="#FF7300";
ctx.fill();
/*ctx.strokeStyle="#FF7300";
ctx.stroke();*/
writeDisp(World.toString().slice(-1600).replace(/(.{40})/g,"$&" + "<br>"));
setInterval(function() {
        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath();
        nextGen();
        ctx.fillStyle="#FF7300";
        ctx.fill();
        /*ctx.strokeStyle="#FF7300";
        ctx.stroke();*/
        writeDisp(World.toString().slice(-1600).replace(/(.{40})/g,"$&" + "<br>"));
}, 50);
/*
alert(neighbors(World, 1,2));
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
