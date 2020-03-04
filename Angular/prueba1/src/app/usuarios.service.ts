import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class UsuariosService{

    getUsuarios(){
        return[
                {"nombre" : 'Juan',
                 "edad" : 20,
                 "hobby" : 'cantar'},

                {"nombre" : 'Pedro',
                 "edad" : 30,
                 "hobby" : 'correr'},

                {"nombre" : 'Carlos',
                "edad" : 40,
                "hobby" : 'salta'}       
        ];

    }
}