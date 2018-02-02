/*fonction "boulet" amélioré(/réparée), fonctions entrées en commentaires
supprimées. Possibilités d'améliorations: mettre les paragraphes ajax
(signalés par "-->" ) sous une seule et meme fonction que l'on rappelerais
à chaque fois */


var chemin = '/home'
var cheminAfficher = chemin;


//Mise à jour du chemin
function majChemin()
{
    var idx = cheminAfficher.lastIndexOf('/');
    //console.log (idx);
    cheminAfficher = cheminAfficher.substring(0, idx);
    //console.log (cheminAfficher);
}

//Fonction sur le clic-souris
function listClick(id){
    cheminAfficher = cheminAfficher + "/" + id;
    chemin = chemin + "/" + id;
    $('#chemin').html(chemin);//affiche chemin le span d'id chemin
    var testId = id;
    if(testId == '..' )
    {
        majChemin();//efface le premier "/"
        majChemin();//efface la chaine precedente
        $('#chemin').html(cheminAfficher);
        new Audio('sound/waw.mp3').play();
    }

    else 
    {
        $('#chemin').html(cheminAfficher);//affiche chemin dans span d'id chemin
        new Audio('sound/glitter.mp3').play();
    }

    //Navigation dans le dossier
/*-->*/ $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) 
        {
            $('ul').html(output); /*<--*/
        }
    });
}

//Fonction sur le bouton search au clic
function listClick2(inputPath)
{
    var chemin1 = inputPath;

    $('#chemin').html(chemin1);//affiche chemin le span d'id chemin

    if(chemin1 != '' )
    {

        //majChemin();//efface la chaine precedente
        $('#chemin').html(chemin1);
        new Audio('sound/waw.mp3').play();
    }

    else 
    {

        $('#chemin').html(chemin1);//affiche chemin dans span d'id chemin
        new Audio('sound/glitter.mp3').play();
    }

    //Navigation dans le dossier
/*-->*/ $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: inputPath},
        type: 'post',
        success: function(output) 
        {
            $('ul').html(output); /*<--*/
        }
    });
}

// Champ de saisie

function inputPath(inputPath)
{
/*-->*/ $.ajax({ url:'html/check.php',
        data: {action: 'search', chemin: chemin},
        type: 'post',
        success: function(output)
        {
            $('ul').html(output); /*<--*/
        }
    })

    if( $("#ul0").children().length > 0) 
    {
        listClick2(inputPath);
    }
    else
    {
        alert("Boulet!!!"); //permet de retourner au /homme 
        listClick('/home');

    }
}


    $(document).ready(function(){
        new Audio('sound/squalala.mp3').play();
        $('#chemin').html(chemin);
        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: chemin},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    setInterval(function(){     //permet de recliquer

                        $("li[id]").on('click',(function(){
                            var id = $(this).attr('id');
                            listClick(id);
                            BindEventHandlers();//provoque une erreur qui stope la boucle
                          }));
                        $("#search").on('click', (function(){
                            var pathInput = $('#urlLink').val();
                                if(pathInput != ''){
                                inputPath(pathInput);
                                }

                            BindEventHandlers();
                        }))

                    }, 1000);

                }
            });
        });