import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { CatalogoRoutingModule } from './catalogo.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [CatalogoComponent],
  exports: [CatalogoComponent]
})
export class CatalogoModule { }
