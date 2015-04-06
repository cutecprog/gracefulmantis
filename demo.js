var ctx = document.getElementById('mycanvas').getContext('2d');
/*var a = setInterval(draw,100);*/
ctx.beginPath();
ctx.rect(50, 50, 50, 50);
ctx.stroke();

var x = 5;
var y = 5;
var speed = 1; 

function draw()
{
    ctx.beginPath();
    ctx.rect(x, y, 5, 5);
    ctx.stroke();
    
}

function clear()
{
    ctx.clearRect(x-1, y-1, 7, 7);
}

document.addEventListener('keydown', function(event) {
    /* Drive x and y vars with arrow keys */
    if(event.keyCode == 37 && x >= 5) {
        clear()
        x-=speed;
        draw()
    } else if(event.keyCode == 39 && x <= 295) {
        clear()
        x+=speed;
        draw()
    } else if(event.keyCode == 38 && y >= 5) {
        clear()
        y-=speed;
        draw()
    } else if(event.keyCode == 40 && y <= 295) {
        clear()
        y+=speed;
        draw()
    } else if(event.keyCode == 16) /* Toggle speed var */
        if(speed==1)
                speed = 5;
        else
                speed = 1;
    /* Detect collision */
    if (x+5 >= 50 && x <= 100 && y+5 >= 50 && y <= 100) {
        x = 5;
        y = 5;
    }
    document.getElementById('info').innerHTML = '<p>' + x + ', ' + y + '</p>'
});