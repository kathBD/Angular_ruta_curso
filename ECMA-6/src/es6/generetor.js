function* helloWorld(){
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World'
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);//hello
console.log(generatorHello.next().value);//world
console.log(generatorHello.next().value);//undefined