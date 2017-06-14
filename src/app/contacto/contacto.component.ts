import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Pagina de contacto de la web";
    public parametro;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) => { //Funcion de flecha, la funcion puede salir del ambito local
          this.parametro = params['page'];
          console.log(params);
        })
    }

    redirigir(){
      this._router.navigate(['/contacto','google.es']);
    }

    redirigirDos(){
      this._router.navigate(['/paginaPrincipal']);
    }
}
