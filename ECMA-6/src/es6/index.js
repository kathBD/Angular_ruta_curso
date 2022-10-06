//valorespor defecto
function newFunction(name, age, country){
    var name= name || 'Kath'
    var age = age || 34
    var country = country || 'Mexico';
    console.log(name, age, country);
}

newFunction();

//ES6

function newFunction2(name=' nombre', age =8, country ='Mx'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Juan', 23, 'CO');

let hello = 'Hello';
let world = 'Word';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//templete literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Estoy en la ruta de Angular \n " + 'otra frase epica';
console.log(lorem);
//ES6

let lorem2 = `Estoy en la ruta de JS
otra frase epica `;

console.log(lorem2);

//Destructuracion

let person ={
    'name': 'Susy',
    'age': 23,
    'country': 'CO'
}
console.log(person.name, person.age, person.country);

let{name, age, country}= person;
console.log(name, age);

//spread operator

let team1 = ['Tsuki', 'Tenshi', 'Garu'];
let tema2 = ['juan', 'pedro', 'Lope'];

let education = ['Joan', ...team1,...tema2];
console.log(education);


//var

{
    var globalVar =" Global Var";


}

//let en su bloque de codigo
{
    let globalLet = 'Global let';
    console.log(globalLet)
}
console.log(globalVar);
//console.log(globalLet);
