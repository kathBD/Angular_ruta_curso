//finally en promesas

const helloWorld =()=>{
    return new Promise((resolve, reject)=>{
      (true)
      //?resolve('Hello OK')
      ?setTimeout(()=> resolve('Hello OK'), 3000) 
      :resolve (new Error('Test error'))

    });
};


helloWorld()
    .then(Response => console.log(Response))
    .catch(error=> console.log(error))
    .finally(()=> console.log('finalizo'))