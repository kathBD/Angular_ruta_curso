let entrie = [['name', 'kath'], ['lastname', 'ferrer']];

console.log(Object.fromEntries(entrie));

//objeto de tipo symbol

let mySymbol ='My Symbol';

let symbol = Symbol(mySymbol);
console.log(symbol.description)