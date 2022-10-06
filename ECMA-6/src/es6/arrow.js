//Arrow Functions, Promesas y Parámetros en objetos


//creacion de objetos/**
 /* Parameters in Objects
*/
let name = 'Luis';
let age = 28;

//ES5
objeto ={
    name: name,
    age: age
};
console.log(objeto);

//ES6
obj2 ={name, age};
console.log(obj2);
/***************************** */
/**
 * Arrow Functions
 */
const names =[
    {name: 'Pedro', age: 32},
    {name: ' Juana', age: 28}
]

//mapear con funcion anonima

let listofNames = names.map(function(item){
    console.log(item.name);
})

//arrow

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 =(name, age, country)=>{
    
};

const listofName = name =>{

};

const square = num => num*num;





