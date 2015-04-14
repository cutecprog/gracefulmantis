var keycode = {
        'LEFT_ARROW': 37,
        'RIGHT_ARROW': 39,
        'UP_ARROW': 38,
        'DOWN_ARROW': 40,
        'R_SHIFT': 16
};

var w = window,
    x = w.innerWidth,
    y = w.innerHeight;
/*alert(x + ' x ' + y);*/

var d = document.getElementById('prompt');
/*d.style.top = y/2 + 'px';*/

var content = document.getElementById("window");
var time_inactive = 0;
content.scrollLeft = 435;
content.scrollTop = 575;
setInterval(function() {
        /*document.getElementById("data").innerHTML = '<p>' + content.scrollLeft
+ ' ' + content.scrollTop + '</p>';
        */
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
}, 40);

setInterval(function() {
        if(time_inactive >= 4)
                content.scrollTop += 1;
}, 40);

document.addEventListener('keydown', function(event) {
        if(event.keyCode)
                time_inactive = 0;
        if(event.keyCode == keycode.UP_ARROW) {

        } else if(event.keycode == keycode.DOWN_ARROW) {

        }
});
