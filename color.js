var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
var time_inactive = 0;
content.scrollLeft = 50;
content.scrollTop = 50;

function writeCell(state,x,y)
{
        if(state) {
                ctx.rect(200.5+x, 200.5+y, 1, 1);
                ctx.rect(1000.5+x, 1000.5+y, 1, 1);
                ctx.rect(200.5+x, 1000.5+y, 1, 1);
                ctx.rect(1000.5+x, 200.5+y, 1, 1);
        } else {
                ctx.clearRect(200.5+x, 200.5+y, 1, 1);
                ctx.clearRect(1000.5+x, 1000.5+y, 1, 1);
                ctx.clearRect(200.5+x, 1000.5+y, 1, 1);
                ctx.clearRect(1000.5+x, 200.5+y, 1, 1);
        }
}

ctx.beginPath();
writeCell(true, 50,50);
writeCell(true, 52,50);
writeCell(true, 52,46);
writeCell(true, 56,48);
writeCell(true, 58,50);
writeCell(true, 60,50);
writeCell(true, 62,50);
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
