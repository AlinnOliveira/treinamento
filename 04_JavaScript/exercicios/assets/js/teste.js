console.log("Hello World!");

//Descobrindo os  números pares e ímpares
function returnEvenValues(array){

    let evenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0 ){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} é ímpar. `);
        }
    }
    console.log(' Números pares: ', evenNums);
}

let array = [1,3,6,7,9,11,13,14,16];
returnEvenValues(array);
var d = Date();
console.log("Hoje é: "+ d.getDate() + "/" (d.getMonth()+1));