console.log("Hello World!");

//document.getElementById('seuNomeHTML').innerHTML = "Bem Vindo(a), ";
//var BEM_VINDO = document.getElementById('seuNomeHTML');
//var person = prompt("Qual seu nome?  ");
//BEM_VINDO.innerHTML.concat(person);
/*
function seuNome(person){
    //console.log(document.getElementById(seuNomeHTML).innerText + person);
    BEM_VINDO.innerHTML().concat(person);  
}
*/
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
    if (count < 0){

    }
	count--;
	CURRENT_NUMBER.innerHTML = count;
}
