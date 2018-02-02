<!-- Synthétisé et réindenté -->


<!DOCTYPE html>
    <html>
        <head>
            <?php include 'includes/header.html' ?> <!-- dossier include pour eviter les saisies répétitives-->
            <title>Navigacorn</title>
            <script src="js/javascript.js"></script>
        </head>
        <body>
            <h1 class="container text-center animated bounceInRight">SPACE (cake) NAVIGATOR</h1>

            <div class="container jumbotron">

                    <div id="url" class="input-group mb-3">
                        <input id="urlLink" type="text" class="form-control" placeholder="Saisir le chemin" name="search">
                        <div class="input-group-append">
                            <button id="search" type="button" class="btn btn-dark">Valider</button>
                        </div>
                    </div>

                <div id="chemin" class='col-12'></div>
                    <ul id="ul0" class="list-group text-center">
                </ul>

            </div>

            <?php include 'includes/base_js.html' ?>
        </body>
    </html>