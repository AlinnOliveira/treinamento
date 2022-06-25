<html>
    <head>
        <title>1º projeto PHP na DIO</title>

        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="/resources/demos/style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>


        <script>
            $( function() {
                $( "#accordion" ).accordion();
            } );
        </script>
  
        <style type="text/css">
            .linha {
                font.weigth: bold;
                color: blue;
                padding-left: 30px;
                line-height: 30px;
            }
        </style>
    </head>
    <body>
        <?php
            for ($i= 0 ; $i < 10 ; $i++){
                print( " Linha nro: " . $i . " <br /> ");

            }
            print( " Testando a classe css <br /> <br /> ");

            for ($i= 0 ; $i < 10 ; $i++){
                print( "<span class=\"linha\"> Linha nro: " . $i . "</span> <br /> ");

            }
        ?>

<br /><br /><br />

    </body>

    <script type="text/javascript">
            $(document).ready(function(){
                alert("Que demais! Parabéns!");
            });
    </script>
</html>