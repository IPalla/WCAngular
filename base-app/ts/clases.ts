interface FullName {
  apellido: string;
  nombre: string;
}
class FullNameClass {
    constructor(public nombre: string, public apellido: string) {}
}
class User extends FullNameClass {
  /* private nombre: string;
  public apellido: string;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  } */
  constructor(public nombre: string, public apellido: string) {
    super(nombre, apellido);
  }
  saludar() {
    console.log('Hola soy ' + this.apellido);
  }
}

class Alumno extends User {
  protected edad: number;
  curso: number;
  constructor(nombre, apellido, edad: number, curso) {
    super(nombre, apellido);
    this.edad = edad;
    this.curso = curso;

  }
}

let user = new Alumno('nacho', 'aa', 23, 2);
user.saludar();
user.nombre = 'asdf';
console.log(user);
