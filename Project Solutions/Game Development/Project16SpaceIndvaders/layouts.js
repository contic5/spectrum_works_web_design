let layouts=[];

let layout1={
enemies:[{atype:'A',x:0,y:0},
{atype:'A',x:100,y:0},
{atype:'A',x:200,y:0},
{atype:'A',x:300,y:0},
{atype:'A',x:400,y:0},
{atype:'A',x:0,y:50},
{atype:'A',x:100,y:50},
{atype:'A',x:200,y:50},
{atype:'A',x:300,y:50},
{atype:'A',x:400,y:50}],
name:"Intro"};

let layout2={enemies:[{atype:'A',x:0,y:0},
{atype:'A',x:100,y:0},
{atype:'A',x:200,y:0},
{atype:'A',x:300,y:0},
{atype:'A',x:400,y:0},
{atype:'A',x:0,y:50},
{atype:'A',x:100,y:50},
{atype:'A',x:200,y:50},
{atype:'A',x:300,y:50},
{atype:'A',x:400,y:50},
{atype:'A',x:0,y:100},
{atype:'A',x:100,y:100},
{atype:'A',x:200,y:100},
{atype:'A',x:300,y:100},
{atype:'A',x:400,y:100},
{atype:'A',x:0,y:150},
{atype:'A',x:100,y:150},
{atype:'A',x:200,y:150},
{atype:'A',x:300,y:150},
{atype:'A',x:400,y:150}],
name:"Reinforcements"};

let layout3={enemies:[
{atype:'C',x:0,y:0},
{atype:'A',x:100,y:0},
{atype:'C',x:200,y:0},
{atype:'A',x:300,y:0},
{atype:'C',x:400,y:0},
             
{atype:'A',x:0,y:50}, 
{atype:'C',x:100,y:50},
{atype:'A',x:200,y:50},
{atype:'C',x:300,y:50},
{atype:'A',x:400,y:50},
             
{atype:'C',x:0,y:100},  
{atype:'A',x:100,y:100},
{atype:'C',x:200,y:100},
{atype:'A',x:300,y:100},
{atype:'C',x:400,y:100},
             
{atype:'A',x:0,y:150},
{atype:'C',x:100,y:150},
{atype:'A',x:200,y:150},
{atype:'C',x:300,y:150},
{atype:'A',x:400,y:150}],
name:"Attack"};

let layout4={enemies:[
{atype:'C',x:0,y:0},
{atype:'C',x:100,y:0},
{atype:'C',x:200,y:0},
{atype:'C',x:300,y:0},
{atype:'C',x:400,y:0},
             
{atype:'C',x:0,y:50}, 
{atype:'C',x:100,y:50},
{atype:'C',x:200,y:50},
{atype:'C',x:300,y:50},
{atype:'C',x:400,y:50},
             
{atype:'A',x:0,y:100},  
{atype:'A',x:100,y:100},
{atype:'A',x:200,y:100},
{atype:'A',x:300,y:100},
{atype:'A',x:400,y:100},
             
{atype:'A',x:0,y:150},
{atype:'A',x:100,y:150},
{atype:'A',x:200,y:150},
{atype:'A',x:300,y:150},
{atype:'A',x:400,y:150}],name:"Sword and Shield"};

let layout5={enemies:[{atype:'F',x:0,y:0},
{atype:'F',x:100,y:0},
{atype:'F',x:200,y:0},
{atype:'F',x:300,y:0},
{atype:'F',x:400,y:0},
{atype:'C',x:0,y:50},
{atype:'C',x:100,y:50},
{atype:'C',x:200,y:50},
{atype:'C',x:300,y:50},
{atype:'C',x:400,y:50},
{atype:'C',x:0,y:100},
{atype:'C',x:100,y:100},
{atype:'C',x:200,y:100},
{atype:'C',x:300,y:100},
{atype:'C',x:400,y:100},],name:"Falling"};;

let layout6={
    enemies:[{atype:'T',x:0,y:0}],
    name:"Terror"};

let layout7={
    enemies:[{atype:'R',x:0,y:200}],
    name:"Rival"};

let layout8={enemies:[
    {atype:'E',x:200,y:0},
],name:"Emperor"};


layouts.push(layout1);
layouts.push(layout2);
layouts.push(layout3);
layouts.push(layout4);
layouts.push(layout5);
layouts.push(layout6);
layouts.push(layout7);
layouts.push(layout8);

