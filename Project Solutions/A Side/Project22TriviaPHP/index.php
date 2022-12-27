<html>
<head>
<title>Finance Trivia</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
<link href="mystyle.css" type="text/css" rel="stylesheet">  
</head>
<body>
<div id="content">
<h1>Finance Trivia</h1>
<?php
/*Sources
https://www.investopedia.com/articles/younginvestors/08/eight-tips.asp
https://www.investopedia.com/articles/investing/061313/10-common-financial-terms-every-newbie-needs-know.asp
https://www.thestreet.com/personal-finance/education/different-types-of-interest-14833335
*/

$answers=["a","c","b","d","b"];
$writtenanswers=["A debit card only can use money in a checking account while a credit card can generate interest.",
    "Emergency Fund (Unexpected Injuries)",
    "The interest is recalculated on a yearly basis with the same percents.",
    "A Retirement Fund",
    "Essentials, Savings, Purchases",
];
if(isset($_POST["q1"]))
{
    $guesses=[];
    array_push($guesses,$_POST["q1"]);
    array_push($guesses,$_POST["q2"]);
    array_push($guesses,$_POST["q3"]);
    array_push($guesses,$_POST["q4"]);
    array_push($guesses,$_POST["q5"]);
    $totalcorrect=0;
    
    for($i=0;$i<sizeof($answers);$i++)
    {
        print("<div>");
        if($guesses[$i]==$answers[$i])
        {
            print("<h3>Correct, the answer is ".$answers[$i]."</h3>");
            $totalcorrect+=1;
        }
        else
        {
            print("<h3>Incorrect, the answer is ".$answers[$i]."</h3>");
        }
        print("<p>".$writtenanswers[$i]."</p>");
        print("</div>");
    }
    print("<h2>Correct Answers: ".$totalcorrect."/5</h2>");
}
?>
<form method="post">
<label for="q1">What is the difference between a credit and debit card?</label>
<select name="q1">
<option value="a">A debit card only can use money in a checking account while a credit card can generate interest.</option>
<option value="b">A credit card is linked to a bank account, while a debit card is not.</option>
<option value="c">A credit card has a limited amount of money, while a debit card does not.</option>
<option value="d">A debit card can build credit history, while a credit card cannot.</option>
</select>

<label for="q2">What is first thing you should ALWAYS leave money for?</label>
<select name="q2">
<option value="a">Longterm Savings</option>
<option value="b">Major Future Purchases</option>
<option value="c">Emergency Fund (Unexpected Injuries)</option>
<option value="d">Necessary Purchases</option>
</select>

<label for="q3">How does compound interest work?</label>
<select name="q3">
<option value="a">The interest always increases by the same amount each month</option>
<option value="b">The interest is recalculated on a yearly basis with the same percents.</option>
<option value="c">The interest rate changes, but the interest you get is only based on the initial deposit</option>    
</select>

<label for="q4">What is an IRA?</label>
<select name="q4">
<option value="a">A special bank account</option>
<option value="b">An insurance policy</option>
<option value="c">A shorterm savings plan</option>
<option value="d">A Retirement Fund</option>
</select>

<label for="q5">What are the three parts of the 50 20 30 rule of budgeting?</label>
<select name="q5">
<option value="a">Essentials, Monthly Expenses, Regular Expenses</option>
<option value="b">Essentials, Savings, Purchases</option>
<option value="c">Savings, Purchases, Essentials</option>
<option value="d">Direct Deposit, Purchases, Essentials</option>
</select>

<button type="submit">Submit</button>
</form>
</div>
</body>
</html>