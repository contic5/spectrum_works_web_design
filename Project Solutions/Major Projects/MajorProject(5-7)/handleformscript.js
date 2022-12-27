function displayresultsloop(event)
{
    const resultdiv=document.getElementById('results');

    var elements = document.getElementById("myform").elements;
    for (var i = 0; i<elements.length;i++) 
    {
        let element=elements[i];
        if(element.type!='submit')
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