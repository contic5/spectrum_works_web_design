//Working Harder
function displayresults(event)
{
    alert("Displaying results");
    const resultdiv=document.getElementById('results');

    let name="Name:"+document.getElementsByName('name')[0].value;
    let name_paragraph=document.createElement("h3");
    name_paragraph.innerHTML=name;
    resultdiv.appendChild(name_paragraph);

    let agerange="Age range:"+document.getElementsByName('agerange')[0].value;
    let agerange_paragraph=document.createElement("h3");
    agerange_paragraph.innerHTML=agerange;
    resultdiv.appendChild(agerange_paragraph);

    let street="Street:"+document.getElementsByName('street')[0].value;
    let street_paragraph=document.createElement("h3");
    street_paragraph.innerHTML=street;
    resultdiv.appendChild(street_paragraph);

    let city="City:"+document.getElementsByName('city')[0].value;
    let city_paragraph=document.createElement("h3");
    city_paragraph.innerHTML=city;
    resultdiv.appendChild(city_paragraph);

    let appartment="Appartment:"+document.getElementsByName('appartment')[0].value;
    let appartment_paragraph=document.createElement("h3");
    appartment_paragraph.innerHTML=appartment;
    resultdiv.appendChild(appartment_paragraph);

    let state="State:"+document.getElementsByName('state')[0].value;
    let state_paragraph=document.createElement("h3");
    state_paragraph.innerHTML=state;
    resultdiv.appendChild(state_paragraph);

    let zipcode="Zip code:"+document.getElementsByName('zipcode')[0].value;
    let zipcode_paragraph=document.createElement("h3");
    zipcode_paragraph.innerHTML=zipcode;
    resultdiv.appendChild(zipcode_paragraph);

    let like="Like: "+document.getElementsByName('like')[0].value;
    let like_pargraph=document.createElement("h3");
    like_pargraph.innerHTML=like;
    resultdiv.appendChild(like_pargraph);

    let usage="Usage: "+document.getElementsByName('usage')[0].value;
    let usage_paragraph=document.createElement("h3");
    usage_paragraph.innerHTML=usage;
    resultdiv.appendChild(usage_paragraph);

    let recommend="Recommend: "+document.getElementsByName('recommend')[0].value;
    let recommend_paragraph=document.createElement("h3");
    recommend_paragraph.innerHTML=recommend;
    resultdiv.appendChild(recommend_paragraph);

    let newrecipes="New recipes: "+document.getElementsByName('newrecipes')[0].value;
    let newrecipes_paragraph=document.createElement("h3");
    newrecipes_paragraph.innerHTML=newrecipes;
    resultdiv.appendChild(newrecipes_paragraph);

    let recipe_to_add="Recipe to Add: "+document.getElementsByName('recipe_to_add')[0].value;
    let recipe_to_add_paragraph=document.createElement("h3");
    recipe_to_add_paragraph.innerHTML=recipe_to_add;
    resultdiv.appendChild(recipe_to_add_paragraph);

    let whyuse="Why use: "+document.getElementsByName('whyuse')[0].value;
    let whyuse_paragraph=document.createElement("h3");
    whyuse_paragraph.innerHTML=usage;
    resultdiv.appendChild(whyuse_paragraph);

    let likemost="Recommend: "+document.getElementsByName('likemost')[0].value;
    let likemost_paragraph=document.createElement("h3");
    likemost_paragraph.innerHTML=likemost;
    resultdiv.appendChild(likemost_paragraph);

    let improvements="Improvements: "+document.getElementsByName('improvements')[0].value;
    let improvements_paragraph=document.createElement("h3");
    improvements_paragraph.innerHTML=improvements;
    resultdiv.appendChild(improvements_paragraph);

    if(event!=null)
    {
        event.preventDefault(); 
    }
}

//Working Smarter
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
    }
    if(event!=null)
    {
        event.preventDefault(); 
    }
}
displayresultsloop();
var form=document.getElementById('myform');
form.addEventListener("submit",displayresultsloop);