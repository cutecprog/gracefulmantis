var content = document.getElementById("window");
var time_inactive = 0;
content.scrollLeft = 435;
content.scrollTop = 575;
setInterval(function() {
        if (content.scrollLeft < 224) {
                content.scrollLeft = 646;
        } else if(content.scrollLeft > 870) {
                content.scrollLeft = 450;
        }
        if (content.scrollTop < 114) {
                content.scrollTop = 707;
        } else if(content.scrollTop > 1423) {
                content.scrollTop = 827;
        }
}, 10);

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
});
