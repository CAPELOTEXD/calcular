import { egreso } from "./egreso.model";

export class EgresoServicio{

    egresos:egreso[]=[
        new egreso("Compra TV",1500),
        new egreso("Compra Xbox",500)
    ];

    eliminar(salida:egreso){
        const indice:number = this.egresos.indexOf(salida);
        this.egresos.splice(indice,1);
    }

    
}