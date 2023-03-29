"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(Nombre, Apellidos, Edad, DNI, Cumpleaños, ColorFavorito, Sexo, Direccion, Email, Telefono, Notas) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI = DNI;
        this._Cumpleaños = Cumpleaños;
        this._ColorFavorito = ColorFavorito;
        this._Sexo = Sexo;
        this._Direccion = Direccion;
        this._Email = Email;
        this._Telefono = Telefono;
        this._Notas = Notas;
    }
    Object.defineProperty(persona.prototype, "Nombre", {
        get: function () {
            return this._Nombre;
        },
        set: function (Nombre) {
            this._Nombre = Nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Apellidos", {
        get: function () {
            return this._Apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Edad", {
        get: function () {
            return this._Edad;
        },
        set: function (Edad) {
            this._Edad = Edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (DNI) {
            this._DNI = DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Cumplea\u00F1os", {
        get: function () {
            return this._Cumpleaños;
        },
        set: function (Cumpleaños) {
            this._Cumpleaños = Cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "ColorFavorito", {
        get: function () {
            return this._ColorFavorito;
        },
        set: function (ColorFavorito) {
            this._ColorFavorito = ColorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Sexo", {
        get: function () {
            return this._Sexo;
        },
        set: function (Sexo) {
            this._Sexo = Sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Direccion", {
        get: function () {
            return this._Direccion;
        },
        set: function (Direccion) {
            this._Direccion = Direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Email", {
        get: function () {
            return this._Email;
        },
        set: function (Email) {
            this._Email = Email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Telefono", {
        get: function () {
            return this._Telefono;
        },
        set: function (Telefono) {
            this._Telefono = Telefono;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Notas", {
        get: function () {
            return this._Notas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "Apellido", {
        set: function (Apellido) {
            this.Apellido = Apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "notas", {
        set: function (notas) {
            this._Notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    persona.prototype.agregarNuevaDireccion = function (direccion) {
        this._Direccion.push(direccion);
    };
    persona.prototype.agregarNuevoTelefono = function (telefono) {
        this._Telefono.push(telefono);
    };
    persona.prototype.agregarNuevoMail = function (mail) {
        this._Email.push(mail);
    };
    return persona;
}());
exports.persona = persona;
