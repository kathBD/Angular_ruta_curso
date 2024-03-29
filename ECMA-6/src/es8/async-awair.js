
const helloWorld = () => {

    return new Promise((resolve, reject)=>{

        (true)
        ? setTimeout(()=> resolve('Hello World'), 3000)
        : reject (new err('Test error'))
    })
};

const HelloAsync = async ()=>{
    const hello = await helloWorld();
    console.log(hello);
}
HelloAsync();

const anotherFunction = async () => {

    try{
        const hello = await helloWorld();
        console.log(hello);

    }catch(error){
          console.log(error)
    }
};

anotherFunction();