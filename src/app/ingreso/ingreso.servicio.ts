import { ingreso } from "./ingreso.model";

export class ingresoServicio{

    ingresos:ingreso[]=[
        new ingreso("salario",4000),
        new ingreso("Venta de coche", 2000)
    ];

    eliminar(ingreso:ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }

}