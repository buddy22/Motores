import { Injectable } from '@angular/core';
import { Motor } from "./motor";

@Injectable()
export class MotorService {

  motores: Motor[] = [{
    "nome":"Modelo Ragon WZ",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"veicular"
  },
  {
    "nome":"Modelo Ragon TY",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 3 v\u00e1lvulas por cilindro",
    "uso":"veicular"
  },
  {
    "nome":"Modelo Delta",
    "imagem":"img/motor-3.jpg",
    "descricao":"Cabe\u00e7otes individuais com 6 v\u00e1lvulas por cilindro",
    "uso":"veicular, maritimo"
  },
  {
    "nome":"Modelo Dyna",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"agricola"
  },
  {
    "nome":"Modelo Tork G1",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"agricola, industrial"
  },
  {
    "nome":"Modelo Tork JA",
    "imagem":"img/motor-3.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"industrial"
  },
  {
    "nome":"Modelo Combo Alfa",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00f3lvulas por cilindro",
    "uso":"maritimo"
  },
  {
    "nome":"Modelo Combo Beta",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00f3lvulas por cilindro",
    "uso":"maritimo"
  }
  ];

  constructor() { }
  
  getMotor(){
    return this.motores;
  }
  salvarMotor(motor:Motor){
    this.motores.push(motor);
    localStorage.setItem('motores',JSON.stringify(this.motores));
  }
  getMotores(){
    if(localStorage.getItem('motores')){
      this.motores=JSON.parse(localStorage.getItem('motores'));
    }
    return this.motores;
  }

}
