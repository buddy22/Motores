import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormMotoresComponent } from './form-motores/form-motores.component';
import { TableProductosComponent } from './table-productos/table-productos.component';
import { MotorService } from "./motor.service";

@NgModule({
  declarations: [
    AppComponent,
    FormMotoresComponent,
    TableProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MotorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
