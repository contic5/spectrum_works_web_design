<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Caesar Cipher</title>
        <link href="mystyle.css" type='text/css' rel='stylesheet'>
    </head>
    <body>
    <?php
    $message="";
    $result="";
    $shift=3;
    if(isset($_GET["shift"]))
    {
        if($_GET["shift"]>0)
        {
            $shift=$_GET["shift"];
        }
    }
    
    
    if(isset($_GET["encrypt"]))
    {
        $message=$_GET["encrypt"];
        $message=strtoupper($message);
        for($i=0;$i<strlen($message);$i++)
        {
            $curletter=substr($message,$i,1);
            $curint=ord($curletter)-ord("A");
            if($curint>=0&&$curint<=25)
            {
                $curint=($curint+3)%26;
                $curint=$curint+ord("A");
                $newletter=chr($curint);
            }
            else
            {
                $newletter=$curletter;
            }
            $result.=$newletter; 
        }
        print("<h2>$result</h2>");
    }
    else if(isset($_GET["decrypt"]))
    {
        $message=$_GET["decrypt"];
        $message=strtoupper($message);
        for($i=0;$i<strlen($message);$i++)
        {
            $curletter=substr($message,$i,1);
            $curint=ord($curletter)-ord("A");
            if($curint>=0&&$curint<=25)
            {
                $curint=($curint-3)%26;
                $curint=$curint+ord("A");
                $newletter=chr($curint);
            }
            else
            {
                $newletter=$curletter;
            }
            $result.=$newletter;
            
        }
        print("<h2>".$result."</h2>");
    }
    ?>
    <h1>Caesar Cipher</h1>
    <form>
    <h2>Encrypt</h2>
    <textarea name="encrypt"></textarea>
    Shift:<input type="number" name="shift">
    <button>Submit</button>
    </form>
    <form>
    <h2>Decrypt</h2>
    <textarea name="decrypt"></textarea>
    Shift:<input type="number" name="shift">
    <button>Submit</button>
    </form>
    </body>
</html>