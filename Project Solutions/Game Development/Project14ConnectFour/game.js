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
                    alert("Player 1 Wins!");
                }
                else
                {
                    winner=1;
                    alert("Player 2 Wins!");
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
    boardtable=document.getElementById("board");
    boardtable.innerHTML=null;
    for(let i=0;i<6;i++)
    {
        board.push([]);
        let newtr=document.createElement("tr");
        for(let j=0;j<7;j++)
        {
            board[i].push(-1);
            let newtd=document.createElement("td");

            newtd.id="td"+i+""+j
            newtr.appendChild(newtd);
        }
        boardtable.appendChild(newtr);
    }
    
    let buttontable=document.getElementById("buttontable");
    buttontable.innerHTML=null;
    for(let i=0;i<7;i++)
    {
        let buttontd=document.createElement("td");
        let button=document.createElement("button");
        button.innerHTML=i;
        button.classList.add("tablebutton");
        button.onclick=function()
        {
            drop(i);
        }
        buttontd.appendChild(button);
        buttontable.appendChild(buttontd);
    }
}
function drop(x)
{
    if(winner==-1)
    {
        console.log(turn);
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
        }
    }
    
}
function draw()
{
    document.getElementById("curturn").innerHTML="Player "+(turn+1)+"'s turn!";
    if(turn==0)
    {
        document.getElementById("curturn").style.backgroundColor= "hsl(0,60%,60%)";
    }
    else
    {
        document.getElementById("curturn").style.backgroundColor= "hsl(180,60%,60%)";
    }
    for(let i=0;i<6;i++)
    {
        for(let j=0;j<7;j++)
        {
            if(board[i][j]==0)
            {
                curtd=document.getElementById("td"+i+""+j)
                curtd.innerHTML="X";
                curtd.classList.add("p1");
            }
            else if(board[i][j]==1)
            {
                curtd=document.getElementById("td"+i+""+j)
                curtd.innerHTML="O";
                curtd.classList.add("p2");
            }
        }
    }
    if(winner==0)
    {
        //Player 1 wins
        document.getElementById("results").innerHTML="Player 1 Wins!";
        document.getElementById("curturn").innerHTML="";
    }
    else if(winner==1)
    {
        //Player 2 wins
        document.getElementById("results").innerHTML="Player 2 Wins!";
        document.getElementById("curturn").innerHTML="";
    }
    else if(winner==2)
    {
        //Tie
        document.getElementById("results").innerHTML="Tie";
        document.getElementById("curturn").innerHTML="";
    }
}

let boardtable=null;

let x=0;
let board=[];
let turn=Math.floor(2*Math.random());
let winner=-1;
let tie=false;

setup();
draw();
