import { Component } from '@angular/core';

//decorador

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // cual es el template ha renderizar
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 // title = 'my_store'; //deben tener un acceso publico
 name = 'Kathe';
 lastname = 'D';
 age = 30;
 img = 'https://images.unsplash.com/photo-1506585775532-2d6f494f607d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
 btnDissabled = true; //boton desabilitado
//aplicacion con un objeto
 person ={
     name: 'María',
     age: 28,
     avatar: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11amVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
 }

 nombres: string [] = ['Juan', 'Nicolas', 'Ana', 'Angel'];

 newName ='';

 emojis = [ '😂' , '🐦', '🐳','🌮', '💚', '🐦'];



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
    this.nombres.push(this.newName);
    this.newName ='';//limpiar input
  }

  deleteName(index: number){
    this.nombres.splice(index, 1);
  }
}
