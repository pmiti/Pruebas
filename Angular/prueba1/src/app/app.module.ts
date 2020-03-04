import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent_prueba_miti } from './app.component';
import { MiComponente } from './comp1.component';
//import { UsuariosService } from './usuarios.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent_prueba_miti,
    MiComponente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  //providers: [UsuariosService],
  providers: [],
  bootstrap: [AppComponent_prueba_miti]
})
export class AppModule { }
