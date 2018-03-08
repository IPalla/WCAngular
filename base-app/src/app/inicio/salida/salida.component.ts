import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SalidaComponent implements OnInit {
  nombre: string;
  constructor() { }
  ngOnInit() {
    this.nombre = '';
  }
  btnBorrar() {
    this.nombre = '';
  }
}
