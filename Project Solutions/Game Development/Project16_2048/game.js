function check(e) 
{
    var code = e.key;
    console.log(code);
    switch (code) 
    {
        case "ArrowLeft": game.move(-1,0); break; //Left key
        case "a": game.move(-1,0); break; //Left key
        case "ArrowUp": game.move(0,-1); break; //Up key
        case "w": game.move(0,-1); break; //Up key
        case "ArrowRight": game.move(1,0); break; //Right key
        case "d": game.move(1,0); break; //Right key
        case "ArrowDown": game.move(0,1); break; //Down key
        case "s": game.move(0,1); break; //Down key
        case "r": resetgame(); break;
        //Down key
    }
}
window.addEventListener('keyup',this.check,false);

let pressing_left=false;
let pressing_right=false;
let pressing_up=false;
let pressing_down=false;

class Game
{
    testgameover=false;
    constructor()
    {
        this.board=[];
        for(let i=0;i<4;i++)
        {
            this.board.push([]);
            for(let j=0;j<4;j++)
            {
                if(this.testgameover)
                {
                    this.board[i].push(i*4+j);
                }
                else
                {
                    this.board[i].push(0);
                }
            }
        }
    }
    addTile()
    {
        let totalmoves=0;
        let added=false;
        while(!added&&totalmoves<10000)
        {
            let x=Math.floor(Math.random()*4);
            let y=Math.floor(Math.random()*4);
            if(this.board[y][x]==0)
            {
                let roll=Math.random();
                if(roll>=0.5)
                {
                    this.board[y][x]=4;
                }
                else
                {
                    this.board[y][x]=2;
                }
                added=true;
            }
            totalmoves+=1;
        }
        if(added==false)
        {
            console.log("Could not add a tile");
        }
        return added;
    }
    move(xdir,ydir)
    {
        console.log(xdir+","+ydir);
        let movemade=false;
        let xstart=3;
        let ystart=3;
        let xend=0;
        let yend=0;
        let xadd=-1;
        let yadd=-1;
        
        if(xdir==-1)
        {
            xstart=0;
            xend=3;
            xadd=1;
        }
        if(ydir==-1)
        {
            ystart=0;
            yend=3;
            yadd=1;
        }
        console.log(`${xstart} ${xend} ${xdir}`);
        console.log(`${ystart} ${yend} ${ydir}`);
        
        let added=[];
        for(let i=0;i<4;i++)
        {
            added.push([]);
            for(let j=0;j<4;j++)
            {
                added[i].push(false);
            }
        }
        
        for(let k=0;k<4;k++)
        {
            let i=ystart;
            while(i!=yend+yadd)
            {
                let j=xstart;
                while(j!=xend+xadd)
                {
                    if(validspace(i+ydir,j+xdir))
                    {
                        if(this.board[i+ydir][j+xdir]==0&&this.board[i][j]!=0)
                        {
                            this.board[i+ydir][j+xdir]=this.board[i][j];
                            this.board[i][j]=0;
                            movemade=true;
                        }
                        if(this.board[i+ydir][j+xdir]==this.board[i][j]&&this.board[i][j]!=0&&!added[i][j])
                        {
                            this.board[i+ydir][j+xdir]=2*this.board[i][j];
                            added[i+ydir][j+xdir]=true;
                            this.board[i][j]=0;
                            movemade=true;
                        }
                    }
                    j+=xadd;
                }
                i+=yadd;
            }
        }
        
        if(movemade)
        {
            this.checkgameover();
        }
    }
    checkgameover()
    {
        console.log("Checking game over");
        let stillplaying=this.addTile();
        if(stillplaying&&this.canmove())
        {
            draw();
        }
        else
        {
            console.log("GAME OVER");
            alert("GAME OVER");
            document.getElementById("results").innerHTML="Game Over";
        }
    }
    canmove()
    {
        let boardcopy=JSON.parse(JSON.stringify(this.board));
        for(let i=0;i<boardcopy.length;i++)
        {
            for(let j=0;j<boardcopy[0].length;j++)
            {
                if(boardcopy[i][j]==0)
                {
                    console.log(`Board copy ${j},${i}=0`);
                    return true;
                }
                if(validspace(j+1,i))
                {
                    if(boardcopy[i][j]==boardcopy[i][j+1])
                    {
                        console.log(`Can move from ${j},${i} to ${j+1},${i}`);
                        return true;
                    }
                }
                if(validspace(j,i+1))
                {
                    if(boardcopy[i][j]==boardcopy[i+1][j])
                    {
                        console.log(`Can move from ${j},${i} to ${j},${i+1}`);
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
function validspace(x,y)
{
    return x>=0&&x<4&&y>=0&&y<4;
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
function drawText(text,x,y,fontsize=18)
{
    ctx.font=`${fontsize}px Arial`;
    ctx.fillText(text,x,y)
}
function erase()
{
    ctx.fillStyle=colors[0];
    ctx.fillRect(0,0,c.width,c.height);
}
function reset()
{
    document.getElementById("results").innerHTML="";
    game=new Game();
    game.addTile();
    game.addTile();
    draw();
}
function draw()
{
    erase();
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            let xpos=j*c.width/4;
            let ypos=i*c.height/4;
            let index=0;
            if(game.board[i][j]>0)
            {   
                index=Math.floor(Math.log2(game.board[i][j]));
            }
                            
            ctx.fillStyle=colors[index];
            drawrectangle(xpos,ypos,c.width/4,c.height/4);
            ctx.fillStyle="#ffffff";
            
            let xoffset=xpos+c.width/8-(16*(game.board[i][j].toString().length-1));
            drawText(game.board[i][j].toString(),xoffset,ypos+c.width/8,32);
        }
    }
}
let colors=["#C19A6B","#9a0000","#9a4d00","#366800","#006800","#006834","#006866","#003468","#000068","#340068","#680068","#680034"];

let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

let colliding=false;
let game=new Game();
game.addTile();
//game.addTile();
game.checkgameover();
draw();
