var firsName; //declara -undefined
firsName = 'Luna';
console.log(firsName);


//reasignar-redeclarar
var lastName = 'Petra'; //declarar -asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David';//declarando - asignando
var secondName = 'Ana';// reasignar
console.log(secondName);


//ej let

let fruit = 'Banana'; //declarar y asignar
//let fruit = 'Banana'; //no se puede redeclarar

fruit = 'kiwi'; // reacsignar
console.log(fruit);


//ej const

const animal = 'dog'; //declarar y asignar

//animal = 'cat';//reasignando no se puede en constante
//const animal = 'snake';// no se puede redeclarar
console.log(animal);


//inmutabilidad depende del contexto

const vehicles =[];
vehicles.push("🚗")
console.log(vehicles);
vehicles.pop(vehicles);
console.log(vehicles);
