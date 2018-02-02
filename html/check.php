<!-- fonctions innutiles liées au message d'erreur "boulet" supprimées -->

<?php

    if(isset($_POST['action']) && !empty($_POST['action'])) 
    {
        $action = $_POST['action'];

        switch($action) 
        {
            case 'folder' :
            folder();
            break;
            case 'search' :
            search();
            break;
        }
    }

    function folder()
    {
        if(isset($_POST['chemin']) && !empty($_POST['chemin'])) 
        {
            $chemin = $_POST['chemin'];
            //echo $chemin;
        }

        $list = scandir($chemin);
        $max = sizeof($list);
        $li = "<li class=\"list-group-item d-flex align-items-center animated fadeIn" ;
        $iconFile = "<i class=\"fas fa-file col-2\"></i>";
        $iconFolder = "<i class=\"far fa-folder col-2\"></i>";
        $id = "id=\"";


        for ($i=0; $i < $max; $i++) 
        {

            $cheminTeste = $chemin . "/" . $list[$i];//variable de test pour si c'est un fichier ou un dossier
            $dotPos = strpos($list[$i],".");// variable de position du point pour ne pas afficher les fichiers caché ensuite

            if($dotPos != 0 && is_file($cheminTeste))
            {
                print $li . " file" .  "\">". $iconFile . $list[$i] . "</li>";
            }


            if($list[$i] == "..")
            {
                print $li . " folder\"". $id . $list[$i]. "\">"."<button class=\"btn btn-warning btn-lg btn-block\">Back</button>" ."</li>";
            }


            if($dotPos === 0 && $list[$i] != "..")
            {
                print "<li class=\"" . "d-none" .   "\">". $list[$i] . "</li>";
            }


            elseif($dotPos == false && $list[$i] != ".." && is_dir($cheminTeste) == true)
            {
                print $li . " folder\"". $id . $list[$i]. "\">". $iconFolder  .$list[$i] . "</li>";
            }
        }
    }
?>
   