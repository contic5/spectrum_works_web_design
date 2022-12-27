<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Communication Website</title>
        <link href="mystyle.css" type='text/css' rel='stylesheet'>
    </head>
    <body>
    <?php
    require("header.php");
    require("sessionstart.php");
    require("db.php");
        
    $query="SELECT * FROM Articles";
    $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
    $articles=[];
    while($row=mysqli_fetch_assoc($result))
    {
        array_push($articles,$row);
    }
    for($i=0;$i<count($articles);$i++)
    {
        $articles[$i]=array_change_key_case($articles[$i],CASE_LOWER);
    }
    $articles_json=json_encode($articles);
    ?>
    <table id="results"></table>
    <script>
    let results="";
    let articles=<?php echo $articles_json?>;
    let cur_row=document.createElement("tr");
    for(let i=0;i<articles.length;i++)
    {
        let curtd=document.createElement("td");
        curtd.innerHTML+=`<h3>${articles[i].name}-from ${articles[i].publisher}</h3>`;
        curtd.innerHTML+=`Link: <a href=${articles[i].link}">${articles[i].link}</a>`;
        curtd.innerHTML+=`<h3>Topic: ${articles[i].topic}</h3>`;
        curtd.innerHTML+=articles[i].articlestart;

        cur_row.appendChild(curtd);
        if(i%2==1)
        {
            document.getElementById("results").appendChild(cur_row);
            cur_row=document.createElement("tr");
        }
    }
    </script>
    </body>
</html>