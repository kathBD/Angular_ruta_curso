function fruits(){

    if (true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = ' Banana';//bloque scope
        const fruit3 = 'kiwi'; //bloque scope
        console.log(fruit2);
        console.log(fruit3)
    }
    console.log(fruit1);
  /*  console.log(fruit2); //error
    console.log(fruit3);*/
}



fruits();