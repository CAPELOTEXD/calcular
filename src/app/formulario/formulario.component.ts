import { Component, OnInit } from '@angular/core';
import { egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { ingreso } from '../ingreso/ingreso.model';
import { ingresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcioninput:string;
  valorinput:number;

  constructor(private ingresoServicio:ingresoServicio,
    private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }
  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new ingreso(this.descripcioninput, this.valorinput));
    else{
      this.egresoServicio.egresos.push(new egreso(this .descripcioninput, this.valorinput));
    }
  }

}
