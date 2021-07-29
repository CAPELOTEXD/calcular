import { Component, OnInit, Input } from '@angular/core';
import { egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private EgresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.EgresoServicio.egresos;
  }

  eliminar(egreso:egreso){
    this.EgresoServicio.eliminar(egreso);
  }

  porcentaje(egreso:egreso){

    return egreso.valor/this.ingresoTotal;
  }

}


