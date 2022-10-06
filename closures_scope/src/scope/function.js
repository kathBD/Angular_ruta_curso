function greeting(){

    let userName = 'Juana';
    console.log(userName);

    if(userName === 'Juana'){
        console.log( `Hello ${userName} !` ) 
    }
}

greeting();

console.log(userName);//error no definida no asignada como global


const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 