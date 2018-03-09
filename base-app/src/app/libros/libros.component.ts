import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  template: `
    <app-libros-buscar></app-libros-buscar>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
