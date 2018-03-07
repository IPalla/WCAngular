import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InicioModule } from './inicio/inicio.module';
import { AcercadeModule } from './acercade/acercade.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    AcercadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
