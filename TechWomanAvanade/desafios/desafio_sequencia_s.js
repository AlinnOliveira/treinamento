/*
Desafio
Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
S = 1 + 1/2 + 1/3 + … + 1/100

Entrada
Não há nenhuma entrada neste problema.

Saída
A saída contém um valor correspondente ao valor de S.
O valor deve ser impresso com dois dígitos após o ponto decimal.

Saída = 5.19
*/

/*
 Desafio - Escreva o valor de S, sendo S dado pela fórmula:
 S = 1 + 1/2 + 1/3 + … + 1/100
 Author: Aline Oliveira
*/
var S = 1;
for (let i = 2; i <= 100; i++) {
  S += 1/parseFloat(i);  	
}
console.log(S.toFixed(2))