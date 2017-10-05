import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";
import { MotorService } from "../motor.service";

@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.css']
})
export class TableProductosComponent implements OnInit {
  titulo = "Tabla Motores";
  motores: Motor[] = [];
  constructor(private motorService:MotorService) {
  /*  console.log(this.motores);
    let motor=new Motor();
    motor.nome="test";
    motor.descricao="test ww";
    motor.imagem="imagen test";
    motor.uso="uso test";

    this.motores.push(motor);*/
   }
  ngOnInit() {
    this.motores= this.motorService.getMotor();
  }

}

