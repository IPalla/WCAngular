import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { SalidaComponent } from './salida/salida.component';
import { FormsModule } from '@angular/forms';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InicioComponent, SalidaComponent, SaludoLocalComponent],
  exports: [InicioComponent]
})
export class InicioModule { }
