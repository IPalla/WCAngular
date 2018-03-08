import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <div class="container">
      <div class="row">
        <app-salida class="col 6"></app-salida>
        <app-saludo-local class="col 6"></app-saludo-local>
      </div>
    </div>
  `,
  styles: []
})
export class InicioComponent implements OnInit {
  autor: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'IPJ';
  }

}
