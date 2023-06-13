import { EventEmitter, } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit{


  @Output()caracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService){}

  ngOnInit(): void {
    
  }
  
  agregaCaracteristica(value: string) {
    //this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }
}



