import { Component, OnInit } from '@angular/core';
import { ingreso } from './ingreso.model';
import { ingresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:ingreso[]=[];


  constructor(private IngresoServicio:ingresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.IngresoServicio.ingresos;
  }

  eliminar(ingreso:ingreso){

    this.IngresoServicio.eliminar(ingreso);


  }

}
