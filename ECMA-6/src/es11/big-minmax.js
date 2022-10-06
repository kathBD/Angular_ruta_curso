const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



//min max

const promise1 = new Promise((resolve, reject)=> reject("reject"));
const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("resolve1"));

//El método Promise.allSettled() en Javascript se usa para obtener una promesa 
//cuando todas las entradas están establecidas y se cumplen o se rechazan.

Promise.allSettled([promise1, promise2, promise3])
    .then(Response => console.log(Response));