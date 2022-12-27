//FOR THIS TO WORK, MAKE SURE YOU HAVE A FORM WITH ID "myform" AND A DIV WITH ID "results"
function displayresultsloop(event)
{
    const resultdiv=document.getElementById('results');
    resultdiv.innerHTML="";

    var elements = document.getElementById("myform").elements;
    for (var i = 0; i<elements.length;i++) 
    {
        let element=elements[i];
        if((element.type=="checkbox" ||element.type=="radio") && element.checked)
        {
            let restext=element.name+": "+element.value;
            console.log(restext);
            let newchild=document.createElement("h3");
            newchild.innerHTML=restext;
            resultdiv.appendChild(newchild);
        }
        else if(element.type!='submit' && element.type!='reset' && element.type!="checkbox" && element.type!="radio")
        {
            let restext=element.name+": "+element.value;
            console.log(restext);
            let newchild=document.createElement("h3");
            newchild.innerHTML=restext;
            resultdiv.appendChild(newchild);
        }
        resultdiv.style.visibility='visible';
    }
    if(event!=null)
    {
        event.preventDefault(); 
    }
}
var form=document.getElementById('myform');
form.addEventListener("submit",displayresultsloop);