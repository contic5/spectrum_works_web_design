class Card
{
    constructor(name,atk,def,cost,cardtype,rarity,desc)
    {
        this.name=name;
        this.atk=atk;
        this.def=def;
        this.cost=cost;
        this.cardtype=cardtype;
        this.rarity=rarity;
        this.desc=desc;
        
        if(this.desc=="")
        {
            this.desc="ATK: "+this.atk+"<br>DEF: "+this.def;
        }
        else
        {
            this.desc="ATK: "+this.atk+"<br>DEF: "+this.def+"<br>"+this.desc;
        }
    }
}
class Player
{
    hp=5;
    atk=0;
    tp=2;
    deck=[];
    hand=[];
    discard=[];
    usedcards=[];
    deckindex=0;
    constructor()
    {
        
    }
    draw()
    {
        if(this.hand.length<5)
        {
            let currentcard=this.deck.shift();
            this.hand.push(currentcard);
            this.discard.push(currentcard);
            if(this.deck.length==0)
            {
                this.deck=this.discard;
                this.discard=[];
            }
        }
    }
    shuffle()
    {
        let currentIndex = this.deck.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.deck[currentIndex], this.deck[randomIndex]] = [
              this.deck[randomIndex], this.deck[currentIndex]];
        }
    }
}
function setupdeck()
{
    let nextcard=null;
    for(let i=0;i<p1cardnames.length;i++)
    {
        for(let j=0;j<cards.length;j++)
        {
            if(p1cardnames[i]==cards[j].name)
            {
                nextcard=new Card(cards[j].name,cards[j].atk,cards[j].def,cards[j].cost,cards[j].cardtype,cards[j].rarity,cards[j].desc);
                //console.log(nextcard);
                p1.deck.push(nextcard);
                break;
            }
        }
    }
    for(let i=0;i<p2cardnames.length;i++)
    {
        for(let j=0;j<cards.length;j++)
        {
            if(p2cardnames[i]==cards[j].name)
            {
                nextcard=new Card(cards[j].name,cards[j].atk,cards[j].def,cards[j].cost,cards[j].cardtype,cards[j].rarity,cards[j].desc);
                //console.log(nextcard);
                p2.deck.push(nextcard);
                break;
            }
        }
    }
    p1.shuffle();
    p2.shuffle();

    console.log(p1.deck);
    console.log(p2.deck);
}

function usecard(x)
{
    if(used_arr[x])
    {
        remainingenergy+=players[turn].hand[x].cost;
        used_arr[x]=false;
        document.getElementById("card"+x).classList.remove("activated");
    }
    else
    {
        if(remainingenergy>=players[turn].hand[x].cost)
        {
            remainingenergy-=players[turn].hand[x].cost;
            used_arr[x]=true;
            document.getElementById("card"+x).classList.add("activated");
        }
    }
    document.getElementById("remainingenergy").innerHTML="Remaining Energy: "+remainingenergy;
}
function handleeffect(currentcard,curplayer,cardindex)
{
    let nextcard=null;
    console.log(currentcard.name+" "+curplayer);
    if(currentcard.name=="Page")
    {
        for(let i=0;i<players[curplayer].usedcards.length;i++)
        {
            if(players[curplayer].usedcards[i].atk>2)
            {
                currentcard.atk+=2;
                break;
            }
        }
    }
    else if(currentcard.name=="Berserker")
    {
        if(players[(curplayer+1)%2].atk>4)
        {
            currentcard.atk+=2;
        }
    }
    else if(currentcard.name=="Dread Knight")
    {
        for(let i=0;i<players[(curplayer+1)%2].usedcards.length;i++)
        {
            players[(curplayer+1)%2].usedcards[i].atk-=1;
        }
    }
    else if(currentcard.name=="King")
    {
        let cardsadded=0;
        for(let j=0;j<cards.length;j++)
        {
            if(cardsadded>=2)
            {
                break;
            }
            if(cards[j].rarity=="enemy"&&cards[j].cardtype=="Warrior")
            {
                nextcard=new Card(cards[j].name,cards[j].atk,cards[j].def,cards[j].cost,cards[j].cardtype,cards[j].rarity,cards[j].desc);
                players[(curplayer)].usedcards.push(nextcard);
                cardsadded+=1;
            }
        }
    }
    
    else if(currentcard.name=="Lookout")
    {
        let cardsadded=0;
        for(let j=0;j<cards.length;j++)
        {
            if(cardsadded>=2)
            {
                break;
            }
            if(cards[j].rarity=="enemy"&&cards[j].cardtype=="Rogue")
            {
                nextcard=new Card(cards[j].name,cards[j].atk,cards[j].def,cards[j].cost,cards[j].cardtype,cards[j].rarity,cards[j].desc);
                players[curplayer].usedcards.push(nextcard);
                cardsadded+=1;
            }
        }
    }
    else if(currentcard.name=="Shayde")
    {
        for(let i=0;i<players[curplayer].usedcards.length;i++)
        {
            if(players[curplayer].usedcards[i].cardtype=="Rogue")
            {
                players[curplayer].usedcards[i].atk+=1;
            }
        }
    }
    else if(currentcard.name=="Zayne- Nightslasher")
    {
        //Numb
        let removedcard=players[(curplayer+1)%2].usedcards.shift();
        if(curplayer==1)
        {
            players[(curplayer+1)%2].atk-=removedcard.atk;
        }
    }
    else if(currentcard.name=="Diadora- Underworld's Queen")
    {
        for(let i=0;i<players[curplayer].usedcards.length;i++)
        {
            if(players[curplayer].usedcards[i].cardtype=="Rogue")
            {
                currentcard.atk+=2;
            }
        }
    }
    else if(currentcard.name=="Control Mage")
    {
        //Numb
        let removedcard=players[(curplayer+1)%2].usedcards.shift();
        if(curplayer==1)
        {
            players[0].atk-=removedcard.atk;
        }
    }
    else if(currentcard.name=="Channeler")
    {
        for(let i=0;i<players[curplayer].usedcards.length;i++)
        {
            if(players[curplayer].usedcards[i].cardtype=="Mage"&&cardindex!=i)
            {
                players[curplayer].usedcards[i].atk+=1;
            }
        }
    }
    else if(currentcard.name=="Demien- Thunder Lord")
    {
        //Numb
        let removedcard=players[(curplayer+1)%2].usedcards.shift();
        if(curplayer==1)
        {
            players[(curplayer+1)%2].atk-=removedcard.atk;
        }
    }
    players[curplayer].usedcards[cardindex]=currentcard;
}
function handleposteffect(currentcard,curplayer)
{
    if(currentcard.name=="Healer Mage")
    {
        //Heal
        if(winner==curplayer&&players[curplayer].hp<5)
        {
            players[curplayer].hp+=1;
        }
    }
    else if(currentcard.name=="Dhampir Lobo")
    {
        //Heal
        if(winner==curplayer&&players[curplayer].hp<5)
        {
            players[curplayer].hp+=1;
        }
    }
}
function prebattle()
{
    //Precalculate attack
    for(let i=0;i<players[0].usedcards.length;i++)
    {
        currentcard=JSON.parse(JSON.stringify(players[0].usedcards[i]));
        //addcard(players[0].usedcards[i],handdivs[0],i,false);
        addcard(currentcard,handdivs[0],i,false);
        players[0].atk+=currentcard.atk;
    }
    for(let i=0;i<players[1].usedcards.length;i++)
    {
        currentcard=JSON.parse(JSON.stringify(players[1].usedcards[i]));
        //addcard(players[1].usedcards[i],handdivs[1],i,false);
        addcard(currentcard,handdivs[1],i,false);
        players[1].atk+=currentcard.atk;
    }
    document.getElementById("p1attack").innerHTML="Attack: "+players[0].atk;
    document.getElementById("p2attack").innerHTML="Attack: "+players[1].atk;
    
    setTimeout(battle,1500);
}
function battle()
{
    handdivs[0].innerHTML="";
    handdivs[1].innerHTML="";
    let currentcard=null;
    console.log("Handle effect");
    
    //Effects before attack
    for(let i=0;i<players[0].usedcards.length;i++)
    {
        currentcard=players[0].usedcards[i];
        handleeffect(players[0].usedcards[i],0,i);
    }
    for(let i=0;i<players[1].usedcards.length;i++)
    {
        currentcard=players[1].usedcards[i];
        handleeffect(players[1].usedcards[i],1,i);
    }
    
    //Reset attack stat
    players[0].atk=0;
    players[1].atk=0;
    
    //Attack
    for(let i=0;i<players[0].usedcards.length;i++)
    {
        currentcard=JSON.parse(JSON.stringify(players[0].usedcards[i]));
        //addcard(players[0].usedcards[i],handdivs[0],i,false);
        addcard(currentcard,handdivs[0],i,false);
        players[0].atk+=currentcard.atk;
    }
    for(let i=0;i<players[1].usedcards.length;i++)
    {
        currentcard=JSON.parse(JSON.stringify(players[1].usedcards[i]));
        //addcard(players[1].usedcards[i],handdivs[1],i,false);
        addcard(currentcard,handdivs[1],i,false);
        players[1].atk+=currentcard.atk;
    }
    
    console.log(players[0].atk+" "+players[1].atk);
    document.getElementById("p1attack").innerHTML="Attack: "+players[0].atk;
    document.getElementById("p2attack").innerHTML="Attack: "+players[1].atk;
    if(players[0].atk>players[1].atk)
    {
        players[1].hp-=1;
        winner=0;
    }
    else if(players[1].atk>players[0].atk)
    {
        players[0].hp-=1;
        winner=1;
    }
    else
    {
        //Tie
    }
    
    for(let i=0;i<players[0].usedcards.length;i++)
    {
        currentcard=players[0].usedcards[i];
        handleposteffect(currentcard,0);
    }
    for(let i=0;i<players[1].usedcards.length;i++)
    {
        currentcard=players[1].usedcards[i];
        handleposteffect(currentcard,1);
    }
    
    document.getElementById("p1hp").innerHTML="HP: "+players[0].hp;
    document.getElementById("p2hp").innerHTML="HP: "+players[1].hp;
    setTimeout(nextturn,1500);
}
function nextturn()
{
    document.getElementById("p1attack").innerHTML="";
    document.getElementById("p2attack").innerHTML="";
    players[0].atk=0;
    players[1].atk=0;
    players[0].usedcards=[];
    players[1].usedcards=[];
    handdivs[0].innerHTML="";
    handdivs[1].innerHTML="";
    turn=0;
    winner=-1;
    
    startenergy+=1;
    remainingenergy=startenergy;
    draw(3);
    console.log(p1.deck);
    console.log(p2.deck);
    displayhand();
}
function endturn()
{
    for(let i=0;i<used_arr.length;i++)
    {
        if(used_arr[i])
        {
            players[turn].usedcards.push(players[turn].hand[i]);
        }
    }
    let loc=0;
    for(let i=0;i<used_arr.length;i++)
    {
        if(used_arr[i])
        {
            players[turn].hand.splice(i-loc,1);
            loc+=1;
        }
    }
    turn=(turn+1)%2;
    if(turn==1)
    {
        remainingenergy=startenergy;
        displayhand();
    }
    else
    {
        console.log(players[0].usedcards);
        console.log(players[1].usedcards);
        prebattle();
    }
}
function draw(cardstodraw)
{
    for(let i=0;i<cardstodraw;i++)
    {
        players[0].draw();
        players[1].draw();
    }
}
function addcard(card,parentelement,index,active)
{
    console.log("Add card");
    console.log(card.name);
    
    cardtd=document.createElement("td");
    cardtd.classList.add("card");
    cardtd.id="card"+index;
    cardnameelem=document.createElement("p");
    cardnameelem.style.fontSize="18px";
    cardtypeelem=document.createElement("p");
    carddescelem=document.createElement("p");
    costelem=document.createElement("p");

    cardnameelem.innerHTML=card.name;
    cardtypeelem.innerHTML="Type:"+card.cardtype; 
    carddescelem.innerHTML=card.desc;
    costelem.innerHTML="Cost: "+card.cost;

    cardtd.appendChild(cardnameelem);
    cardtd.appendChild(cardtypeelem);
    cardtd.appendChild(carddescelem);
    cardtd.appendChild(costelem);
    parentelement.appendChild(cardtd);

    if(active)
    {
        cardtd.onclick=function(){
            usecard(index);
        }
        used_arr.push(false);
    }
}
function displayhand()
{
    document.getElementById("turninfo").innerHTML="Player "+(turn+1)+"'s Turn";
    remainingenergyelem.innerHTML="Remaining Energy: "+remainingenergy;
    curhandtable.innerHTML="";
    let cardtd=null;
    let cardnameelem=null;
    let cardtypeelem=null;
    let carddescelem=null;
    let costelem=null;
    players[turn].usedcards=[];
    used_arr=[];
    for(let i=0;i<players[turn].hand.length;i++)
    {
        addcard(players[turn].hand[i],curhandtable,i,true);
    }
}

//Player variables
let p1=new Player();
let p2=new Player();
let players=[p1,p2];
let turn=0;
let winner=-1;
let startenergy=2;
let remainingenergy=startenergy;
let atks=[0,0];
let used_arr=[];

//Player decks
let roguedeck=["Diadora- Underworld's Queen","Zayne- Nightslasher","Shayde","Lookout","Lookout","Rogue","Rogue","Rogue","Petty Thief","Petty Thief","Petty Thief","Petty Thief","Lesser Thief","Lesser Thief","Lesser Thief"];

let warriordeck=["King","Dread Knight","Aegis Guardian","Page","Page","Page","Recruit","Recruit","Recruit","Squire","Squire","Knight","Knight","Berserker","Berserker"];

let magedeck=["Demien- Thunder Lord","Dhampir Lobo","Channeler","Apprentice Mage","Apprentice Mage","Apprentice Mage","Healer Mage","Healer Mage","Balanced Mage","Balanced Mage","Balanced Mage","Control Mage","Control Mage","Destroyer Mage","Destroyer Mage"];

//let basiceffectdeck=["Channeler","Channeler","Channeler","Channeler","Channeler"];
//let basiceffectdeck2=["Shayde","Shayde","Shayde","Shayde","Shayde"];

console.log(warriordeck.length);
console.log(roguedeck.length);
console.log(magedeck.length);


let p1cardnames=roguedeck;
let p2cardnames=warriordeck;

//Divs
let curhandtable=document.getElementById("curplayerhand");
let p1handdiv=document.getElementById("p1hand");
let p2handdiv=document.getElementById("p2hand");
let handdivs=[p1handdiv,p2handdiv];
let remainingenergyelem=document.getElementById("remainingenergy");

setupdeck();


draw(3);
displayhand();

console.log(players[0].deck);
console.log(players[1].deck);
