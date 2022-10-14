function* gen(){
    yield 1;
    yield 2;
    yield 3;

}

//llamar al consecuente next iterar
const g = gen();
console.log(g.next().value)
console.log(g.next().value)


function* iterar(array){
    for(let value of array){
        yield value
    }
}

const it = iterar(['Juan', 'Pedro', 'Tsuki', 'Camilo'])

console.log(it.next())

console.log(it.next().value)