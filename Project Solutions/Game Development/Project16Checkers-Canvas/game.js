function check(e) 
{
    var code = e.keyCode;
    switch (code) 
    {
        case 37: pressing_left=true; break; //Left key
        case 38: pressing_up=true; break; //Up key
        case 39: pressing_right=true; break; //Right key
        case 40: pressing_down=true; break; //Down key
        case 82: resetgame(); break;
        //Down key
    }
}
    
function checkup(e) 
{
    var code = e.keyCode;
    switch (code) 
    {
        case 37: pressing_left=false; break; //Left key
        case 38: pressing_up=false; break; //Up key
        case 39: pressing_right=false; break; //Right key
        case 40: pressing_down=false; break; //Down key
    }
}
    
window.addEventListener('keydown',this.check,false);
window.addEventListener('keyup',this.checkup,false);

let pressing_left=false;
let pressing_right=false;
let pressing_up=false;
let pressing_down=false;

class Player
{
    w=40;
    h=40;
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    draw()
    {
        if(!colliding)
        {
            ctx.fillStyle="#559955";
        }
        else
        {
            ctx.fillStyle="#555599";  
        }
        drawrectangle(this.x,this.y,this.w,this.h);
    }
    move()
    {
    
    }
}
class Entity
{
    w=60;
    h=60;
    vy=10;
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    draw()
    {
        if(!colliding)
        {
            ctx.fillStyle="#ff0000";
        }
        else
        {
             ctx.fillStyle="#ffaa00";           
        }
        drawrectangle(this.x,this.y,this.w,this.h);
    }
    move()
    {
        this.y+=this.vy;
        if(this.y<=0)
        {
            this.vy=10;
        }
        else if(this.y+this.h>=c.height)
        {
            this.vy=-10;
        }
    }
}

function drawline(x1,y1,x2,y2)
{
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function drawrectangle(x,y,w,h)
{
    ctx.fillRect(x,y,w,h);
}
function drawcircle(x,y,radius)
{
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
}
function erase()
{
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,c.width,c.height);
}
function checkcollision(o1,o2)
{
    if(o1.y+o1.h>=o2.y && 
    o1.y<=o2.y+o2.h && o1.x+o1.w>=o2.x &&
           o1.x<=o2.x+o2.w )
    {
        return true;
    }
    return false;
}
function moveplayer()
{
    if(pressing_left)
    {
        if(player.x>=10)
        {
            player.x-=10;
        }
    }
    if(pressing_right)
    {
        if(player.x<=c.width-10-player.w)
        {
            player.x+=10;
        }
    }
    if(pressing_up)
    {
        if(player.y>=10)
        {
            player.y-=10;
        }
    }
    if(pressing_down)
    {
        if(player.y<=c.height-10-player.h)
        {
            player.y+=10;
        }
    }
}
function draw()
{
    erase();
    moveplayer();
    entity.move();
    
    colliding=checkcollision(entity,player);
    
    entity.draw();
    player.draw();
}

let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

let colliding=false;
let entity=new Entity(c.width/2-50,c.height/2);
let player=new Player(c.width/2-50,50);
let drawinterval=setInterval(draw,50);