import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import  { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers:[UsuariosService]
})

export class AppComponent_prueba_miti  implements OnInit{
  
//Property Binding
botonStatus = true;

//Class Binding
isActive = true;

//Style Binding
isActiveStyleBinding = false;

//Event Binding
save(e){
  console.log(e);
}

//Prueba evento
onKeyUp(e){

  if(e.keyCode === 13)
  {
    console.log("Enter fue presionado");
  }

}

//Event Filtering
onKeyUp1(){

    console.log("Enter fue presionado");

}


// Sin Template variable
onKeyUp2(e){

  console.log(e.target.value);

}
// Con Template variable
onKeyUp3(usuario){

  console.log(usuario);

}


  /*
  nombre = 'juan';
  imagenURL = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_960_720.jpg';

  GetNombre(){
      return this.nombre;
  }
  */


//Two way binding
persona = {

    nombre: 'pepe',
    edad: 39

}

////////////////////////////////////// Servicios
personas : any[];

//De esta forma hay que instanciar el objeto del servicio
/*
constructor(){
  let usuario = new UsuariosService();
  this.personas = usuario.getUsuarios();
}
*/


//Otra forma es usar inyección de dependencias
//La IDEA de la Inyección de dependencias es muy simple, si tenes un componente que depende de un servicio, no creas ese servicio 
//(en el componente ) si no que en el constructor lo solicitas y Angular te lo trae.
//De esta forma, el codigo esta desacoplado, ya que el que el servicio se encarga de lo que debe, y el componente solamente lo consume.
/*
constructor(private usuarios_service:UsuariosService){
  this.personas = usuarios_service.getUsuarios();
}
*/

constructor(private articulosService: ArticulosService) {}

articulos = null;

ngOnInit() {
  this.articulosService.retornar()
    .subscribe( result =>  this.articulos = result)
}

}
////////////////////////////////////// Servicios


