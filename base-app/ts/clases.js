var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    User.prototype.saludar = function () {
        console.log('Hola soy ' + this.apellido);
    };
    return User;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, apellido, edad, curso) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.edad = edad;
        _this.curso = curso;
        return _this;
    }
    return Alumno;
}(User));
var user = new Alumno('nacho', 'aa', 'a', 'a');
user.saludar();
console.log(user);
