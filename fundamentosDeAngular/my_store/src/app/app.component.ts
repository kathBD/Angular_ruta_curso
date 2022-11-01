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
 img = 'https://images.unsplash.com/photo-1506585775532-2d6f494f607d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
 btnDissabled = true; //boton desabilitado
}
