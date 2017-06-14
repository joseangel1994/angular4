import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

  public url: string;

  constructor(private _http:Http){
      this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(){
    return 'Hola mndo desde el servicio';
  }

  getArticulos(){
    return this._http.get(this.url).map(res => res.json()); //Devuelve coleccion de objetos usables 
  }
}
