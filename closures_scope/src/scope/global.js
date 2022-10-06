var a; // declarar

var b = 'B'; //declaramos y asignamos

b = 'bb'; //reasignar

var a = 'aa'; // redeclaración


//global scope

var fruit = 'apple';//global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countris(){
    country = 'Colombia'; //global
    console.log(country);
}

countris();
console.log(country);