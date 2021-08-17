import { Component } from '@angular/core';
import { egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { ingreso } from './ingreso/ingreso.model';
import { ingresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:ingreso[]=[];
  egresos:egreso[]=[];

  constructor(private IngresoServicios:ingresoServicio, private egresoServicio:EgresoServicio){

    this.ingresos=IngresoServicios.ingresos;
    this.egresos=egresoServicio.egresos;
  }

  getingresototal(){
    let ingresototal:number=0;
    this.ingresos.forEach(ingreso => {
      ingresototal += ingreso.valor;
    });
    return ingresototal;
  }

  getegreso(){
    let egresototal:number=0;
    this.egresos.forEach(egreso =>{
      egresototal += egreso.valor;
    });
    return egresototal;
  }

  getPorcentajeTotal(){

    return this.getegreso()/this.getingresototal();
  }

  getPresupuestoTotal(){
    return this.getingresototal()-this.getegreso();
  }


}
