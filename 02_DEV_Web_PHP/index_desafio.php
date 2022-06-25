<html>
    <head>
        <title>Desafio DEV WEB com PHP - Criando Accordion</title>

        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="/resources/demos/style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>


        <script>
            $( function() {
                $( "#accordion" ).accordion();
            } );
        </script>
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

          <div id="accordion">
            <h3>Mahatma Gandhi</h3>
            <div>
              <p>
              "SEJA a mudança que você quer ver no mundo!"
              </p>
            </div>
            <h3>Charles Chaplin</h3>
            <div>
              <p>
              <ul>
                <li>"Um dia sem risada é um dia desperdiçado."</li>
                <li>"Falar sem aspas, amar sem interrogação, sonhar com reticências, viver sem ponto final."</li>
              </ul>
              
              </br>
              
              </p>
            </div>
            <h3>Albert Einstein</h3>
            <div>
              <p>
              "O primeiro dever da inteligência é desconfiar dela mesma."
              </br></br>
              "Tolo é aquele que espera resultados diferentes aginda da mesma forma."
              </br></br>
              "A criatividade é a inteligência se divertindo."
              </p>

            </div>
            <h3>Cora Coralina</h3>
            <div>
              <p>
              "O que vale na vida não é o ponto de partida e sim a caminhada. 
              Caminhando e semeando, no fim terás o que colher."
              </p>
              <p>
              "sou aquela mulher que fez a escalada da montanha da vida, removendo pedras e plantando flores."
              </p>
            </div>
          </div>
    </body>
</html>