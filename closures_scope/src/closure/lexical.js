const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //funcion intern
       const innner = 2;
       console.log(myNumber, myGlobal);

       function child(){
        console.log(innner ,myNumber, myGlobal);
       }
       return child();
    }
  return parent();
}

myFunction();