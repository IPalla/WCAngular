import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'app-libros-moc',
  templateUrl: './libros-moc.component.html',
  styleUrls: ['./libros-moc.component.css']
})
export class LibrosMocComponent implements OnInit {
  clave: string;
  res: Array<string>;
  constructor(public servicio: BooksService ) {

   }

  ngOnInit() {
  }

  buscar() {
    this.res = this.servicio.getLibros(this.clave);
  }
  buscarAsincrono() {
    this.servicio.getLibrosAsinc(this.clave).then( (response: any) => {
      this.res = response;
    });
  }
}
