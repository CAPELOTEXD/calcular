import { egreso } from "./egreso.model";

export class EgresoServicio{

    egresos:egreso[]=[];

    eliminar(salida:egreso){
        const indice:number = this.egresos.indexOf(salida);
        this.egresos.splice(indice,1);
    }


}
