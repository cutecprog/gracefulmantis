var ctx = document.getElementById('mycanvas').getContext('2d');

function Block(x,y,size,speed)
{
        this.x = x;
        this.y = y;
        this.size = size
        this.speed = 1;
        this.top_speed = speed
        this.draw = function()
        {
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.size, this.size);
                ctx.stroke();
        };
        this.clear = function()
        {       
                ctx.clearRect(this.x-1, this.y-1, this.size+2, this.size+2);
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
                        this.speed = this.top_speed;
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
        this.intercepts = function(block)
        {
               return this.x + this.size >= block.x
                        && this.x <= block.x + block.size 
                        && this.y+this.size >= block.y 
                        && this.y <= block.y + block.size; 
        }
}

var harvey = new Block(5, 5, 5, 5);
var fred = new Block(50,50,50,6);
fred.draw();

document.addEventListener('keydown', function(event) {
    /* Drive x and y vars with arrow keys */
    if(event.keyCode == 37)
        harvey.move(-1,0);
    else if(event.keyCode == 39)
        harvey.move(1,0);
    else if(event.keyCode == 38)
        harvey.move(0,-1);
    else if(event.keyCode == 40)
        harvey.move(0,1);     
    else if(event.keyCode == 16) 
        harvey.toggle_speed();
    if (harvey.intercepts(fred)) {
        harvey.set_loc(5,5);
        harvey.draw();
    }
    document.getElementById('info').innerHTML = '<p>' + harvey.str() + '</p>'
});
