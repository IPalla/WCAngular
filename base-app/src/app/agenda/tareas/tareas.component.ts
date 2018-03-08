import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tarea: string;
  tareas: Array<string>;
  constructor() { }

  ngOnInit() {
    this.tareas = new Array<string>();
    // this.tareas = [];
  }

  anadirTarea() {
    this.tareas.push(this.tarea);
  }
  eliminaTarea(i) {
    this.tareas.splice(i, 1);
  }
}
