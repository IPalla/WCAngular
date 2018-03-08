import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  template: `
    <div class="container">
      <div class="row">
        <app-tareas class="col 6"></app-tareas>
      </div>
    </div>
  `,
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
