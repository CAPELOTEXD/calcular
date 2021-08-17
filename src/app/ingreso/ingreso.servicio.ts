import { ingreso } from "./ingreso.model";

export class ingresoServicio{

    ingresos:ingreso[]=[];

    eliminar(ingreso:ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }

}
