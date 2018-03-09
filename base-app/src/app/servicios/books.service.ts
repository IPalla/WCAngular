import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Pepe en casa',
      'Asdf een',
      'Asiieed asdfa'
    ];

   }

   getLibros(clave: string) {
     return this.aLibros;
   }
   getLibrosAsinc (clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.aLibros);
      }, 4000);
    });

   }
}
