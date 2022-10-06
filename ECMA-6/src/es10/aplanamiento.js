let array = [1,2,3,[1,2,3, [1,2,3] ]];
console.log(array.flat())
console.log(array.flat(2))

let array2 = [1,2,3,45,6,7];

console.log(array2.flatMap(value =>[value, value *2]));


//trim

let hello = '       hello world      ';
console.log(hello)
//espacios del principio
console.log(hello.trimStart());
console.log(hello.trimEnd());