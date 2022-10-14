function sum(num1, num2){
    return num1 + num2;
}


function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback){

    return callback(num1, num2);

}

console.log(calc(2, 2, sum));
console.log(calc(2, 2, rest));

/********************** */

//es un callback
setTimeout(function(){
  console.log(' Hola JavaScript');
},5000);



function greetting(name){
    console.log(`Hola ${name}`)
}

setTimeout(greetting, 2000, 'Juan' );

/*******callback con 2s de demora */

function runCode(callback) {

    window.setTimeout(callback, 2000)
  }
   console.log('Log after 2s');
  