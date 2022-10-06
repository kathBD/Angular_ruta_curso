const data ={
    frontend: 'KAth',
    backend: 'Juan',
    desing: 'Glen'
}


//transformar a matriz - key value

const entries = Object.entries(data);

console.log(entries)


//cuantos elementos 
// con length
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const values = Object.values(data);

console.log(values);
console.log(values.length);

//Object.keys() devuelve un array con las propiedades (keys) 

const keys = Object.keys(data)

console.log(keys);
console.log(keys.length);