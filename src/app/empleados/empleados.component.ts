import {Component} from '@angular/core';
import {Empleados} from './empleados';

@Component ({

  selector: 'empleados',
  templateUrl: './empleados.component.html'
})

export class EmpleadosComponent{
  public nombre_componente = 'Componente de empleados';
  public empleados:Empleados;
  public trabajadores:Array<Empleados>;
  public trabajador_externo: boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleados = new Empleados('Jose',23,'ingeniero',true);
    this.trabajadores  = [
      new Empleados('Manolo',23,'ingeniero',false),
      new Empleados('Alex',26,'ingeniero',true),
      new Empleados('Miguel',27,'ingeniero',false)
    ]
    this.trabajador_externo = true;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleados);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
