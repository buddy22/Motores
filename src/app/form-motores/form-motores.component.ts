import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";
import { MotorService } from "../motor.service";

@Component({
  selector: 'app-form-motores',
  templateUrl: './form-motores.component.html',
  styleUrls: ['./form-motores.component.css']
})
export class FormMotoresComponent implements OnInit {

  motor:Motor;

  titulo ="Cadastro Motores";

  result:Motor[]=[];

  constructor(private motorService:MotorService) { 
   this.motor=new Motor();
  }

  ngOnInit() {
  }
  
   salvar()
   {
      //this.result.push(this.motor);
      this.motorService.salvarMotor(this.motor);
      this.motor=new Motor();
   }

   limpiar()
   {
    this.motor=new Motor();
    this.result=[];
   }
}
