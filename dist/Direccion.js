"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(Calle, Numero, Piso, Letra, CodigoPostal, Poblacion, Provincia) {
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra;
        this._CodigoPostal = CodigoPostal;
        this._Poblacion = Poblacion;
        this._Provincia = Provincia;
    }
    Object.defineProperty(Direccion.prototype, "Calle", {
        get: function () {
            return this._Calle;
        },
        set: function (Calle) {
            this._Calle = Calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (Numero) {
            this._Numero = Numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Piso", {
        get: function () {
            return this._Piso;
        },
        set: function (Piso) {
            this._Piso = Piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Letra", {
        get: function () {
            return this._Letra;
        },
        set: function (Letra) {
            this._Letra = Letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "CodigoPostal", {
        get: function () {
            return this._CodigoPostal;
        },
        set: function (CodigoPostal) {
            this._CodigoPostal = CodigoPostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Poblacion", {
        get: function () {
            return this._Poblacion;
        },
        set: function (Poblacion) {
            this._Poblacion = Poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Provincia", {
        get: function () {
            return this._Provincia;
        },
        set: function (Provincia) {
            this._Provincia = Provincia;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
