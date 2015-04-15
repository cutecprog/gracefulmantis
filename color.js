var content = document.getElementById("window");
var ctx = document.getElementById('content').getContext('2d');
var time_inactive = 0;
content.scrollLeft = 50;
content.scrollTop = 50;

ctx.beginPath();
ctx.rect(0, 200, 1200, 800);
ctx.rect(200, 0, 800, 1200);
ctx.strokeStyle="#8C713A";
ctx.stroke();
ctx.beginPath();
ctx.rect(250.5, 250.5, 1, 1);
ctx.rect(252.5, 250.5, 1, 1);
ctx.rect(252.5, 246.5, 1, 1);
ctx.rect(256.5, 248.5, 1, 1);
ctx.rect(258.5, 250.5, 1, 1);
ctx.rect(260.5, 250.5, 1, 1);
ctx.rect(262.5, 250.5, 1, 1);

ctx.rect(1050.5, 1050.5, 1, 1);
ctx.rect(1052.5, 1050.5, 1, 1);
ctx.rect(1052.5, 1046.5, 1, 1);
ctx.rect(1056.5, 1048.5, 1, 1);
ctx.rect(1058.5, 1050.5, 1, 1);
ctx.rect(1060.5, 1050.5, 1, 1);
ctx.rect(1062.5, 1050.5, 1, 1);

ctx.rect(1050.5, 250.5, 1, 1);
ctx.rect(1052.5, 250.5, 1, 1);
ctx.rect(1052.5, 246.5, 1, 1);
ctx.rect(1056.5, 248.5, 1, 1);
ctx.rect(1058.5, 250.5, 1, 1);
ctx.rect(1060.5, 250.5, 1, 1);
ctx.rect(1062.5, 250.5, 1, 1);

ctx.rect(250.5, 1050.5, 1, 1);
ctx.rect(252.5, 1050.5, 1, 1);
ctx.rect(252.5, 1046.5, 1, 1);
ctx.rect(256.5, 1048.5, 1, 1);
ctx.rect(258.5, 1050.5, 1, 1);
ctx.rect(260.5, 1050.5, 1, 1);
ctx.rect(262.5, 1050.5, 1, 1);
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
