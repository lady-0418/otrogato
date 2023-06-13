import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";


@Injectable()
export class DataServices{
    data: string;

    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleados(){
        
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-25afa-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token);
    }
    
    guardarEmpleados(empleados:Empleado[]) {

        this.httpClient.put('https://mis-clientes-25afa-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
           response=>console.log("se ha guardado empleados correctamente:"+ response),
           error=> console.log("Error:" + error),
        );

    }
    actualizarEmpleado(indice:number, empleado:Empleado){
        let url='https://mis-clientes-25afa-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice +'.json';

        this.httpClient.put(url,empleado).subscribe(
            response=>console.log("se ha modificado correctamente el empleado:"+ response),
            error=> console.log("Error:" + error),
         );

    }

   eliminarEmpleado(indice:number){
        let url='https://mis-clientes-25afa-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice +'.json';

        this.httpClient.delete(url).subscribe(
            response=>console.log("se ha eliminado correctamente el empleado:" + response),
            error=> console.log("Error:" + error),
         );
        }
}
    
        
    
