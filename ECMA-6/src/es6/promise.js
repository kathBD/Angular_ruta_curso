const helloPromise =()=>{
    return new Promise((resolve, reject)=>{

        if(true){
            resolve('Hey todo Bien');
        }else{
            reject('Ups no salio')
        }
    });
}

helloPromise()
    .then(Response=> console.log(Response))
    .then(()=> console.log('Hola'))
    .catch(error => console.log(error));