function check(e) 
{
    var code = e.keyCode;
    switch (code) 
    {
        case 37: pressing_left=true; break; //Left key
        case 39: pressing_right=true; break; //Right key
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
        case 39: pressing_right=false; break; //Right key
    }
}
    
window.addEventListener('keydown',this.check,false);
window.addEventListener('keyup',this.checkup,false);

let pressing_left=false;
let pressing_right=false;


class Brick
{
    static bricks;
    colors=["#00BB00","#FFDA00","#DD0000"];
    times_hit=0;
    constructor(x,y,width,height,times_hit=0)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.times_hit=times_hit;
    }
    drawbrick()
    {
        ctx.fillStyle=this.colors[this.times_hit];
        //console.log(this.width+","+this.height);
        if(this.times_hit<3)
        {
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }
    handlebrick()
    {
        if(this.times_hit>=3&&this.x>=0)
        {
            this.x=-this.width;
            this.y=-this.height;
            totalbricksbroken+=1;
        }
    }
}
class Ball
{
    vx=14;
    vy=-14;
    BALLSPEED=20;
    maxangle=3*Math.PI/12;
    constructor(x,y,radius)
    {
        this.x=x;
        this.y=y;
        this.origx=x;
        this.origy=y;
        this.radius=radius;
    }
    drawball()
    {
        ctx.beginPath();
        ctx.fillStyle="#000000";
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    }
    reset()
    {
        totallives-=1;
        this.x=this.origx;
        this.y=this.origy;
        this.vx=14;
        this.vy=-14;
    }
    move()
    {
        this.x+=this.vx;
        this.y+=this.vy;
        
        if(this.x<this.radius)
        {
            this.x=this.radius;
            this.vx*=-1;
        }
        if(this.x>500-this.radius)
        {
           this.x=500-this.radius;
           this.vx*=-1;
        }
        
        if(this.y<this.radius)
        {
            this.y=this.radius;
            this.vy*=-1;
        }
        if(this.y>500-this.radius)
        {
           this.reset();
        }
        
        let bricks=Brick.bricks;
        for(let i=0;i<bricks.length;i++)
        {
            let brick=bricks[i];
            if (this.x < brick.x + brick.width &&
               this.x + this.radius > brick.x &&
               this.y < brick.y + 2*brick.height &&
               this.y + this.radius+brick.height > brick.y) 
            {
                console.log("Collided with brick "+i);
                //this.vx*=-1;
                this.vy=Math.abs(this.vy);
                brick.times_hit+=1;
                score+=100;
            }
            bricks[i]=brick;
        }
        Brick.bricks=bricks;
        
        if (this.x < paddle.x + paddle.width &&
               this.x + this.radius > paddle.x &&
               this.y < paddle.y + paddle.height &&
               this.y + this.radius+paddle.height > paddle.y) 
        {
            console.log("Collided with paddle");
            
            /*
            https://gamedev.stackexchange.com/questions/4253/in-pong-how-do-you-calculate-the-balls-direction-when-it-bounces-off-the-paddl
            */
            var relativeIntersectX = (this.x+(this.radius/2)) - paddle.x;

            var normalizedRelativeIntersectionX = (relativeIntersectX/(paddle.width/2));
            var bounceAngle = normalizedRelativeIntersectionX * this.maxangle;
            this.vx = this.BALLSPEED*-Math.cos(bounceAngle);
            this.vy = this.BALLSPEED*-Math.sin(bounceAngle);
        }
    }
}
class Paddle
{
    width=100;
    height=20;
    constructor()
    {
        this.vx=0;
        this.x=c.width/2-50;
        this.y=c.height-60;
    }
    draw()
    {
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    move()
    {
        if(pressing_left)
        {
            this.x-=10;
        }
        if(pressing_right)
        {
            this.x+=10;
        }
    }
}
function drawinfo()
{
    ctx.fillStyle="#000000";
    ctx.font="48px serif";
    ctx.fillText("Score: "+score,0,c.height-50);
    ctx.fillText("Lives: "+totallives,0,c.height);
}
function gameover(winner)
{
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,c.width,c.height);
    
    ctx.fillStyle="#000000";
    ctx.font="48px serif";
    if(winner)
    {
        ctx.fillText("You win!",c.width/4,c.height/2);
    }
    else
    {
        ctx.fillText("Game over!",c.width/4,c.height/2);
    }
    ctx.fillText("Score: "+score,0,c.height-50);
}
function draw()
{
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,c.width,c.height);
    for(let i=0;i<bricks.length;i++)
    {
        bricks[i].drawbrick();
        bricks[i].handlebrick();
    }
    ball.drawball();
    ball.move();
    
    paddle.draw();
    paddle.move();
    
    drawinfo();
    if(totalbricksbroken>=bricks.length)
    {
        clearInterval(drawinterval);
        gameover(true);
    }
    if(totallives<0)
    {
        clearInterval(drawinterval);
        gameover(false);
    }
}



let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

//ctx.fillStyle="#FFFFFF";
ctx.fillStyle="#00FF00";
//ctx.fillRect(10,10,150,80);


let bricks=[];
let brickwidth=c.width/10;
let brickheight=40;
let bricksperrow=Math.floor(c.width/brickwidth);
console.log(bricksperrow);

let newbrick=null;
let brickx=-1;
let bricky=-1;
for(let i=0;i<20;i++)
{
    brickx=brickwidth*(i%bricksperrow);
    bricky=brickheight*Math.floor(i/bricksperrow);
    newbrick=new Brick(brickx,bricky,brickwidth,brickheight,2);
    bricks.push(newbrick);
}
Brick.bricks=bricks;

let totallives=3;
let score=0;
let totalbricksbroken=0;
let ball=new Ball(100,150,20);
let paddle=new Paddle();
let drawinterval=setInterval(draw,50);