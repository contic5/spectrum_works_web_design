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

class Piece
{
    w=20;
    h=20;
    constructor(x,y,lastmove)
    {
        this.x=x;
        this.y=y;
        this.lastmove=lastmove;
        if(this.lastmove=="up"||this.lastmove=="down")
        {
            this.h=player.movespeed;
        }
        else if(this.lastmove=="left"||this.lastmove=="right")
        {
            this.w=player.movespeed;
        }
    }
    draw()
    {
        drawrectangle(this.x,this.y,this.w,this.h);
    }
}
class Player
{
    w=20;
    h=20;
    totalpieces=5;
    movespeed=20;
    pieces=[];
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        for(let i=0;i<this.totalpieces;i++)
        {
            this.pieces.push(new Piece(this.x,this.y));
        }
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
        for(let i=0;i<this.pieces.length;i++)
        {
            if(i==0)
            {
                ctx.fillStyle="#55CC55";
            }
            else
            {
                if(!colliding)
                {
                    ctx.fillStyle="#559955";
                }
                else
                {
                    ctx.fillStyle="#555599";  
                }
            }
            this.pieces[i].draw();
        }
    }
    handlepieces()
    {
        for(let i=this.pieces.length-2;i>=0;i--)
        {
            this.pieces[i+1]=this.pieces[i];
        }
        this.pieces[0]=new Piece(this.x,this.y,direction);
    }
    addpiece()
    {
        //this.movespeed+=1;
        this.pieces.push(new Piece(-100,-100,""));
    }
}
class Food
{
    w=25;
    h=25;
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
             ctx.fillStyle="#00cc88";           
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
    jump()
    {
        let randx=Math.floor(Math.random()*(c.width-2*this.w))+this.w;
        let randy=Math.floor(Math.random()*(c.height-2*this.h))+this.h;
        this.x=randx;
        this.y=randy;
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
    ctx.fillStyle="#444444";
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
        direction="left";
    }
    if(pressing_right)
    {
        direction="right";
    }
    if(pressing_up)
    {
        direction="up";
    }
    if(pressing_down)
    {
        direction="down";
    }
    
    if(direction=="left")
    {
        if(player.x>=player.movespeed)
        {
            player.x-=player.movespeed;
        }
        else
        {
            player.x-=player.movespeed;
            gameover=true;
        }
    }
    if(direction=="right")
    {
        if(player.x<=c.width-player.movespeed-player.w)
        {
            player.x+=player.movespeed;
        }
        else
        {
            player.x+=player.movespeed;
            gameover=true;
        }
    }
    if(direction=="up")
    {
        if(player.y>=player.movespeed)
        {
            player.y-=player.movespeed;
        }
        else
        {
            player.y-=player.movespeed;
            gameover=true;
        }
    }
    if(direction=="down")
    {
        if(player.y<=c.height-player.movespeed-player.h)
        {
            player.y+=player.movespeed;
        }
        else
        {
            player.y+=player.movespeed;
            gameover=true;
        }
    }
}
function drawgameover()
{
    erase();
    ctx.fillStyle="#8a0303";
    ctx.fillRect(0,0,c.width,c.height);
    food.draw();
    player.draw();
}
function draw()
{
    erase();
    moveplayer();
    //food.move();
    
    player.handlepieces();
    
    
    for(let i=0;i<player.pieces.length;i++)
    {
        if(totalmoves<5)
        {
            break;
        }
        for(let j=0;j<player.pieces.length;j++)
        {
            
            if(i!=j&&player.pieces[i].x==player.pieces[j].x&&player.pieces[i].y==player.pieces[j].y)
            {
                console.log(i+","+j);
                console.log("Game over");
                gameover=true;
            }
        }
    }
    
    if(checkcollision(food,player))
    {
        score+=1;
        document.getElementById("scoreelem").innerHTML="Score: "+score;
        food.jump();
        player.addpiece();
    }
    
    if(gameover)
    {
        clearInterval(drawinterval);
        drawgameover();
        return;
    }
    totalmoves+=1;
    
    food.draw();
    player.draw();
}

let c=document.getElementById("canvas");
let ctx=c.getContext("2d");
let gameover=false;
let totalmoves=0;

let colliding=false;
let food=new Food(c.width/2-50,c.height/2);
let player=new Player(0,240);
let direction="right";
let score=0;
let drawinterval=setInterval(draw,50);