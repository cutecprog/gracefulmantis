var ctx = document.getElementById('mycanvas').getContext('2d');
/*var a = setInterval(draw,100);*/
ctx.beginPath();
ctx.rect(50, 50, 50, 50);
ctx.stroke();

function block(x,y,speed)
{
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.draw = function()
        {
                ctx.beginPath();
                ctx.rect(this.x, this.y, 5, 5);
                ctx.stroke();
        };
        this.clear = function()
        {       
                ctx.clearRect(this.x-1, this.y-1, 7, 7);
        };
        this.move = function(x,y)
        {
                this.clear();
                this.x += x*this.speed;
                this.y += y*this.speed;
                this.draw();
        };
        this.toggle_speed = function()
        {
                if(this.speed==1)
                        this.speed = 5;
                else
                        this.speed = 1;
                
        };
        this.str = function()
        {
                return '(' + this.x + ', ' + this.y + ')';
        };
        this.set_loc = function(x,y)
        {
                this.x = x;
                this.y = y;
        };
}

var harvey = new block(5, 5, 1);

document.addEventListener('keydown', function(event) {
    /* Drive x and y vars with arrow keys */
    if(event.keyCode == 37) {
        harvey.move(-1,0);
    } else if(event.keyCode == 39) {
        harvey.move(1,0);
    } else if(event.keyCode == 38) {
        harvey.move(0,-1);
    } else if(event.keyCode == 40) {
        harvey.move(0,1);     
    } else if(event.keyCode == 16) /* Toggle speed var */
        harvey.toggle_speed();
    /* Detect collision */
    if (harvey.x+5 >= 50 && harvey.x <= 100 && harvey.y+5 >= 50 && harvey.y <= 100) {
        harvey.set_loc(5,5);
        harvey.draw();
    }
    document.getElementById('info').innerHTML = '<p>' + harvey.str() + '</p>'
});
