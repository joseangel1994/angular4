export class Empleados{

/*
  public nombre:string;
  public edad:number;

  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }*/
  //Como hacerlo bien en typescript
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}
}
