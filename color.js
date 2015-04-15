var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
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
        } else {
                ctx.clearRect(x, y, 1, 1);
                ctx.clearRect(x+xoffset, y+yoffset, 1, 1);
                ctx.clearRect(x, y+yoffset, 1, 1);
                ctx.clearRect(x+xoffset, y, 1, 1);
        }
}

ctx.beginPath();
for(i=0; i < 100; i++) {
        x = Math.floor((Math.random() * 400) + 0);
        y = Math.floor((Math.random() * 400) + 0);
        writeCell(true, x, y);
}
ctx.strokeStyle="#FF7300";
ctx.stroke();

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
