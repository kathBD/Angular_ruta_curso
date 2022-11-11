import { Component } from '@angular/core';
import {Product} from './product.model'; //importa una interface

//decorador

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // cual es el template ha renderizar
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  [x: string]: any;

widthImg = 10;

 // title = 'my_store'; //deben tener un acceso publico
 name = 'Kathe';
 lastname = 'D';
 age = 30;
 img = 'https://images.unsplash.com/photo-1506585775532-2d6f494f607d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
 btnDissabled = true; //boton desabilitado
 register ={
   name:'',
   email:'',
   password:'',
 }
//aplicacion con un objeto
 person ={
     name: 'María',
     age: 28,
     avatar: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11amVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
 }

 nombres: string [] = ['Juan', 'Nicolas', 'Ana', 'Angel'];

 newName ='';

 emojis = [ '😂' , '🐦', '🐳','🌮', '💚', '🐦'];

 box={
  width: 100,
  height: 100,
  background: 'red'

 };

//products=[
  products: Product[]=[
  {
    name:'Lego',
    price: 450,
    image: '../assets/images/lego.avif',
    category: 'all',
  },
  {
    name:'Marvel',
    price: 50,
    image: '../assets/images/marvel.avif'
  },
  {
    name:'Bicicleta',
    price: 1200,
    image: '../assets/images/bici.webp'
  },
  {
    name:'StarWars',
    price: 500,
    image: '../assets/images/starWars.avif'
  },
  {
    name:'Peluche',
    price: 600,
    image: '../assets/images/peluche.webp'
  },
]

   toggleButton(){
    this.btnDissabled = !this.btnDissabled;
  }
  ingrementarEdad(){
    this.person.age +=1;
  }

  onScroll(event: Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.nombres.push(this.newName);//agregar nombre
    this.newName ='';//limpiar input en estado vacio
  }

  deleteName(index: number){
    this.nombres.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
