<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"> 
        <title>CYBER CYBER CYBER</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body class="params">
        <div class="container">
            <span>Your name is:</span>
            <h1>
                <?php
                    $group_name = $_GET["groupName"];
                    $shuffled = str_shuffle($group_name);
                    echo $shuffled . " Cyber Masters";
                ?>
            </h1>
            <h5>Iv'e made it cooler for you, don't worry!</h5>
            <?php
                echo "<section>";
                echo "<h2>";
                $flag = 0;
                $wd_str = "World Domination";
                echo "Your Fields: ";
                $fields = $_GET["fields"];
                if($fields){
                    foreach($_GET["fields"] as $f){
                        echo $f. " ";
                        if(strcmp($f, $wd_str) == 0){
                            $flag = 1;
                        }
                    }
                } 
                
                echo "</h2>";
                echo "<br>";
                echo "<p>";
                
                if($flag == 0){
                    echo "So you didnt choose world domination? Thats not Cyber. I took the liberty to add this to your manifesto.";
                } else {
                    echo "World domination is sooooooo CYBER of you. You are a true hacker.";
                }

                echo "</p>";
                echo "</section>";
                echo "<h2>Menifesto</h2>";
                echo "<p>";

                $manifest = $_GET["manifest"];
                $dot = ".";
                
                echo "<br>";
                
                $and_cyber = " and cyber. ";
                $dot_indx = strpos($manifest, $dot);
                if($dot_indx){
                    $manifest = str_replace(".", $and_cyber, $manifest);
                    echo "Your manifesto is not enough CYBER. I've made it much more CYBER for you, don't worry.<br> Here it is:<br>";
                } else {
                    $manifest .= $and_cyber;
                }

                echo $manifest;                

                if(!$flag){
                    echo " And world domination!";
                }
            ?>
        </div>
    </body>
</html>