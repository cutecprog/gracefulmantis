var w = window,
    x = w.innerWidth,
    y = w.innerHeight;
/*alert(x + ' x ' + y);*/

var d = document.getElementById('prompt');
/*d.style.top = y/2 + 'px';*/

var content = document.getElementById("window");
content.scrollLeft = 435;
content.scrollTop = 575;
setInterval(function() {
        document.getElementById("data").innerHTML = '<p>' + content.scrollLeft
+ ' ' + content.scrollTop + '</p>';
        
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
        content.scrollLeft += 1;
}, 40);
