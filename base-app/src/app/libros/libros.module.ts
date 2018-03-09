import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMocComponent } from './libros-moc/libros-moc.component';
import { FormsModule } from '@angular/forms';
import { LibrosBuscarComponent } from './libros-http/libros-buscar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleBooksService } from '../servicios/google-books.service';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LibrosComponent, LibrosMocComponent, LibrosBuscarComponent],
  exports: [
    LibrosComponent, LibrosBuscarComponent
  ],
  providers: [
    BooksService,
    GoogleBooksService
  ]
})
export class LibrosModule { }
