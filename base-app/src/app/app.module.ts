import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InicioModule } from './inicio/inicio.module';
import { AcercadeModule } from './acercade/acercade.module';

/* import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/local/es';

registerLocaleData(localeEs); */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    AcercadeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
