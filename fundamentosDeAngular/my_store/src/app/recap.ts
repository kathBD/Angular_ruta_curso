const username: string | number = 'kathb';
const username2: string | number = 4;

//funciones

const suma = (a:number, b:number) =>{
  return a + b;
}
suma(2, 4);

//patron orientado a objetos

class Persona{
  age: number;
  lastName: string;
  private name: string;

  constructor(age: number, lastName:string, name:string){
      this.age = age;
      this.lastName = lastName;
      this.name = name;
  }
}

const kath = new Persona(29, 'Lope', 'kat');

//tipo de visibillidad

kath.age;
//kath.name; //da error desde afuera de la clase no se puede usar se accede por getter

//se puede simplificar:
class Empleado
{
  constructor(public name:string, public lastname: string){}
}
const josep = new Empleado('Juan', 'Josep');
josep.name;

