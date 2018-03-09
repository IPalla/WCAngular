import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleBooksService {
  consult = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  constructor(public http: HttpClient) {}
  buscarLibrosGoogle(key: string) {
    const url = this.consult + key;
    const arr = Array<string>();
    return this.http.get(url).toPromise().then( (response: any) => {

      response.items.forEach(element => {
        arr.push(element.volumeInfo.title);
      });
      return new Promise((resolve, reject) => {
        resolve(arr);
      });
    } );

  }

}
