function check(e) 
{
    var code = e.keyCode;
    switch (code) 
    {
        case 32: 
        if(turn!=computerturn)
        {
            drop(); 
        }
        break;
        case 37: pressing_left=true;
        move(-1);
        break; //Left key
        case 38: pressing_up=true; break; //Up key
        case 39: pressing_right=true; 
        move(1);
        break; //Right key
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
function move(dir)
{
    if(winner==-1)
    {
        x+=dir;
        if(x==board[0].length)
        {
            x=0;
        }
        if(x==-1)
        {
            x=board[0].length-1;
        }
        draw();
    }
}
function validspace(y,x)
{
    return x>=0&&x<board[0].length&&y>=0&&y<board.length;
}
function resetgame()
{
    board=[];
    turn=Math.floor(2*Math.random());
    winner=-1;
    setup();
    draw();
}
function checkwinnersim(curboard)
{
    let curval=-1;
    let matching=-1;
    
    for(let a=0;a<curboard.length;a++)
    {
        for(let b=0;b<curboard[0].length;b++)
        {
            curval=curboard[a][b];
            matching=false;

            if(curval==-1)
            {
                continue;
            }
            
            //Horizontal
            if(validspace(a,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(curboard[a][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    //console.log("Horizontal Win");
                }
            }
            
            //Vertical
            if(validspace(a+3,b)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(curboard[a+i][b]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    //console.log("Vertical Win");
                }
            }
            
            //Diagonal Up
            if(validspace(a-3,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    //console.log(board[a-i][b+i]+" "+a+","+b);
                    if(curboard[a-i][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    //console.log("Diagonal Up Win");
                }
            }
            
            //Diagonal Down
            if(validspace(a+3,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(curboard[a+i][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    //console.log("Diagonal Down Win");
                }
            }
            
            //console.log(`board[${a}][${b}] ${matching}`);
            if(matching)
            {
                //console.log("Winner starting from ("+b+","+a+")");
                if(curboard[a][b]==0)
                {
                    return 0;
                }
                else
                {
                    return 1;
                }
            }
        }
    }
    
    return 2;
}
function move_checkloss_recursive(curboard,depth=0,totallosses,curturn)
{
    if(depth>4)
    {
        return 0;
    }
    //console.log(curboard);
    totalruns+=1;
    let curresult=checkwinnersim(curboard,curturn);
    if(curresult!=2)
    {
        //console.log(`curresult ${curresult}`);
    }
    if(curresult==(computerturn+1)%2)
    {
        //console.log("Computer loses "+depth+" turns ahead");
        //console.log(curboard);
        totallosses+=curresult;
    }

    //console.log(curboard);
    for(let i=0;i<7;i++)
    {
        let curboardcopy=JSON.parse(JSON.stringify(curboard));
        curboardcopy=dropsim(curboardcopy,i,curturn);
        totallosses=totallosses+move_checkloss_recursive(curboardcopy,depth+1,totallosses,curturn+1);
    }
    return totallosses;
}
function makemove()
{
    let options=[0,1,2,3,4,5,6];
    options=shuffle(options);
    
    let losses=new Array(options.length);
    totalruns=0;
    console.log(options);
    console.log(board);
    for(let i=0;i<losses.length;i++)
    {
        let boardcopy=JSON.parse(JSON.stringify(board));
        let curval=options[i];
        boardcopy=dropsim(boardcopy,curval,turn);
        //Check if the computer can win by placing here
        if(checkwinnersim(boardcopy)==computerturn)
        {
            console.log("COMPUTER WINS!");
            drop(options[i]);
            return;
        }
        console.log(`Turn to check: ${(turn+1)%2}`)
        losses[i]=move_checkloss_recursive(boardcopy,1,0,turn+1);
    }
    //console.log(options);
    //console.log(losses);

    for(let i=0;i<options.length;i++)
    {
        for(let j=0;j<options.length;j++)
        {
            if(losses[i]<losses[j])
            {
                let temp1=JSON.parse(JSON.stringify(options[i]));
                options[i]=JSON.parse(JSON.stringify(options[j]));
                options[j]=JSON.parse(JSON.stringify(temp1));

                let temp2=JSON.parse(JSON.stringify(losses[i]));
                losses[i]=JSON.parse(JSON.stringify(losses[j]));
                losses[j]=JSON.parse(JSON.stringify(temp2));
            }
        }
    }

    console.log(options);
    console.log(losses);

    x=options[0];
    drop();
}
function checkwinner()
{
    let curval=-1;
    let matching=-1;
    
    for(let a=0;a<board.length;a++)
    {
        for(let b=0;b<board[0].length;b++)
        {
            curval=board[a][b];
            matching=false;

            if(curval==-1)
            {
                continue;
            }
            
            //Horizontal
            if(validspace(a,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(board[a][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    console.log("Horizontal Win");
                }
            }
            
            //Vertical
            if(validspace(a+3,b)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(board[a+i][b]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    console.log("Vertical Win");
                }
            }
            
            //Diagonal Up
            if(validspace(a-3,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    //console.log(board[a-i][b+i]+" "+a+","+b);
                    if(board[a-i][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    console.log("Diagonal Up Win");
                }
            }
            
            //Diagonal Down
            if(validspace(a+3,b+3)&&!matching)
            {
                matching=true;
                for(let i=0;i<=3;i++)
                {
                    if(board[a+i][b+i]!=curval)
                    {
                        matching=false;
                    }
                }
                if(matching)
                {
                    console.log("Diagonal Down Win");
                }
            }
            
            //console.log(`board[${a}][${b}] ${matching}`);
            if(matching)
            {
                console.log("Winner starting from ("+b+","+a+")");
                if(board[a][b]==0)
                {
                    winner=0;
                    ctx.fillText("Player 1 wins",50,50);
                }
                else
                {
                    winner=1;
                    ctx.fillText("Player 2 wins",50,50);
                }
                return;
            }
        }
    }
    
    tie=true;
    for(let a=0;a<board.length;a++)
    {
        for(let b=0;b<board[0].length;b++)
        {
            if(board[a][b]==-1)
            {
                tie=false;
            }
        }  
    }
    if(tie)
    {
        winner=2;
    }
}
function setup()
{
    for(let i=0;i<6;i++)
    {
        board.push([]);
        for(let j=0;j<7;j++)
        {
            board[i].push(-1);
        }
    }
}
function dropsim(curboard,curx,curturn)
{
    let changed=false;
    for(let i=curboard.length-1;i>=0;i--)
    {
        if(curboard[i][curx]==-1)
        {
            curboard[i][curx]=curturn;
            changed=true;
            break;
        }
    }

    if(changed)
    {
        return curboard;
    }
}
function drop()
{
    if(winner==-1)
    {
        let changed=false;
        for(let i=board.length-1;i>=0;i--)
        {
            if(board[i][x]==-1)
            {
                board[i][x]=turn;
                changed=true;
                break;
            }
        }

        if(changed)
        {
            //console.log(board);
            turn=(turn+1)%2;
            checkwinner();
            draw();
            if(turn==computerturn)
            {
                setTimeout(makemove,1000);
            }
        }
    }
    
}
function shuffle(array) 
{
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
}

function erase()
{
    ctx.fillStyle="#966F33";
    ctx.fillRect(0,0,c.width,c.height);
}
function draw()
{
    erase();
    
    if(winner==-1)
    {
        if(turn==0)
        {
            ctx.fillStyle="#ffaaaa";
            drawrectangle(x*boxsize+xoffset,0,boxsize,boxsize);
            
            ctx.fillStyle="#ff0000";
            drawrectangle(x*boxsize+xoffset+bordersize,bordersize,boxsize-(2*bordersize),boxsize-(2*bordersize));
        }
        else
        {
            ctx.fillStyle="#aaaaff";
            drawrectangle(x*boxsize+xoffset,0,boxsize,boxsize);
            
            ctx.fillStyle="#0000ff";
            drawrectangle(x*boxsize+xoffset+bordersize,bordersize,boxsize-(2*bordersize),boxsize-(2*bordersize));
        }
    }
    
    for(let i=0;i<board.length;i++)
    {
        for(let j=0;j<board[0].length;j++)
        {
            if(board[i][j]==0)
            {
                ctx.fillStyle="#aaaaff";
                drawrectangle(j*boxsize+xoffset,i*boxsize+yoffset,boxsize,boxsize);
                
                //console.log(board[i][j]);
                ctx.fillStyle="#0000ff";
                
                drawrectangle(j*60+xoffset+bordersize,i*60+yoffset+bordersize,boxsize-(2*bordersize),boxsize-(2*bordersize));
            }
            else if(board[i][j]==1)
            {
                ctx.fillStyle="#ffaaaa";
                drawrectangle(j*boxsize+xoffset,i*boxsize+yoffset,boxsize,boxsize);
                
                //console.log(board[i][j]);
                ctx.fillStyle="#ff0000";
                drawrectangle(j*60+xoffset+bordersize,i*60+yoffset+bordersize,boxsize-(2*bordersize),boxsize-(2*bordersize));
            }
            else
            {
                ctx.fillStyle="#725527";
                drawrectangle(j*boxsize+xoffset,i*boxsize+yoffset,boxsize,boxsize);
            }
            
            
        }
    }
    
    if(winner==0)
    {
        ctx.font="48px Arial";
        ctx.fillStyle="#0000ff";
        ctx.fillText("Player 1 wins",50,50);
    }
    else if(winner==1)
    {
        ctx.font="48px Arial";
        ctx.fillStyle="#ff0000";
        ctx.fillText("Player 2 wins",50,50);
    }
    else if(winner==2)
    {
        ctx.font="48px Arial";
        ctx.fillStyle="#00ff00";
        ctx.fillText("Tie",50,50);
    }
}

let xoffset=40;
let yoffset=140;
let boxsize=60;
let bordersize=5;
let x=0;
let board=[];
let turn=Math.floor(Math.random()*2);
let computerturn=Math.floor(Math.random()*2);
let winner=-1;
let tie=false;

let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

setup();
draw();
if(turn==computerturn)
{
    setTimeout(makemove,1000);
}