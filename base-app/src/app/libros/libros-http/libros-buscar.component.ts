import { Component, OnInit } from '@angular/core';
/* import { BooksService } from '../../servicios/books.service'; */
import { HttpClient } from '@angular/common/http';
import { GoogleBooksService } from '../../servicios/google-books.service';


@Component({
  selector: 'app-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})
export class LibrosBuscarComponent implements OnInit {
  clave: string;
  res: Array<string>;
  consult: string;
  /* constructor(public http: HttpClient) {
    this.consult = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.res = [];
   } */
   constructor(public serv: GoogleBooksService) { this.res = []; }

  ngOnInit() {
  }
  buscar() {
    this.serv.buscarLibrosGoogle(this.clave).then( (response: any) => {
      this.res = response;
    } ); /*
    const url = this.consult + this.clave;
    this.http.get(url).toPromise().then( (response: any) => {
      this.res.splice(0);
      response.items.forEach(element => {
        this.res.push(element.volumeInfo.title);
        console.log(element.volumeInfo.title);
      });
    } ); */
  }
  /* buscarAsincrono() {
    this.servicio.getLibrosAsinc(this.clave).then( (response: any) => {
      this.res = response;
    });
  } */
}
