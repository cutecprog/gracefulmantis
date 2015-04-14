var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
var time_inactive = 0;
content.scrollLeft = 50;
content.scrollTop = 50;

ctx.beginPath();
ctx.rect(0, 200, 1200, 800);
ctx.rect(200, 0, 800, 1200);
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
