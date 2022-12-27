<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Vigenere Cipher</title>
        <link href="mystyle.css" type='text/css' rel='stylesheet'>
    </head>
    <body>
    <?php
    $message="";
    $result="";
    $keyword="CODE";
    if(isset($_GET["keyword"]))
    {
        if(strlen($_GET["keyword"])>0)
        {
            $keyword=$_GET["keyword"];
        }
    }
    
    
    if(isset($_GET["encrypt"]))
    {
        $message=$_GET["encrypt"];
        $message=strtoupper($message);
        $keyindex=0;
        for($i=0;$i<strlen($message);$i++)
        {
            $curletter=substr($message,$i,1);
            $keyletter=substr($keyword,$keyindex%strlen($keyword),1);
            $curint=ord($curletter)-65;
            $keyint=ord($keyletter)-65;
            if($curint>=0&&$curint<=25)
            {
                $curint=($curint+$keyint)%26;
                $curint=$curint+ord("A");
                $newletter=chr($curint);
                $keyindex+=1;
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
        $keyindex=0;
        for($i=0;$i<strlen($message);$i++)
        {
            $curletter=substr($message,$i,1);
            $keyletter=substr($keyword,$keyindex%strlen($keyword),1);
            $curint=ord($curletter)-65;
            $keyint=ord($keyletter)-65;
            if($curint>=0&&$curint<=25)
            {
                $resultint=($curint-$keyint+26)%26;
                $resultint=$resultint+65;
                $newletter=chr($resultint);
                $keyindex+=1;
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
    <h1>Vinegere Cipher</h1>
    <form>
    <h2>Encrypt</h2>
    <textarea name="encrypt"></textarea>
    Keyword:<input type="text" name="keyword">
    <button>Submit</button>
    </form>
    <form>
    <h2>Decrypt</h2>
    <textarea name="decrypt"></textarea>
    Keyword:<input type="text" name="keyword">
    <button>Submit</button>
    </form>
    </body>
</html>