import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'IPJ';
    this.lugar = 'Babel';
    this.fecha = '21-12-22';
  }

}
