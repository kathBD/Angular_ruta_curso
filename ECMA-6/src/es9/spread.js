const obj ={
    name: 'kath',
    country: 'Co',
    lenguage: 'Java'
};
//S elementos restantes de un array u objeto usando desestructuración.
let {name, ...all}= obj;
console.log(name, all);


console.log(all);


const pais ={
    europa: 'España', 
    asia: 'China'
}

const nacionalidad ={
    española: 'España',
    griego: 'Gracia'
}

const naciones ={
    ...pais,
    america: 'Colombia'
}

console.log(naciones)


