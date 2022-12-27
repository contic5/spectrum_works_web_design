let cards=[
//Warriors
{name:"Page",atk:1,def:0,cost:2,cardtype:"Warrior",rarity:"enemy",desc:"Other Warrior ATK>2, ATK+2"},
{name:"Recruit",atk:2,def:0,cost:2,cardtype:"Warrior",rarity:"enemy",desc:""},
{name:"Squire",atk:3,def:0,cost:3,cardtype:"Warrior",rarity:"enemy",desc:""},
{name:"Knight",atk:5,def:0,cost:5,cardtype:"Warrior",rarity:"enemy",desc:""},
{name:"Berserker",atk:2,def:0,cost:3,cardtype:"Warrior",rarity:"enemy",desc:"Opponent ATK>4, ATK+2"},
{name:"Aegis Guardian",atk:1,def:6,cost:5,cardtype:"Warrior",rarity:"miniboss",desc:""},
{name:"Dread Knight",atk:4,def:0,cost:4,cardtype:"Warrior",rarity:"miniboss",desc:"Enemy ATK-1"},
{name:"King",atk:2,def:0,cost:6,cardtype:"Warrior",rarity:"boss",desc:"Summon 2 Knights"},

    
//Mages
{name:"Apprentice Mage",atk:2,def:0,cost:2,cardtype:"Mage",rarity:"enemy",desc:""},
{name:"Healer Mage",atk:0,def:3,cost:4,cardtype:"Mage",rarity:"enemy",desc:"Lifesteal 1"}, 
{name:"Balanced Mage",atk:3,def:0,cost:3,cardtype:"Mage",rarity:"enemy",desc:""},
{name:"Control Mage",atk:2,def:0,cost:3,cardtype:"Mage",rarity:"enemy",desc:"Numb(1)"},
{name:"Destroyer Mage",atk:5,def:0,cost:5,cardtype:"Mage",rarity:"enemy",desc:""}, 
{name:"Channeler",atk:2,def:0,cost:4,cardtype:"Mage",rarity:"miniboss",desc:"Other Mage ATK+1"},
{name:"Dhampir Lobo",atk:5,def:0,cost:4,cardtype:"Mage",rarity:"miniboss",desc:"Lifesteal 1"},
{name:"Demien- Thunder Lord",atk:5,def:0,cost:6,cardtype:"Mage",rarity:"boss",desc:"Numb(1)"},
    
//Rogues
{name:"Lesser Thief",atk:0,def:1,cost:1,cardtype:"Rogue",rarity:"enemy",desc:""},
{name:"Petty Thief",atk:2,def:0,cost:2,cardtype:"Rogue",rarity:"enemy",desc:""},
{name:"Rogue",atk:3,def:0,cost:3,cardtype:"Rogue",rarity:"enemy",desc:""},
{name:"Lookout",atk:1,def:0,cost:5,cardtype:"Rogue",rarity:"enemy",desc:"Summon 2 Rogues"},
{name:"Shayde",atk:2,def:0,cost:4,cardtype:"Rogue",rarity:"miniboss",desc:"Rogue ATK+1"},
{name:"Zayne- Nightslasher",atk:2,def:0,cost:5,cardtype:"Rogue",rarity:"miniboss",desc:"Numb(1)"},
{name:"Diadora- Underworld's Queen",atk:1,def:0,cost:5,cardtype:"Rogue",rarity:"boss",desc:"ATK+2 per rogue"},

//Other
{name:"Xerender",atk:999,def:999,cost:9,cardtype:"Rogue",rarity:"boss",desc:"You win this round"}
];

let cardscheat=[];
for(let i=0;i<cards.length;i++)
{
    cardscheat.push(JSON.parse(JSON.stringify(cards[i])));
    cardscheat[i].cost=0;
}
//cards=cardscheat;