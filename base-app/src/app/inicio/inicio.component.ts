import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
    <p>
      Me creó el {{ autor }}
    </p>
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
