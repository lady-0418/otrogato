import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";


@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService,private empleadosService:ServicioEmpleadosService, private dataService:DataServices){

    }

    setEmpleados(misEmpleados:Empleado[]){
      this.empleados=misEmpleados;
    }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }
    
    empleados:Empleado[]=[];

    /*empleados:Empleado[]=[

        new Empleado("Lady", "Vargas","Programadora", 4000000),
        new Empleado("Ana", "Lopez","Directora", 1000000),
        new Empleado("Maria", "Carrillo","Jefa seccion", 1500000),
        new Empleado("Laura", "Martin","Administrativo", 700000),
      ];*/

      agregarEmpleadoServicio(empleado:Empleado){

       
        this.servicioVentanaEmergente.muestraMensaje("persona que se va agregar:" + "\n"+
        empleado.nombre + "\n" + "salario:" + empleado.salario);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);

      }

      encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado;

      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleado(indice,empleado);

      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1 );
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
        this.dataService.guardarEmpleados(this.empleados);

      }


}



