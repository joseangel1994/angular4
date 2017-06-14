import {Component} from '@angular/core';

@Component({

  selector: 'fruta',
  templateUrl: './fruta.component.html'

})
export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];
  comodin:any;

  constructor(){
    console.log(this.trabajos);
    console.log(this.comodin);
    this.nombre = "Jose";
    this.edad = 22;
    this.mayorDeEdad = true;
    this.comodin = "SI";
  }

  ngOnInit(){
    //this.holaMundo(this.nombre);
    //this.cambiarEdad(45);
    //console.log(this.edad);

    //Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno ===8){
      let uno = 3;
      var dos = 88;
      console.log("dentro del if: "+uno+" "+dos);
    }
    console.log("fuera del if: "+uno+" "+dos);
  }

  holaMundo(nombre){
    console.log('Hola Mundo!!' + nombre)
  }
  cambiarEdad(edad){
    this.edad = edad;
  }
}
